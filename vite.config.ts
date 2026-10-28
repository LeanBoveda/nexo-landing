import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = { ...loadEnv(mode, process.cwd(), ''), ...process.env };
  const configured = env.VITE_SITE_URL || (env.VERCEL_ENV === 'production' && env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${env.VERCEL_PROJECT_PRODUCTION_URL}` : '');
  const site = configured ? new URL(configured) : null;
  if (site && !['https:', 'http:'].includes(site.protocol)) throw new Error('VITE_SITE_URL debe ser una URL HTTP o HTTPS.');
  const siteUrl = site?.origin;
  const seo: Plugin = {
    name: 'nexo-public-seo',
    transformIndexHtml(html) {
      if (!siteUrl) return html;
      return {
        html: html.replaceAll('content="/og.png"', `content="${siteUrl}/og.png"`),
        tags: [
          { tag: 'link', attrs: { rel: 'canonical', href: `${siteUrl}/` }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:url', content: `${siteUrl}/` }, injectTo: 'head' },
        ],
      };
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: `User-agent: *\n${env.VERCEL_ENV === 'preview' ? 'Disallow: /' : 'Allow: /'}\n${siteUrl ? `Sitemap: ${siteUrl}/sitemap.xml\n` : ''}` });
      if (siteUrl) this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${siteUrl}/</loc></url></urlset>` });
    },
  };
  return { plugins: [react(), seo] };
});
