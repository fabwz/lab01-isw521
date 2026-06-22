# 🏎️ MotorSensor Landing Page — Rediseño Académico 

> Landing page profesional para una tienda de repuestos automotrices en Costa Rica, desarrollada como proyecto académico universitario.

---

## ⚠️ AVISO LEGAL

**Este es un proyecto estrictamente académico** desarrollado para un laboratorio universitario en la **Universidad Técnica Nacional (UTN), sede San Carlos**. Este repositorio **NO** es el sitio web oficial de **MotorSensor** ni está afiliado, asociado, autorizado o respaldado por dicha empresa. Todos los logotipos, marcas comerciales y nombres registrados pertenecen a sus respectivos dueños y se utilizan aquí únicamente con fines educativos y de demostración de habilidades de desarrollo web.

---

## 📋 Descripción

MotorSensor es una tienda especializada en repuestos automotrices (sensores, bobinas, inyectores y motores) con tres sucursales en Costa Rica. Este proyecto consiste en el diseño y desarrollo de una **landing page responsiva** que presenta los productos, servicios y puntos de contacto del negocio.

El sitio fue construido exclusivamente con **HTML5 semántico, CSS3 puro y JavaScript Vanilla**, sin frameworks ni librerías externas, cumpliendo los requerimientos técnicos del laboratorio.

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| **HTML5** | Estructura semántica (`header`, `nav`, `main`, `section`, `article`, `footer`) |
| **CSS3** | Estilos con variables CSS, Flexbox, CSS Grid y diseño mobile-first |
| **JavaScript ES6+** | Interactividad: menú móvil, acordeón FAQ, tema claro/oscuro, formulario a WhatsApp |
| **Google Fonts** | Tipografías Montserrat (títulos) e Inter (cuerpo) |
| **Lucide Icons** | Iconografía SVG vía CDN |
| **localStorage** | Persistencia de preferencia de tema del usuario |

### Restricciones del proyecto

- ❌ Sin frameworks CSS (Bootstrap, Tailwind, etc.)
- ❌ Sin frameworks JS (React, Vue, Angular, etc.)
- ❌ Sin preprocesadores (SASS, LESS)
- ❌ Sin build tools (Webpack, Vite, Parcel)

---

## 📁 Estructura del repositorio

```
lab01-isw521/
├── index.html              # Página principal (single page)
├── README.md               # Este archivo
├── CLAUDE.md               # Instrucciones para agentes de IA
├── LICENSE                 # Licencia del proyecto
├── .gitignore              # Archivos ignorados por Git
├── assets/
│   └── images/
│       ├── brand/          # Logo de MotorSensor
│       ├── products/       # Imágenes de productos (sensores, bobinas, motores)
│       └── brands/         # Logos SVG de marcas de vehículos
├── css/
│   ├── variables.css       # Variables CSS (colores, tipografía, espaciado)
│   └── style.css           # Estilos principales (mobile-first)
├── js/
│   └── main.js             # Lógica: menú, tema, acordeón, formulario, Web Storage
└── context/
    ├── business-context.md       # Información del negocio
    ├── project-requirements.md   # Requerimientos del laboratorio
    ├── ux-strategy.md            # Estrategia UX y flujo de usuario
    ├── design-system.md          # Sistema de diseño (colores, tipografía)
    └── technical-structure.md    # Estructura técnica del proyecto
```

---

## 🚀 Cómo correr el proyecto localmente

Este es un proyecto estático (HTML/CSS/JS puro), por lo que no requiere instalación de dependencias ni proceso de build.

### Opción 1 — Abrir directamente

Abrí el archivo `index.html` en cualquier navegador moderno.

### Opción 2 — Servidor local con VS Code

1. Instalá la extensión [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) en VS Code.
2. Hacé clic derecho sobre `index.html` → **"Open with Live Server"**.
3. El navegador se abrirá automáticamente en `http://localhost:5500`.

### Opción 3 — Servidor local con Python

```bash
# Python 3
python -m http.server 8000

# Abrir en el navegador: http://localhost:8000
```

---

## 📄 Secciones de la landing

| # | Sección | Descripción |
|---|---------|-------------|
| 1 | **Header / Navegación** | Logo, menú responsivo con Flexbox, botón de contacto y toggle de tema claro/oscuro |
| 2 | **Hero** | Propuesta de valor principal, CTA a WhatsApp, estadísticas de confianza (+3000 clientes, 3 sucursales, +6 años) |
| 3 | **Problema / Solución** | Síntomas comunes del vehículo (Check Engine, pérdida de potencia, alto consumo, fallas de encendido) |
| 4 | **Productos** | Cuadrícula CSS Grid con categorías: sensores, bobinas, sistema de inyección y motores completos |
| 5 | **Diferenciadores** | Diagnóstico gratuito, asesoría técnica, envío nacional, opciones para todo presupuesto |
| 6 | **Marcas compatibles** | Carrusel infinito (marquee CSS) con logos: Toyota, Hyundai, Nissan, Kia, Suzuki, Mitsubishi, Honda, Chevrolet, Ford, Isuzu, Volkswagen |
| 7 | **Sucursales** | Tres sucursales con mapas embebidos de Google Maps, horarios y WhatsApp directo (CSS Grid) |
| 8 | **Cotización** | Formulario de contacto que redirige a WhatsApp con los datos del vehículo pre-armados |
| 9 | **FAQ** | Preguntas frecuentes con acordeón nativo (`<details>`) mejorado con JavaScript |
| 10 | **Footer** | Contacto, horarios, redes sociales (Facebook, Instagram, TikTok) y créditos |
| 11 | **WhatsApp flotante** | Botón fijo en esquina inferior derecha visible en toda la página |

---

## ✅ Requerimientos técnicos cumplidos

- [x] HTML5 semántico válido según W3C
- [x] CSS Flexbox (navegación, tarjetas)
- [x] CSS Grid (productos, sucursales)
- [x] Diseño responsivo con mínimo 2 breakpoints (768px, 1024px)
- [x] Accesibilidad WCAG 2.1 Nivel A (alt, aria-label, contraste, navegación por teclado)
- [x] Web Storage (`localStorage`) para persistencia del tema claro/oscuro
- [x] Sin frameworks CSS ni JS externos

---

## 👤 Autor y contexto académico

| Campo | Detalle |
|---|---|
| **Curso** | ISW-521 — Ingeniería de Software |
| **Laboratorio** | Laboratorio #1 |
| **Universidad** | Universidad Técnica Nacional (UTN) |
| **Periodo** | 2026 |

---

## 📜 Licencia

Este proyecto es de uso exclusivamente académico y educativo.
