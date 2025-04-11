<!-- This is the Master Header component that will be pulled into most pages -->
<template>
	<header class="header">
		<slot />
	</header>
</template>

<script lang="ts">
	export default {
		name: 'MasterHeader',
	}
</script>

<style lang="scss">
	header,
	.header {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		flex-flow: column;
		margin: 100px 0 40px;
		height: 30vh;
		h3 {
			margin-bottom: 10px;
		}
	}
</style>
