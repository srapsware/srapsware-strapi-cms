module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: env("VERCEL_DEPLOY_PLUGIN_HOOK"),
      apiToken: env("VERCEL_DEPLOY_PLUGIN_API_TOKEN"),
      appFilter: env("VERCEL_DEPLOY_PLUGIN_APP_FILTER"),
      teamFilter: env("VERCEL_DEPLOY_PLUGIN_TEAM_FILTER"),
      roles: ["strapi-super-admin"],
    },
  },
  ezforms: {
    config: {
      captchaProvider: {
        name: "none",
      },
    },
  },
  email: {
    config: {
      provider: "strapi-provider-email-resend",
      providerOptions: {
        apiKey: env("RESEND_API_KEY"), // Required
      },
      settings: {
        defaultFrom: "contact@srapsware.com",
        defaultReplyTo: "contact@srapsware.com",
      },
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      breakpoints: {
        xlarge: 1920,
        large: 1000,
        medium: 750,
        small: 500,
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
