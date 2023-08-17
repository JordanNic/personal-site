<template>
    <main class="container">
        <MasterHeader
        :headerYellow="false"
        :title="'My Work'" />
        <ContentList path="/blog" v-slot="{ list }">
            <article v-for="article in list" :key="article._path">
                <h2>{{ article.title }}</h2>
                <p>{{ article.description }}</p>
                <NuxtLink :to="`${article._path}`">Find out more</NuxtLink>
            </article>
        </ContentList>
    </main>
</template>

<script>

</script>
