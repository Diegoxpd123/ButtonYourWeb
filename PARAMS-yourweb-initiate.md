# YOURWEB INITIATE – Parámetros del Custom Element

Tag del elemento:

```html
<yourweb-initiate></yourweb-initiate>
```

URL de script (ejemplo cuando lo subamos a GitHub/jsDelivr):

```text
https://cdn.jsdelivr.net/gh/Diegoxpd123/ButtonYourWeb@main/yourweb-initiate.js
```

---

## Atributos disponibles

Todos los atributos son **opcionales**; si no se indican, se usan valores por defecto pensados para desktop.

### Texto y navegación

- **label**  
  - Qué hace: Texto del botón.  
  - Default: `"INITIATE"`  
  - Ejemplo: `label="INITIATE"`

- **href**  
  - Qué hace: URL a la que redirige al hacer clic.  
  - Default: `"#"` (no navega)  
  - Acepta:
    - URL completa: `https://yourweb.com/initiate`
    - Dominio sin protocolo: `yourweb.com/initiate` (se fuerza a `https://`)
    - Ruta interna: `/initiate` (relativa al sitio actual)
  - Ejemplo: `href="https://yourweb.com/initiate"`

### Tipografía

- **font-family**  
  - Qué hace: Fuente CSS.  
  - Default: `"IBM Plex Mono", system-ui, -apple-system, sans-serif`  
  - Ejemplo:  
    `font-family="IBM Plex Mono, system-ui, -apple-system, sans-serif"`

- **font-size**  
  - Qué hace: Tamaño de letra.  
  - Default: depende de `size` (15px desktop, 14px tablet, 13px mobile).  
  - Ejemplo: `font-size="16px"`

- **letter-spacing**  
  - Qué hace: Tracking (espaciado entre letras).  
  - Default: `0.22em`  
  - Ejemplo: `letter-spacing="0.18em"`

- **text-transform**  
  - Qué hace: Transformación de texto.  
  - Default: `"uppercase"`  
  - Ejemplo: `text-transform="none"`

### Colores

- **primary-color**  
  - Qué hace: Color principal del botón, bordes y efectos.  
  - Default: `#A6D40D` (YOURWEB)  
  - Ejemplo: `primary-color="#A6D40D"`

- **text-color**  
  - Qué hace: Color del texto del botón.  
  - Default: `#f5f5f5`  
  - Ejemplo: `text-color="#FFFFFF"`

### Glow / sombras

- **glow-strength**  
  - Qué hace: Intensidad del glow general (box-shadow).  
  - Rango recomendado: `0.3`–`1.5`  
  - Default: `"1"`  
  - Ejemplo: `glow-strength="1.2"`

### Tamaño / responsive

- **size**  
  - Qué hace: Preset responsive de paddings y font-size.  
  - Valores:
    - `"mobile"`  → fuente ligeramente más pequeña, padding compacto.
    - `"tablet"`  → intermedio.
    - `"desktop"` → más grande (default).  
  - Ejemplo: `size="mobile"`

- **padding**  
  - Qué hace: Override manual de padding del botón.  
  - Default: según `size`.  
  - Formatos:
    - `"16px"` → aplica igual para vertical y horizontal.
    - `"16px 56px"` → `padding-block` y `padding-inline`.  
  - Ejemplo: `padding="14px 48px"`

- **radius**  
  - Qué hace: Border-radius del botón (forma de pastilla vs. más cuadrado).  
  - Default: `999px` (pastilla).  
  - Ejemplo: `radius="20px"`

### Animaciones / efectos

- **glitch**  
  - Qué hace: Activa/desactiva el glitch del texto y la scanline.  
  - Valores: `"on"` (default) | `"off"`  
  - Ejemplo: `glitch="off"`

- **worm**  
  - Qué hace: Activa/desactiva el “gusano” de energía que recorre el borde.  
  - Valores: `"on"` (default) | `"off"`  
  - Ejemplo: `worm="off"`

---

## Ejemplos de uso

### 1. Configuración base (desktop, todo por defecto)

```html
<yourweb-initiate
  label="INITIATE"
  href="https://yourweb.com/initiate">
</yourweb-initiate>
```

### 2. Versión mobile compacta, glitch y gusano activos

```html
<yourweb-initiate
  label="INITIATE"
  href="/initiate"
  size="mobile"
  font-family="IBM Plex Mono, system-ui, -apple-system, sans-serif"
  primary-color="#A6D40D"
  glow-strength="0.9"
  glitch="on"
  worm="on">
</yourweb-initiate>
```

### 3. Versión tablet con menos glitch y sin gusano

```html
<yourweb-initiate
  label="INITIATE"
  href="https://yourweb.com/initiate"
  size="tablet"
  font-size="14px"
  padding="14px 44px"
  primary-color="#A6D40D"
  text-color="#FFFFFF"
  glow-strength="0.7"
  glitch="off"
  worm="off">
</yourweb-initiate>
```

---

## Resumen rápido para Wix Custom Element

1. Subir `yourweb-initiate.js` al repo `ButtonYourWeb` y servirlo por HTTPS (jsDelivr o GitHub Pages).
2. En Wix Studio:
   - Añadir Custom Element.
   - **Server URL**: URL pública de `yourweb-initiate.js`.
   - **Tag name**: `yourweb-initiate`.
3. En el panel del elemento:
   - Usar **Set Attributes** para ajustar:
     - `label`, `href`
     - `primary-color`, `text-color`
     - `size`, `padding`, `radius`
     - `font-family`, `font-size`, `letter-spacing`, `text-transform`
     - `glitch`, `worm`, `glow-strength`.

