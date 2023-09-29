<template>
    <div class="flex min-h-[100vh] w-screen flex-grow flex-col justify-center">
        <div class="mt-12 flex w-full flex-col items-center justify-center border-t-[1px] border-slate-200">
            <h1 class="mt-8 text-center text-4xl font-thin subpixel-antialiased">FINE ART PHOTOGRAPHY PRINTS</h1>
            <p class="mx-4 mt-3 font-thin subpixel-antialiased">
                We selected our the most beloved photos in each of our trips.
            </p>
        </div>
        <div class="mt-24 flex w-full flex-grow flex-col items-center justify-around">
            <div class="flex w-[90%] flex-wrap items-center justify-center">
                <NuxtLink
                    class="m-2 mx-4 w-96 items-center border border-slate-200 p-4 duration-150 hover:bg-slate-50"
                    to="/heart-of-the-iceberg/detail"
                >
                    <img :src="require('~/assets/heart-of-the-iceberg/lq.jpg')" class="w-full" alt="" />
                    <p class="mt-2 text-center text-sm font-extralight subpixel-antialiased">
                        Heart of the Iceberg <span>| Iceland</span>
                    </p>
                </NuxtLink>
                <NuxtLink
                    to="/the-bird/detail"
                    class="m-2 mx-4 w-56 items-stretch border border-slate-200 p-4 duration-150 hover:bg-slate-50"
                >
                    <img :src="require('~/assets/the-bird/lq.jpg')" class="w-full" alt="" />
                    <p class="mt-2 text-center text-sm font-extralight subpixel-antialiased">
                        The Bird <span>| Norway</span>
                    </p>
                </NuxtLink>
                <!-- <NuxtLink to="/first-puffin/detail" class="m-2 w-96 items-stretch border border-slate-200 p-4">
                    <img :src="require('~/assets/first-puffin/lq.jpg')" class="w-full" alt="" />
                    <p class="mt-2 text-center text-sm font-extralight subpixel-antialiased">
                        First Puffin <span>| Iceland</span>
                    </p>
                </NuxtLink> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PrintList',
}
</script>
