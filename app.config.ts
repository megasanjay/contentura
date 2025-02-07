export default defineAppConfig({
  custom: {
    app: {
      title: "Contentura",
      description: "Contentura is a new way to publish documentation via Nuxt.",
      navbar: {
        title: "Contentura",
        items: {
          left: [
            {
              href: "/docs/introduction/installation",
              label: "Documentation",
            },
            {
              href: "/api",
              label: "API",
            },
          ],
          middle: [
            {
              href: "/team",
              label: "Team",
            },
            {
              href: "/blog",
              label: "Blog",
            },
          ],
          right: [
            {
              href: "/contact",
              label: "Contact Us",
            },
            {
              href: "https://github.com/fairdataihub/contentura",
              icon: "i-mdi-github",
            },
          ],
        },
        logo: {
          alt: "My Site Logo",
          src: "logo.svg",
        },
        showSearchBar: false,
      },
    },
  },
  ui: {
    button: {
      defaultVariants: {
        size: "lg",
      },
      slots: {
        base: "cursor-pointer",
      },
    },
    colors: {
      neutral: "zinc",
      primary: "orange",
    },
  },
});
