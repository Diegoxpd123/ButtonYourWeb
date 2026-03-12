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
  - Default: `15px`  
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

### Dimensiones del botón

- **size-width**  
  - Qué hace: Ancho del botón.  
  - Default: `auto` (el botón se adapta al contenido).  
  - Ejemplo: `size-width="280px"` o `size-width="100%"`

- **size-height**  
  - Qué hace: Alto del botón.  
  - Default: `auto` (altura mínima por contenido y padding).  
  - Ejemplo: `size-height="48px"`

- **padding**  
  - Qué hace: Padding interno del botón.  
  - Default: `16px 56px`.  
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
  - Activar: `"on"`, `"true"`, `"1"`, `"yes"` (default: activado).  
  - Desactivar: `"off"`, `"false"`, `"0"`, `"no"`  
  - Ejemplo: `glitch="on"` o `glitch="off"`

- **glitch-intensity**  
  - Qué hace: Intensidad del efecto glitch (desplazamiento del texto, opacidad del ghost, scanline).  
  - Default: `"1"`. Valores mayores (ej. `"1.5"`, `"2"`) aumentan la intensidad.  
  - Ejemplo: `glitch-intensity="2"`

- **worm**  
  - Qué hace: Activa/desactiva el “gusano” de energía que recorre el borde.  
  - Activar: `"on"`, `"true"`, `"1"`, `"yes"` (default: activado).  
  - Desactivar: `"off"`, `"false"`, `"0"`, `"no"`  
  - Ejemplo: `worm="on"` o `worm="off"`

- **shadow**  
  - Qué hace: Muestra u oculta la sombra/glow del botón (y del icono).  
  - Activar: `"on"`, `"true"`, `"1"`, `"yes"` (default: activado).  
  - Desactivar: `"off"`, `"false"`, `"0"`, `"no"` → sin sombra ni glow.  
  - Ejemplo: `shadow="off"` para botón sin sombra.

- **icon**  
  - Qué hace: Muestra u oculta el círculo (icono) junto al texto del botón.  
  - Activar: `"on"`, `"true"`, `"1"`, `"yes"` (default: visible).  
  - Desactivar: `"off"`, `"false"`, `"0"`, `"no"` → solo texto, sin círculo.  
  - Ejemplo: `icon="off"` para quitar el círculo.

- **solidity**  
  - Qué hace: Solidez del fondo del botón (reduce la transparencia).  
  - Valor: número entre `0` y `1`. `0` = fondo más transparente (default). `1` = fondo más sólido/opaco.  
  - Ejemplo: `solidity="0.5"` o `solidity="1"` para un color más lleno.

- **hover-glow**  
  - Qué hace: Activa/desactiva el glow extra que aparece al pasar el mouse (hover).  
  - Activar: `"on"`, `"true"`, `"1"`, `"yes"` (default: activado).  
  - Desactivar: `"off"`, `"false"`, `"0"`, `"no"` → sin halo extra en hover.  
  - Ejemplo: `hover-glow="off"`

---

## Ejemplos de uso

### 1. Configuración base (desktop, todo por defecto)

```html
<yourweb-initiate
  label="INITIATE"
  href="https://yourweb.com/initiate">
</yourweb-initiate>
```

### 2. Botón con dimensiones fijas y glitch activo

```html
<yourweb-initiate
  label="INITIATE"
  href="/initiate"
  size-width="260px"
  size-height="52px"
  font-family="IBM Plex Mono, system-ui, -apple-system, sans-serif"
  primary-color="#A6D40D"
  glow-strength="0.9"
  glitch="on"
  worm="on">
</yourweb-initiate>
```

### 3. Sin glitch ni gusano, dimensiones personalizadas

```html
<yourweb-initiate
  label="INITIATE"
  href="https://yourweb.com/initiate"
  size-width="100%"
  size-height="48px"
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
     - `size-width`, `size-height`, `padding`, `radius`
     - `font-family`, `font-size`, `letter-spacing`, `text-transform`
     - `glitch`, `glitch-intensity`, `worm`, `shadow`, `glow-strength`, `icon`, `solidity`.

