<template>
	<footer>
		<div class="container">
			<div class="footer-content">
				<NuxtLink to="/" class="logo--link" aria-label="Logo Link">
					<div class="logo logo--white"></div>
				</NuxtLink>
				<div class="social-group">
					<a
						href="https://github.com/JordanNic"
						class="social-icons social-icons--white"
						aria-label="My Github Profile"
						target="_blank"
					>
						<i class="lab la-github"></i>
					</a>
					<a
						href="https://www.linkedin.com/in/jordan-nicholson/"
						class="social-icons social-icons--white"
						aria-label="My Linkedin Profile "
						target="_blank"
					>
						<i class="lab la-linkedin-in"></i>
					</a>
					<a
						href="https://www.instagram.com/jordan_nic/"
						class="social-icons social-icons--white"
						aria-label="My Instagram Profile"
						target="_blank"
					>
						<i class="lab la-instagram"></i>
					</a>
				</div>
				<p class="footer-content--copyright">
					Site designed and built by Jordan Nicholson. Copyright
					{{ date }}
				</p>
				<ul class="footer-content--links">
					<li class="footer-content--links__items">
						<NuxtLink
							to="/accessibility-statement"
							aria-label="Accessibility Statement"
						>
							Accessibility Statement
						</NuxtLink>
					</li>
					<li class="footer-content--links__items">
						<NuxtLink
							to="/privacy-policy"
							aria-label="Privacy Policy"
						>
							Privacy Policy
						</NuxtLink>
					</li>
				</ul>
			</div>
		</div>
	</footer>
</template>

<script lang="ts" setup>
	// Will get the year and display in the date field above.
	const date = new Date().getFullYear()
</script>

<style lang="scss">
	@use "/assets/scss/partials/helpers" as helpers;

	.social-group {
		display: flex;
		justify-content: flex-end;
		gap: 16px;
		margin-left: 16px;
		.social-icons {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 50px;
			height: 50px;
			text-decoration: none;
			color: $white;
			font-size: 30px;
			&--black {
				color: helpers.$black !important;
			}
		}
	}

	footer {
    background-color: helper.$black;
    margin-top: 40px;
    @include helper.font-stack;
    @media screen and (max-width: helper.$break-small) {
        .logo {
            grid-column: 1;
            grid-row: 1;
        }
    }
    .footer-content {
        width: 100%;
        display: grid;
        grid-template-columns: auto auto;
        gap: 30px;
        padding: 60px 0px;
        max-width: 1620px;
        margin: 0 auto;
        font-family: helper.$font-family--default;
        font-weight: helper.$font-weight--default;
        @media screen and (max-width: helper.$break-small) {
            padding: 40px 0;
            gap: 20px;
        }
        &--copyright {
            color: helper.$white;
            display: flex;
            justify-content: flex-start;
            opacity: 0.7;
            @media screen and (max-width: helper.$break-small) {
                grid-column: 1 / span 2;
                grid-row: 3;
                font-size: 14px;
                justify-content: flex-start;
            }
        }
        &--links {
            display: flex;
            justify-content: flex-end;
            align-items: left;
            list-style: none;
            margin: 0;
            padding: 0;
            gap: 16px;
            @media screen and (max-width: helper.$break-small) {
                grid-column: 1 / span 2;
                grid-row: 2;
                font-size: 14px;
                justify-content: flex-start;
                flex-flow: column;
            }
            &__items {
                a {
                    display: flex;
                    color: helper.$white;
                    text-decoration: underline;
                    opacity: 0.7;
                    @media screen and (max-width: helper.$break-small) {
                        justify-content: space-between;
                        margin: 8px 0 !important;
                    }
                    &:hover {
                        text-decoration: underline;
                        cursor: pointer;
                    }
                }
            }
        }
    }
}

</style>
