# Design System — MotorSensor

> **Fuente visual base:** LogoMotorSensor.jpg  
> **Contexto de marca:** Tienda especializada en repuestos automotrices con diagnóstico técnico, contacto rápido y cobertura nacional.  
> **Propósito:** Definir un sistema visual consistente para la landing page y sus componentes UI.

---

## 1. Lectura de marca desde el logo

El logo utiliza una identidad fuerte en **rojo y blanco**, con letras mayúsculas estilizadas que comunican velocidad, energía, precisión y confianza técnica. La impresión visual es deportiva, mecánica y directa, lo que encaja con un negocio automotriz que quiere verse especializado y no genérico.

Las formas de las letras son gruesas y angulares, por lo que el sitio web debe reforzar esa misma sensación mediante una interfaz limpia, precisa y estructurada. La marca no debería moverse hacia estilos juguetones, suaves o decorativos.

---

## 2. Sensación de marca

### Sensaciones principales

- Técnica.
- Rápida.
- Confiable.
- Directa.
- Profesional.
- Automotriz.

### Objetivo emocional

La página debe hacer que el visitante sienta que MotorSensor es un negocio serio, que entiende los problemas del vehículo y puede ayudar a resolverlos rápidamente.

### Tono de la interfaz

La interfaz debe sentirse segura y eficiente, no ruidosa ni excesivamente comercial. Debe comunicar primero experiencia y luego promoción.

---

## 3. Sistema de color

El logo sugiere una identidad dominada por el rojo. La landing page debe usar el rojo como acento principal, apoyado por neutrales y superficies oscuras cuando se requiera contraste.

### Paleta recomendada

| Rol | Color | Uso |
|------|-------|-----|
| Rojo principal de marca | `#E5392B` | Botones CTA, resaltados, iconos clave, estados activos |
| Rojo hover | `#C62E21` | Estado hover de botones y elementos interactivos |
| Superficie oscura | `#111111` | Fondos del hero, footer, secciones de contraste |
| Oscuro secundario | `#1E1E1E` | Tarjetas, paneles, overlays |
| Oscuro terciario | `#2A2A2A` | Fondos alternativos de sección |
| Gris neutro | `#6B7280` | Texto de apoyo, metadatos |
| Gris claro | `#9CA3AF` | Texto secundario sobre fondos oscuros |
| Fondo claro | `#F7F7F7` | Fondo principal si se usa tema claro |
| Blanco | `#FFFFFF` | Texto sobre fondos oscuros, tarjetas, espacios |
| Verde de éxito | `#16A34A` | Confirmaciones, señales de éxito relacionadas con WhatsApp |

### Reglas de uso del color

- Usar el rojo con moderación para conservar su impacto.
- Mantener los botones CTA dentro de la misma familia de rojo.
- Evitar demasiados colores de acento que compitan con el logo.
- Conservar contraste fuerte para legibilidad y accesibilidad.
- Si se usan secciones oscuras, combinarlas con texto blanco y detalles rojos.

### Proporción sugerida

- 70% superficies neutras oscuras.
- 20% espacios blancos o claros.
- 10% acento rojo y color de alto impacto.

---

## 4. Tipografía

El logo se percibe geométrico y fuerte, por lo que la tipografía debe apoyar una voz técnica y moderna.

### Dirección tipográfica recomendada

- **Títulos:** `Montserrat` (preferido), `Poppins` o `Sora`.
- **Cuerpo:** `Inter` (preferido), `Roboto` o `Source Sans 3`.

### Principios tipográficos

- Usar solo una familia para display y una para cuerpo.
- Preferir títulos en weight 700–800 (bold/extrabold).
- Mantener el cuerpo altamente legible y neutral (400–500).
- Evitar tipografías script, condensadas decorativas o demasiado juguetonas.
- Los H1 del hero deben ser grandes e impactantes — mínimo 48px en desktop.

### Sugerencia de escala tipográfica

