<template>
	<main class="container">
		<div class="landing-page">
			<div class="logo logo--white"></div>
			<h1>Product Designer</h1>
			<h2>Jordan Nicholson</h2>
			<p>
				Nice to meet you! I'm currently rebuilding my website, if you
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
	@use "/assets/scss/partials/helpers" as helper;

	body {
		background-color: helper.$black;
	}

	.landing-page {
		display: flex;
		justify-content: center;
		flex-flow: column;
		width: 100%;
		height: 100vh;
		align-items: flex-start;
		@media screen and (max-width: helper.$break-small) {
			padding: 0 10px;
		}
		.logo {
			margin-bottom: 20px;
		}
		.social-group {
		display: flex;
		justify-content: flex-end;
		gap: 16px;
			.social-icons {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 50px;
				height: 50px;
				text-decoration: none;
				color: helper.$white;
				font-size: 30px;
				&--black {
					color: helper.$black !important;
				}
			}
		}
	}

	h1 {
		@include helper.display-font-stack;
		font-weight: helper.$font-weight--heading;
		color: helper.$white;
		margin-bottom: 0;
		font-size: 4rem;
		@media screen and (max-width: helper.$break-small) {
			font-size: 2rem;
		}
	}

	h2 {
		@include helper.font-stack;
		color: helper.$white;
	}

	p {
		@include helper.font-stack;
		color: helper.$white;
		text-align: left;
		max-width: 40%;
		@media screen and (max-width: helper.$break-small) {
			max-width: 100%;
		}
	}
</style>
