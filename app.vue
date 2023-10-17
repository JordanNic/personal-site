<template>
	<MainNavigation />
	<NuxtPage />
	<MainFooter />
	<!--<LandingPage />-->
</template>

<script allowJS>
	export default {
		watch: {
			$route() {
				document
					.querySelector('.nav-links')
					.classList.remove('nav-active')
				document
					.querySelector('#mobile-menu')
					.classList.remove('toggle')
			},
		},
	}
</script>