| Elemento | Comportamiento sugerido |
|---------|--------------------------|
| H1 | Grande, extrabold (800), corto y de alto impacto — puede incluir fragmento en rojo |
| H2 | Títulos de sección claros y compactos, bold (700) |
| H3 | Para tarjetas o subsecciones, semibold (600) |
| Cuerpo | Legible, con interlineado 1.6, weight regular (400) |
| Botones | Cortos, en negrita (700) y orientados a la acción, uppercase opcional |

---

## 5. Dirección de estilo

### Estilo visual

La landing debe seguir un estilo **automotriz industrial moderno de alto rendimiento**: estructura limpia, contraste fuerte, profundidad visual real, y momentos de impacto visual. Debe sentirse como una marca técnica premium — referencias válidas: HRE Wheels, Brembo, páginas de accesorios AMG. No como una ferretería o un catálogo retail genérico.

### Palabras clave de estilo

- Oscuro y profundo.
- Rojo intenso y preciso.
- Técnico y moderno.
- Fuerte y estructurado.
- Premium sin ser lujoso.

### Profundidad visual — OBLIGATORIO

El sitio NO debe usar fondos negros o grises lisos y planos. Toda superficie oscura debe tener profundidad:

- **Hero:** fondo con gradiente radial sutil — `radial-gradient(ellipse at 70% 50%, #1a0a09 0%, #111111 60%)` — con un glow rojo muy tenue en la esquina o detrás del CTA.
- **Tarjetas:** fondo `#1E1E1E` con borde `rgba(255,255,255,0.07)` y sombra `0 4px 24px rgba(0,0,0,0.5)`.
- **Secciones alternas:** alternar entre `#111111`, `#1a1a1a` y `#161616` para crear capas sin usar el mismo tono plano.
- **Separadores de sección:** usar `border-top: 1px solid rgba(255,255,255,0.06)` en lugar de líneas sólidas.
- **Overlay de textura:** se permite un SVG de ruido a `opacity: 0.03` sobre el hero para dar textura sutil.

### Gradientes permitidos y recomendados

- Gradiente en el hero: radial oscuro con toque cálido en dirección al CTA.
- Gradiente en el H1 del hero: palabras clave pueden tener `background-clip: text` con gradiente `#E5392B → #FF6B55` para el término más importante.
- Gradiente en botones CTA: `linear-gradient(135deg, #E5392B, #C62E21)` — más dinámico que el color plano.
- Líneas decorativas con gradiente: `linear-gradient(90deg, #E5392B, transparent)` bajo títulos de sección.
- Gradientes de fade entre secciones: `linear-gradient(to bottom, #111111, #1E1E1E)` para transiciones suaves.

### Lo que el estilo debe evitar

- ❌ Fondos planos sin ninguna profundidad ni textura.
- ❌ Negro puro `#000000` como fondo (usar `#111111` o más claro).
- ❌ Gradientes de colores no relacionados con la marca (azul, morado, verde).
- ❌ Efectos neón o glows de colores llamativos.
- ❌ Plantillas genéricas de talleres automotrices.
- ❌ Movimiento decorativo sin propósito.
- ❌ Marcos ornamentales pesados.
- ❌ Apariencia de marketplace saturado de productos.
- ❌ Todos los fondos de sección con el mismo color exacto.
- ❌ Tarjetas sin sombra ni separación visual del fondo.

---

## 6. Componentes UI

### Componentes base

- Sección hero con título, subtítulo y CTA.
- Botón fijo de WhatsApp.
- Tarjetas de productos o categorías.
- Insignias de confianza o chips de beneficios.
- Bloque de contacto con ubicaciones, teléfono, correo y horarios.
- Formulario de cotización.
- Acordeón de preguntas frecuentes.
- Sección de compatibilidad de marcas o vehículos soportados.

### Comportamiento de los componentes

