export const API = (process.env.NEXT_PUBLIC_PRODUCTION === 'true')
    ? process.env.NEXT_PUBLIC_APP_PRODUCTION
    : process.env.NEXT_PUBLIC_API_DEV;

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;

export const FB_APP_ID = process.env.NEXT_PUBLIC_FACEBOOK;
export const DISQUS_SHORTNAME = "publicRuntimeConfig.DISQUS_SHORTNAME";

export const DOMAIN = (process.env.NEXT_PUBLIC_PRODUCTION === 'true')
    ? process.env.NEXT_PUBLIC_DOMAIN_PRODUCTION
    : process.env.NEXT_PUBLIC_DOMAIN_DEVELOPMENT;
