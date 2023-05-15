<template>
    <div class="post-card">
        <p class="post-card--subtitle">{{ subtitle }}</p>
        <h2 class="post-card--heading">{{ title }}</h2>
        <p class="post-card--intro">{{ postIntro }}</p>
        <button class="post-card--button">Find out more</button>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        subtitle: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        postIntro: {
            type: String,
            required: true,
        },
    }
}
</script>
