/**
 * YOURWEB INITIATE – Custom Element ultra-parametrizable
 *
 * Tag: <yourweb-initiate></yourweb-initiate>
 *
 * Atributos disponibles (todos opcionales):
 * - label              : texto del botón (default: "INITIATE")
 * - href               : URL de destino (default: "#")
 * - font-family        : fuente CSS (default: "IBM Plex Mono, system-ui, -apple-system, sans-serif")
 * - font-size          : tamaño de letra (default: "15px")
 * - letter-spacing     : tracking (default: "0.22em")
 * - text-transform     : "uppercase" | "none" | etc. (default: "uppercase")
 * - primary-color      : color principal, por ejemplo "#A6D40D" (default: "#A6D40D")
 * - text-color         : color del texto (default: "#f5f5f5")
 * - glow-strength      : número 0–1 para intensidad del glow (default: "1")
 * - padding            : padding del botón (default: "16px 56px")
 * - radius             : border-radius (default: "999px")
 * - size               : "mobile" | "tablet" | "desktop" (ajusta padding y font-size si no se overridea)
 * - glitch             : "on" | "off" (default: "on")
 * - worm               : "on" | "off" (borde animado, default: "on")
 *
 * Ejemplo uso:
 * <yourweb-initiate
 *   label="INITIATE"
 *   href="https://yourweb.com/initiate"
 *   primary-color="#A6D40D"
 *   font-family="IBM Plex Mono, system-ui, -apple-system, sans-serif"
 *   size="desktop"
 *   glitch="on"
 *   worm="on">
 * </yourweb-initiate>
 */
