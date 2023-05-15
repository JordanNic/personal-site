<template>
    <Navigation v-bind="navigationProps" />
    <MasterHeader v-bind="masterHeadProps" />
    <main class="container">
        <h1>Work page</h1>
    </main>
</template>

<script lang="ts">
export default {
    data() {
        return {
            navigationProps: {
                logoBlack: false,
                iconsBlack: false,
            },
            masterHeadProps: {
                logoBlack: false,
                headerYellow: false,
                tagLine: "UI",
                title: "Title of project",
                introText: "Something"
            }
        }
    }
}
</script>
