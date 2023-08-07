<template>
    <Navigation v-bind="navigationProps" />
    <MasterHeader v-bind="masterHeadProps" />
    <main class="container">
        <h1>Work page</h1>
        <section class="post">
            <Post
                v-for="post in posts"
                :key="post.id"
                :subtitle="post.subtitle"
                :title="post.title"
                :postIntro="post.postIntro"
                :slug="post.slug"
                :imageAlt="post.imageAlt"
                :imageUrl="post.imageUrl"
            />
        </section>
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
            },
            posts: [
                { id: 1, title: "Post Title", subtitle: "UI/UX", postIntro: "Lorem ipsum dolor sit amet consectetur. Morbi diam dictum ac mauris facilisis turpis at fringilla nulla.", slug: "nothing", imageAlt: "Image Alt", imageUrl: "placeholder-img.png" },
                { id: 2, title: "Post Title", subtitle: "UI/UX", postIntro: "Lorem ipsum dolor sit amet consectetur. Morbi diam dictum ac mauris facilisis turpis at fringilla nulla.", slug: "something", imageAlt: "Image Alt", imageUrl: "placeholder-img.png" },
            ],
        }
    }
}
</script>
