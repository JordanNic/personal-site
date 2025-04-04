<template>
	<button class="go-back" @click="goBack">
		<i class="las la-arrow-left"></i>
		Go Back
	</button>
</template>

<script lang="ts">
	export default {
		name: 'BackButton',
		methods: {
			// The goBack function will take the user back one step in the router.
			goBack() {
				return this.$router.go(-1) // Change -1 to another number to go back further than one page.
			},
		},
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/scss/partials/variables';

	.go-back {
		cursor: pointer;
		background-color: $black;
		color: $white;
		width: 100%;
		position: absolute;
		left: 0;
		border: none;
		justify-content: flex-start;
		//border: 1px solid $white;
		//padding: 10px 20px;
		//max-width: fit-content;
		//border-radius: 22px;
		i {
			line-height: 1em;
			margin-right: 5px;
			padding-top: 3px;
		}
	}
</style>
