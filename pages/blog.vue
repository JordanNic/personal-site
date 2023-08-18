<template>
    <main class="container">
        <MasterHeader
        :headerYellow="false"
        :title="'My Work'" />
        <ContentList path="/blog" v-slot="{ list }">
            <article v-for="article in list" :key="article._path">
                <img v-if="article.image" :src="article.image" :alt="article.alt" />
                <h2>{{ article.title }}</h2>
                <p>{{ article.description }}</p>
                <NuxtLink :to="`${article._path}`" class="button">Find out more</NuxtLink>
            </article>
        </ContentList>
    </main>
</template>

<script>

</script>
