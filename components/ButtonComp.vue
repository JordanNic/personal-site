<template>
	<a v-if="href" :href="href" class="button">
		<slot />
	</a>
	<button v-else class="button">
		<slot />
	</button>
</template>

<script>
	export default {
		props: {
			href: {
				type: String,
				default: null,
			},
		},
	}
</script>

<style lang="scss" scoped>
	@use "/assets/scss/partials/helpers" as helper;

	button,
	.button {
		display: inline-block;
		padding: 13px 26px;
		min-height: 50px;
		border: none;
		font-size: helper.$font-size;
		@include helper.display-font-stack;
		font-weight: helper.$font-weight--heading;
		text-decoration: none;
		&:visited {
			color: helper.$black;
		}
	}
</style>
