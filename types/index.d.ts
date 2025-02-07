declare module "nuxt/schema" {
  interface AppConfig {
    custom: {
      app: {
        title: string;
        description: string;
        navbar: {
          title: string;
          hideOnScroll: boolean;
          items: {
            left: Array<{
              href: string;
              icon?: string;
              label?: string;
            }>;
            middle: Array<{
              href: string;
              icon?: string;
              label?: string;
            }>;
            right: Array<{
              href: string;
              icon?: string;
              label?: string;
            }>;
          };
          logo: {
            alt: string;
            src: string;
          };
        };
      };
    };
  }
}

export {};
