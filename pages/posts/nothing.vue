<template>
    <Navigation v-bind="navigationProps" />
    <MasterHeader v-bind="masterHeadProps" />
    <main class="container">
        <h1>{{ masterHeadProps.title }}</h1>
    </main>
</template>

<script lang="ts">
export default {
    data() {
        return {
            navigationProps: {
                logoBlack: false,
                iconsBlack: false,
                blackText: false,
            },
            masterHeadProps: {
                logoBlack: false,
                headerYellow: false,
                tagLine: "UI",
                title: "Nothing",
                introText: "Something"
            }
        }
    }
}
</script>