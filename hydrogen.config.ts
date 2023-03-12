import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    defaultCountryCode: 'CA',
    defaultLanguageCode: 'EN',
    storeDomain: Oxygen.env.PUBLIC_STORE_DOMAIN || 'tatsuyas-store.myshopify.com',
    storefrontToken: Oxygen.env.PUBLIC_STOREFRONT_API_TOKEN || '<PUBLIC_STOREFRONT_API_TOKEN>',
    privateStorefrontToken: Oxygen.env.PRIVATE_STOREFRONT_API_TOKEN,
    storefrontApiVersion: 'unstable',
    storefrontId: Oxygen.env.PUBLIC_STOREFRONT_ID,
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});
