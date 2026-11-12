/* ============================================================
   VERSE & VARIABLE
   A line of verse. A line of inquiry.

   Lafz se Lehar tak — From the word to the wave.

   Main JavaScript
   Design concept: THE WAVE MANUSCRIPT
   Scientific inspiration: NONLINEAR RESONANCE

   Features:
   01. Evolving nonlinear-inspired elastic wavefield
   02. Distorted and interacting wavefronts
   03. Harmonic-inspired visual components
   04. Responsive canvas rendering
   05. Dark and light theme switching
   06. Mobile navigation
   07. Reading progress
   08. Scroll-triggered reveals
   09. Accessibility and reduced-motion support
   10. Reading and sharing utilities

   Copyright (c) 2026 Pravinkumar Ramchandra Ghodake
   ============================================================ */

(function () {
  "use strict";

  /* ==========================================================
     01. GLOBAL CONFIGURATION
     ========================================================== */

  const CONFIG = {
    defaultTheme: "dark",

    maxPixelRatio: 1.75,

    animationFPS: 30,

    waveSources: 3,

    wavefrontsPerSource: 7,

    waveSpeed: 30,

    waveSpacing: 43,

    waveDistortion: 1,

    mobilePixelRatio: 1.25,

    enableHarmonicDetail: true,

    animationEnabled: true
  };


  const COLORS = {
    dark: {
      blue: "#5475CE",
      cyan: "#42A9C5",
      teal: "#25A6A0",
      coral: "#E36D54",
      gold: "#D5AA61"
    },

    light: {
      blue: "#304D9B",
      cyan: "#248BAA",
      teal: "#177C79",
      coral: "#CE563F",
      gold: "#A67B32"
    }
  };


  /* ==========================================================
     02. DOM REFERENCES
     ========================================================== */

  const root = document.documentElement;

  const body = document.body;

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  const mobileQuery = window.matchMedia(
    "(max-width: 740px)"
  );


  /* ==========================================================
     03. SAFE STORAGE UTILITIES
     ========================================================== */

  function readStorage(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }


  function writeStorage(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      // The website remains functional without local storage.
    }
  }


  /* ==========================================================
     04. THEME MANAGEMENT
     ========================================================== */

  function updateThemeControls(theme) {
    const buttons = document.querySelectorAll(
      "[data-theme-toggle]"
    );

    buttons.forEach(function (button) {
      const isDark = theme === "dark";

      button.setAttribute(
        "aria-label",
        isDark ? "Switch to light theme" : "Switch to dark theme"
      );

      button.setAttribute(
        "aria-pressed",
        String(isDark)
      );

      const label = button.querySelector("[data-theme-label]");

      if (label) {
        label.textContent = isDark ? "Light mode" : "Dark mode";
      }
    });
  }


  function setTheme(theme, persist = true) {
    if (theme !== "dark" && theme !== "light") {
      theme = CONFIG.defaultTheme;
    }

    root.setAttribute("data-theme", theme);

    if (persist) {
      writeStorage("vv-theme", theme);
    }

    updateThemeControls(theme);

    window.dispatchEvent(
      new CustomEvent("vv:themechange", {
        detail: { theme: theme }
      })
    );
  }


  function initializeTheme() {
    const savedTheme = readStorage("vv-theme");

    const initialTheme =
      savedTheme === "dark" || savedTheme === "light"
        ? savedTheme
        : root.getAttribute("data-theme") || CONFIG.defaultTheme;

    setTheme(initialTheme, false);

    document.addEventListener("click", function (event) {
      const button = event.target.closest("[data-theme-toggle]");

      if (!button) return;

      const currentTheme = root.getAttribute("data-theme");

      setTheme(
        currentTheme === "dark" ? "light" : "dark"
      );
    });
  }


  /* ==========================================================
     05. MOBILE NAVIGATION
     ========================================================== */

  function initializeNavigation() {
    const toggle = document.querySelector(
      "[data-menu-toggle], .menu-toggle"
    );

    const navigation = document.querySelector(".site-nav");

    if (!toggle || !navigation) return;

    if (!navigation.id) {
      navigation.id = "primary-navigation";
    }

    toggle.setAttribute("aria-controls", navigation.id);

    toggle.setAttribute(
      "aria-expanded",
      "false"
    );


    function openMenu() {
      navigation.classList.add("is-open");

      toggle.setAttribute("aria-expanded", "true");

      toggle.setAttribute("aria-label", "Close navigation");
    }


    function closeMenu() {
      navigation.classList.remove("is-open");

      toggle.setAttribute("aria-expanded", "false");

      toggle.setAttribute("aria-label", "Open navigation");
    }


    toggle.addEventListener("click", function () {
      const isOpen = navigation.classList.contains("is-open");

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });


    navigation.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });


    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMenu();
      }
    });


    document.addEventListener("click", function (event) {
      if (
        navigation.classList.contains("is-open") &&
        !navigation.contains(event.target) &&
        !toggle.contains(event.target)
      ) {
        closeMenu();
      }
    });


    mobileQuery.addEventListener("change", function (event) {
      if (!event.matches) {
        closeMenu();
      }
    });
  }


  /* ==========================================================
     06. NONLINEAR WAVEFIELD ENGINE
     ========================================================== */

  class NonlinearWavefield {

    constructor(canvas) {
      this.canvas = canvas;

      this.context = canvas.getContext("2d", {
        alpha: true,
        desynchronized: true
      });

      if (!this.context) {
        this.disabled = true;
        return;
      }

      this.disabled = false;

      this.width = 0;
      this.height = 0;

      this.pixelRatio = 1;

      this.animationFrame = null;

      this.lastFrameTime = 0;

      this.running = false;

      this.time = 0;

      this.lastTimestamp = null;

      this.sources = [];

      this.resizeObserver = null;

      this.colors = COLORS.dark;

      this.initialize();
    }


    /* --------------------------------------------------------
       06.1 INITIALIZE
       -------------------------------------------------------- */

    initialize() {
      this.canvas.setAttribute("aria-hidden", "true");

      this.canvas.setAttribute("role", "presentation");

      this.canvas.style.pointerEvents = "none";

      this.resize();

      this.createSources();

      this.observeResize();

      this.observeVisibility();

      this.bindTheme();

      this.bindMotionPreference();

      if (this.shouldAnimate()) {
        this.start();
      } else {
        this.renderStatic();
      }
    }


    /* --------------------------------------------------------
       06.2 DETERMINE ANIMATION PERMISSIONS
       -------------------------------------------------------- */

    shouldAnimate() {
      return (
        CONFIG.animationEnabled &&
        !reducedMotion.matches &&
        !document.hidden
      );
    }


    /* --------------------------------------------------------
       06.3 RESPONSIVE CANVAS SIZE
       -------------------------------------------------------- */

    resize() {
      const rect = this.canvas.getBoundingClientRect();

      const width = Math.max(
        rect.width,
        window.innerWidth
      );

      const height = Math.max(
        rect.height,
        window.innerHeight
      );

      const maxRatio = mobileQuery.matches
        ? CONFIG.mobilePixelRatio
        : CONFIG.maxPixelRatio;

      this.pixelRatio = Math.min(
        window.devicePixelRatio || 1,
        maxRatio
      );

      this.width = width;
      this.height = height;

      this.canvas.width = Math.round(
        width * this.pixelRatio
      );

      this.canvas.height = Math.round(
        height * this.pixelRatio
      );

      this.context.setTransform(
        this.pixelRatio,
        0,
        0,
        this.pixelRatio,
        0,
        0
      );

      this.renderStatic();
    }


    /* --------------------------------------------------------
       06.4 DEFINE PROPAGATION SOURCES
       -------------------------------------------------------- */

    createSources() {
      this.sources = [

        {
          x: 0.19,
          y: 0.35,

          amplitude: 1.00,

          speed: 1.00,

          phase: 0.3,

          colors: [
            "blue",
            "cyan"
          ]
        },

        {
          x: 0.82,
          y: 0.47,

          amplitude: 0.84,

          speed: 0.79,

          phase: 2.2,

          colors: [
            "teal",
            "cyan"
          ]
        },

        {
          x: 0.53,
          y: 0.89,

          amplitude: 0.56,

          speed: 0.64,

          phase: 4.1,

          colors: [
            "coral",
            "gold"
          ]
        }

      ];
    }


    /* --------------------------------------------------------
       06.5 RESIZE OBSERVER
       -------------------------------------------------------- */

    observeResize() {
      if ("ResizeObserver" in window) {

        this.resizeObserver = new ResizeObserver(() => {
          this.resize();
        });

        this.resizeObserver.observe(
          this.canvas.parentElement || this.canvas
        );

      } else {

        window.addEventListener(
          "resize",
          () => this.resize(),
          { passive: true }
        );

      }
    }


    /* --------------------------------------------------------
       06.6 PAGE VISIBILITY
       -------------------------------------------------------- */

    observeVisibility() {
      document.addEventListener("visibilitychange", () => {

        if (this.shouldAnimate()) {
          this.start();
        } else {
          this.stop();
          this.renderStatic();
        }

      });
    }


    /* --------------------------------------------------------
       06.7 THEME RESPONSE
       -------------------------------------------------------- */

    bindTheme() {
      this.colors =
        COLORS[root.getAttribute("data-theme")] || COLORS.dark;

      window.addEventListener("vv:themechange", (event) => {

        this.colors =
          COLORS[event.detail.theme] || COLORS.dark;

        if (!this.running) {
          this.renderStatic();
        }

      });
    }


    /* --------------------------------------------------------
       06.8 REDUCED MOTION RESPONSE
       -------------------------------------------------------- */

    bindMotionPreference() {
      reducedMotion.addEventListener("change", () => {

        if (this.shouldAnimate()) {
          this.start();
        } else {
          this.stop();
          this.renderStatic();
        }

      });
    }


    /* --------------------------------------------------------
       06.9 CLEAR CANVAS
       -------------------------------------------------------- */

    clear() {
      this.context.clearRect(
        0,
        0,
        this.width,
        this.height
      );
    }


    /* --------------------------------------------------------
       06.10 CALCULATE SOURCE POSITION
       -------------------------------------------------------- */

    sourcePosition(source, time) {

      const driftX =
        Math.sin(time * 0.13 + source.phase) * 0.014;

      const driftY =
        Math.cos(time * 0.11 + source.phase) * 0.018;

      return {

        x: this.width * (source.x + driftX),

        y: this.height * (source.y + driftY)

      };
    }


    /* --------------------------------------------------------
       06.11 DRAW A DISTORTED WAVEFRONT
       -------------------------------------------------------- */

    drawWavefront(
      source,
      center,
      radius,
      time,
      index,
      overtone = false
    ) {

      const ctx = this.context;

      const segments = mobileQuery.matches ? 105 : 170;

      const sourceAmplitude = source.amplitude;

      const phase =
        time * 0.48 * source.speed + source.phase;

      const interactionScale = overtone ? 0.45 : 1;

      const otherSources = this.sources.filter(
        item => item !== source
      );

      const maxRadius = Math.hypot(
        this.width,
        this.height
      ) * 0.78;

      const radialEnvelope = Math.max(
        0,
        1 - radius / maxRadius
      );


      ctx.beginPath();


      /* Radial contour construction */

      for (let point = 0; point <= segments; point++) {

        const angle =
          (point / segments) * Math.PI * 2;


        /* Fundamental contour variation */

        const modeThree = Math.sin(
          3 * angle - phase + radius * 0.004
        );

        const modeFive = Math.sin(
          5 * angle + phase * 0.65
        );

        const modeTwo = Math.sin(
          2 * angle - phase * 0.42
        );


        /* Nonlinear-inspired amplitude-dependent
           contour distortion */

        const nonlinearDistortion =
          sourceAmplitude *
          interactionScale *
          CONFIG.waveDistortion *
          (
            modeThree * (5 + radius * 0.012) +
            modeFive * (2 + radius * 0.006) +
            modeTwo * radialEnvelope * 7
          );


        /* Contributions from neighbouring
           propagation fields */

        let interaction = 0;

        otherSources.forEach(other => {

          const otherPosition = this.sourcePosition(
            other,
            time
          );

          const dx = center.x - otherPosition.x;

          const dy = center.y - otherPosition.y;

          const distance = Math.hypot(dx, dy);

          const direction = Math.atan2(dy, dx);

          interaction +=
            Math.sin(
              distance * 0.004 -
              phase +
              direction * 2
            ) * radialEnvelope * 5;

        });


        const radiusVariation =
          nonlinearDistortion + interaction;


        const currentRadius =
          Math.max(1, radius + radiusVariation);


        const x =
          center.x + Math.cos(angle) * currentRadius;

        const y =
          center.y + Math.sin(angle) * currentRadius;


        if (point === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }

      }


      ctx.closePath();


      /* Colour and intensity */

      const firstColor = this.colors[source.colors[0]];

      const secondColor = this.colors[source.colors[1]];

      const gradient = ctx.createLinearGradient(
        center.x - radius,
        center.y - radius,
        center.x + radius,
        center.y + radius
      );

      gradient.addColorStop(0, firstColor);

      gradient.addColorStop(0.50, secondColor);

      gradient.addColorStop(1, firstColor);


      const ringOpacity =
        (
          0.045 +
          radialEnvelope * 0.11
        ) *
        sourceAmplitude *
        (1 - index * 0.045) *
        (overtone ? 0.45 : 1);


      ctx.globalAlpha = ringOpacity;

      ctx.strokeStyle = gradient;

      ctx.lineWidth = overtone ? 0.65 : 1.05;

      ctx.stroke();

      ctx.globalAlpha = 1;

    }


    /* --------------------------------------------------------
       06.12 DRAW A PROPAGATION FIELD
       -------------------------------------------------------- */

    drawSource(source, time, staticMode = false) {

      const center = staticMode

        ? {
            x: this.width * source.x,
            y: this.height * source.y
          }

        : this.sourcePosition(source, time);


      const maxRadius = Math.hypot(
        this.width,
        this.height
      ) * 0.76;


      const phaseTime = staticMode ? 0 : time;


      /* Main wavefront family */

      for (
        let index = 0;
        index < CONFIG.wavefrontsPerSource;
        index++
      ) {

        let radius;

        if (staticMode) {

          radius = 62 + index * CONFIG.waveSpacing;

        } else {

          radius =
            (
              phaseTime *
              CONFIG.waveSpeed *
              source.speed +
              index * CONFIG.waveSpacing +
              source.phase * 30
            ) % maxRadius;

        }


        if (radius > 25) {

          this.drawWavefront(
            source,
            center,
            radius,
            phaseTime,
            index,
            false
          );

        }

      }


      /* Harmonic-inspired secondary contours */

      if (CONFIG.enableHarmonicDetail) {

        for (let index = 0; index < 4; index++) {

          let radius;

          if (staticMode) {

            radius = 48 + index * 91;

          } else {

            radius =
              (
                phaseTime *
                CONFIG.waveSpeed *
                source.speed *
                1.42 +
                index * 91 +
                source.phase * 22
              ) % maxRadius;

          }


          if (radius > 35) {

            this.drawWavefront(
              source,
              center,
              radius,
              phaseTime * 1.4,
              index,
              true
            );

          }

        }

      }

    }


    /* --------------------------------------------------------
       06.13 RENDER COMPLETE WAVEFIELD
       -------------------------------------------------------- */

    render(timestamp, staticMode = false) {

      if (this.disabled) return;

      const ctx = this.context;

      this.clear();

      ctx.save();

      ctx.globalCompositeOperation = "screen";

      this.sources.forEach(source => {

        this.drawSource(
          source,
          timestamp,
          staticMode
        );

      });

      ctx.restore();

    }


    /* --------------------------------------------------------
       06.14 STATIC FALLBACK
       -------------------------------------------------------- */

    renderStatic() {
      if (this.disabled) return;

      this.render(0, true);
    }


    /* --------------------------------------------------------
       06.15 ANIMATION LOOP
       -------------------------------------------------------- */

    frame = (timestamp) => {

      if (!this.running) return;

      if (!this.shouldAnimate()) {
        this.stop();
        this.renderStatic();
        return;
      }

      const frameInterval =
        1000 / CONFIG.animationFPS;


      if (
        timestamp - this.lastFrameTime >= frameInterval
      ) {

        if (this.lastTimestamp === null) {
          this.lastTimestamp = timestamp;
        }

        const delta = Math.min(
          (timestamp - this.lastTimestamp) / 1000,
          0.05
        );

        this.time += delta;

        this.render(this.time);

        this.lastFrameTime = timestamp;
        this.lastTimestamp = timestamp;

      }

      this.animationFrame = requestAnimationFrame(this.frame);

    };


    /* --------------------------------------------------------
       06.16 START ANIMATION
       -------------------------------------------------------- */

    start() {

      if (this.disabled || this.running) return;

      if (!this.shouldAnimate()) {
        this.renderStatic();
        return;
      }

      this.running = true;

      this.lastTimestamp = null;

      this.animationFrame = requestAnimationFrame(
        this.frame
      );

    }


    /* --------------------------------------------------------
       06.17 STOP ANIMATION
       -------------------------------------------------------- */

    stop() {

      this.running = false;

      if (this.animationFrame !== null) {

        cancelAnimationFrame(
          this.animationFrame
        );

        this.animationFrame = null;

      }

      this.lastTimestamp = null;

    }


    /* --------------------------------------------------------
       06.18 CLEANUP
       -------------------------------------------------------- */

    destroy() {

      this.stop();

      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
      }

    }

  }


  /* ==========================================================
     07. INITIALIZE WAVEFIELD
     ========================================================== */

  let wavefieldInstance = null;

  function initializeWavefield() {

    const canvas = document.querySelector(
      ".wavefield__canvas"
    );

    if (!canvas) return;

    wavefieldInstance = new NonlinearWavefield(canvas);

  }


  /* ==========================================================
     08. READING PROGRESS INDICATOR
     ========================================================== */

  function initializeReadingProgress() {

    const progressBar = document.querySelector(
      ".reading-progress-bar"
    );

    if (!progressBar) return;

    let ticking = false;


    function updateProgress() {

      const scrollTop =
        window.scrollY ||
        document.documentElement.scrollTop;

      const scrollHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      if (scrollHeight <= 0) {

        progressBar.style.width = "0%";

        return;

      }

      const percentage = Math.min(
        100,
        Math.max(0, (scrollTop / scrollHeight) * 100)
      );

      progressBar.style.width =
        percentage.toFixed(2) + "%";

    }


    window.addEventListener(
      "scroll",
      function () {

        if (!ticking) {

          window.requestAnimationFrame(function () {

            updateProgress();

            ticking = false;

          });

          ticking = true;

        }

      },
      { passive: true }
    );


    updateProgress();

  }


  /* ==========================================================
     09. SCROLL-TRIGGERED REVEAL ANIMATIONS
     ========================================================== */

  function initializeRevealAnimations() {

    const elements = document.querySelectorAll(
      ".reveal"
    );

    if (!elements.length) return;

    if (
      reducedMotion.matches ||
      !("IntersectionObserver" in window)
    ) {

      elements.forEach(element => {
        element.classList.add("is-visible");
      });

      return;

    }


    const observer = new IntersectionObserver(

      function (entries, currentObserver) {

        entries.forEach(function (entry) {

          if (entry.isIntersecting) {

            entry.target.classList.add("is-visible");

            currentObserver.unobserve(entry.target);

          }

        });

      },

      {
        threshold: 0.10,

        rootMargin: "0px 0px -35px 0px"

      }

    );


    elements.forEach(element => {

      observer.observe(element);

    });

  }


  /* ==========================================================
     10. CURRENT YEAR
     ========================================================== */

  function initializeCurrentYear() {

    const elements = document.querySelectorAll(
      "[data-current-year]"
    );

    const currentYear = new Date().getFullYear();

    elements.forEach(element => {

      element.textContent = currentYear;

    });

  }


  /* ==========================================================
     11. COPY ARTICLE LINK
     ========================================================== */

  function initializeCopyLink() {

    document.addEventListener("click", async function (event) {

      const button = event.target.closest(
        "[data-copy-link]"
      );

      if (!button) return;

      const url = button.dataset.copyLink ||
        window.location.href;

      try {

        if (!navigator.clipboard) {
          throw new Error("Clipboard unavailable");
        }

        await navigator.clipboard.writeText(url);

        const originalText = button.textContent;

        button.textContent = "Copied";

        window.setTimeout(function () {

          button.textContent = originalText;

        }, 1800);

      } catch (error) {

        button.setAttribute(
          "aria-label",
          "Unable to copy automatically"
        );

      }

    });

  }


  /* ==========================================================
     12. BACK TO TOP
     ========================================================== */

  function initializeBackToTop() {

    const buttons = document.querySelectorAll(
      "[data-back-to-top]"
    );

    buttons.forEach(function (button) {

      button.addEventListener("click", function () {

        window.scrollTo({

          top: 0,

          behavior: reducedMotion.matches
            ? "instant"
            : "smooth"

        });

      });

    });

  }


  /* ==========================================================
     13. EXTERNAL LINK IDENTIFICATION
     ========================================================== */

  function initializeExternalLinks() {

    const currentHost = window.location.hostname;

    const links = document.querySelectorAll(
      "a[href^='http://'], a[href^='https://']"
    );

    links.forEach(function (link) {

      try {

        const destination = new URL(link.href);

        if (destination.hostname !== currentHost) {

          link.setAttribute(
            "rel",
            "noopener noreferrer"
          );

        }

      } catch (error) {

        // Leave malformed or relative links unchanged.

      }

    });

  }


  /* ==========================================================
     14. INITIALIZE ALL WEBSITE COMPONENTS
     ========================================================== */

  function initializeWebsite() {

    initializeTheme();

    initializeNavigation();

    initializeWavefield();

    initializeReadingProgress();

    initializeRevealAnimations();

    initializeCurrentYear();

    initializeCopyLink();

    initializeBackToTop();

    initializeExternalLinks();

    document.documentElement.classList.add(
      "js-enabled"
    );

    document.dispatchEvent(
      new CustomEvent("vv:ready")
    );

  }


  /* ==========================================================
     15. DOCUMENT INITIALIZATION
     ========================================================== */

  if (document.readyState === "loading") {

    document.addEventListener(
      "DOMContentLoaded",
      initializeWebsite,
      { once: true }
    );

  } else {

    initializeWebsite();

  }


  /* ==========================================================
     16. PUBLICATION DEBUG INTERFACE
     ========================================================== */

  window.VerseVariable = {

    version: "1.0.0",

    publication: "Verse & Variable",

    tagline: "Lafz se Lehar tak",

    getTheme: function () {

      return root.getAttribute("data-theme");

    },

    setTheme: setTheme,

    wavefield: function () {

      return wavefieldInstance;

    }

  };


  /* ==========================================================
     END OF VERSE & VARIABLE JAVASCRIPT
     ========================================================== */

})();
