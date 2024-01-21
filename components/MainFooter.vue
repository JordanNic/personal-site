<template>
	<footer>
		<div class="container">
			<div class="footer-content">
				<NuxtLink to="/" class="logo--link" aria-label="Logo Link">
					<div class="logo logo--white"></div>
				</NuxtLink>
				<div class="social-group">
					<a
						href="https://github.com/JordanNic"
						class="social-icons social-icons--white"
						aria-label="My Github Profile"
						target="_blank"
					>
						<i class="lab la-github"></i>
					</a>
					<a
						href="https://www.linkedin.com/in/jordan-nicholson/"
						class="social-icons social-icons--white"
						aria-label="My Linkedin Profile "
						target="_blank"
					>
						<i class="lab la-linkedin-in"></i>
					</a>
					<a
						href="https://www.instagram.com/jordan_nic/"
						class="social-icons social-icons--white"
						aria-label="My Instagram Profile"
						target="_blank"
					>
						<i class="lab la-instagram"></i>
					</a>
				</div>
				<p class="footer-content--copyright">
					Site designed and built by Jordan Nicholson. Copyright
					{{ date }}
				</p>
				<ul class="footer-content--links">
					<li class="footer-content--links__items">
						<NuxtLink
							to="/accessibility-statement"
							aria-label="Accessibility Statement"
						>
							Accessibility Statement
						</NuxtLink>
					</li>
					<li class="footer-content--links__items">
						<NuxtLink
							to="/privacy-policy"
							aria-label="Privacy Policy"
						>
							Privacy Policy
						</NuxtLink>
					</li>
				</ul>
			</div>
		</div>
	</footer>
</template>

<script lang="ts" setup>
	// Will get the year and display in the date field above.
	const date = new Date().getFullYear()
</script>
