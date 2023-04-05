<template>
    <MasterHeader v-bind="masterHeadProps" />
    <main class="container">
        <h1>Index page</h1>
    </main>
</template>

<script lang="ts">
export default {
    data() {
        return {
            masterHeadProps: {
                logoBlack: true,
                headerYellow: true,
                tagLine: "Hi, I am Jordan and I am a", 
                title: "Product Designer",
                introText: "Nice to meet you! Over the past couple of years, I have been working with various tech companies in and around Devon, working to improve their customers experience.",
            },
        }
    }
}
</script>
