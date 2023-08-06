<template>
    <Navigation v-bind="navigationProps" />
    <MasterHeader v-bind="masterHeadProps" />
    <main class="container">
        <h1>Index page</h1>
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
            ></Post>
        </section>
    </main>
</template>

<script lang="ts">
export default {
    data() {
        return {
            navigationProps: {
                logoBlack: true,
                iconsBlack: true,
                blackText: true,
            },
            masterHeadProps: {
                logoBlack: true,
                headerYellow: true,
                tagLine: "Hi, I am Jordan and I am a", 
                title: "Product Designer",
                introText: "Nice to meet you! Over the past couple of years, I have been working with various tech companies in and around Devon, working to improve their customers experience.",
            },
            posts: [
                { id: 1, title: "Post Title", subtitle: "UI/UX", postIntro: "Lorem ipsum dolor sit amet consectetur. Morbi diam dictum ac mauris facilisis turpis at fringilla nulla.", slug: "nothing", imageAlt: "Image Alt", imageUrl: "placeholder-img.png" },
                { id: 2, title: "Post Title", subtitle: "UI/UX", postIntro: "Lorem ipsum dolor sit amet consectetur. Morbi diam dictum ac mauris facilisis turpis at fringilla nulla.", slug: "something", imageAlt: "Image Alt", imageUrl: "placeholder-img.png" },
            ],
        }
    }
}
</script>
