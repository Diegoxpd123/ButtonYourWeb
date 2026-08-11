/**
 * YOURWEB INITIATE – Custom Element ultra-parametrizable
 *
 * Tag: <yourweb-initiate></yourweb-initiate>
 *
 * Atributos disponibles (todos opcionales):
 * - label              : texto del botón (default: "INITIATE")
 * - href               : URL de destino (default: "#")
 * - font-family        : fuente CSS (default: "Riosark, Riosarkregular, sans-serif")
 * - font-size          : tamaño de letra (default: clamp responsivo)
 * - letter-spacing     : tracking (default: clamp responsivo)
 * - text-transform     : "uppercase" | "none" | etc. (default: "uppercase")
 * - primary-color      : color principal (default: "#C8FF00")
 * - text-color         : color del texto (default: mismo que primary-color)
 * - glow-strength      : número 0–1 para intensidad del glow (default: "1")
 * - padding            : padding del botón (default: clamp responsivo)
 * - radius             : border-radius si shape="pill" (default: "999px")
 * - chamfer            : corte de esquina si shape="chamfer" (default: clamp responsivo)
 * - shape              : "chamfer" | "pill" (default: "chamfer")
 * - size-width         : ancho del botón (default: "100%")
 * - size-height        : alto del botón (default: "100%")
 * - glitch             : "on" | "off" (default: "off")
 * - worm               : "on" | "off" (borde animado, default: "off")
 * - shadow             : "on" | "off" – sombra/glow del botón (default: "on")
 * - glitch-intensity   : número (ej. 1, 1.5, 2) – intensidad del glitch/overload (default: "1")
 * - icon               : "on" | "off" – mostrar u ocultar el círculo junto al texto (default: "on")
 * - solidity           : número 0–1 – solidez del fondo (default: "1")
 * - hover-glow         : "on" | "off" – glow extra al hover (default: "on")
 * - overload           : "on" | "off" – vibración/sobrecarga del contenido interno (default: "on")
 *
 * Ejemplo uso:
 * <yourweb-initiate
 *   label="INITIATE"
 *   href="https://yourweb.com/initiate"
 *   primary-color="#C8FF00"
 *   font-family="Riosark, Riosarkregular, sans-serif"
 *   overload="on">
 * </yourweb-initiate>
 */
