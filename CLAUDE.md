# CLAUDE.md — MotorSensor Landing Page

> Este archivo contiene instrucciones para cualquier agente de IA que trabaje en este repositorio. Léelo completamente antes de escribir o modificar cualquier archivo.

---

## 1. Descripción del proyecto

MotorSensor es una tienda especializada en repuestos automotrices con tres sucursales en Costa Rica. Este repositorio contiene una **landing page académica/profesional** desarrollada como Laboratorio #1 del curso ISW-521 de la UTN. El stack es exclusivamente HTML5, CSS3 y JavaScript Vanilla.

---

## 2. Stack tecnológico

### Permitido

- HTML5 semántico.
- CSS3 puro con variables CSS (`--variables`), Flexbox y Grid.
- JavaScript Vanilla (ES6+).
- Fuentes e iconos via CDN (Google Fonts, Fontshare, Lucide).
- `localStorage` o `sessionStorage` (obligatorio en este proyecto).

### No permitido

- Frameworks CSS (Bootstrap, Tailwind, Foundation, Bulma, etc.).
- Frameworks JavaScript (React, Vue, Angular, etc.).
- Preprocesadores CSS (SASS, LESS).
- Librerías JS externas más allá de fuentes e iconos CDN.
- Build tools (Webpack, Vite, Parcel).

---

## 3. Estructura del repositorio

```
laboratorio-01/
├── index.html
├── README.md
├── CLAUDE.md
├── .gitignore
├── assets/
│   ├── images/
│   │   ├── brand/
│   │   ├── products/
│   │   └── content/
│   └── icons/
├── css/
│   ├── style.css
│   └── variables.css
├── js/
│   └── main.js
└── context/
    ├── business-context.md
    ├── project-requirements.md
    ├── ux-strategy.md
    ├── design-system.md
    └── technical-structure.md
```

### Reglas de estructura

- No crear carpetas adicionales sin justificación real.
- No crear subcarpetas dentro de `/js/`.
- No crear archivos CSS adicionales más allá de `style.css` y `variables.css`.
- La raíz debe mantenerse limpia.

---

## 4. Archivos de referencia

Antes de implementar cualquier cosa, consultar:

| Archivo | Contenido |
|---------|-----------|
| `context/business-context.md` | Información del negocio, productos, ubicaciones, contacto |
| `context/project-requirements.md` | Requerimientos técnicos obligatorios del laboratorio |
| `context/ux-strategy.md` | Estructura de la landing, flujo del usuario, secciones |
| `context/design-system.md` | Paleta de colores, tipografía, componentes, reglas visuales |
| `context/technical-structure.md` | Estructura de carpetas y criterios técnicos del proyecto |

---

## 5. Información clave del negocio

### Contacto

| Sucursal | WhatsApp |
|----------|----------|
| San Carlos | +506 8447-8000 |
| Pérez Zeledón | +506 8440-8000 |
| Naranjo | +506 8443-8000 |
| Correo | motorsensorcr@gmail.com |

### Horarios

- Lunes a viernes: 8:00 AM – 5:00 PM
- Sábados: 8:00 AM – 12:00 PM
- Domingos: cerrado

### Redes sociales

- Facebook: https://www.facebook.com/p/Motorsensor-100063665601663/
- Instagram: https://www.instagram.com/motor.sensor/

---

## 6. Requerimientos técnicos obligatorios

Estos son los cuatro pilares que debe cumplir el código. Son requisitos del enunciado académico, no sugerencias.

### HTML5 semántico

- `<!DOCTYPE html>` al inicio.
- Usar `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>` donde correspondan semánticamente.
- Código válido según W3C.
- Sin tablas para layout.

### CSS3 — Flexbox y Grid obligatorios

- **Flexbox** en al menos un componente: la barra de navegación es el candidato natural. También aplicable en tarjetas o listas de diferenciadores.
- **CSS Grid** en al menos un componente: la cuadrícula de categorías de productos y la sección de sucursales son los candidatos naturales.
- Mínimo **dos breakpoints** con `@media`.
- Sin frameworks CSS externos.

### Accesibilidad WCAG 2.1 Nivel A

- `alt` descriptivo en todas las imágenes con contenido. `alt=""` solo en decorativas.
- `aria-label` en botones de icono o elementos interactivos sin texto visible.
- Contraste mínimo 4.5:1 para texto normal.
- Navegación completa con teclado. `:focus` visible en todos los elementos interactivos.

### Web Storage — obligatorio

- Implementar `localStorage` para guardar al menos una preferencia del usuario.
- El dato almacenado debe recuperarse y aplicarse correctamente al recargar la página.
- Sin errores en consola relacionados con Web Storage.

---

