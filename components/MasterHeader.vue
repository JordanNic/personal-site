<!-- This is the Master Header component that will be pulled into most pages -->
<template>
    <header class="header" :class="{ 'header--yellow': headerYellow }">
        <div class="container">
            <BackButton />
            <p>{{ tagLine }}</p>
            <h1>{{ title }}</h1>
            <p>{{ introText }}</p>
        </div>
    </header>
</template>

<script lang="ts" allowJS>
export default {
    name: "MasterHeader",
    props: {
        headerYellow: {
            type: Boolean,
            required: true,
        },
        tagLine: {
            type: String,
            required: false,
        },
        title: {
            type: String,
            required: false,
        },
        introText: {
            type: String,
            required: false,
        },
    },
}
</script>
