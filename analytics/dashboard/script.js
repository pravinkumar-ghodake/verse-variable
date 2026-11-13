/* ============================================================
   VERSE & VARIABLE — PRIVATE READERSHIP ANALYTICS
   File: analytics/dashboard/script.js

   PURPOSE
   -------
   Manage the private readership dashboard interface.

   CURRENT STAGE
   -------------
   1. Prepare the dashboard interface.
   2. Render validated aggregate readership data.
   3. Display daily activity as an SVG chart.
   4. Display popular pages and language statistics.
   5. Display aggregate referral information.
   6. Maintain accessible status and empty states.

   SECURITY
   --------
   1. No API credentials or secrets are stored here.
   2. No unauthenticated requests retrieve private statistics.
   3. No visitor identifiers or personal data are processed.
   4. Dynamic text is inserted using textContent.
   5. Page links are restricted to the journal's own website.

   FUTURE INTEGRATION
   ------------------
   This script will receive aggregate statistics only from a
   separately authenticated reporting service.

   ============================================================ */


/* ------------------------------------------------------------
   1. CONFIGURATION
   ------------------------------------------------------------ */

(() => {

    "use strict";

    const CONFIG = Object.freeze({

        siteOrigin:
            "https://pravinkumar-ghodake.github.io",

        sitePrefix:
            "/verse-variable/",

        chartMaximumDays:
            90,

        maximumPopularPages:
            20,

        maximumReferralDomains:
            20,

        maximumLanguageRows:
            9,

        supportedLanguages: {

            en: {
                name: "English",
                native: "English"
            },

            ur: {
                name: "Urdu",
                native: "اردو"
            },

            hi: {
                name: "Hindi",
                native: "हिन्दी"
            },

            mr: {
                name: "Marathi",
                native: "मराठी"
            },

            kn: {
                name: "Kannada",
                native: "ಕನ್ನಡ"
            },

            ta: {
                name: "Tamil",
                native: "தமிழ்"
            },

            ml: {
                name: "Malayalam",
                native: "മലയാളം"
            },

            te: {
                name: "Telugu",
                native: "తెలుగు"
            },

            und: {
                name: "Unspecified",
                native: "—"
            }

        }

    });


    /* --------------------------------------------------------
       2. DOM HELPERS
       -------------------------------------------------------- */

    function getElement(id) {
        return document.getElementById(id);
    }


    function setText(id, value) {

        const element = getElement(id);

        if (!element) {
            return;
        }

        element.textContent = String(value);

    }


    function createElement(tag, className = "", text = null) {

        const element = document.createElement(tag);

        if (className) {
            element.className = className;
        }

        if (text !== null) {
            element.textContent = String(text);
        }

        return element;

    }


    function clearElement(element) {

        if (!element) {
            return;
        }

        element.replaceChildren();

    }


    /* --------------------------------------------------------
       3. NUMBER FORMATTING
       -------------------------------------------------------- */

    const numberFormatter = new Intl.NumberFormat(
        undefined,
        {
            maximumFractionDigits: 0
        }
    );


    function formatNumber(value) {

        const number = Number(value);

        if (
            !Number.isFinite(number)
            || number < 0
        ) {
            return "—";
        }

        return numberFormatter.format(
            Math.floor(number)
        );

    }


    function validCount(value) {

        const number = Number(value);

        if (
            !Number.isFinite(number)
            || number < 0
            || number > Number.MAX_SAFE_INTEGER
        ) {
            return null;
        }

        return Math.floor(number);

    }


    function sumCounts(rows) {

        if (!Array.isArray(rows)) {
            return 0;
        }

        return rows.reduce((total, row) => {

            const value = validCount(row?.views);

            return total + (value ?? 0);

        }, 0);

    }


    /* --------------------------------------------------------
       4. DATE HELPERS
       -------------------------------------------------------- */

    function parseUTCDate(value) {

        if (
            typeof value !== "string"
            || !/^\d{4}-\d{2}-\d{2}$/.test(value)
        ) {
            return null;
        }

        const date = new Date(
            `${value}T00:00:00Z`
        );

        if (
            Number.isNaN(date.getTime())
            || date.toISOString().slice(0, 10) !== value
        ) {
            return null;
        }

        return date;

    }


    function formatShortDate(value) {

        const date = parseUTCDate(value);

        if (!date) {
            return "";
        }

        return new Intl.DateTimeFormat(
            undefined,
            {
                month: "short",
                day: "numeric",
                timeZone: "UTC"
            }
        ).format(date);

    }


    function formatReportingPeriod(dailyRows) {

        if (!dailyRows.length) {
            return "No reporting data available";
        }

        const firstDate = formatShortDate(
            dailyRows[0].date
        );

        const lastDate = formatShortDate(
            dailyRows[dailyRows.length - 1].date
        );

        if (!firstDate || !lastDate) {
            return "Reporting period available";
        }

        return firstDate === lastDate
            ? firstDate
            : `${firstDate} – ${lastDate}`;

    }


    /* --------------------------------------------------------
       5. CONNECTION STATUS
       -------------------------------------------------------- */

    function setConnectionState(state, title, message) {

        const container = getElement("connection-status");

        if (!container) {
            return;
        }

        container.classList.remove(
            "is-connected",
            "is-error"
        );

        if (state === "connected") {
            container.classList.add("is-connected");
        }

        if (state === "error") {
            container.classList.add("is-error");
        }

        setText("connection-heading", title);
        setText("connection-description", message);

    }


    /* --------------------------------------------------------
       6. METRIC CARDS
       -------------------------------------------------------- */

    function renderMetrics(data) {

        const totals = data.totals ?? {};

        const dailyRows = data.daily ?? [];

        const totalViews = validCount(
            totals.allTime
        );

        const todayViews = validCount(
            totals.today
        );

        const monthlyViews = validCount(
            totals.month
        );

        const pagesRead = validCount(
            totals.publishedPagesRead
        );

        setText(
            "total-page-views",
            totalViews === null
                ? "—"
                : formatNumber(totalViews)
        );

        setText(
            "today-page-views",
            todayViews === null
                ? "—"
                : formatNumber(todayViews)
        );

        setText(
            "monthly-page-views",
            monthlyViews === null
                ? "—"
                : formatNumber(monthlyViews)
        );

        setText(
            "published-pages-read",
            pagesRead === null
                ? "—"
                : formatNumber(pagesRead)
        );

        setText(
            "reporting-period",
            formatReportingPeriod(dailyRows)
        );

    }


    /* --------------------------------------------------------
       7. EMPTY STATES
       -------------------------------------------------------- */

    function renderEmptyState(
        containerId,
        title,
        description
    ) {

        const container = getElement(containerId);

        if (!container) {
            return;
        }

        clearElement(container);

        const wrapper = createElement(
            "div",
            "empty-state compact-empty-state"
        );

        wrapper.append(
            createElement(
                "p",
                "empty-state-title",
                title
            )
        );

        wrapper.append(
            createElement(
                "p",
                "empty-state-description",
                description
            )
        );

        container.append(wrapper);

    }


    /* --------------------------------------------------------
       8. SAFE PAGE LINK GENERATION
       -------------------------------------------------------- */

    function createPageLink(path, title) {

        if (typeof path !== "string") {
            return createElement(
                "span",
                "page-title-cell",
                title
            );
        }

        let parsed;

        try {

            parsed = new URL(
                path,
                CONFIG.siteOrigin
            );

        } catch {

            return createElement(
                "span",
                "page-title-cell",
                title
            );

        }

        const belongsToSite = (
            parsed.origin === CONFIG.siteOrigin
            && parsed.pathname.startsWith(CONFIG.sitePrefix)
            && parsed.pathname.length <= 512
        );

        if (!belongsToSite) {

            return createElement(
                "span",
                "page-title-cell",
                title
            );

        }

        // Never retain query strings or URL fragments.
        parsed.search = "";
        parsed.hash = "";

        const link = createElement(
            "a",
            "page-title-cell",
            title
        );

        link.href = parsed.href;

        link.target = "_blank";

        link.rel = "noopener noreferrer";

        return link;

    }


    /* --------------------------------------------------------
       9. POPULAR PAGES
       -------------------------------------------------------- */

    function normalizePopularPages(rows) {

        if (!Array.isArray(rows)) {
            return [];
        }

        return rows

            .filter(row => (
                row
                && typeof row === "object"
                && typeof row.path === "string"
            ))

            .map(row => ({

                path: row.path,

                title:
                    typeof row.title === "string"
                    && row.title.trim()
                    ? row.title.trim().slice(0, 180)
                    : row.path,

                views: validCount(row.views)

            }))

            .filter(row => row.views !== null)

            .sort((a, b) => b.views - a.views)

            .slice(0, CONFIG.maximumPopularPages);

    }


    function renderPopularPages(rows) {

        const container = getElement("popular-pages");

        if (!container) {
            return;
        }

        const pages = normalizePopularPages(rows);

        if (!pages.length) {

            renderEmptyState(
                "popular-pages",
                "No readership data available yet",
                "Pages will appear here after valid page views have been recorded."
            );

            return;

        }

        clearElement(container);

        const table = createElement(
            "table",
            "popular-pages-table"
        );

        const caption = createElement(
            "caption",
            "visually-hidden",
            "Most-read pages ranked by aggregate page views"
        );

        const thead = document.createElement("thead");

        const headerRow = document.createElement("tr");

        [
            "Rank",
            "Page",
            "Page views"
        ].forEach(label => {

            headerRow.append(
                createElement("th", "", label)
            );

        });

        thead.append(headerRow);

        const tbody = document.createElement("tbody");

        pages.forEach((page, index) => {

            const row = document.createElement("tr");

            const rankCell = document.createElement("td");

            rankCell.append(
                createElement(
                    "span",
                    "table-rank",
                    index + 1
                )
            );

            const pageCell = document.createElement("td");

            const pageContent = createElement(
                "div"
            );

            pageContent.append(
                createPageLink(
                    page.path,
                    page.title
                )
            );

            pageContent.append(
                createElement(
                    "span",
                    "page-path-cell",
                    page.path
                )
            );

            pageCell.append(pageContent);

            const viewsCell = createElement(
                "td",
                "numeric-cell",
                formatNumber(page.views)
            );

            row.append(
                rankCell,
                pageCell,
                viewsCell
            );

            tbody.append(row);

        });

        table.append(
            caption,
            thead,
            tbody
        );

        container.append(table);

    }


    /* --------------------------------------------------------
       10. LANGUAGE DISTRIBUTION
       -------------------------------------------------------- */

    function normalizeLanguageRows(rows) {

        if (!Array.isArray(rows)) {
            return [];
        }

        const aggregated = new Map();

        rows.forEach(row => {

            if (!row || typeof row !== "object") {
                return;
            }

            const code = (
                typeof row.language === "string"
                    ? row.language.toLowerCase()
                    : "und"
            );

            const languageCode = (
                Object.hasOwn(
                    CONFIG.supportedLanguages,
                    code
                )
                    ? code
                    : "und"
            );

            const views = validCount(row.views);

            if (views === null) {
                return;
            }

            aggregated.set(
                languageCode,
                (aggregated.get(languageCode) ?? 0) + views
            );

        });

        return Array.from(
            aggregated,
            ([language, views]) => ({
                language,
                views
            })
        )

            .sort((a, b) => b.views - a.views)

            .slice(0, CONFIG.maximumLanguageRows);

    }


    function renderLanguages(rows) {

        const container = getElement(
            "language-distribution"
        );

        if (!container) {
            return;
        }

        const languages = normalizeLanguageRows(rows);

        if (!languages.length) {

            renderEmptyState(
                "language-distribution",
                "Language statistics are not available yet",
                "Language-level readership will appear after valid page views have been recorded."
            );

            return;

        }

        clearElement(container);

        const total = sumCounts(languages);

        languages.forEach(item => {

            const definition =
                CONFIG.supportedLanguages[item.language];

            const percentage = total > 0
                ? (item.views / total) * 100
                : 0;

            const row = createElement(
                "div",
                "language-row"
            );

            const name = createElement(
                "div",
                "language-name"
            );

            name.append(
                document.createTextNode(definition.name + " ")
            );

            const native = createElement(
                "span",
                "language-native",
                definition.native
            );

            if (item.language === "ur") {
                native.lang = "ur";
                native.dir = "rtl";
            }

            name.append(native);

            const track = createElement(
                "div",
                "language-bar-track"
            );

            track.setAttribute(
                "role",
                "img"
            );

            track.setAttribute(
                "aria-label",
                `${definition.name}: ${percentage.toFixed(1)} percent of recorded page views`
            );

            const bar = createElement(
                "span",
                "language-bar-fill"
            );

            bar.style.setProperty(
                "--bar-width",
                `${percentage.toFixed(2)}%`
            );

            track.append(bar);

            const value = createElement(
                "span",
                "language-value",
                formatNumber(item.views)
            );

            row.append(
                name,
                track,
                value
            );

            container.append(row);

        });

    }


    /* --------------------------------------------------------
       11. REFERRAL SOURCES
       -------------------------------------------------------- */

    function normalizeReferralRows(rows) {

        if (!Array.isArray(rows)) {
            return [];
        }

        return rows

            .filter(row => (
                row
                && typeof row.domain === "string"
            ))

            .map(row => ({

                domain: row.domain
                    .trim()
                    .toLowerCase()
                    .slice(0, 253),

                views: validCount(row.views)

            }))

            .filter(row => (
                row.domain
                && row.views !== null
                && row.domain.length > 0
                && !row.domain.includes("/")
                && !row.domain.includes("?")
                && !row.domain.includes("#")
            ))

            .sort((a, b) => b.views - a.views)

            .slice(0, CONFIG.maximumReferralDomains);

    }


    function renderReferrals(rows) {

        const container = getElement(
            "referral-sources"
        );

        if (!container) {
            return;
        }

        const referrals = normalizeReferralRows(rows);

        if (!referrals.length) {

            renderEmptyState(
                "referral-sources",
                "Referral information will appear here",
                "Aggregate referring-domain statistics will appear after data collection."
            );

            return;

        }

        clearElement(container);

        referrals.forEach(item => {

            const row = createElement(
                "div",
                "referral-row"
            );

            const domain = createElement(
                "span",
                "referral-domain",
                item.domain === "direct_or_unattributed"
                    ? "Direct or unattributed"
                    : item.domain
            );

            const count = createElement(
                "span",
                "referral-count",
                formatNumber(item.views)
            );

            row.append(domain, count);

            container.append(row);

        });

    }


    /* --------------------------------------------------------
       12. SVG CHART HELPERS
       -------------------------------------------------------- */

    const SVG_NAMESPACE =
        "http://www.w3.org/2000/svg";


    function createSVGElement(tag, attributes = {}) {

        const element = document.createElementNS(
            SVG_NAMESPACE,
            tag
        );

        Object.entries(attributes).forEach(
            ([name, value]) => {

                element.setAttribute(
                    name,
                    String(value)
                );

            }
        );

        return element;

    }


    function normalizeDailyRows(rows) {

        if (!Array.isArray(rows)) {
            return [];
        }

        const aggregated = new Map();

        rows.forEach(row => {

            if (!row || typeof row !== "object") {
                return;
            }

            const date = parseUTCDate(row.date);

            const views = validCount(row.views);

            if (!date || views === null) {
                return;
            }

            const key = row.date;

            aggregated.set(
                key,
                (aggregated.get(key) ?? 0) + views
            );

        });

        return Array.from(
            aggregated,
            ([date, views]) => ({
                date,
                views
            })
        )

            .sort((a, b) => a.date.localeCompare(b.date))

            .slice(-CONFIG.chartMaximumDays);

    }


    function addChartText(svg, x, y, text, className) {

        const label = createSVGElement(
            "text",
            {
                x,
                y,
                class: className
            }
        );

        label.textContent = String(text);

        svg.append(label);

        return label;

    }


    /* --------------------------------------------------------
       13. READING ACTIVITY CHART
       -------------------------------------------------------- */

    function renderActivityChart(rows) {

        const container = getElement("activity-chart");

        if (!container) {
            return;
        }

        const daily = normalizeDailyRows(rows);

        if (!daily.length) {

            container.classList.add(
                "chart-placeholder"
            );

            container.classList.remove(
                "chart-container"
            );

            renderEmptyState(
                "activity-chart",
                "Reading activity will appear here",
                "Daily readership patterns will appear after the reporting service is connected."
            );

            container.setAttribute(
                "role",
                "img"
            );

            container.setAttribute(
                "aria-label",
                "No reading activity data available"
            );

            return;

        }

        clearElement(container);

        container.classList.remove(
            "chart-placeholder"
        );

        container.classList.add(
            "chart-container"
        );

        const width = 900;
        const height = 270;

        const padding = {
            top: 22,
            right: 24,
            bottom: 48,
            left: 62
        };

        const chartWidth =
            width - padding.left - padding.right;

        const chartHeight =
            height - padding.top - padding.bottom;

        const maximum = Math.max(
            1,
            ...daily.map(item => item.views)
        );

        const yMaximum = Math.ceil(maximum / 4) * 4 || 4;

        const xPosition = index => {

            if (daily.length === 1) {
                return padding.left + chartWidth / 2;
            }

            return padding.left
                + (index / (daily.length - 1)) * chartWidth;

        };

        const yPosition = value => (
            padding.top
            + chartHeight
            - (value / yMaximum) * chartHeight
        );

        const svg = createSVGElement(
            "svg",
            {
                viewBox: `0 0 ${width} ${height}`,
                class: "chart-svg",
                role: "img",
                "aria-label":
                    `Daily page views from ${daily[0].date} to ${daily[daily.length - 1].date}.`
            }
        );

        // Horizontal grid lines and axis labels.

        for (let i = 0; i <= 4; i++) {

            const value = (
                yMaximum - (i / 4) * yMaximum
            );

            const y = (
                padding.top + (i / 4) * chartHeight
            );

            svg.append(
                createSVGElement(
                    "line",
                    {
                        x1: padding.left,
                        y1: y,
                        x2: width - padding.right,
                        y2: y,
                        class: "chart-grid-line"
                    }
                )
            );

            addChartText(
                svg,
                padding.left - 12,
                y + 4,
                formatNumber(value),
                "chart-axis-label"
            ).setAttribute("text-anchor", "end");

        }


        // Construct the line coordinates.

        const points = daily.map((item, index) => ({
            x: xPosition(index),
            y: yPosition(item.views),
            date: item.date,
            views: item.views
        }));

        const linePath = points

            .map((point, index) => {

                const command = index === 0
                    ? "M"
                    : "L";

                return `${command} ${point.x} ${point.y}`;

            })

            .join(" ");


        // Construct the filled area beneath the line.

        const firstPoint = points[0];

        const lastPoint = points[points.length - 1];

        const baseline = padding.top + chartHeight;

        const areaPath = [
            linePath,
            `L ${lastPoint.x} ${baseline}`,
            `L ${firstPoint.x} ${baseline}`,
            "Z"
        ].join(" ");


        svg.append(
            createSVGElement(
                "path",
                {
                    d: areaPath,
                    class: "chart-data-area"
                }
            )
        );

        svg.append(
            createSVGElement(
                "path",
                {
                    d: linePath,
                    class: "chart-data-line"
                }
            )
        );


        // Add data points.

        points.forEach(point => {

            svg.append(
                createSVGElement(
                    "circle",
                    {
                        cx: point.x,
                        cy: point.y,
                        r: 3.8,
                        class: "chart-data-point"
                    }
                )
            );

        });


        // Display up to five date labels.

        const labelCount = Math.min(5, daily.length);

        for (let i = 0; i < labelCount; i++) {

            const index = labelCount === 1
                ? 0
                : Math.round(
                    i * (daily.length - 1) / (labelCount - 1)
                );

            const point = points[index];

            addChartText(
                svg,
                point.x,
                height - 15,
                formatShortDate(point.date),
                "chart-axis-label"
            ).setAttribute("text-anchor", "middle");

        }

        container.append(svg);

    }


    /* --------------------------------------------------------
       14. DATA NORMALISATION
       -------------------------------------------------------- */

    function normalizeDashboardData(data) {

        if (
            !data
            || typeof data !== "object"
            || Array.isArray(data)
        ) {
            return null;
        }

        return {

            totals: (
                data.totals
                && typeof data.totals === "object"
                ? data.totals
                : {}
            ),

            daily: normalizeDailyRows(data.daily),

            popularPages: normalizePopularPages(
                data.popularPages
            ),

            languages: normalizeLanguageRows(
                data.languages
            ),

            referrals: normalizeReferralRows(
                data.referrals
            )

        };

    }


    /* --------------------------------------------------------
       15. DASHBOARD RENDERER
       -------------------------------------------------------- */

    function renderDashboard(data) {

        const normalized = normalizeDashboardData(data);

        if (!normalized) {

            setConnectionState(
                "error",
                "Unable to display readership data",
                "The reporting response was not in the expected format."
            );

            return false;

        }

        renderMetrics(normalized);

        renderActivityChart(normalized.daily);

        renderPopularPages(
            normalized.popularPages
        );

        renderLanguages(
            normalized.languages
        );

        renderReferrals(
            normalized.referrals
        );

        setConnectionState(
            "connected",
            "Readership data loaded",
            "Aggregate reporting data has been received successfully. No individual reader identities are collected."
        );

        return true;

    }


    /* --------------------------------------------------------
       16. INITIAL DASHBOARD STATE
       -------------------------------------------------------- */

    function initialiseDashboard() {

        setConnectionState(
            "pending",
            "Dashboard setup in progress",
            "The interface is ready. Readership statistics will appear after the authenticated reporting service has been configured."
        );

        setText(
            "reporting-period",
            "Awaiting authenticated connection"
        );

        renderEmptyState(
            "popular-pages",
            "No readership data available yet",
            "Articles and collections will appear here after valid page views have been recorded."
        );

        renderEmptyState(
            "language-distribution",
            "Language statistics are not available yet",
            "Language-level readership will appear after valid page views have been recorded."
        );

        renderEmptyState(
            "referral-sources",
            "Referral information will appear here",
            "Aggregate referring-domain statistics will appear after data collection."
        );

        renderActivityChart([]);

    }


    /* --------------------------------------------------------
       17. PUBLIC DASHBOARD INTERFACE
       -------------------------------------------------------- */

    /*
       This interface exposes rendering functions only.

       It does not expose database access, authentication
       credentials, or administrative operations.

       No network requests are made by this script.
    */

    window.VVAnalyticsDashboard = Object.freeze({

        render: renderDashboard,

        setStatus: setConnectionState

    });


    /* --------------------------------------------------------
       18. START
       -------------------------------------------------------- */

    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            initialiseDashboard,
            { once: true }
        );

    } else {

        initialiseDashboard();

    }


})();


/* ============================================================
   END OF DASHBOARD SCRIPT
   ============================================================ */
