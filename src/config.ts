const configuredUrl = import.meta.env.VITE_APP_URL || 'https://nexo-rendimiento.cuentagpt050.chatgpt.site';
const appUrl = new URL(configuredUrl);
if (!['http:', 'https:'].includes(appUrl.protocol)) throw new Error('VITE_APP_URL debe ser una URL HTTP o HTTPS.');
export const loginUrl = new URL('/login', appUrl).href;
export const firstAccessUrl = new URL('/login?first=1', appUrl).href;