- Las tarjetas deben tener elevación visual real (sombra + borde sutil).
- Los botones deben usar gradiente rojo, no color plano.
- Los formularios deben ser cortos, lineales y sin fricción.
- Los chips e insignias deben usarse para confianza, no para decoración.

### Sistema de botones

| Variante | Uso |
|----------|-----|
| Primario | CTA principal de conversión (WhatsApp / Cotizar) — gradiente rojo |
| Secundario | Acciones de apoyo — outline blanco sobre fondo oscuro |
| Terciario | Enlaces de baja jerarquía o texto |

### Indicaciones para botones

- Bordes redondeados moderados (4–6px), no píldoras.
- Fondo con `linear-gradient(135deg, #E5392B, #C62E21)` para el CTA primario.
- Texto blanco sobre fondo rojo, peso 700.
- Estado hover: brillo ligeramente más claro + `transform: translateY(-1px)`.
- Tamaño suficiente para interacción con el pulgar en móvil (mínimo 44px de altura).

---

## 7. Reglas de layout

### Reglas espaciales

- Usar whitespace generoso entre secciones.
- Mantener anchos de sección legibles y centrados (max-width 1200px).
- Evitar filas horizontales largas con elementos pequeños.
- Agrupar visualmente el contenido por intención.

### Reglas de jerarquía

- El CTA debe verse de inmediato en el hero.
- El contacto y las señales de confianza deben aparecer temprano.
- Los listados de productos no deben dominar el primer pantallazo.
- La página debe facilitar el escaneo rápido, no la lectura profunda.

### Ritmo de secciones — IMPORTANTE

Las secciones NO deben verse todas iguales. Variar visualmente:

- Hero: oscuro profundo con glow rojo sutil.
- Problema/solución: `#1a1a1a` con línea de acento rojo en los íconos.
- Productos: `#111111` con tarjetas elevadas.
- Diferenciadores: `#1E1E1E` más cálido.
- Marcas: `#161616` compacta.
- Sucursales: `#1a1a1a` con mapa embebido.
- FAQ: `#111111`.
- Footer: `#0d0d0d` el más oscuro, cierre del sitio.

### Comportamiento responsive

- Prioridad mobile first.
- Diseño de una sola columna en pantallas pequeñas.
- Diseño de dos columnas solo cuando la claridad no se vea afectada.
- Mantener áreas táctiles grandes y espaciado cómodo.

---

## 8. Tratamiento de imágenes

El logo es fuerte y contundente, por lo que el tratamiento de imágenes debe ser realista y funcional, no decorativo.

### Estilo recomendado de imágenes

- Fotografía real de productos.
- Escenas limpias de taller o diagnóstico.
- Detalles automotrices con buena iluminación.
- Muy poco ruido visual.

### Reglas para imágenes

- No usar fotografías genéricas de stock que no se relacionen con el negocio.
- Preferir imágenes que refuercen confianza y conocimiento técnico.
- Usar overlays oscuros (`rgba(0,0,0,0.4)`) si hay texto sobre imágenes.
- Mantener consistencia de temperatura de color entre recursos.

---

## 9. Señales de confianza de marca

El sistema visual debe ayudar al usuario a sentir que MotorSensor es un negocio real y confiable.

### Señales de confianza que conviene destacar visualmente

- Logo colocado de forma consistente en el encabezado.
- Datos de contacto visibles en el hero o en la barra superior.
- Botón de WhatsApp repetido.
- Ubicaciones y horarios claramente presentados.
- Marcas compatibles o vehículos soportados mostrados como chips o logos.
- Garantía o diagnóstico como pequeñas insignias destacadas cuando aplique.

### Lenguaje visual para transmitir confianza

- Usar iconos simples y técnicos (Lucide Icons recomendado).
- Evitar ilustraciones demasiado amigables o caricaturescas.
- Mantener el tono visual alineado con la precisión mecánica.

---

## 10. Reglas de accesibilidad

El sistema visual debe seguir siendo accesible incluso con colores de marca intensos.

### Requisitos de accesibilidad

