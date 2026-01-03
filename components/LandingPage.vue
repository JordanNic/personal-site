<template>
	<main class="container">
		<div class="landing-page">
			<div class="landing-page__left">
				<h1>Hello, I’m Jordan! Senior UI/UX Designer</h1>
				<p>As a designer, I enjoy being able to make a real difference, helping everyone enjoy the experience they have online.</p>
				<p>I'm currently working on my website, but if you fancy having a chat, feel free to get in touch below.</p>
				<SocialIcons />
			</div>
			<div class="landing-page__right">
				<NuxtImg src="/img/notion-face.png" />
			</div>
		</div>
	</main>
</template>

<style lang="scss">
	@use "/assets/scss/partials/helpers" as helper;

	.landing-page {
		display: flex;
		justify-content: center;
		flex-flow: row;
		width: 100%;
		height: 100vh;
		align-items: center;
		&__left, &__right {
			width: 50%;
			img {
				width: 100%;
				height: auto;
				max-width: 600px;
				display: block;
				@media screen and (max-width: helper.$break-medium) {
					width: 70%;
					margin: 0 auto;
				}
			}
		}
		@media screen and (max-width: helper.$break-medium) {
			flex-flow: column-reverse;
			justify-content: flex-end; // Used flex-end as the column is reversed.
			&__left {
				width: 100%;
			}
			&__right {
				width: 100%;
				margin: 1.5rem 0;
			}
		}
	}
</style>
