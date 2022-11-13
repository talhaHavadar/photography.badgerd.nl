<template>
    <div class="scrollbar-hide h-screen snap-y snap-mandatory overflow-scroll">
        <div class="h-screen snap-start p-4">
            <div
                class="flex h-full items-center justify-center bg-[url('~/assets/section1_overlayed.jpg')] bg-fixed bg-top bg-no-repeat"
            >
                <div class="text-center">
                    <h1
                        class="cursor-default text-xl font-light tracking-wider subpixel-antialiased sm:text-3xl md:text-4xl md:font-thin lg:text-6xl xl:text-7xl 2xl:text-8xl"
                    >
                        <span class="duration-500 hover:text-green-800">Nature|</span>
                        <span class="text-amber-800 duration-500">Wildlife</span> Photography
                    </h1>
                    <p
                        class="text-md font-thin subpixel-antialiased sm:text-lg md:text-xl lg:mt-5 lg:text-3xl xl:text-4xl 2xl:text-5xl"
                    >
                        Talha Can Havadar &amp; Bahanur Enis
                    </p>
                </div>
            </div>
        </div>

        <!-- <div class="flex h-screen snap-start items-center justify-center p-4">
            <p>Section 2</p>
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
