<!-- ProjectCard.vue component -->

<template>
	<article
		class="project-card"
		:class="{ 'project-card--featured': featured }"
	>
		<NuxtImg
			:src="project.cover"
			:alt="project.coverAlt"
			width="600"
			height="400"
			format="webp"
			loading="lazy"
		/>
		<div class="project-card__body">
			<BlogTag>{{ project.tag }}</BlogTag>
			<h3 class="project-card__title">
				<NuxtLink :to="project.path">{{ project.title }}</NuxtLink>
			</h3>
			<p>{{ project.description }}</p>
		</div>
	</article>
</template>

<script setup lang="ts">
	defineProps<{
		project: {
			path: string
			title: string
			description?: string
			cover: string
			coverAlt: string
			tag: string
		}
		featured?: boolean
	}>()
</script>

<style lang="scss" scoped>
	@use '/assets/scss/partials/helpers' as helper;

	.project-card {
		position: relative;
		display: flex;
		flex-flow: column;
		gap: 16px;
		padding: 24px;
		background: helper.$white;
		border: 1px solid helper.$medium-grey;
		@include helper.border-radius(16px);
		&:focus-within {
			outline: 2px solid helper.$black;
		}
		img {
			width: 100%;
			height: auto;
		}
		&__title {
			// Reset the global h3 "label" style for card titles
			text-transform: none;
			letter-spacing: normal;
			opacity: 1;
			font-size: 24px;
			a {
				color: inherit;
				text-decoration: none;
				// Stretched link: the whole card is clickable
				&::after {
					content: '';
					position: absolute;
					inset: 0;
				}
			}
		}
		&--featured {
			@media screen and (min-width: helper.$break-medium) {
				flex-flow: row;
				align-items: center;
				.project-card__title {
					font-size: 36px;
				}
				img,
				.project-card__body {
					width: 50%;
				}
			}
		}
	}
</style>
