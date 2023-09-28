<template>
    <!-- snap-y snap-mandatory h-screen-->
    <div class="contents">
        <!-- snap-start -->
        <div class="flex h-screen flex-col p-4">
            <div
                class="flex h-screen items-center justify-center bg-[url('~/assets/section1_overlayed.jpg')] bg-cover bg-fixed bg-top bg-no-repeat"
            >
                <div class="text-center">
                    <h1
                        class="cursor-default text-2xl font-light tracking-wider subpixel-antialiased sm:text-3xl md:text-5xl md:font-thin lg:text-6xl xl:text-7xl 2xl:text-8xl"
                    >
                        <span class="duration-500 hover:text-green-800">Nature|</span>
                        <span class="text-amber-800 duration-500">Wildlife</span> Photography
                    </h1>
                    <p
                        class="text-xl font-light subpixel-antialiased sm:text-2xl sm:font-light md:text-3xl md:font-thin lg:mt-5 lg:text-3xl xl:text-4xl 2xl:text-5xl"
                    >
                        Talha Can Havadar &amp; Bahanur Enis
                    </p>
                </div>
            </div>
        </div>
        <div class="contents h-screen">
            <PrintList />
        </div>
        <!-- <div class="flex items-center justify-center p-4">
            <PrintList />
        </div> -->
    </div>
</template>

<script>
export default {
    name: 'IndexPage',

    load() {},
    beforeMount() {
        window.addEventListener('load', function () {
            setTimeout(function () {
                // This hides the address bar:
                window.scrollTo(0, 1)
            }, 0)
        })
    },
}
</script>
