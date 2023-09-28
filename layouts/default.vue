<template>
    <div>
        <div class="fixed m-4 flex w-[calc(100%-2rem)] flex-wrap items-center justify-between backdrop-blur-sm">
            <div class="pt-2 pl-2">
                <NuxtLink to="/"><img :src="require('~/assets/logo-nobg.png')" class="w-14" alt="" /></NuxtLink>
            </div>
            <div class="flex flex-row items-center justify-between text-center">
                <div class="hidden w-full cursor-default p-2">
                    <NuxtLink to="/trips" class="border-b border-b-transparent p-2 duration-500 hover:border-b-black">
                        TRIPS
                    </NuxtLink>
                </div>
                <div class="w-full cursor-default p-2">
                    <NuxtLink to="/store" class="border-b border-b-transparent p-2 duration-500 hover:border-b-black">
                        STORE
                    </NuxtLink>
                </div>
                <div class="w-full cursor-default p-2">
                    <NuxtLink to="/contact" class="border-b border-b-transparent p-2 duration-500 hover:border-b-black">
                        CONTACT
                    </NuxtLink>
                </div>
            </div>
            <div class="w-14 pt-2 pr-2"></div>
        </div>
        <Nuxt />
        <div
            class="mt-8 flex w-full flex-row flex-wrap justify-between border border-t-slate-300 bg-slate-100 p-8 pt-32 subpixel-antialiased"
        >
            <div class="text-slate-600">
                <NuxtLink to="/contact" class="p-1 underline hover:text-slate-500">Contact</NuxtLink>
                <NuxtLink to="/refund" class="p-1 underline hover:text-slate-500">Refund policy</NuxtLink>
                <NuxtLink to="/terms" class="p-1 underline hover:text-slate-500">Terms of service</NuxtLink>
                <NuxtLink to="/privacy" class="p-1 underline hover:text-slate-500">Privacy policy</NuxtLink>
                <NuxtLink to="/notice" class="p-1 underline hover:text-slate-500">Legal notice</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>
