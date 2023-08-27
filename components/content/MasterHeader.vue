<!-- This is the Master Header component that will be pulled into most pages -->
<template>
    <header class="header" :class="{ 'header--yellow': headerYellow }">
        <div class="container">
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

<style lang="scss">
@import "../../assets/scss/partials/variables";
@import "../../assets/scss/partials/mixins";

header, .header {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    margin: 100px 0 40px;
    background-color: $black;
    height: 50vh;
    border-radius: 32px;
    &--yellow {
        background-color: $yellow;
        h1, p {
            color: $black !important;
        }
        .go-back {
            display: none;
        }
    }
    h1 {
        @include display-font-stack;
        font-size: 48px;
        line-height: 1.7em;
        margin-bottom: 0;
        color: $white;
    }
    p {
        width: 50%;
        @include font-stack;
        font-size: 20px;
        line-height: 1.5;
        color: $white;
    }
}
</style>
