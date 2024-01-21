<template>
	<nav>
		<div class="container">
			<div class="nav-content">
				<div class="nav-content--left">
					<NuxtLink to="/" class="logo--link" aria-label="Logo Link">
						<div class="logo logo--black"></div>
					</NuxtLink>
				</div>
				<div class="nav-content--right">
					<ul class="nav-links">
						<li class="nav-links--items">
							<NuxtLink to="/" aria-label="Home">Home</NuxtLink>
						</li>
						<li class="nav-links--items">
							<NuxtLink to="/my-blog" aria-label="Work"
								>Work</NuxtLink
							>
						</li>
					</ul>
					<div id="mobile-menu" @click="openMobileNav()">
						<div class="line1"></div>
						<div class="line2"></div>
						<div class="line3"></div>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		methods: {
			openMobileNav() {
				const burger = document.getElementById('mobile-menu')
				const navLinks = document.querySelector('.nav-links')
				// Toggle navigation on mobile
				navLinks.classList.toggle('nav-active')
				// Burger toggler
				burger.classList.toggle('toggle')
			},
		},
	}
</script>
