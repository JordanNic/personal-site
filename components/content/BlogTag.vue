<!-- eslint-disable vue/no-multiple-template-root -->
<template>
	<div class="blog-tag">
		<slot />
	</div>
</template>

<script lang="ts">
	export default {
		name: 'BlogTag',
	}
</script>

<style lang="scss" scoped>
	@use '/assets/scss/partials/helpers' as helper;

	.blog-tag {
		display: inline-block;
		background: helper.$off-white;
		padding: 4px 6px;
		margin-bottom: 12px;
		@include helper.border-radius(4px);
		border: 1px solid helper.$medium-grey;
		@include helper.font-stack;
		font-weight: 700;
		font-size: 14px;
		text-transform: uppercase;
	}
</style>
