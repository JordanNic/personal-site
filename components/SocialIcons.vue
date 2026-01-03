<template>
    <div class="social-group">
        <a
            href="https://www.linkedin.com/in/jordan-nicholson/"
            class="social-icons social-icons--white"
            aria-label="My Linkedin Profile"
            target="_blank"
        >
            <i class="lab la-linkedin-in"></i>
        </a>
        <a
            href="https://github.com/JordanNic"
            class="social-icons social-icons--white"
            aria-label="My Github Profile"
            target="_blank"
        >
            <i class="lab la-github"></i>
        </a>
    </div>
</template>

<style lang="scss">
    @use "/assets/scss/partials/helpers" as helper;

    .social-group {
        display: flex;
        justify-content: flex-start;
        gap: 16px;
        padding-top: 1rem;
        .social-icons {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            text-decoration: none;
            color: helper.$black;
            background-color: helper.$white;
            font-size: 30px;
            border: 1px solid helper.$black;
            border-radius: 8px;
            @include helper.transition;
            &:hover {
                border: 2px solid helper.$black;
            }
        }
    }
</style>
