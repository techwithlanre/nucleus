// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '~/assets/css/app.css',
        //'~/assets/css/style.css',
    ],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },
    modules: [
        'nuxt-headlessui',
        '@formkit/nuxt'
    ],
})
