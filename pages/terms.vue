<template>
    <div class="px-16 pt-32">
        <div v-html="terms"></div>
    </div>
</template>

<script>
export default {
    data() {
        return { terms: '' }
    },

    async asyncData({ $content }) {
        const data = await $content('legal-docs').fetch()
        return { terms: data.terms }
    },
}
</script>
