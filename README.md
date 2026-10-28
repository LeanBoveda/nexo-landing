# Nexo · Landing pública

Proyecto independiente de la aplicación Nexo. Este repositorio contiene solamente la web de presentación y se publica como sitio estático en Vercel. No incluye cuentas, base de datos, servidor de la aplicación, credenciales ni código de Cloudflare.

## Desarrollo

Node 22.x (22.13 o posterior dentro de esa versión mayor) y pnpm 11.25. La versión mayor está fijada para evitar actualizaciones automáticas de Node en Vercel.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Abrir la dirección que imprime Vite. La landing vive en `/`.

```sh
pnpm typecheck
pnpm build
pnpm preview
```

## Publicar en Vercel

1. Importar **LeanBoveda/nexo-landing** como un proyecto nuevo.
2. Usar la raíz del repositorio, sin subdirectorio.
3. Framework: **Vite**. Build: `pnpm run build`. Output: `dist`. `vercel.json` ya declara estos valores.
4. Configurar `VITE_APP_URL` con la URL pública de la aplicación. El valor predeterminado es `https://nexo-rendimiento.cuentagpt050.chatgpt.site`.
5. Configurar `VITE_SITE_URL` con el dominio definitivo de la landing (incluyendo `https://`). Si se omite en producción, el build usa `VERCEL_PROJECT_PRODUCTION_URL` cuando Vercel lo proporciona.
6. Publicar. Los cambios futuros en `main` se pueden desplegar automáticamente mediante la integración Git de Vercel.

Todas las variables `VITE_*` son públicas: nunca colocar secretos. `VITE_APP_URL` se incorpora al build y los CTA llevan a `/login` en ese dominio. La aplicación mantiene su propio repositorio, alojamiento, usuarios y datos.

El build genera robots.txt. Con dominio configurado también genera sitemap.xml, canonical, og:url e imágenes sociales con URL absoluta. Las previews de Vercel se excluyen del rastreo. No se inventa un dominio definitivo. La tipografía Geist se solicita a Google Fonts con `display=swap` y tiene fuentes de respaldo.

## Estructura

- `src/Landing.tsx`: secciones, navegación, mockups, FAQ y formulario.
- `src/landing.css`: variables de marca, estilos responsive y movimiento reducido.
- `src/config.ts`: enlaces externos a la aplicación.
- `src/main.tsx`: entrada React.
- `index.html`: metadata y documento público.
- `vite.config.ts`: compilación y SEO.
- `vercel.json`: configuración del alojamiento.
- `public/`: favicon e imagen social.

React, TypeScript, Vite y Lucide. Sin Next.js, Vinext, Tailwind, Workers ni dependencias del repositorio de la aplicación.

## Contenido y pendientes

El contenido describe funcionalidades verificadas en el código y README de la aplicación: fichas/grupos, importación, versiones de rutinas, adjuntos, seguimiento, portal móvil y evaluaciones. Los ejemplos visuales están identificados como ilustrativos. No hay testimonios, métricas comerciales ni precios inventados.

Antes de la difusión definitiva:

- Confirmar presentación institucional, equipo, origen, misión, visión y valores.
- Publicar política de privacidad y términos reales.
- Confirmar canales de contacto oficiales y conectar el formulario.
- Hacer revisión visual en escritorio y móvil, teclado, menú, FAQ y consola. El navegador de Work estuvo deshabilitado durante la implementación.

El formulario usa validación HTML nativa y muestra un aviso accesible: **no envía ni almacena mensajes**. El manejador `submit` de `ContactForm` es el punto preparado para integrar un servicio externo o una función de servidor, con validación y control de abuso. No muestra éxito ficticio.