- Mantener contraste suficiente para texto legible sobre superficies rojas, negras y blancas.
- Hacer visibles los estados de foco.
- No depender solo del color para comunicar estados.
- Mantener el cuerpo de texto lo suficientemente grande para lectura móvil (mínimo 16px).
- Usar espaciado y jerarquía visual semántica, no solo efectos visuales.

### Guía de contraste

- Texto blanco sobre fondos oscuros.
- Texto oscuro sobre fondos claros.
- El rojo como acento, no como fondo de texto de uso continuo, salvo que se pruebe el contraste.

---

## 11. Tokens reutilizables de diseño

### Espaciado

- 4px / 8px / 12px / 16px / 24px / 32px / 48px / 64px / 80px / 96px.

### Radio

- `4px` para inputs y badges.
- `6px` para botones y tarjetas.
- `12px` para cards de mayor tamaño.
- Evitar formas demasiado redondeadas que reduzcan el tono técnico.

### Sombras

- Tarjetas: `0 4px 24px rgba(0,0,0,0.5)` — profundidad real, no decorativa.
- Botones: `0 4px 16px rgba(229,57,43,0.3)` en hover para reforzar el rojo.
- Hero CTA: glow rojo tenue en el área del botón principal.

### Bordes

- Bordes de tarjetas: `1px solid rgba(255,255,255,0.07)`.
- Borde de inputs: `1px solid rgba(255,255,255,0.12)`, focus: `#E5392B`.
- Borde de acento en títulos de sección: línea de 2px roja de 40px de ancho, a la izquierda o debajo.

### Estilo de iconos

- Iconos lineales de Lucide Icons (CDN disponible).
- Grosor de trazo consistente (1.5–2px).
- Sin iconos caricaturescos.
- Iconos de acción en rojo, iconos informativos en gris claro.

---

## 12. Comportamiento visual recomendado

### Composición del hero

- Logo de marca en el encabezado (sticky).
- Fondo oscuro con profundidad (gradiente radial, no plano).
- Una propuesta de valor fuerte en H1 grande — palabra clave en rojo con gradiente.
- Un subtítulo en gris claro, máximo 2 líneas.
- Un CTA principal (botón rojo degradado) y uno secundario (outline blanco).
- Chips de confianza debajo de los botones: "Diagnóstico gratuito · 3 sucursales · Envíos a todo el país".

### Ritmo del contenido

- Empezar con el mensaje más importante.
- Pasar luego a síntomas o problemas.
- Después presentar productos, beneficios y confianza.
- Terminar con contacto directo.

### Ritmo visual

- Alternar fondos entre secciones para crear separación natural.
- Usar línea de acento rojo debajo de los H2 de sección.
- Mantener la página estructurada y fácil de escanear.
- Al menos una sección debe "romper" el ritmo con un tratamiento visual diferente (por ejemplo, la sección de diferenciadores con un grid asimétrico o un fondo con textura).

---

## 13. Resumen del sistema de diseño

MotorSensor debe sentirse como una **marca automotriz técnica de alto rendimiento con identidad roja fuerte**. El sistema visual correcto es oscuro, con profundidad real, gradientes controlados y momentos de impacto rojo. No es una landing page genérica — es la presencia digital de un especialista.

### Dirección final de diseño

- Rojo como acento dominante con gradiente — nunca plano.
- Superficies oscuras con profundidad real — nunca negro plano sin textura.
- Tipografía fuerte con jerarquía clara y pesos contrastantes.
- Componentes con elevación real (sombras, bordes sutiles).
- Gradientes oscuros sutiles para separar secciones naturalmente.
- Imágenes reales y señales visibles de confianza.
- Espaciado e interacción mobile first.

### Referencia de estilo

El sitio debe evocar marcas automotrices técnicas de alto rendimiento (HRE Wheels, Brembo, accesorios AMG) — no un taller local ni un marketplace genérico. Oscuro, preciso, con destellos de rojo en los momentos correctos.
