# nlabs.dev - Website

Sitio web corporativo para nlabs, consultora especializada en tecnología.

## 🚀 Características

- **Diseño minimalista y moderno** inspirado en JetBrains, GitHub, VSCode y Accenture
- **Totalmente responsive** - optimizado para mobile, tablet y desktop
- **Animaciones suaves** con Intersection Observer API
- **SEO optimizado** con meta tags y estructura semántica
- **Accesibilidad** - cumple con estándares WCAG
- **Performance** - CSS y JavaScript optimizados

## 📦 Estructura

```
website-nlabs.dev/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript
├── logo.png           # Logo de la empresa
└── README.md          # Este archivo
```

## 🎨 Servicios Destacados

1. **DevOps** - CI/CD, Kubernetes, Infrastructure as Code
2. **Software Development** - Full-Stack, Microservices, APIs
3. **Producto Digital B2B/B2C** - Product Discovery, UX/UI, MVP
4. **AI Agentic** - Agentes inteligentes, LLM Integration, IA Generativa

## 🛠 Stack Tecnológico

- HTML5 semántico
- CSS3 moderno (Variables CSS, Grid, Flexbox)
- JavaScript Vanilla (ES6+)
- SVG para iconos
- Google Fonts (opcional)

## 🚀 Cómo usar

### Opción 1: Abrir directamente
Simplemente abre `index.html` en tu navegador.

### Opción 2: Servidor local
```bash
# Usando Python
python -m http.server 8000

# Usando Node.js (npx)
npx serve

# Usando PHP
php -S localhost:8000
```

Luego visita `http://localhost:8000`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 769px - 1024px
- **Desktop**: > 1024px

## 🎨 Paleta de Colores

- **Primary**: `#2563eb` (Blue)
- **Primary Dark**: `#1e40af`
- **Primary Light**: `#60a5fa`
- **Text**: `#0f172a`
- **Background**: `#ffffff`
- **Border**: `#e2e8f0`

## ✨ Características Técnicas

### CSS
- Variables CSS para fácil personalización
- Sistema de diseño consistente
- Animaciones con `@keyframes`
- Gradientes modernos
- Sombras sutiles

### JavaScript
- Menú móvil interactivo
- Smooth scroll
- Animaciones con Intersection Observer
- Sistema de notificaciones
- Form validation
- Active navigation links

## 🔧 Personalización

### Cambiar colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --color-primary: #TU_COLOR;
    --color-primary-dark: #TU_COLOR_OSCURO;
}
```

### Modificar contenido
Todo el contenido se encuentra en `index.html` con comentarios descriptivos.

### Agregar animaciones
Usa las clases existentes o agrega nuevas en `script.js`.

## 📧 Contacto

Para configurar el formulario de contacto, necesitarás:
1. Un backend para procesar el formulario
2. O usar servicios como Formspree, Netlify Forms, etc.

Ejemplo con Formspree:
```html
<form action="https://formspree.io/f/TU_ID" method="POST">
```

## 🚀 Deployment

### Netlify
```bash
# Arrastra la carpeta al sitio de Netlify
# o conecta tu repositorio Git
```

### Vercel
```bash
vercel --prod
```

### GitHub Pages
1. Push a GitHub
2. Settings → Pages → Deploy from branch

## 📝 TODO

- [ ] Agregar Google Analytics
- [ ] Implementar backend para formulario
- [ ] Agregar más casos de éxito
- [ ] Blog section
- [ ] Dark mode toggle

## 📄 Licencia

© 2025 nlabs. Todos los derechos reservados.

## 🤝 Contribuir

Para sugerencias o mejoras, contacta a: hola@nlabs.dev
