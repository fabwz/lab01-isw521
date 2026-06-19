# Project Requirements — MotorSensor Landing Page

> **Curso:** ISW-521 Programación en Ambiente Web I — UTN  
> **Laboratorio:** #1 Landing Page Responsiva  
> **Tema:** MotorSensor — tienda especializada en repuestos automotrices, Costa Rica

---

## 1. Objetivo del proyecto

Construir una landing page responsiva, accesible y funcional para MotorSensor, aplicando de forma deliberada HTML5 semántico, CSS3 nativo, JavaScript Vanilla y la API de Web Storage. Cada decisión técnica debe estar justificada y ser explicable.

---

## 2. Requerimientos técnicos obligatorios

Todos son de cumplimiento obligatorio. La ausencia de cualquiera afecta directamente la entrega.

### 2.1 HTML5 semántico

- El documento debe declararse con `<!DOCTYPE html>`.
- Usar etiquetas semánticas donde correspondan: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
- El código debe ser válido según W3C (verificar en validator.w3.org).
- No usar tablas HTML para definir el layout.

### 2.2 CSS3 nativo — Flexbox y Grid

- Todo el estilo visual en archivos `.css` externos. Sin estilos inline salvo excepciones justificadas.
- **Flexbox** debe usarse en al menos un componente de layout (ej: navegación, tarjetas de productos, lista de diferenciadores).
- **CSS Grid** debe usarse en al menos un componente de layout (ej: cuadrícula de categorías, sección de sucursales, galería de marcas).
- La responsividad se logra exclusivamente con `@media`. Mínimo dos breakpoints funcionales.
- Prohibido usar frameworks CSS externos: Bootstrap, Tailwind, Foundation, Bulma u equivalentes.

### 2.3 Accesibilidad Web — WCAG 2.1 Nivel A

- Todas las imágenes con atributo `alt` descriptivo. Solo vacío en imágenes puramente decorativas.
- Elementos interactivos no semánticos deben llevar atributos ARIA: `role`, `aria-label`, `aria-describedby` según corresponda.
- Contraste mínimo texto/fondo: **4.5:1** para texto normal.
- La página debe ser navegable completamente con teclado. El indicador `:focus` debe ser visible.

### 2.4 Web Storage

- Implementar al menos **una funcionalidad** usando `localStorage` o `sessionStorage`.
- El dato almacenado debe recuperarse y aplicarse correctamente al recargar la página, demostrando persistencia real.
- Implementación en JavaScript nativo. Sin librerías externas.
- Aplicación en este proyecto: guardar la preferencia de modo oscuro/claro del usuario.

---

## 3. Restricciones técnicas

- Sin frameworks CSS (Bootstrap, Tailwind, etc.).
- Sin frameworks JavaScript (React, Vue, Angular, etc.).
- Sin preprocesadores CSS (SASS, LESS).
- Sin librerías externas de JS salvo fuentes o iconos via CDN.
- Todo el layout y responsividad debe resolverse con CSS3 nativo.
- JavaScript solo para interacciones y Web Storage.

---

## 4. Condiciones de entrega

- Entrega exclusivamente a través del **repositorio GitHub del portafolio del curso**.
- El proyecto debe estar en una carpeta identificada dentro del repositorio (ej: `/laboratorio-01/`).
- El archivo principal debe llamarse `index.html`.
- CSS en `/css/`, JS en `/js/`, imágenes en `/assets/images/`.
- El repositorio debe ser público o tener al docente como colaborador.
- No se consideran cambios posteriores al cierre de entrega registrado por GitHub.

---

## 5. Contexto del proyecto

| Campo | Detalle |
|-------|---------|
| Negocio | MotorSensor — repuestos automotrices |
| País | Costa Rica |
| Canal principal | WhatsApp |
| Sucursales | San Carlos, Pérez Zeledón, Naranjo |
| Productos principales | Sensores, bobinas, inyectores, motores completos |
| Diferenciador clave | Diagnóstico computarizado gratuito al adquirir repuestos |

La información completa del negocio está en `context/business-context.md`.

---

## 6. Decisiones técnicas del proyecto

| Decisión | Justificación |
|----------|---------------|
| Flexbox en navegación y listas | Distribución lineal de elementos en una sola dimensión |
| CSS Grid en productos y sucursales | Distribución bidimensional de tarjetas con control de columnas |
| `localStorage` para modo oscuro/claro | Persiste la preferencia visual del usuario entre sesiones |
| Mobile first | La audiencia objetivo usa principalmente dispositivos móviles |
| Variables CSS en archivo separado | Centraliza el sistema de diseño y facilita cambios globales |
| Un solo `main.js` | El alcance del proyecto no justifica modularización |
