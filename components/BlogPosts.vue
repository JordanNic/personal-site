<template>
	<ContentList v-slot="{ list }" path="/blog">
		<section class="post">
			<article
				v-for="article in list"
				:key="article._path"
				class="post-card"
			>
				<div class="post-card__content">
					<NuxtImg
						:src="`${article.image}`"
						:alt="`${article.alt}`"
					/>
					<BlogTag>Something</BlogTag>
					<h2 class="post-card__content--heading">
						{{ article.title }}
					</h2>
					<p class="post-card__content--intro">
						{{ article.description }}
					</p>
					<NuxtLink :to="`${article._path}`" class="button"
						>Read more</NuxtLink
					>
				</div>
			</article>
		</section>
	</ContentList>
</template>

<script></script>

<style lang="scss">
	@use '/assets/scss/partials/helpers' as helper;

	.post {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 20px;
		&-card {
			width: 32%;
			background-color: helper.$white;
			@include helper.border-radius(16px);
			min-height: 370px;
			background-size: cover;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			padding: 24px;
			box-shadow: 0px 0px 2px rgba($color: helper.$black, $alpha: 0.3);
			&:hover {
				box-shadow: 0px 0px 8px rgba($color: helper.$black, $alpha: 0.2);
				transition: all 150ms ease-in-out;
			}
			&__content {
				width: 100%;
				img {
					width: 100%;
					height: auto;
					margin-bottom: 24px;
				}
				&--heading {
					@include helper.display-font-stack;
					margin: 12px 0;
				}
				&--intro {
					@include helper.font-stack;
				}
			}
		}
	}
</style>