(function () {
  var STYLES = [
    "@property --gradient-angle{syntax:\"<angle>\";initial-value:0deg;inherits:false;}",
    ":host{display:inline-block;}",
    ":host{",
    "  --yw-primary:#A6D40D;",
    "  --yw-text:#f5f5f5;",
    "  --yw-font-family:\"IBM Plex Mono\",system-ui,-apple-system,sans-serif;",
    "  --yw-font-size:15px;",
    "  --yw-letter-spacing:0.22em;",
    "  --yw-text-transform:uppercase;",
    "  --yw-padding-block:16px;",
    "  --yw-padding-inline:56px;",
    "  --yw-radius:999px;",
    "  --yw-glow-strength:1;",
    "}",
    ".cta-btn{",
    "  all:unset;",
    "  position:relative;",
    "  --gradient-angle:0deg;",
    "  display:inline-flex;",
    "  align-items:center;",
    "  justify-content:center;",
    "  gap:10px;",
    "  padding:var(--yw-padding-block) var(--yw-padding-inline);",
    "  border-radius:var(--yw-radius);",
    "  cursor:pointer;",
    "  overflow:hidden;",
    "  color:var(--yw-text);",
    "  letter-spacing:var(--yw-letter-spacing);",
    "  text-transform:var(--yw-text-transform);",
    "  font-size:var(--yw-font-size);",
    "  font-weight:700;",
    "  font-family:var(--yw-font-family);",
    "  background:",
    "    radial-gradient(circle at 0 0, color-mix(in srgb, var(--yw-primary) 40%, transparent) 0, transparent 55%),",
    "    linear-gradient(120deg, color-mix(in srgb, var(--yw-primary) 30%, transparent) 0, color-mix(in srgb, var(--yw-primary) 4%, transparent) 100%);",
    "  box-shadow:",
    "    0 0 0 1px color-mix(in srgb, var(--yw-primary) 50%, transparent),",
    "    0 0 calc(18px * var(--yw-glow-strength)) color-mix(in srgb, var(--yw-primary) 35%, transparent);",
    "  transition:transform 180ms ease-out,box-shadow 180ms ease-out,background 180ms ease-out;",
    "}",
    ".cta-btn::before{",
    "  content:\"\";",
    "  position:absolute;",
    "  inset:0;",
    "  border-radius:inherit;",
    "  box-shadow:0 0 0 1px color-mix(in srgb, var(--yw-primary) 65%, transparent);",
    "  opacity:0.7;",
    "  pointer-events:none;",
    "}",
    ".cta-btn::after{",
    "  content:\"\";",
    "  position:absolute;",
    "  inset:0;",
    "  border-radius:inherit;",
    "  padding:2px;",
    "  background-image:conic-gradient(",
    "    from var(--gradient-angle) at 50% 50%,",
    "    transparent 0,",
    "    transparent 33%,",
    "    var(--yw-primary) 50%,",
    "    transparent 66%,",
    "    transparent 100%",
    "  );",
    "  -webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);",
    "  -webkit-mask-composite:xor;",
    "  mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);",
    "  mask-composite:exclude;",
    "  opacity:0.95;",
    "  pointer-events:none;",
    "  animation:none;",
    "}",
    ".cta-btn.worm-on::after{",
    "  animation:rotate-gradient 2.8s linear infinite;",
    "}",
    ".cta-btn-inner{",
    "  position:relative;",
    "  z-index:1;",
    "  display:inline-flex;",
    "  align-items:center;",
    "  justify-content:center;",
    "  gap:10px;",
    "}",
    ".cta-label{position:relative;overflow:hidden;}",
    ".cta-label-main,.cta-label-ghost{display:block;}",
    ".cta-label-ghost{",
    "  position:absolute;",
    "  inset:0;",
    "  color:color-mix(in srgb, var(--yw-primary) 80%, white 20%);",
    "  mix-blend-mode:screen;",
    "  opacity:0;",
    "  transform:translate(0,0);",
    "  pointer-events:none;",
    "  clip-path:inset(0 0 0 0);",
    "}",
    ".cta-icon{",
    "  width:12px;",
    "  height:12px;",
    "  border-radius:999px;",
    "  border:2px solid var(--yw-primary);",
    "  box-shadow:0 0 10px color-mix(in srgb, var(--yw-primary) 80%, transparent);",
    "  position:relative;",
    "  overflow:hidden;",
    "}",
    ".cta-icon::before{",
    "  content:\"\";",
    "  position:absolute;",
    "  inset:2px;",
    "  border-radius:inherit;",
    "  background:radial-gradient(circle at 30% 0, rgba(255,255,255,.7), transparent 55%),",
    "             radial-gradient(circle at 70% 100%, color-mix(in srgb, var(--yw-primary) 90%, transparent) 0, transparent 60%);",
    "  opacity:0.9;",
    "}",
    ".cta-scanline{",
    "  position:absolute;",
    "  left:-20%;",
    "  right:-20%;",
    "  height:140%;",
    "  top:-20%;",
    "  background:linear-gradient(",
    "    to bottom,",
    "    transparent 0%,",
    "    rgba(255,255,255,.06) 45%,",
    "    color-mix(in srgb, var(--yw-primary) 55%, transparent) 50%,",
    "    rgba(255,255,255,.04) 55%,",
    "    transparent 100%);",
    "  opacity:0;",
    "  pointer-events:none;",
    "  mix-blend-mode:screen;",
    "}",
    "@keyframes label-glitch{",
    " 0%,88%,100%{transform:translate(0,0);}",
    " 90%{transform:translate(-1px,0);}",
    " 92%{transform:translate(1.5px,-0.5px);}",
    " 94%{transform:translate(0,1px);}",
    "}",
    "@keyframes ghost-glitch{",
    " 0%{opacity:0;transform:translate(0,0);clip-path:inset(0 0 40% 0);}",
    " 10%{opacity:.6;transform:translate(-2px,-1px);clip-path:inset(10% 0 55% 0);}",
    " 20%{opacity:.4;transform:translate(2px,1px);clip-path:inset(40% 0 25% 0);}",
    " 30%{opacity:.7;transform:translate(-1px,0);clip-path:inset(65% 0 5% 0);}",
    " 40%{opacity:.2;transform:translate(1px,-1px);clip-path:inset(15% 0 60% 0);}",
    " 50%{opacity:.5;transform:translate(-1px,1px);clip-path:inset(55% 0 15% 0);}",
    " 60%,100%{opacity:0;transform:translate(0,0);clip-path:inset(0 0 0 0);}",
    "}",
    "@keyframes scanline{",
    " 0%{opacity:0;transform:translateY(-120%);}",
    " 40%{opacity:.08;}",
    " 100%{opacity:0;transform:translateY(120%);}",
    "}",
    "@keyframes rotate-gradient{",
    " 0%{--gradient-angle:0deg;}",
    " 100%{--gradient-angle:360deg;}",
    "}",
    ".cta-btn.glitch-on .cta-label-main{animation:label-glitch 2.8s infinite;}",
    ".cta-btn.glitch-on .cta-label-ghost{animation:ghost-glitch 2.8s infinite;}",
    ".cta-btn.glitch-on .cta-scanline{animation:scanline 2.8s infinite;}",
    ".cta-btn:hover{",
    "  transform:translateY(-1px) scale(1.02);",
    "  box-shadow:",
    "    0 0 0 1px var(--yw-primary),",
    "    0 0 22px color-mix(in srgb, var(--yw-primary) 70%, transparent),",
    "    0 0 36px color-mix(in srgb, var(--yw-primary) 60%, transparent);",
    "}",
    ".cta-btn:active{",
    "  transform:translateY(0) scale(0.99);",
    "  box-shadow:",
    "    0 0 0 1px color-mix(in srgb, var(--yw-primary) 80%, transparent),",
    "    0 0 18px color-mix(in srgb, var(--yw-primary) 65%, transparent);",
    "}"
  ].join("");

  class YourWebInitiate extends HTMLElement {
    static get observedAttributes() {
      return [
        "label",
        "href",
        "font-family",
        "font-size",
        "letter-spacing",
        "text-transform",
        "primary-color",
        "text-color",
        "glow-strength",
        "padding",
        "radius",
        "size",
        "glitch",
        "worm"
      ];
    }

    constructor() {
      super();
      this._btn = null;
      this._inner = null;
      this.attachShadow({ mode: "open" });

      var style = document.createElement("style");
      style.textContent = STYLES;
      this.shadowRoot.appendChild(style);

      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "cta-btn glitch-on worm-on";
      btn.innerHTML =
        '<div class="cta-btn-inner">' +
        '  <span class="cta-label">' +
        '    <span class="cta-label-main"></span>' +
        '    <span class="cta-label-ghost"></span>' +
        "  </span>" +
        '  <span class="cta-icon"></span>' +
        "</div>" +
        '<div class="cta-scanline"></div>';
      this.shadowRoot.appendChild(btn);

      this._btn = btn;
    }

    connectedCallback() {
      this._applySizePreset();
      this._applyAttributesToCSS();
      this._updateContent();
      this._bindClick();
    }

    attributeChangedCallback() {
      if (!this.shadowRoot) return;
      this._applySizePreset();
      this._applyAttributesToCSS();
      this._updateContent();
      this._bindClick();
    }

    _applySizePreset() {
      var size = (this.getAttribute("size") || "desktop").toLowerCase();
      var root = this.shadowRoot.host;
      if (!root) return;

      if (size === "mobile") {
        root.style.setProperty("--yw-font-size", this.getAttribute("font-size") || "13px");
        root.style.setProperty("--yw-padding-block", "12px");
        root.style.setProperty("--yw-padding-inline", "32px");
      } else if (size === "tablet") {
        root.style.setProperty("--yw-font-size", this.getAttribute("font-size") || "14px");
        root.style.setProperty("--yw-padding-block", "14px");
        root.style.setProperty("--yw-padding-inline", "44px");
      } else {
        // desktop / default
        root.style.setProperty("--yw-font-size", this.getAttribute("font-size") || "15px");
        root.style.setProperty("--yw-padding-block", "16px");
        root.style.setProperty("--yw-padding-inline", "56px");
      }
    }

    _applyAttributesToCSS() {
      var root = this.shadowRoot.host;
      if (!root) return;

      var primary = this.getAttribute("primary-color");
      if (primary) root.style.setProperty("--yw-primary", primary);

      var textColor = this.getAttribute("text-color");
      if (textColor) root.style.setProperty("--yw-text", textColor);

      var fontFamily = this.getAttribute("font-family");
      if (fontFamily) root.style.setProperty("--yw-font-family", fontFamily);

      var letterSpacing = this.getAttribute("letter-spacing");
      if (letterSpacing) root.style.setProperty("--yw-letter-spacing", letterSpacing);

      var textTransform = this.getAttribute("text-transform");
      if (textTransform) root.style.setProperty("--yw-text-transform", textTransform);

      var glowStrength = this.getAttribute("glow-strength");
      if (glowStrength) root.style.setProperty("--yw-glow-strength", glowStrength);

      var radius = this.getAttribute("radius");
      if (radius) root.style.setProperty("--yw-radius", radius);

      var padding = this.getAttribute("padding");
      if (padding) {
        var parts = padding.split(/\s+/);
        if (parts.length === 1) {
          root.style.setProperty("--yw-padding-block", parts[0]);
          root.style.setProperty("--yw-padding-inline", parts[0]);
        } else if (parts.length === 2) {
          root.style.setProperty("--yw-padding-block", parts[0]);
          root.style.setProperty("--yw-padding-inline", parts[1]);
        }
      }

      // toggles
      var glitch = (this.getAttribute("glitch") || "on").toLowerCase();
      var worm = (this.getAttribute("worm") || "on").toLowerCase();
      if (this._btn) {
        if (glitch === "off") {
          this._btn.classList.remove("glitch-on");
        } else {
          this._btn.classList.add("glitch-on");
        }
        if (worm === "off") {
          this._btn.classList.remove("worm-on");
        } else {
          this._btn.classList.add("worm-on");
        }
      }
    }

    _updateContent() {
      var label = this.getAttribute("label") || "INITIATE";
      var spanMain = this.shadowRoot.querySelector(".cta-label-main");
      var spanGhost = this.shadowRoot.querySelector(".cta-label-ghost");
      if (spanMain) spanMain.textContent = label;
      if (spanGhost) spanGhost.textContent = label;
    }

    _bindClick() {
      var hrefRaw = this.getAttribute("href") || "#";
      var href = hrefRaw;
      if (hrefRaw && hrefRaw !== "#" && !/^https?:\/\//i.test(hrefRaw)) {
        if (hrefRaw[0] === "/") {
          href = hrefRaw;
        } else if (hrefRaw.indexOf(".") !== -1) {
          href = "https://" + hrefRaw.replace(/^https?:\/\//i, "");
        }
      }
      if (!this._btn) return;
      this._btn.onclick = function () {
        if (href && href !== "#") {
          try {
            if (window.top && window.top.location) {
              window.top.location.href = href;
            } else {
              window.location.href = href;
            }
          } catch (e) {
            window.location.href = href;
          }
        }
      };
    }
  }

  customElements.define("yourweb-initiate", YourWebInitiate);
})();

