export default defineAppConfig({
  custom: {
    app: {
      title: "Contentura",
      description: "Contentura is a new way to publish documentation via Nuxt.",
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
      primary: "sky",
    },
  },
});
