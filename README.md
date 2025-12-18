# Frontend Next.js - Bookstore & Blog Platform

Aplicación frontend moderna construida con **Next.js 16**, **React 19** y **Tailwind CSS** para una tienda de libros con blog integrado.
Consume el backend API de _Strapi_ para gestionar contenido dinámico.

## 📋 Descripción del Proyecto

Plataforma web que permite a los usuarios:

- **Explorar Catálogo de Libros**: Visualizar libros disponibles con información detallada, precios y stock
- **Carrito de Compras**: Agregar libros al carrito, gestionar cantidades y realizar seguimiento
- **Blog**: Leer artículos publicados con contenido enriquecido
- **Navegación Intuitiva**: Experiencia de usuario fluida con transiciones suave
- **Diseño Responsivo**: Totalmente adaptable a dispositivos móviles y desktop
- **Tema Oscuro**: Soporte para modo oscuro mediante Tailwind CSS

## 🔗 Repositorio Complementario

**Backend**: [UDEMY_04_bookstore_blog_backend_strapi](https://github.com/agdwm/UDEMY_04_bookstore_blog_backend_strapi) - Backend CMS que proporciona las APIs para este frontend

## 🛠️ Tecnologías Utilizadas

### Framework y Librerías principales

- **Next.js 16.0.8** - Framework React con SSR y generación estática
- **React 19.2.1** - Librería UI moderna
- **TypeScript 5** - Tipado estático completo

### Estilos y UI

- **Tailwind CSS 4.1.17** - Framework CSS utilitario
- **Tailwind Merge 3.4.0** - Merge de clases Tailwind
- **Tailwind Typography 0.5.19** - Estilos tipográficos
- **Flowbite React 0.12.11** - Componentes pre-diseñados

### Animaciones y UX

- **Framer Motion 12.23.25** - Animaciones declarativas
- **NextJS TopLoader 3.9.17** - Indicador de carga entre rutas

### Gestión de Datos e Integraciones

- **@strapi/blocks-react-renderer 1.0.2** - Renderizador de bloques de contenido enriquecido de Strapi
- **clsx 2.1.1** - Utilidad para clases CSS condicionales
- **qs 6.14.0** - Parser de query strings

## 📦 Estructura del Proyecto

```
frontend_next/
├── src/
│   ├── app/
│   │   ├── globals.css              # Estilos globales
│   │   ├── layout.tsx               # Layout raíz
│   │   ├── page.tsx                 # Página principal
│   │   ├── blog/
│   │   │   ├── page.tsx             # Lista de posts
│   │   │   └── [slug]/
│   │   │       └── page.tsx         # Detalle de post dinámico
│   │   ├── store/
│   │   │   └── page.tsx             # Tienda de libros
│   │   └── cart/
│   │       └── page.tsx             # Carrito de compras
│   ├── components/
│   │   ├── Navigation.tsx           # Navegación principal
│   │   ├── PageHeading.tsx          # Encabezado de página
│   │   ├── PageCardImage.tsx        # Tarjeta con imagen
│   │   ├── PageCardStore.tsx        # Tarjeta de producto tienda
│   │   ├── Pagination.tsx           # Paginación
│   │   ├── QuantityButton.tsx       # Botón de cantidad
│   │   └── PageTransition.tsx       # Transiciones entre rutas
│   ├── context/
│   │   └── CartContext.tsx          # Contexto global del carrito
│   ├── interfaces/
│   │   ├── book.ts                  # Tipos para libros
│   │   └── post.ts                  # Tipos para posts
│   └── helpers/
│       ├── api-helper.ts            # Funciones auxiliares de API
│       ├── fetch-api.ts             # Cliente fetch personalizado
│       ├── format-date-helper.ts    # Formato de fechas
│       ├── format-price.ts          # Formato de precios
│       └── classnames.ts            # Utilidades de clases
├── public/
│   ├── next.svg
│   └── vercel.svg
└── tailwind.config.js               # Configuración Tailwind
```

## 🚀 Inicio Rápido

### Requisitos Previos

- **Node.js**: v20.x o superior
- **npm** o **pnpm**: v6.0.0 o superior
- **Backend Strapi**: Ejecutándose en `http://localhost:1337`

### Instalación

1. **Navegar al directorio frontend**:

```bash
cd frontend_next
```

2. **Instalar dependencias**:

```bash
npm install
# o con pnpm
pnpm install
```

3. **Configurar variables de entorno**:
   Crear archivo `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_API_URL=http://localhost:1337
```

### Comandos Disponibles

- **Desarrollo**:

```bash
npm run dev
```

Inicia el servidor de desarrollo en `http://localhost:3000`

- **Build para Producción**:

```bash
npm run build
```

Compila la aplicación para producción.

- **Iniciar Producción**:

```bash
npm start
```

Ejecuta el servidor de producción compilado.

## 🏠 Páginas Principales

### `/` - Página Principal

Página de bienvenida con introducción a la plataforma.

### `/store` - Tienda de Libros

Catálogo completo de libros disponibles:

- Visualización en grid responsivo
- Filtrado y búsqueda
- Información de precio y stock
- Botón para agregar al carrito
- Paginación

### `/blog` - Blog

Lista de artículos publicados:

- Tarjetas con imagen, título y descripción
- Enlace a artículos completos
- Paginación
- Fechas de publicación

### `/blog/[slug]` - Detalle de Artículo

Página completa del artículo:

- Contenido enriquecido renderizado
- Imagen destacada
- Información del autor y fecha
- Navegación entre artículos

### `/cart` - Carrito de Compras

Gestión del carrito:

- Visualización de items agregados
- Cambio de cantidad
- Eliminación de productos
- Cálculo de total
- Proceder al pago

## 🛒 Carrito de Compras

El carrito utiliza **React Context API** para gestión de estado global:

- Persistencia en localStorage
- Cálculo automático de totales
- Validación de stock
- Historial de cambios

```typescript
// Uso del contexto
const { cart, addToCart, removeFromCart, updateQuantity } =
  useContext(CartContext);
```

## 🎨 Diseño y Estilos

- **Tailwind CSS**: Estilos utilitarios y responsive design
- **Modo Oscuro**: Automático según preferencias del sistema
- **Componentes**: Componentes reutilizables basados en Flowbite
- **Animaciones**: Transiciones suaves con Framer Motion

## 📡 Integración con API

La aplicación consume APIs del backend Strapi:

- **Libros**: `GET /api/books`
- **Posts**: `GET /api/posts`
- **Posts por slug**: `GET /api/posts?filters[slug][$eq]=slug`

Cliente HTTP personalizado en `src/helpers/fetch-api.ts` para centralizar la lógica de requests.

## 🔍 SEO y Rendimiento

- **Next.js App Router**: Enrutamiento moderno y optimizado
- **Image Optimization**: Optimización automática de imágenes
- **Code Splitting**: División automática de código
- **Static Generation**: Pre-rendering donde es posible
- **Metadata**: SEO optimizado

## 🚢 Despliegue

### Vercel (Recomendado)

La forma más sencilla de desplegar:

1. Conectar repositorio GitHub a [Vercel](https://vercel.com)
2. Configurar variables de entorno
3. Despliegue automático

```bash
# O usar Vercel CLI
vercel deploy
```

### Otros Hosts

Compatible con cualquier host que soporte Node.js (Netlify, Railway, etc.)

## 📚 Recursos y Documentación

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de React 19](https://react.dev)
- [Documentación de Tailwind CSS](https://tailwindcss.com)
- [Documentación de Strapi](https://strapi.io/documentation)
- [Flowbite React Components](https://www.flowbite-react.com)

## 🔗 Conectar con Backend

Asegúrate de que:

1. El backend Strapi esté en ejecución en `http://localhost:1337`
2. La variable de entorno `NEXT_PUBLIC_API_URL` apunte a la URL correcta
3. Los permisos de CORS del backend permitan requests desde el frontend

## 📝 Licencia

Este proyecto está bajo licencia MIT.

---

## 👨‍💻 Autor

Proyecto desarrollado como parte del curso Udemy de Next.js:
[React JS con TypeScript y Next.js Curso Desarrollo FullStack](https://www.udemy.com/course/curso-react-js/)

---

**Frontend desarrollado con Next.js 16** | [Vercel](https://vercel.com)
