export const API = (process.env.NEXT_PUBLIC_PRODUCTION === 'true')
    ? process.env.NEXT_PUBLIC_APP_PRODUCTION
    : process.env.NEXT_PUBLIC_API_DEV;

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;
