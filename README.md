# Portfolio de Diego Ormazábal

Portafolio personal interactivo construido con [Astro](https://astro.build) y [Tailwind CSS v4](https://tailwindcss.com).

## ✨ Características

- 🌍 **Sistema bilingüe** - Español e Inglés con selector de idioma
- 🔄 **Animaciones multiidioma** - Rotación automática de saludos en 10 idiomas diferentes
- 🎨 **Diseño moderno y minimalista** - Interfaz limpia y profesional
- 📱 **Totalmente responsive** - Adaptable a todos los dispositivos
- ⚡ **Optimizado para rendimiento** - Construido con Astro para máxima velocidad
- 🎯 **Fácil personalización** - Un solo archivo de configuración (`src/config.ts`)
- 💾 **Persistencia de preferencias** - El idioma seleccionado se guarda en localStorage

## 🚀 Instalación

Clona el repositorio e instala las dependencias:

```bash
npm install
```

## 🛠️ Desarrollo

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Visita `http://localhost:4321` para ver tu sitio.

## ⚙️ Configuración

Edita el archivo `src/config.ts` para personalizar tu información:

- Nombre y título profesional (bilingüe)
- Sección Sobre Mí (bilingüe)
- Habilidades técnicas
- Proyectos (bilingüe)
- Experiencia laboral (bilingüe)
- Educación (bilingüe)
- Enlaces de redes sociales

## 📦 Construcción para Producción

Construye el sitio para producción:

```bash
npm run build
```

Vista previa de la construcción de producción:

```bash
npm run preview
```

## 🌐 Deploy en GitHub Pages

El sitio se despliega automáticamente usando GitHub Actions. Cada push a la rama `main` activa el workflow de deployment.

**URL del sitio:** https://ormazabaldev.github.io/devportfolio-master/

## 🛠️ Tecnologías

- [Astro](https://astro.build) - Framework web estático
- [Tailwind CSS v4](https://tailwindcss.com) - Framework CSS con plugin Vite
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático
- JavaScript vanilla - Para animaciones y funcionalidad interactiva

## 📝 Estructura del Proyecto

```
devportfolio-master/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions workflow
├── public/
│   └── favicon.svg          # Favicon del sitio
├── src/
│   ├── components/          # Componentes Astro
│   │   ├── About.astro      # Sección Sobre Mí
│   │   ├── Education.astro  # Sección Educación
│   │   ├── Experience.astro # Sección Experiencia
│   │   ├── Footer.astro     # Footer del sitio
│   │   ├── Header.astro     # Header con navegación
│   │   ├── Hero.astro       # Sección Hero/Intro
│   │   └── Projects.astro   # Showcase de proyectos
│   ├── pages/
│   │   └── index.astro      # Página principal
│   ├── scripts/
│   │   └── lang-switcher.ts # Lógica del selector de idioma
│   ├── styles/
│   │   └── global.css       # Estilos globales
│   └── config.ts            # Configuración del sitio
├── astro.config.mjs         # Configuración de Astro
├── package.json             # Dependencias del proyecto
└── tsconfig.json            # Configuración de TypeScript
```

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👤 Autor

**Diego Ormazábal**
- GitHub: [@OrmazabalDev](https://github.com/OrmazabalDev)
- LinkedIn: [Diego Ormazábal](https://www.linkedin.com/in/diego-ormazabal-m)
- Email: ormazabal.dev@gmail.com

---

*Template original por [Ryan Fitzgerald](https://github.com/RyanFitzgerald), personalizado y mejorado por Diego Ormazábal.*
