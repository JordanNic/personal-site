<template>
    <nav>
        <div class="container">
            <div class="nav-content">
                <div class="nav-content--left">
                    <NuxtLink to="/" class="logo--link">
                        <div class="logo" :class="{ 'logo--black': logoBlack }"></div>
                    </NuxtLink>
                </div>
                <div class="nav-content--right">
                    <!-- nav-links -->
                    <ul class="nav-links">
                        <li class="nav-links--items" :class="{ 'nav-links--items__black': blackText }"><NuxtLink to="/">Home</NuxtLink></li>
                        <li class="nav-links--items" :class="{ 'nav-links--items__black': blackText }"><NuxtLink to="/work">My Work</NuxtLink></li>
                    </ul>
                    <!-- Menu icon with click method -->
                    <div @click="openMobileNav()" id="mobile-menu">
                        <div class="line1"></div>
                        <div class="line2"></div>
                        <div class="line3"></div>
                    </div>
                    <!-- Social Links -->
                    <div class="social-group">
                        <a href="" class="social-icons" :class="{ 'social-icons--black': iconsBlack }">
                            <i class="lab la-twitter"></i>
                        </a>
                        <a href="" class="social-icons" :class="{ 'social-icons--black': iconsBlack }">
                            <i class="lab la-linkedin-in"></i>
                        </a>
                        <a href="" class="social-icons" :class="{ 'social-icons--black': iconsBlack }">
                            <i class="lab la-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script allowJS>
export default {
    name: "NavigationProps",
    props: {
        logoBlack: {
            type: Boolean,
            required: true,
        },
        iconsBlack: {
            type: Boolean,
            required: true,
        },
        blackText: {
            type: Boolean,
            required: true,
        },
    },
    methods: {
        openMobileNav() {
            const burger = document.getElementById("mobile-menu");
            const navLinks = document.querySelector(".nav-links");
            // Toggle navigation on mobile
            navLinks.classList.toggle("nav-active");
            // Burger toggler
            burger.classList.toggle("toggle");
        },
    },
};
</script>
