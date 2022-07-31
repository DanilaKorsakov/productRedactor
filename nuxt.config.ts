import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

    css:[
        '@/node_modules/normalize.css/normalize.css'
    ],

    styleResources: {
        scss: [
            '~assets/styles/_index.scss',
            '~assets/mixins/_index.scss'
        ]
    }

})
