# ButtonYourWeb – INITIATE CTA Custom Element

Botón CTA `INITIATE` con:

- Borde animado tipo “gusano” alrededor del contorno.
- Glitch futurista continuo sobre el texto + scanline vertical.
- Totalmente parametrizable vía atributos HTML para usarlo como Custom Element en Wix.

Archivos:

- `yourweb-initiate.js` → Custom Element (`<yourweb-initiate>`).
- `PARAMS-yourweb-initiate.md` → Documentación de todos los parámetros con ejemplos.

---

## 1. Uso básico en HTML

```html
<script src="yourweb-initiate.js" defer></script>

<yourweb-initiate
  label="INITIATE"
  href="https://yourweb.com/initiate">
</yourweb-initiate>
```

Para más opciones ver `PARAMS-yourweb-initiate.md`.

---

## 2. Atributos principales

Algunos de los más importantes (todos opcionales):

- `label` → Texto del botón.
- `href` → URL destino (absoluta, dominio o ruta interna).
- `primary-color` → Color principal (ej. `#A6D40D`).
- `text-color` → Color del texto.
- `font-family`, `font-size`, `letter-spacing`, `text-transform`.
- `size` → `mobile` | `tablet` | `desktop`.
- `padding`, `radius`, `glow-strength`.
- `glitch` → `on` / `off`.
- `worm` → `on` / `off` (gusano del borde).

Ver detalles en `PARAMS-yourweb-initiate.md`.

---

## 3. Integración en Wix como Custom Element

### 3.1. Subir el script y obtener la URL

1. Subir este repo a GitHub (rama `main`).
2. Usar **GitHub Pages** o **jsDelivr** para obtener una URL HTTPS pública, por ejemplo:

```text
https://cdn.jsdelivr.net/gh/Diegoxpd123/ButtonYourWeb@main/yourweb-initiate.js
```

o

```text
https://diegoxpd123.github.io/ButtonYourWeb/yourweb-initiate.js
```

### 3.2. Configurar el Custom Element en Wix Studio

1. En el editor: **Add** → **Embed** → **Custom Element**.
2. Arrastrar el Custom Element a la página.
3. Con el elemento seleccionado → **Choose Source**:
   - **Server URL**: URL pública de `yourweb-initiate.js`.
   - **Tag name**: `yourweb-initiate`.

### 3.3. Pasar parámetros desde Wix

Con el Custom Element seleccionado:

1. Clic en **Set Attributes**.
2. Añadir atributos como:

   - `label` = `INITIATE`
   - `href` = `https://yourweb.com/initiate`
   - `primary-color` = `#A6D40D`
   - `size` = `desktop` / `tablet` / `mobile`
   - `glitch` = `on`
   - `worm` = `on`

También puedes usar Velo:

```js
$w.onReady(function () {
  const btn = $w('#customElement1'); // id del Custom Element
  btn.setAttribute('label', 'INITIATE');
  btn.setAttribute('href', 'https://yourweb.com/initiate');
  btn.setAttribute('primary-color', '#A6D40D');
  btn.setAttribute('size', 'desktop');
});
```

Con esto, puedes controlar cada detalle del botón directamente desde Wix sin tocar el JS.

