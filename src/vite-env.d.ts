/// <reference types="vite/client" />

declare module "vite" {
    interface ImportMetaEnv {
        readonly VITE_EMAIL_USER_ID: string;
        readonly VITE_EMAIL_SERVICE_ID: string;
        readonly VITE_EMAIL_TEMPLATE_ID: string;
        readonly VITE_RECIPIENT_EMAIL: string;
    }
}
