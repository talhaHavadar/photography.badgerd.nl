<template>
    <div class="flex min-h-screen flex-col justify-center p-4">
        <div class="flex w-full flex-grow flex-col items-center justify-around">
            <div class="mt-48 flex w-full flex-col items-center justify-center border-t-[1px] border-slate-200">
                <p class="mt-8 text-4xl font-thin subpixel-antialiased">FINE ART PRINTS</p>
                <p class="mt-3 font-thin subpixel-antialiased">
                    We selected our the most beloved photos in each of our trips.
                </p>
            </div>
            <div class="flex w-[80%] flex-grow flex-wrap items-center justify-around">
                <NuxtLink class="my-2 w-96 border border-slate-200 p-4" to="/iceberg-creek/detail">
                    <img :src="require('~/assets/iceberg-creek/lq.jpg')" class="w-full" alt="" />
                    <p class="mt-2 text-center text-sm font-extralight subpixel-antialiased">
                        Iceberg Creek <span>| Iceland</span>
                    </p>
                </NuxtLink>
                <NuxtLink to="/reindeer-family/detail" class="my-2 w-96 border border-slate-200 p-4">
                    <img :src="require('~/assets/reindeer-family/lq.jpg')" class="w-full" alt="" />
                    <p class="mt-2 text-center text-sm font-extralight subpixel-antialiased">
                        Reindeer Family <span>| Swedish Lapland</span>
                    </p>
                </NuxtLink>
                <NuxtLink to="/first-puffin/detail" class="my-2 w-96 border border-slate-200 p-4">
                    <img :src="require('~/assets/first-puffin/lq.jpg')" class="w-full" alt="" />
                    <p class="mt-2 text-center text-sm font-extralight subpixel-antialiased">
                        First Puffin <span>| Iceland</span>
                    </p>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
