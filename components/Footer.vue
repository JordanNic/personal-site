<template>
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="logo logo--white"></div>
                <div class="social-group">
                    <a href="https://www.linkedin.com/in/jordan-nicholson/" class="social-icons social-icons--white" aria-label="My Linkedin Profile " target="_blank">
                        <i class="lab la-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/JordanNic" class="social-icons social-icons--white" aria-label="My Github Profile" target="_blank">
                        <i class="lab la-github"></i>
                    </a>
                </div>
                <p class="footer-content--copyright">
                    Site designs and build by Jordan Nicholson. Copyright {{ date }}
                </p>
                <ul class="footer-content--links">
                    <li class="footer-content--links__items">Terms & Conditions</li>
                    <li class="footer-content--links__items">Accessibility Statement</li>
                    <li class="footer-content--links__items">Privacy Policy</li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
// Will get the year and display in the date field above. 
const date = new Date().getFullYear();
</script>
