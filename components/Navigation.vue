<template>
    <div class="nav-content--right">
        <!-- nav-links -->
        <ul class="nav-links">
            <li class="nav-links--items"><NuxtLink to="/">Home</NuxtLink></li>
            <li class="nav-links--items"><NuxtLink to="/work">My Work</NuxtLink></li>
        </ul>
        <!-- Menu icon with click method -->
        <div v-on:click="openMobileNav()" id="mobile-menu">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
        <!-- Social Links -->
        <div class="social-group">
            <a href="" class="social-icons social-icons--black">
                <i class="lab la-twitter"></i>
            </a>
            <a href="" class="social-icons social-icons--black">
                <i class="lab la-linkedin-in"></i>
            </a>
            <a href="" class="social-icons social-icons--black">
                <i class="lab la-github"></i>
            </a>
        </div>
    </div>
</template>

<script allowJS>
export default {
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
