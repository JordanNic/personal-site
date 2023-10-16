<template>
	<ContentList v-slot="{ list }" path="/blog">
		<section class="post">
			<article
				v-for="article in list"
				:key="article._path"
				:style="{ backgroundImage: `url(${article.image})` }"
				:alt="`${article.alt}`"
				class="post-card"
			>
				<div class="post-card__content">
					<h2 class="post-card__content--heading">
						{{ article.title }}
					</h2>
					<p class="post-card__content--intro">
						{{ article.description }}
					</p>
					<Button :href="`${article._path}`">Find out more</Button>
				</div>
			</article>
		</section>
	</ContentList>
</template>

<script></script>

<style lang="scss">
	@import '../assets/scss/partials/variables';
	@import '../assets/scss/partials/mixins';

	.post {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 20px;
		&-card {
			width: 49%;
			background-color: $light-grey;
			@include border-radius(16px);
			min-height: 370px;
			background-size: cover;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			padding: 20px;
			&__content {
				width: 100%;
				&--heading {
					@include display-font-stack;
					margin-bottom: 0;
				}
				&--intro {
					@include font-stack;
				}
			}
		}
	}
</style>
