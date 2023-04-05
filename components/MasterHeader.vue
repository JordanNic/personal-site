<!-- This is the Master Header component that will be pulled into most pages -->
<template>
    <nav>
        <div class="container">
            <div class="nav-content">
                <div class="nav-content--left">
                    <div class="logo" :class="{ 'logo--black': logoBlack }"></div>
                </div>                
                <Navigation />
            </div>
        </div>
    </nav>
    <header class="header" :class="{ 'header--yellow': headerYellow }">
        <div class="container">
            <p>{{ tagLine }}</p>
            <h1>{{ title }}</h1>
            <p>{{ introText }}</p>
        </div>
    </header>
</template>

<script lang="ts">
export default {
    props: {
        logoBlack: Boolean,
        headerYellow: Boolean,
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
    }
}
</script>
