// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '~/assets/css/app.css',
        '~/assets/css/style.css',
    ],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },
    modules: [
        'nuxt-headlessui',
        '@formkit/nuxt',
        ['nuxt-mail', {
            message: {
              to: 'ralphie@neitrongaming.io',
            },
            smtp: {
              host: "sandbox.smtp.mailtrap.io",
              port: 2525,
              auth: {
                user:"bd4d46da6a73e4",
                pass:"1ac0a1158d55a9",
              }
            },
          }],
    ],
    runtimeConfig: {
        MAILHOST: process.env.MAILHOST,
        MAILPORT: process.env.MAILPORT,
        MAILUSER: process.env.MAILUSER,
        MAILPASSWORD: process.env.MAILPASSWORD,
        CONTACTMAIL: process.env.MAILHOST
    }
})
