<template>
    <div class="post-card">
        <img src="@/assets/images/placeholder-img.png" alt="${imageAlt}" />
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
        imageUrl: {
            type: String,
            required: false,
        },
        imageAlt: {
            type: String,
            required: false,
        },
    }
}
</script>
