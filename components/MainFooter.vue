<template>
	<footer>
		<div class="container">
			<div class="footer-content">
				<div class="footer-content--left">
					<NuxtLink to="/" class="logo--link" aria-label="Logo Link">
						<NuxtImg
							class="footer-content--left__logo"
							src="/img/notion-face.png"
						/>
					</NuxtLink>
					<div class="footer-content--left__copyright">
						<p>Site designed and built by Jordan Nicholson.</p>
						<p>Copyright {{ date }}</p>
					</div>
				</div>
				<ul class="footer-content--right">
					<li class="footer-content--right__items">
						<NuxtLink
							to="/accessibility"
							aria-label="Accessibility Statement"
						>
							Accessibility
						</NuxtLink>
					</li>
					<li class="footer-content--right__items">
						<NuxtLink to="/privacy" aria-label="Privacy Policy">
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

<style lang="scss">
	@use '/assets/scss/partials/helpers' as helper;

	footer {
		background-color: helper.$white;
		margin-top: 40px;
		@include helper.font-stack;
		border-top: 1px solid helper.$medium-grey;
		.footer-content {
			width: 100%;
			display: flex;
			flex-flow: row;
			justify-content: space-between;
			align-items: center;
			padding: 32px 0px;
			max-width: 1620px;
			margin: 0 auto;
			font-family: helper.$font-family--default;
			font-weight: helper.$font-weight--default;
			@media screen and (max-width: helper.$break-small) {
				flex-flow: column;
				align-items: flex-start;
			}
			&--left {
				display: flex;
				width: auto;
				align-items: center;
				@media screen and (max-width: helper.$break-small) {
					align-items: flex-start;
					flex-flow: column;
				}
				&__copyright {
					color: helper.$black;
					display: flex;
					flex-flow: column;
					p {
						font-size: 14px;
						margin: 4px;
					}
				}
				&__logo {
					margin-right: 12px;
					width: 60px;
					height: 60px;
				}
			}
			&--right {
				display: flex;
				width: auto;
				justify-content: flex-end;
				align-items: left;
				list-style: none;
				margin: 0;
				padding: 0;
				gap: 16px;
				font-size: 14px;
				&__items {
					a {
						display: flex;
						color: helper.$black;
						text-decoration: underline;
						@media screen and (max-width: helper.$break-small) {
							justify-content: space-between;
							margin: 8px 0 !important;
						}
						&:hover {
							text-decoration: underline;
							cursor: pointer;
						}
					}
				}
			}
			@media screen and (max-width: helper.$break-small) {
				padding: 24px 0;
				gap: 16px;
			}
			&--copyright {
				color: helper.$black;
				display: flex;
				justify-content: flex-start;
				@media screen and (max-width: helper.$break-small) {
					grid-column: 1 / span 2;
					grid-row: 3;
					font-size: 14px;
					justify-content: flex-start;
				}
			}
		}
	}
</style>
