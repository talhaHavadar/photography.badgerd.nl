export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Badgerd Photography| Nature, Wildlife and Landscape Photographers',
        htmlAttrs: {
            lang: 'en',
        },
        script: [],
        bodyAttrs: {
            class: 'scrollbar-hide',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, minimal-ui' },
            {
                hid: 'description',
                name: 'description',
                content:
                    'Discover our favorite photographs and have a chance to buy our fine art prints. You can find us in instagram by @badgerd.goes.wild and @houstonwegotaphoto.',
            },
            { name: 'apple-mobile-web-app-capable', content: 'yes' },
            { name: 'mobile-web-app-capable', content: 'yes' },
            { name: 'facebook-domain-verification', content: 'sp5hsonya31xtbnlqhsyb8cbzbsypb' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
            { hid: 'canonical', rel: 'canonical', href: 'https://photography.badgerd.nl' },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['@/assets/css/main.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['~/plugins/jsonld'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        '@nuxt/postcss8',
        '@nuxtjs/google-fonts',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/content
        '@nuxt/content',
        '@nuxtjs/sitemap',
        '@nuxtjs/robots',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
    },

    // Content module configuration: https://go.nuxtjs.dev/config-content
    content: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
        },
    },
    googleFonts: {
        families: {
            Montserrat: true,
        },
        download: false,
    },
    server: {
        host: 'localhost', // '0' // default: localhost
    },
    robots: {
        UserAgent: '*',
        Disallow: '',
        Sitemap: 'https://photography.badgerd.nl/sitemap.xml',
    },

    sitemap: {
        trailingSlash: true,
        routes: ['/heart-of-the-iceberg/detail', '/the-bird/detail'],
    },
}
