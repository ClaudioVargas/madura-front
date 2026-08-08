# 🅰️ Angular 22 Layout con Angular Material

Este proyecto define un **layout completo** en Angular 22 (standalone components, sin módulos) utilizando **Angular Material**.  
Incluye los siguientes componentes principales:

- **LayoutComponent** → Contenedor principal de la aplicación.
- **HeaderComponent** → Cabecera con logotipo, buscador, notificaciones y perfil de usuario.
- **SidebarComponent** → Menú lateral de navegación.
- **MainContentComponent** → Zona dinámica con `router-outlet`.
- **SecondaryContentComponent** → Panel lateral contextual (widgets, filtros, detalles rápidos).
- **FooterComponent** → Pie de página con enlaces secundarios y políticas.

---

## 🚀 Tecnologías

- **Angular 22** (standalone, control flow blocks `@for`, `@if`, etc.)
- **Angular Material** (toolbar, sidenav, list, menu, expansion panel, etc.)
- **SCSS** para estilos (comentarios con `/* ... */`)

---

## 📐 Arquitectura

### Layout Principal (`LayoutComponent`)

- Usa `mat-sidenav-container` para estructurar sidebar + contenido.
- Integra `Header`, `MainContent`, `SecondaryContent` y `Footer`.
- Responsive:  
  - Desktop → sidebar fijo, secondary visible.  
  - Mobile → sidebar como drawer, secondary oculto.

### Header (`HeaderComponent`)

- `mat-toolbar` con:  
  - Menú hamburguesa (mobile).  
  - Logo.  
  - Buscador global (`mat-form-field`).  
  - Notificaciones (`mat-menu` + `mat-badge`).  
  - Perfil de usuario (`mat-menu`).  
- Responsive: buscador oculto en mobile.

### Sidebar (`SidebarComponent`)

- Navegación principal con `mat-nav-list`.  
- Uso de `@for` en lugar de `*ngFor`.  
- Ítems con icono + texto.  
- Botón de logout al final.  
- Responsive: drawer en mobile.

### MainContent (`MainContentComponent`)

- Contenedor dinámico con `router-outlet`.  
- Padding adaptado a desktop y mobile.  
- Optimizado con `OnPush` (por defecto en Angular 22).

### SecondaryContent (`SecondaryContentComponent`)

- Panel lateral derecho con `mat-expansion-panel`.  
- Secciones de filtros y widgets.  
- Responsive: oculto en pantallas pequeñas.

### Footer (`FooterComponent`)

- `mat-toolbar` inferior con:  
  - Texto de derechos reservados.  
  - Enlaces secundarios (Política, Términos, Contacto).  
- Responsive: elementos apilados en mobile.

---

## 📱 Diseño Responsive

- **Desktop**:  
  - Header fijo arriba.  
  - Sidebar fijo a la izquierda.  
  - MainContent en el centro.  
  - SecondaryContent a la derecha.  
  - Footer fijo abajo.  

- **Mobile**:  
  - Header con menú hamburguesa.  
  - Sidebar como drawer.  
  - MainContent ocupa todo el ancho.  
  - SecondaryContent oculto.  
  - Footer compacto en columna.

---

## ✅ Buenas Prácticas Aplicadas

- **Standalone Components** (sin módulos).  
- **Control Flow Blocks** (`@for`, `@if`) en lugar de directivas clásicas.  
- **OnPush Change Detection** por defecto en Angular 22.  
- **Lazy Loading** de rutas.  
- **Accesibilidad (a11y)** con etiquetas semánticas y `aria-labels`.  
- **SCSS estructurado** con comentarios `/* ... */`.  
- **Responsive Design** con media queries.  

---

## 📂 Estructura de Carpetas

```
src/app/
│
├── layout/
│   ├── layout.component.ts
│   ├── layout.component.html
│   └── layout.component.scss
│
├── header/
│   ├── header.component.ts
│   ├── header.component.html
│   └── header.component.scss
│
├── sidebar/
│   ├── sidebar.component.ts
│   ├── sidebar.component.html
│   └── sidebar.component.scss
│
├── main-content/
│   ├── main-content.component.ts
│   ├── main-content.component.html
│   └── main-content.component.scss
│
├── secondary-content/
│   ├── secondary-content.component.ts
│   ├── secondary-content.component.html
│   └── secondary-content.component.scss
│
└── footer/
    ├── footer.component.ts
    ├── footer.component.html
    └── footer.component.scss
```

---

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar aplicación
ng serve
```

---

## 📌 Notas

- Angular 22 ya no usa `NgModules`.  
- Directivas estructurales clásicas (`*ngFor`, `*ngIf`) fueron reemplazadas por **control flow blocks** (`@for`, `@if`).  
- Todos los componentes usan **OnPush** por defecto.  
- Los estilos usan **SCSS** con comentarios `/* ... */`.  
```