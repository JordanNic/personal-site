<template>
	<main class="container">
		<div class="landing-page">
			<div class="logo logo--white"></div>
			<h1>Product Designer</h1>
			<h2>Jordan Nicholson</h2>
			<p>
				Nice to meet you! I'm currently rebuidling my website, if you
				wish to chat please get in touch by following one of the links
				below.
			</p>
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
		</div>
	</main>
</template>

<style lang="scss">
	@import '../assets/scss/partials/variables';
	@import '../assets/scss/partials/mixins';

	body {
		background-color: $black;
	}

	.landing-page {
		display: flex;
		justify-content: center;
		flex-flow: column;
		width: 100%;
		height: 100vh;
		align-items: flex-start;
		@media screen and (max-width: $break-small) {
			align-items: center;
		}
		.logo {
			margin-bottom: 20px;
		}
		.social-group {
			margin-left: 0;
			gap: 40px;
			.social-icons {
				width: auto;
			}
		}
	}

	h1 {
		@include display-font-stack;
		color: $white;
		margin-bottom: 0;
		font-size: 4rem;
		@media screen and (max-width: $break-small) {
			font-size: 2.25rem;
		}
	}

	h2 {
		@include font-stack;
		color: $white;
	}

	p {
		@include font-stack;
		color: $white;
		text-align: left;
		max-width: 40%;
		@media screen and (max-width: $break-small) {
			text-align: center;
		}
	}
</style>
