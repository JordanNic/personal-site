<template>
	<section class="content-block">
		<slot />
	</section>
</template>

<script lang="ts">
	export default {
		name: 'ContentBlock',
	}
</script>

<style lang="scss" scoped>
	.content-block {
		padding: 40px 0;
	}
</style>
