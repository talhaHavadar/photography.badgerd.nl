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
            <p class="mt-2 text-center text-lg font-thin subpixel-antialiased">
                {{ print | toTitleCase }} <br />
                <span class="text-sm font-thin subpixel-antialiased">{{ data.author }}</span>
            </p>
        </div>
        <div class="flex w-[50%] min-w-[350px] flex-col justify-center p-4 sm:min-w-[550px]">
            <div class="flex w-full flex-col">
                <div class="mb-2 flex items-center">
                    <div>
                        <p class="text-2xl font-light subpixel-antialiased">€{{ selectedVariation.price }}</p>
                        <p class="text-sm font-thin subpixel-antialiased" v-if="data.shipping">Shipping included</p>
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
                    <div
                        v-for="variation in data.variations"
                        :key="variation"
                        class="m-2 cursor-pointer rounded-sm border border-slate-400 p-3 hover:border-indigo-400"
                        :class="{ 'border-indigo-600': variation == selectedVariation }"
                        @click="
                            {
                                selectedVariation = variation
                            }
                        "
                    >
                        {{ variation.size }}
                    </div>
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

        return { print, data, selectedVariation: data.variations[0], style: data.style }
    },
}
</script>
