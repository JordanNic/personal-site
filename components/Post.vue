<template>
    <div class="post-card">
        <img :src="`/img/${imageUrl}`" :alt="`${imageAlt}`" />
        <div class="post-card__content">
            <div class="post-card__content--left">
                <p class="subtitle">{{ subtitle }}</p>
                <h2 class="heading">{{ title }}</h2>
            </div>
            <div class="post-card__content--right">
                <NuxtLink :to="`/posts/${slug}`" class="button">Find out more</NuxtLink>
            </div>
        </div>
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
            required: false,
        },
        imageUrl: {
            type: String,
            required: false,
        },
        imageAlt: {
            type: String,
            required: false,
        },
        slug: {
            type: String,
            required: true,
        }
    }
}
</script>
