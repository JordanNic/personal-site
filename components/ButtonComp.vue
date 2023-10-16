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
	@import '../assets/scss/partials/variables';
	@import '../assets/scss/partials/mixins';

	button,
	.button {
		display: inline-block;
		padding: 13px 26px;
		min-height: 50px;
		border: none;
		font-size: $font-size;
		@include border-radius(8px);
		@include display-font-stack;
		text-decoration: none;
		background-color: $yellow;
		&:visited {
			color: $black;
		}
	}
</style>
