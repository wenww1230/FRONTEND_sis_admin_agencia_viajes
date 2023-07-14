<template>
	<aside :class="`${is_expanded ? 'is-expanded' : ''}`">
		<div class="logo">
			<img :src="logoURL" alt="Vue" /> 
		</div>

		<div class="menu-toggle-wrap">
			<button class="menu-toggle" @click="ToggleMenu">
				<span class="material-icons" style="color:white">>></span>
			</button>
		</div>

		<h3>Menu</h3>
		<div class="menu">
			<router-link to="/" class="button">
				<span class="material-icons"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path style="fill: white;" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg></span>
				<span class="text">Home</span>
			</router-link>
			<router-link to="/about" class="button">
				<span class="material-icons"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path style="fill: white;" d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"/></svg></span>
				<span class="text">About</span>
			</router-link>
			<router-link to="/team" class="button">
				<span class="material-icons"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path style="fill: white;" d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"/></svg></span>
				<span class="text">Team</span>
			</router-link>
			<router-link to="/contact" class="button">
				<span class="material-icons">
					<svg version="1.0" xmlns="http://www.w3.org/2000/svg" style="height: 38px;" viewBox="0 0 262.000000 209.000000" preserveAspectRatio="xMidYMid meet">
						<g transform="translate(0.000000,209.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
						<path style="fill: white;" d="M612 2043 c-23 -8 -62 -35 -87 -59 -68 -69 -75 -103 -75 -381 l0 -233 -66 0 c-59 0 -70 3 -101 30 -28 25 -42 30 -84 30 -45 0 -55 -4 -85 -34 -30 -30 -34 -40 -34 -86 0 -46 4 -56 34 -86 30 -30 40 -34 85 -34 42 0 56 5 84 30 31 27 42 30 100 30 l66 0 3 -317 c3 -305 4 -320 25 -359 25 -48 83 -101 129 -120 24 -10 80 -14 189 -14 l155 0 0 -170 c0 -157 2 -172 20 -190 11 -11 31 -20 44 -20 15 0 112 67 274 190 l251 190 236 0 c177 0 244 3 269 14 46 19 104 72 129 120 21 39 22 54 25 359 l3 317 66 0 c58 0 69 -3 100 -30 27 -24 43 -30 79 -30 65 0 99 21 119 75 17 43 17 47 0 90 -20 54 -54 75 -119 75 -36 0 -52 -6 -79 -30 -31 -27 -42 -30 -101 -30 l-66 0 0 238 c0 276 -7 309 -75 377 -77 77 -53 75 -804 74 -566 0 -672 -3 -709 -16z m1276 -371 c13 -7 32 -28 42 -45 19 -30 20 -52 20 -317 0 -265 -1 -287 -20 -317 -36 -60 -17 -58 -605 -58 -588 0 -569 -2 -605 58 -19 30 -20 52 -20 315 0 226 3 289 14 311 20 38 41 53 84 62 20 4 269 6 552 6 405 -2 520 -5 538 -15z"/>
						<path style="fill: white;" d="M864 1396 c-30 -30 -34 -40 -34 -86 0 -46 4 -56 34 -86 29 -29 41 -34 80 -34 67 0 101 21 121 75 17 43 17 47 0 90 -20 54 -54 75 -121 75 -39 0 -51 -5 -80 -34z"/>
						<path style="fill: white;" d="M1614 1396 c-30 -30 -34 -40 -34 -86 0 -46 4 -56 34 -86 29 -29 41 -34 80 -34 67 0 101 21 121 75 17 43 17 47 0 90 -20 54 -54 75 -121 75 -39 0 -51 -5 -80 -34z"/>
						</g>
					</svg>
				</span>
				<span class="text">Chatbot</span>
			</router-link>
		</div>

		<div class="flex"></div>
		
		<div class="menu">
			<router-link to="/settings" class="button">
				<span class="material-icons">settings</span>
				<span class="text">Settings</span>
			</router-link>
		</div>
	</aside>
</template>

<script setup>
import { ref } from 'vue'
import logoURL from '../../assets/users/cara.jpg'

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
	localStorage.setItem("is_expanded", is_expanded.value)
}
</script>

<style lang="scss" scoped>
aside {
	display: flex;
	flex-direction: column;

	background-color: rgb(33, 2, 83);
	color: var(--light);

	width: calc(2rem + 32px);
	overflow: hidden;
	min-height: 100vh;
	padding: 1rem;

	transition: 0.2s ease-in-out;

	.flex {
		flex: 1 1 0%;
	}

	.logo {
		margin-bottom: 1rem;

		img {
			width: 2rem;
		}
	}

	.menu-toggle-wrap {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 1rem;

		position: relative;
		top: 0;
		transition: 0.2s ease-in-out;

		.menu-toggle {
  transition: 0.2s ease-in-out;
  .material-icons {
    font-size: 2rem;
    color: var(--light);
    transition: 0.2s ease-out;
  }
  
  &:hover {
    .material-icons {
      color: var(--primary);
      transform: translateX(0.5rem);
    }
  }
}
	}

	h3, .button .text {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
		color: white;
	}

	h3 {
		color: var(--grey);
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}

	.menu {
		margin: 0 -1rem;

		.button {
			display: flex;
			align-items: center;
			text-decoration: none;

			transition: 0.2s ease-in-out;
			padding: 0.5rem 1rem;

			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-in-out;
			}
			.text {
				color: white;
				transition: 0.2s ease-in-out;
			}

			&:hover {
				/* background-color: var(--dark-alt); */

				.material-icons, .text {
					/* color: var(--primary); */
				}
			}

			&.router-link-exact-active {
				background-color: var(--dark-alt);
				border-right: 5px solid var(--primary);

				.material-icons, .text {
					color: var(--primary);
				}
			}
		}
	}

	.footer {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;

		p {
			font-size: 0.875rem;
			color: var(--grey);
		}
	}

	&.is-expanded {
		width: var(--sidebar-width);

		.menu-toggle-wrap {
			top: -3rem;
			
			.menu-toggle {
				transform: rotate(-180deg);
			}
		}

		h3, .button .text {
			opacity: 1;
		}

		.button {
			.material-icons {
				margin-right: 1rem;
			}
		}

		.footer {
			opacity: 0;
		}
	}

	@media (max-width: 1024px) {
		position: absolute;
		z-index: 99;
	}
}
</style>