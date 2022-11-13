<template>
    <div class="px-16 pt-32">
        <div v-html="refund"></div>
    </div>
</template>

<script>
export default {
    data() {
        return { refund: '' }
    },

    async asyncData({ $content }) {
        const data = await $content('legal-docs').fetch()
        return { refund: data.refund }
    },
}
</script>
