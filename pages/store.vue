<template>
    <div class="contents h-screen pt-8">
        <PrintList />
    </div>
</template>

<script>
export default {
    name: 'StorePage',
    head() {
        return {
            title: 'Badgerd Photo| Nature and Wildlife Fine Art Print Store',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'High quality nature, wildlife and landscape photos. Buy one of ours fine art prints to join our journey!',
                },
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: 'Badgerd Photo| Nature and Wildlife Fine Art Print Store',
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content:
                        'High quality nature, wildlife and landscape photos. Buy one of ours fine art prints to join our journey!',
                },
                {
                    hid: 'og:type',
                    property: 'og:type',
                    content: 'website',
                },
                {
                    hid: 'og:image',
                    property: 'og:image',
                    content: 'https://photography.badgerd.nl/images/iceberg.jpg',
                },
                {
                    hid: 'og:url',
                    property: 'og:url',
                    content: `${this.$config.baseURL}${this.$route.path}`,
                },
                {
                    hid: 'og:locale',
                    property: 'og:locale',
                    content: 'en_US',
                },
            ],
        }
    },
    jsonld() {
        return [
            {
                '@context': 'http://schema.org',
                '@id': 'https://photography.badgerd.nl/#webpage',
                '@type': 'WebPage',
                url: 'https://photography.badgerd.nl/',
                name: 'Badgerd Photography',
            },
            {
                '@context': 'https://schema.org/',
                '@type': 'BreadcrumbList',
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        name: 'Store',
                        item: 'https://photography.badgerd.nl/store',
                    },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        name: 'The Bird',
                        item: 'https://photography.badgerd.nl/the-bird/detail',
                    },
                    {
                        '@type': 'ListItem',
                        position: 3,
                        name: 'Heart Of The Iceberg',
                        item: 'https://photography.badgerd.nl/heart-of-the-iceberg/detail',
                    },
                    {
                        '@type': 'ListItem',
                        position: 4,
                        name: 'Contact',
                        item: 'https://photography.badgerd.nl/contact',
                    },
                ],
            },
        ]
    },
}
</script>