## 7. Sistema de diseño resumido

### Paleta de colores

| Variable | Valor | Uso |
|----------|-------|-----|
| `--color-primary` | `#E5392B` | Botones CTA, acento principal |
| `--color-dark` | `#111111` | Hero, footer, secciones oscuras |
| `--color-dark-2` | `#1E1E1E` | Tarjetas y paneles |
| `--color-gray` | `#6B7280` | Texto secundario |
| `--color-light` | `#F7F7F7` | Fondo general claro |
| `--color-white` | `#FFFFFF` | Texto sobre fondos oscuros |
| `--color-success` | `#16A34A` | Indicadores de éxito, WhatsApp |

### Tipografía

- Títulos: Montserrat, Poppins o Sora.
- Cuerpo: Inter, Roboto o Source Sans 3.
- Máximo dos familias tipográficas. Cuerpo mínimo 16px.

---

## 8. Reglas de HTML

- Un solo `<h1>` por página.
- Jerarquía de encabezados sin saltar niveles.
- Cada `<img>` con `alt`, `width`, `height` y `loading="lazy"`.
- Links externos con `target="_blank" rel="noopener noreferrer"`.
- Formularios con `<label>` asociado a cada `<input>`.

---

## 9. Reglas de CSS

- Valores de color usando variables definidas en `variables.css`.
- Diseño **mobile first**: estilos base para móvil, `@media (min-width: ...)` para escalar.
- Breakpoints recomendados: `768px` (tablet) y `1024px` (desktop).
- Sin `!important` salvo excepción documentada.
- Sin estilos inline salvo excepciones justificadas.
- Tipografía con `rem`, no `px` fijo.

---

## 10. Reglas de JavaScript

- Solo Vanilla ES6+.
- Todo en `main.js`. Sin múltiples archivos JS.
- Sin `onclick=""` en el HTML. Usar `addEventListener` desde `main.js`.
- Script cargado con `defer` o al final del `<body>`.
- Sin errores en consola del navegador.

---

## 11. Secciones de la landing

1. **Header / Navegación** — logo, menú (Flexbox), botón de contacto.
2. **Hero** — propuesta de valor, CTA a WhatsApp, imagen de fondo.
3. **Problema / Solución** — síntomas comunes y cómo MotorSensor los resuelve.
4. **Productos** — cuadrícula (Grid) con categorías: sensores, bobinas, inyectores, motores.
5. **Diferenciadores** — diagnóstico gratuito, asesoría, envíos, presupuesto flexible.
6. **Marcas compatibles** — Toyota, Hyundai, Nissan, Kia, Suzuki y más.
7. **Sucursales y contacto** — tres sucursales con WhatsApp y horarios (Grid).
8. **FAQ** — preguntas frecuentes con acordeón JS.
9. **Footer** — contacto, redes sociales, créditos.

### Botón de WhatsApp flotante

- Botón fijo en esquina inferior derecha en todo momento.
- Enlace: `https://wa.me/506XXXXXXXX`.
- `aria-label="Contactar por WhatsApp"`.

---

## 12. Accesibilidad — checklist mínimo

- [ ] `alt` en todas las imágenes con contenido.
- [ ] `aria-label` en botón flotante de WhatsApp.
- [ ] `aria-label` en botones del menú móvil.
- [ ] `:focus` visible en todos los elementos interactivos.
- [ ] Contraste 4.5:1 verificado en combinaciones texto/fondo.
- [ ] Página navegable completamente con teclado.

---

## 13. Lo que NO debes hacer

- No usar `Bootstrap`, `Tailwind` ni ningún framework CSS.
- No crear archivos ambiguos: `nuevo.css`, `final2.js`, `prueba.html`.
- No agregar carpetas que no existen en la estructura definida.
- No inventar información del negocio. Usar solo lo que está en `context/`.
- No modificar archivos en `context/` ni `docs/` salvo indicación explícita.
- No dejar `TODO` ni placeholders sin resolver en el código entregado.
- No usar tablas HTML para layout.
- No dejar errores en consola del navegador.

---

## 14. Decisiones técnicas clave

| Decisión | Justificación |
|----------|---------------|
| Flexbox en navegación | Distribución lineal horizontal de elementos en una dimensión |
| CSS Grid en productos y sucursales | Control bidimensional de columnas y filas para tarjetas |
| `localStorage` para persistencia | Cumple el requisito de Web Storage con persistencia real entre sesiones |
| Mobile first | Audiencia móvil prioritaria; escalar hacia arriba es más limpio |
| Variables CSS en archivo separado | Cambios globales de diseño desde un solo punto |
| Un solo `main.js` | Proyecto pequeño; la modularización añadiría complejidad innecesaria |
