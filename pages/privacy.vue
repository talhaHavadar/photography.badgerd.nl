<template>
    <div class="px-16 pt-32">
        <div v-html="privacy"></div>
    </div>
</template>

<script>
export default {
    data() {
        return { privacy: '' }
    },

    async asyncData({ $content }) {
        const data = await $content('legal-docs').fetch()
        return { privacy: data.privacy }
    },
}
</script>
