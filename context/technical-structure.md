# Technical Structure — MotorSensor Landing Page

> **Objetivo:** Definir una estructura de carpetas simple, profesional y fácil de mantener para una landing page construida con HTML5, CSS3 y JavaScript Vanilla.  
> **Enfoque:** Orden, claridad, compatibilidad con Git y mínima complejidad necesaria.

---

## 1. Principios de organización

La estructura debe facilitar que cualquier persona del equipo encuentre rápido lo que necesita sin añadir capas innecesarias. Para una landing page pequeña o mediana, la prioridad es mantener el proyecto limpio, comprensible y fácil de editar.

### Principios clave

- Separación por responsabilidad.
- Nombres claros y consistentes.
- Pocos archivos, bien organizados.
- Raíz limpia y fácil de revisar.
- Documentación estratégica separada del código.

---

## 2. Estructura del repositorio

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

---

## 3. Descripción de cada carpeta

### 3.1 Raíz del proyecto

La raíz debe contener solo los archivos esenciales para entender y ejecutar el proyecto.

#### Archivos en raíz

- `index.html` — punto de entrada principal.
- `README.md` — explicación breve del proyecto, uso y notas generales.
- `CLAUDE.md` — instrucciones para agentes de IA que trabajen en el repositorio.
- `.gitignore` — exclusiones de Git.

### 3.2 `/assets/`

Contiene los recursos visuales y estáticos del proyecto.

#### Subcarpetas

- `/assets/images/brand/` — logo y variantes de marca.
- `/assets/images/products/` — fotos de repuestos, piezas o categorías.
- `/assets/images/content/` — imágenes usadas en el contenido.
- `/assets/icons/` — iconos SVG o PNG.

### 3.3 `/css/`

Contiene las hojas de estilo del proyecto.

#### Archivos

- `style.css` — hoja principal con la mayor parte de los estilos.
- `variables.css` — tokens visuales reutilizables: colores, tipografía, espaciado.

### 3.4 `/js/`

Contiene la lógica JavaScript del sitio.

#### Archivos

- `main.js` — archivo único de comportamiento, interacciones y Web Storage.

> Para una landing page, `main.js` es suficiente. No se deben crear subcarpetas ni múltiples archivos JS salvo necesidad real y justificada.

### 3.5 `/context/`

Reúne toda la documentación estratégica y técnica del proyecto. Es la carpeta de referencia para equipos de diseño, desarrollo y agentes de IA.

#### Archivos

- `business-context.md` — información del negocio, productos, contacto y público.
- `project-requirements.md` — requerimientos técnicos obligatorios del laboratorio.
- `ux-strategy.md` — estrategia de experiencia, estructura de secciones y flujo de usuario.
- `design-system.md` — sistema visual: colores, tipografía, componentes y reglas de diseño.
- `technical-structure.md` — este documento.

---

## 4. Reglas de nomenclatura

### Archivos

- Usar minúsculas.
- Separar palabras con guiones medios si aplica.
- Evitar nombres ambiguos o temporales.

### Ejemplos correctos

- `index.html`
- `style.css`
- `variables.css`
- `main.js`
- `business-context.md`

### Ejemplos a evitar

- `final.css`
- `script-new.js`
- `styles2.css`
- `cosas/`
- `old-docs/`

---

## 5. Carpetas opcionales

Algunas subcarpetas dentro de `/assets/images/` pueden omitirse si el proyecto no las necesita.

### Opcionales según necesidad real

- `/assets/images/products/` — útil si hay muchas imágenes de producto.
- `/assets/images/content/` — útil si el contenido usa imágenes específicas.

### No recomendadas por defecto

- `components/` dentro de `js/`.
- `utils/` dentro de `js/`.
- `references/`, `moodboard/`, `source-notes/`.

---

## 6. Buenas prácticas de mantenimiento

### Código fuente

- Mantener HTML, CSS y JS separados.
- Evitar estilos inline salvo excepciones justificadas.
- Evitar mezclar lógica JS con el HTML.

### Recursos visuales

- Optimizar imágenes antes de subirlas.
- Eliminar archivos que no se usan.
- Organizar los assets por propósito.

### Documentación

- Mantener actualizados los documentos en `context/`.
- No mezclar notas de negocio con implementación técnica.

---

## 7. Buenas prácticas para Git

- Mantener la raíz limpia.
- No subir archivos temporales ni assets duplicados.
- Hacer commits con mensajes claros y descriptivos.

### Ejemplos de mensajes de commit

- `feat: add hero section`
- `style: update color variables`
- `fix: improve mobile layout`
- `docs: update ux strategy`

---

## 8. Criterios para agentes IA

Esta estructura está pensada para que herramientas como Claude Code comprendan rápidamente dónde está cada cosa y qué deben modificar.

### Mapa de archivos clave

- `index.html` — estructura principal de la landing.
- `css/style.css` — estilos de la landing.
- `css/variables.css` — tokens de color, tipografía y espaciado.
- `js/main.js` — lógica, interacciones y Web Storage.
- `context/` — toda la información estratégica y de referencia.
- `assets/` — recursos visuales.

### Qué evitar crear sin necesidad

- Módulos JavaScript para un proyecto de este tamaño.
- Subcarpetas de soporte que no aportan al desarrollo actual.
- Estructuras inspiradas en aplicaciones grandes que no corresponden a una landing simple.
