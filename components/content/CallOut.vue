<template>
	<section class="call-out">
		<h3>{{ heading }}</h3>
		<div class="call-out__logos">
			<p>logos to go here</p>
		</div>
	</section>
</template>

<script>
	export default {
		props: {
			heading: {
				type: String,
				required: true,
			},
		},
	}
</script>

<style lang="scss">
	@import '../../assets/scss/partials/variables';
	@import '../../assets/scss/partials/mixins';

	.call-out {
		background-color: $light-grey;
		padding: 20px;
		border-radius: 4px;
		display: flex;
		flex-wrap: wrap;
		text-align: center;
		flex-direction: column;
	}
</style>