(function () {
  var STYLES = [
    "@font-face{",
    "  font-family:\"Riosark\";",
    "  font-style:normal;",
    "  font-weight:400;",
    "  font-display:swap;",
    "  src:local(\"Riosark\"),local(\"Riosark Regular\"),local(\"Riosarkregular\"),",
    "      url(\"https://fonts.cdnfonts.com/s/121788/RiosarkRegular-ZpgLB.woff\") format(\"woff\");",
    "}",
    "@property --gradient-angle{syntax:\"<angle>\";initial-value:0deg;inherits:false;}",
    ":host{",
    "  display:block;",
    "  width:var(--yw-size-width);",
    "  height:var(--yw-size-height);",
    "  margin:0;",
    "  padding:0;",
    "  box-sizing:border-box;",
    "  container-type:size;",
    "  overflow:visible;",
    "  --yw-primary:#C8FF00;",
    "  --yw-text:var(--yw-primary);",
    "  --yw-font-family:\"Riosark\",\"Riosarkregular\",\"Riosark Regular\",sans-serif;",
    "  --yw-font-size:clamp(11px, 28cqh, 18px);",
    "  --yw-letter-spacing:clamp(0.12em, 2.2cqi, 0.32em);",
    "  --yw-text-transform:uppercase;",
    "  --yw-padding-block:clamp(6px, 16cqh, 18px);",
    "  --yw-padding-inline:clamp(10px, 7cqi, 48px);",
    "  --yw-radius:999px;",
    "  --yw-chamfer:clamp(6px, 14cqh, 14px);",
    "  --yw-border:1.5px;",
    "  --yw-glow-strength:1;",
    "  --yw-size-width:100%;",
    "  --yw-size-height:100%;",
    "  --yw-glitch-intensity:1;",
    "  --yw-bg-solidity:1;",
    "  --yw-clip:polygon(",
    "    var(--yw-chamfer) 0%,",
    "    calc(100% - var(--yw-chamfer)) 0%,",
    "    100% var(--yw-chamfer),",
    "    100% calc(100% - var(--yw-chamfer)),",
    "    calc(100% - var(--yw-chamfer)) 100%,",
    "    var(--yw-chamfer) 100%,",
    "    0% calc(100% - var(--yw-chamfer)),",
    "    0% var(--yw-chamfer)",
    "  );",
    "}",
    ":host(.shadow-on) .cta-glow{",
    "  filter:",
    "    drop-shadow(0 0 calc(3px * var(--yw-glow-strength)) color-mix(in srgb, var(--yw-primary) 70%, transparent))",
    "    drop-shadow(0 0 calc(10px * var(--yw-glow-strength)) color-mix(in srgb, var(--yw-primary) 40%, transparent));",
    "  transition:filter 200ms ease-out;",
    "}",
    ":host(.shadow-on.hover-glow-on:hover) .cta-glow{",
    "  filter:",
    "    drop-shadow(0 0 calc(5px * var(--yw-glow-strength)) color-mix(in srgb, var(--yw-primary) 95%, transparent))",
    "    drop-shadow(0 0 calc(14px * var(--yw-glow-strength)) color-mix(in srgb, var(--yw-primary) 60%, transparent))",
    "    drop-shadow(0 0 calc(24px * var(--yw-glow-strength)) color-mix(in srgb, var(--yw-primary) 30%, transparent));",
    "}",
    ".cta-glow{",
    "  display:block;",
    "  width:100%;",
    "  height:100%;",
    "  min-width:0;",
    "  min-height:0;",
    "}",
    ".cta-btn{",
    "  all:unset;",
    "  position:relative;",
    "  --gradient-angle:0deg;",
    "  display:block;",
    "  width:100%;",
    "  height:100%;",
    "  min-width:0;",
    "  min-height:0;",
    "  box-sizing:border-box;",
    "  cursor:pointer;",
    "  color:var(--yw-text);",
    "  letter-spacing:var(--yw-letter-spacing);",
    "  text-transform:var(--yw-text-transform);",
    "  font-size:var(--yw-font-size);",
    "  font-weight:400;",
    "  font-family:var(--yw-font-family);",
    "  transition:transform 180ms ease-out;",
    "}",
    ".cta-shell{",
    "  display:block;",
    "  position:relative;",
    "  width:100%;",
    "  height:100%;",
    "  min-width:0;",
    "  min-height:0;",
    "  box-sizing:border-box;",
    "  padding:var(--yw-border);",
    "  background:var(--yw-primary);",
    "  clip-path:var(--yw-clip);",
    "}",
    ".cta-btn.shape-pill .cta-shell,",
    ".cta-btn.shape-pill .cta-face{",
    "  clip-path:none;",
    "  border-radius:var(--yw-radius);",
    "}",
    ".cta-face{",
    "  position:relative;",
    "  display:flex;",
    "  align-items:center;",
    "  justify-content:center;",
    "  gap:0.85em;",
    "  width:100%;",
    "  height:100%;",
    "  min-width:0;",
    "  min-height:0;",
    "  box-sizing:border-box;",
    "  padding:var(--yw-padding-block) var(--yw-padding-inline);",
    "  clip-path:var(--yw-clip);",
    "  overflow:hidden;",
    "  background:",
    "    linear-gradient(",
    "      color-mix(in srgb, #000 calc(100% - 18% * (1 - var(--yw-bg-solidity, 1))), var(--yw-primary)),",
    "      color-mix(in srgb, #000 calc(100% - 10% * (1 - var(--yw-bg-solidity, 1))), var(--yw-primary))",
    "    );",
    "}",
    ".cta-face::before{",
    "  content:\"\";",
    "  position:absolute;",
    "  inset:clamp(2px, 6cqh, 4px);",
    "  clip-path:var(--yw-clip);",
    "  border:1px solid color-mix(in srgb, var(--yw-primary) 28%, transparent);",
    "  opacity:0.55;",
    "  pointer-events:none;",
    "}",
    ".cta-btn.shape-pill .cta-face::before{",
    "  clip-path:none;",
    "  border-radius:calc(var(--yw-radius) - 4px);",
    "}",
    ".cta-face::after{",
    "  content:\"\";",
    "  position:absolute;",
    "  inset:0;",
    "  border-radius:inherit;",
    "  clip-path:inherit;",
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
    "  opacity:0;",
    "  pointer-events:none;",
    "  animation:none;",
    "}",
    ".cta-btn.worm-on .cta-face::after{",
    "  opacity:0.95;",
    "  animation:rotate-gradient 2.8s linear infinite;",
    "}",
    ".cta-btn.worm-js .cta-face::after{",
    "  animation:none !important;",
    "}",
    ".cta-btn-inner{",
    "  position:relative;",
    "  z-index:1;",
    "  display:inline-flex;",
    "  align-items:center;",
    "  justify-content:center;",
    "  gap:0.85em;",
    "  max-width:100%;",
    "  min-width:0;",
    "  will-change:transform;",
    "}",
    ".cta-label{",
    "  position:relative;",
    "  overflow:hidden;",
    "  min-width:0;",
    "  max-width:100%;",
    "}",
    ".cta-label-main,.cta-label-ghost{",
    "  display:block;",
    "  white-space:nowrap;",
    "  overflow:hidden;",
    "  text-overflow:ellipsis;",
    "}",
    ".cta-label-main{",
    "  text-shadow:",
    "    0 0 calc(0.35em * var(--yw-glow-strength)) color-mix(in srgb, var(--yw-primary) 70%, transparent),",
    "    0 0 calc(0.85em * var(--yw-glow-strength)) color-mix(in srgb, var(--yw-primary) 35%, transparent);",
    "  transition:text-shadow 200ms ease-out;",
    "}",
    ".cta-btn:hover .cta-label-main{",
    "  text-shadow:",
    "    0 0 calc(0.55em * var(--yw-glow-strength)) color-mix(in srgb, var(--yw-primary) 90%, transparent),",
    "    0 0 calc(1.2em * var(--yw-glow-strength)) color-mix(in srgb, var(--yw-primary) 55%, transparent),",
    "    0 0 calc(1.8em * var(--yw-glow-strength)) color-mix(in srgb, var(--yw-primary) 25%, transparent);",
    "}",
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
    "  width:1em;",
    "  height:1em;",
    "  border-radius:999px;",
    "  border:0.1em solid var(--yw-primary);",
    "  box-shadow:",
    "    0 0 0.5em color-mix(in srgb, var(--yw-primary) 80%, transparent),",
    "    0 0 1em color-mix(in srgb, var(--yw-primary) 35%, transparent);",
    "  position:relative;",
    "  flex:0 0 auto;",
    "  transition:box-shadow 200ms ease-out, transform 200ms ease-out;",
    "}",
    ".cta-icon::before{",
    "  content:\"\";",
    "  position:absolute;",
    "  inset:0.2em;",
    "  border-radius:inherit;",
    "  border:1px solid color-mix(in srgb, var(--yw-primary) 0%, transparent);",
    "  opacity:0;",
    "  transition:opacity 180ms ease-out, border-color 180ms ease-out;",
    "}",
    ".cta-btn:hover .cta-icon::before{",
    "  opacity:0.9;",
    "  border-color:color-mix(in srgb, var(--yw-primary) 70%, transparent);",
    "}",
    ".cta-icon::after{",
    "  content:\"\";",
    "  position:absolute;",
    "  top:50%;",
    "  left:50%;",
    "  width:0.22em;",
    "  height:0.22em;",
    "  border-radius:999px;",
    "  background:var(--yw-primary);",
    "  box-shadow:0 0 0.5em var(--yw-primary);",
    "  transform:translate(-50%,-50%);",
    "}",
    ".cta-btn:hover .cta-icon{",
    "  box-shadow:",
    "    0 0 0.6em color-mix(in srgb, var(--yw-primary) 95%, transparent),",
    "    0 0 1.2em color-mix(in srgb, var(--yw-primary) 55%, transparent);",
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
    "    rgba(255,255,255,.05) 45%,",
    "    color-mix(in srgb, var(--yw-primary) 45%, transparent) 50%,",
    "    rgba(255,255,255,.03) 55%,",
    "    transparent 100%);",
    "  opacity:0;",
    "  pointer-events:none;",
    "  mix-blend-mode:screen;",
    "  z-index:2;",
    "}",
    "@keyframes label-glitch{",
    " 0%,88%,100%{transform:translate(0,0);}",
    " 90%{transform:translate(calc(-1px * var(--yw-glitch-intensity, 1)), 0);}",
    " 92%{transform:translate(calc(1.5px * var(--yw-glitch-intensity, 1)), calc(-0.5px * var(--yw-glitch-intensity, 1)));}",
    " 94%{transform:translate(0, calc(1px * var(--yw-glitch-intensity, 1)));}",
    "}",
    "@keyframes ghost-glitch{",
    " 0%{opacity:0;transform:translate(0,0);clip-path:inset(0 0 40% 0);}",
    " 10%{opacity:calc(0.6 * var(--yw-glitch-intensity, 1));transform:translate(calc(-2px * var(--yw-glitch-intensity, 1)), calc(-1px * var(--yw-glitch-intensity, 1)));clip-path:inset(10% 0 55% 0);}",
    " 20%{opacity:calc(0.4 * var(--yw-glitch-intensity, 1));transform:translate(calc(2px * var(--yw-glitch-intensity, 1)), calc(1px * var(--yw-glitch-intensity, 1)));clip-path:inset(40% 0 25% 0);}",
    " 30%{opacity:calc(0.7 * var(--yw-glitch-intensity, 1));transform:translate(calc(-1px * var(--yw-glitch-intensity, 1)), 0);clip-path:inset(65% 0 5% 0);}",
    " 40%{opacity:calc(0.2 * var(--yw-glitch-intensity, 1));transform:translate(calc(1px * var(--yw-glitch-intensity, 1)), calc(-1px * var(--yw-glitch-intensity, 1)));clip-path:inset(15% 0 60% 0);}",
    " 50%{opacity:calc(0.5 * var(--yw-glitch-intensity, 1));transform:translate(calc(-1px * var(--yw-glitch-intensity, 1)), calc(1px * var(--yw-glitch-intensity, 1)));clip-path:inset(55% 0 15% 0);}",
    " 60%,100%{opacity:0;transform:translate(0,0);clip-path:inset(0 0 0 0);}",
    "}",
    "@keyframes scanline{",
    " 0%{opacity:0;transform:translateY(-120%);}",
    " 40%{opacity:calc(0.08 * var(--yw-glitch-intensity, 1));}",
    " 100%{opacity:0;transform:translateY(120%);}",
    "}",
    "@keyframes rotate-gradient{",
    " 0%{--gradient-angle:0deg;}",
    " 100%{--gradient-angle:360deg;}",
    "}",
    "@keyframes overload-jitter{",
    " 0%,100%{transform:translate(0,0);}",
    " 12%{transform:translate(calc(0.8px * var(--yw-glitch-intensity, 1)), calc(-0.5px * var(--yw-glitch-intensity, 1)));}",
    " 28%{transform:translate(calc(-0.7px * var(--yw-glitch-intensity, 1)), calc(0.55px * var(--yw-glitch-intensity, 1)));}",
    " 44%{transform:translate(calc(0.55px * var(--yw-glitch-intensity, 1)), calc(0.35px * var(--yw-glitch-intensity, 1)));}",
    " 60%{transform:translate(calc(-0.5px * var(--yw-glitch-intensity, 1)), calc(-0.6px * var(--yw-glitch-intensity, 1)));}",
    " 76%{transform:translate(calc(0.4px * var(--yw-glitch-intensity, 1)), calc(0.25px * var(--yw-glitch-intensity, 1)));}",
    " 90%{transform:translate(calc(-0.6px * var(--yw-glitch-intensity, 1)), calc(0.2px * var(--yw-glitch-intensity, 1)));}",
    "}",
    ".cta-btn.glitch-on .cta-label-main{animation:label-glitch 2.8s infinite;}",
    ".cta-btn.glitch-on .cta-label-ghost{animation:ghost-glitch 2.8s infinite;}",
    ".cta-btn.glitch-on .cta-scanline{animation:scanline 2.8s infinite;}",
    ".cta-btn.overload-on .cta-btn-inner{",
    "  animation:overload-jitter 0.13s steps(2, end) infinite;",
    "}",
    ".cta-btn.overload-on:hover .cta-btn-inner{",
    "  animation-duration:0.08s;",
    "}",
    ".cta-btn:active{transform:scale(0.995);}",
    ".cta-btn.no-shadow .cta-shell{background:color-mix(in srgb, var(--yw-primary) 70%, #333);}",
    ".cta-btn.no-icon .cta-icon{display:none;}",
    ".cta-btn.no-hover-glow:hover .cta-label-main{",
    "  text-shadow:",
    "    0 0 calc(6px * var(--yw-glow-strength)) color-mix(in srgb, var(--yw-primary) 70%, transparent),",
    "    0 0 calc(14px * var(--yw-glow-strength)) color-mix(in srgb, var(--yw-primary) 35%, transparent);",
    "}",
    "@media (prefers-reduced-motion:reduce){",
    "  .cta-btn.overload-on .cta-btn-inner,",
    "  .cta-btn.glitch-on .cta-label-main,",
    "  .cta-btn.glitch-on .cta-label-ghost,",
    "  .cta-btn.glitch-on .cta-scanline,",
    "  .cta-btn.worm-on .cta-face::after{animation:none !important;}",
    "}",
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
        "chamfer",
        "shape",
        "size-width",
        "size-height",
        "glitch",
        "worm",
        "shadow",
        "glitch-intensity",
        "icon",
        "solidity",
        "hover-glow",
        "overload"
      ];
    }

    constructor() {
      super();
      this._btn = null;
      this._face = null;
      this._wormRafId = 0;
      this._wormUseJs = false;
      this._wormProbeT1 = 0;
      this._wormProbeT2 = 0;
      this._wormStartTs = 0;
      this.attachShadow({ mode: "open" });

      var style = document.createElement("style");
      style.textContent = STYLES;
      this.shadowRoot.appendChild(style);

      var glow = document.createElement("span");
      glow.className = "cta-glow";

      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "cta-btn overload-on";
      btn.innerHTML =
        '<span class="cta-shell">' +
        '  <span class="cta-face">' +
        '    <span class="cta-btn-inner">' +
        '      <span class="cta-label">' +
        '        <span class="cta-label-main"></span>' +
        '        <span class="cta-label-ghost" aria-hidden="true"></span>' +
        "      </span>" +
        '      <span class="cta-icon" aria-hidden="true"></span>' +
        "    </span>" +
        '    <span class="cta-scanline" aria-hidden="true"></span>' +
        "  </span>" +
        "</span>";
      glow.appendChild(btn);
      this.shadowRoot.appendChild(glow);

      this._btn = btn;
      this._face = btn.querySelector(".cta-face");
    }

    connectedCallback() {
      this.classList.add("shadow-on", "hover-glow-on");
      this._applyAttributesToCSS();
      this._updateContent();
      this._bindClick();
    }

    disconnectedCallback() {
      this._stopWormJs();
      this._clearWormProbe();
    }

    attributeChangedCallback() {
      if (!this.shadowRoot) return;
      this._applyAttributesToCSS();
      this._updateContent();
      this._bindClick();
    }

    _isOn(val) {
      if (val == null || val === "") return true;
      var v = String(val).toLowerCase().trim();
      return v === "on" || v === "true" || v === "1" || v === "yes";
    }

    _isOff(val) {
      if (val == null || val === "") return false;
      var v = String(val).toLowerCase().trim();
      return v === "off" || v === "false" || v === "0" || v === "no";
    }

    // Wix a veces manda solo el número (ej. "204"). CSS necesita unidad → "204px".
    _cssSize(val) {
      if (val == null) return "";
      var v = String(val).trim();
      if (!v) return "";
      if (/^-?\d+(\.\d+)?$/.test(v)) return v + "px";
      return v;
    }

    _applyAttributesToCSS() {
      var root = this.shadowRoot.host;
      if (!root) return;

      var primary = this.getAttribute("primary-color");
      if (primary) root.style.setProperty("--yw-primary", primary);

      var textColor = this.getAttribute("text-color");
      if (textColor) {
        root.style.setProperty("--yw-text", textColor);
      } else {
        root.style.removeProperty("--yw-text");
      }

      var fontFamily = this.getAttribute("font-family");
      if (fontFamily) root.style.setProperty("--yw-font-family", fontFamily);

      var letterSpacing = this.getAttribute("letter-spacing");
      if (letterSpacing) root.style.setProperty("--yw-letter-spacing", this._cssSize(letterSpacing));

      var textTransform = this.getAttribute("text-transform");
      if (textTransform) root.style.setProperty("--yw-text-transform", textTransform);

      var glowStrength = this.getAttribute("glow-strength");
      if (glowStrength) root.style.setProperty("--yw-glow-strength", glowStrength);

      var radius = this.getAttribute("radius");
      if (radius) root.style.setProperty("--yw-radius", this._cssSize(radius));

      var chamfer = this.getAttribute("chamfer");
      if (chamfer) root.style.setProperty("--yw-chamfer", this._cssSize(chamfer));

      var padding = this.getAttribute("padding");
      if (padding) {
        var parts = padding.split(/\s+/).map((p) => this._cssSize(p));
        if (parts.length === 1) {
          root.style.setProperty("--yw-padding-block", parts[0]);
          root.style.setProperty("--yw-padding-inline", parts[0]);
        } else if (parts.length === 2) {
          root.style.setProperty("--yw-padding-block", parts[0]);
          root.style.setProperty("--yw-padding-inline", parts[1]);
        }
      }

      var sizeWidth = this.getAttribute("size-width");
      if (sizeWidth != null && sizeWidth !== "") {
        var w = this._cssSize(sizeWidth);
        root.style.setProperty("--yw-size-width", w);
        root.style.setProperty("width", w, "important");
      } else {
        root.style.setProperty("--yw-size-width", "100%");
        root.style.removeProperty("width");
      }
      var sizeHeight = this.getAttribute("size-height");
      if (sizeHeight != null && sizeHeight !== "") {
        var h = this._cssSize(sizeHeight);
        root.style.setProperty("--yw-size-height", h);
        root.style.setProperty("height", h, "important");
        root.style.setProperty("min-height", h, "important");
      } else {
        root.style.setProperty("--yw-size-height", "100%");
        root.style.removeProperty("height");
        root.style.removeProperty("min-height");
      }

      var fontSize = this.getAttribute("font-size");
      if (fontSize) root.style.setProperty("--yw-font-size", this._cssSize(fontSize));

      var glitchIntensity = this.getAttribute("glitch-intensity");
      if (glitchIntensity != null && glitchIntensity !== "") root.style.setProperty("--yw-glitch-intensity", glitchIntensity);

      var solidity = this.getAttribute("solidity");
      if (solidity != null && solidity !== "") root.style.setProperty("--yw-bg-solidity", solidity);

      if (!this._btn) return;

      var shape = (this.getAttribute("shape") || "chamfer").toLowerCase().trim();
      if (shape === "pill" || shape === "round" || shape === "rounded") {
        this._btn.classList.add("shape-pill");
      } else {
        this._btn.classList.remove("shape-pill");
      }

      // glitch: default OFF (solo si se pide explícitamente on)
      if (this.hasAttribute("glitch") && this._isOn(this.getAttribute("glitch"))) {
        this._btn.classList.add("glitch-on");
      } else {
        this._btn.classList.remove("glitch-on");
      }

      // worm: default OFF
      if (this.hasAttribute("worm") && this._isOn(this.getAttribute("worm"))) {
        this._btn.classList.add("worm-on");
        this._ensureWormMoves();
      } else {
        this._btn.classList.remove("worm-on");
        this._stopWormJs();
        this._clearWormProbe();
      }

      if (this._isOff(this.getAttribute("shadow"))) {
        this._btn.classList.add("no-shadow");
        this.classList.remove("shadow-on");
      } else {
        this._btn.classList.remove("no-shadow");
        this.classList.add("shadow-on");
      }
      if (this._isOff(this.getAttribute("icon"))) {
        this._btn.classList.add("no-icon");
      } else {
        this._btn.classList.remove("no-icon");
      }
      if (this._isOff(this.getAttribute("hover-glow"))) {
        this._btn.classList.add("no-hover-glow");
        this.classList.remove("hover-glow-on");
      } else {
        this._btn.classList.remove("no-hover-glow");
        this.classList.add("hover-glow-on");
      }
      if (this._isOn(this.getAttribute("overload"))) {
        this._btn.classList.add("overload-on");
      } else {
        this._btn.classList.remove("overload-on");
      }
    }

    _ensureWormMoves() {
      if (!this._btn || !this._face) return;
      if (this._wormUseJs) return;

      this._clearWormProbe();

      var face = this._face;
      var readAngle = function () {
        try {
          return (getComputedStyle(face).getPropertyValue("--gradient-angle") || "").trim();
        } catch (e) {
          return "";
        }
      };

      var a1 = "";
      var a2 = "";
      this._wormProbeT1 = window.setTimeout(() => {
        a1 = readAngle();
        this._wormProbeT2 = window.setTimeout(() => {
          a2 = readAngle();
          if (a1 && a2 && a1 === a2) this._startWormJs();
          if (!a1 && !a2) this._startWormJs();
        }, 260);
      }, 160);
    }

    _clearWormProbe() {
      if (this._wormProbeT1) window.clearTimeout(this._wormProbeT1);
      if (this._wormProbeT2) window.clearTimeout(this._wormProbeT2);
      this._wormProbeT1 = 0;
      this._wormProbeT2 = 0;
    }

    _startWormJs() {
      if (!this._btn || !this._face) return;
      if (this._wormRafId) return;
      this._wormUseJs = true;
      this._wormStartTs = 0;
      this._btn.classList.add("worm-js");

      var face = this._face;
      var durationMs = 2800;

      var tick = (ts) => {
        if (!this._btn || !this._btn.classList.contains("worm-on")) {
          this._stopWormJs();
          return;
        }
        if (!this._wormStartTs) this._wormStartTs = ts;
        var t = (ts - this._wormStartTs) % durationMs;
        var angle = (t / durationMs) * 360;
        face.style.setProperty("--gradient-angle", angle.toFixed(2) + "deg");
        this._wormRafId = window.requestAnimationFrame(tick);
      };

      this._wormRafId = window.requestAnimationFrame(tick);
    }

    _stopWormJs() {
      if (this._wormRafId) window.cancelAnimationFrame(this._wormRafId);
      this._wormRafId = 0;
      this._wormUseJs = false;
      this._wormStartTs = 0;
      if (this._btn) this._btn.classList.remove("worm-js");
      if (this._face) this._face.style.removeProperty("--gradient-angle");
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
