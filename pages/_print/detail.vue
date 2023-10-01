<template>
    <div class="flex min-h-screen flex-row flex-wrap items-center justify-around p-32">
        <div class="flex w-[30%] min-w-[350px] flex-col justify-center sm:min-w-[550px]">
            <div
                class="w-auto bg-contain bg-center bg-no-repeat p-2"
                :style="{
                    'background-image': ` url('${require('~/assets/' + print + '/lq.jpg')}')`,
                    'min-height': `${style['min-height']}`,
                }"
            ></div>
            <!-- <img
                :src="require(`~/assets/${print}/lq.jpg`)"
                class="w-full border border-slate-200 bg-cover p-4"
                alt=""
            /> -->
            <h1 class="mt-2 text-center text-lg font-thin subpixel-antialiased">
                {{ print | toTitleCase }} <br />
                <span class="text-sm font-thin subpixel-antialiased">
                    <a
                        v-if="data.author.includes('Talha')"
                        target="_blank"
                        href="https://instagram.com/badgerd.goes.wild?igshid=NGVhN2U2NjQ0Yg=="
                        >{{ data.author }}</a
                    >
                    <a v-else href="https://www.instagram.com/houstonwegotaphoto/" target="_blank">{{ data.author }}</a>
                </span>
            </h1>
        </div>
        <div class="flex w-[50%] min-w-[350px] flex-col justify-center p-4 sm:min-w-[550px]">
            <div class="flex w-full flex-col">
                <div class="mb-2 flex items-center">
                    <div>
                        <p class="text-2xl font-light subpixel-antialiased">€{{ selectedVariation.price }}</p>
                        <p v-if="data.shipping" class="text-sm font-thin subpixel-antialiased">Shipping included</p>
                    </div>
                    <a
                        :href="selectedVariation.payURL"
                        class="ml-4 flex min-w-[10rem] cursor-pointer items-center justify-center rounded-sm border border-slate-400 p-3 hover:bg-slate-200"
                    >
                        Checkout
                    </a>
                </div>
                <hr class="my-4" />
                <div class="mb-4 flex items-center">
                    <a
                        v-for="variation in data.variations"
                        :key="variation"
                        class="m-2 cursor-pointer rounded-sm border border-slate-400 p-3 hover:border-indigo-400"
                        :class="{ 'border-indigo-600': variation == selectedVariation }"
                        @click="
                            {
                                selectedVariation = variation
                            }
                        "
                        @touchend="
                            {
                                selectedVariation = variation
                            }
                        "
                    >
                        {{ variation.size }}
                    </a>
                </div>
            </div>

            <p class="whitespace-pre-line font-light subpixel-antialiased">
                {{ data.description }}
            </p>
            <p class="mt-4 font-thin subpixel-antialiased">Note: Frame is not included.</p>
        </div>
    </div>
</template>

<script>
export default {
    filters: {
        toTitleCase: function (s) {
            return s.replace(/^-*(.)|-+(.)/g, (s, c, d) => (c ? c.toUpperCase() : ' ' + d.toUpperCase()))
        },
    },

    async asyncData({ $content, params }) {
        const print = params.print
        const data = await $content('prints', print, { deep: true }).fetch()

        return {
            print,
            data,
            selectedVariation: data.variations[0],
            style: data.style,
            title: 'Amazing Wildlife, Landscape and Nature Fine Art Prints',
            description: '',
            image: 'https://photography.badgerd.nl/images/iceberg.jpg',
        }
    },
    head() {
        if (this.print === 'heart-of-the-iceberg') {
            this.title = 'Heart Of The Iceberg in Iceland| Buy Fine Art Icelandic Landscape Photo Print'
            this.description =
                'An incredible representation of diverse landscape of Iceland. When the Icebergs freshly broken, they look amazingly blue and it does not last for long.'
            this.image = 'https://photography.badgerd.nl/images/iceberg.jpg'
        } else if (this.print === 'the-bird') {
            this.title = 'Little Bird in Forest of Norway| Buy Fine Art Nordic Bird Photo Print'
            this.description =
                'An interesting pose of the small bird in Norway, when the rain drops to the forest birds come out, nature of norway is always interesting'
            this.image = 'https://photography.badgerd.nl/images/the-bird.jpg'
        }

        return {
            title: this.title,
            link: [
                {
                    hid: 'canonical',
                    rel: 'canonical',
                    href: `${this.$config.baseURL}${this.$route.path}`,
                },
            ],
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.description,
                },
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: this.$options.filters.toTitleCase(this.print),
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: this.description,
                },
                {
                    hid: 'og:type',
                    property: 'og:type',
                    content: 'website',
                },
                {
                    hid: 'og:image',
                    property: 'og:image',
                    content: this.image,
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
                '@id': 'https://photography.badgerd.nl/#' + this.print,
                '@type': 'Product',
                url: `${this.$config.baseURL}${this.$route.path}`,
                name: this.$options.filters.toTitleCase(this.print),
                mainEntityOfPage: `${this.$config.baseURL}${this.$route.path}`,
                image: this.image,
                description: this.description,
                brand: {
                    logo: 'https://badgerd.nl/logo-nobg.png',
                    name: 'Badgerd Photography',
                    slogan: 'High Quality Wildlife, Nature and Landscape Photography Prints',
                },

                aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: 5,
                    reviewCount: 1,
                },
                review: [
                    {
                        '@type': 'Review',
                        author: {
                            '@type': 'Person',
                            name: 'Talha',
                        },
                        datePublished: '2023-09-19',
                        reviewBody: 'Ultra high quality paper great photo!',
                        name: 'First User',
                        reviewRating: {
                            '@type': 'Rating',
                            bestRating: 5,
                            ratingValue: 5,
                            worstRating: 1,
                        },
                    },
                ],
                offers: [
                    {
                        '@type': 'Offer',
                        priceCurrency: 'EUR',
                        availability: 'https://schema.org/InStock',
                        price: 80,
                        sku: this.print + '-A3',
                        priceValidUntil: '2023-12-31',
                        hasMerchantReturnPolicy: {
                            '@type': 'MerchantReturnPolicy',
                            returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
                            merchantReturnDays: 14,
                            returnMethod: 'https://schema.org/ReturnByMail',
                            returnFees: 'https://schema.org/ReturnFeesCustomerResponsibility',
                        },
                    },
                    {
                        '@type': 'Offer',
                        priceCurrency: 'EUR',
                        availability: 'https://schema.org/InStock',
                        price: 122,
                        sku: this.print + '-A2',
                        priceValidUntil: '2023-12-31',
                        hasMerchantReturnPolicy: {
                            '@type': 'MerchantReturnPolicy',
                            returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
                            merchantReturnDays: 14,
                            returnMethod: 'https://schema.org/ReturnByMail',
                            returnFees: 'https://schema.org/ReturnFeesCustomerResponsibility',
                        },
                    },
                ],
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
