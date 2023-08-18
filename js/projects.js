const d = document,
	$nav = d.querySelector('nav'),
	$logo = d.querySelector('.logo-nav'),
	$categories = d.querySelectorAll('.category small')

const categoriesColor = {
	['java']: {
		background: 'rgb(177, 118, 0)',
		color: 'rgb(255 211 124)',
	},
	['estructura de datos']: {
		background: 'rgb(5 88 0)',
		color: 'rgb(82 255 103)',
	},
	['algoritmos']: {
		background: 'rgb(0 70 96)',
		color: 'rgb(74 188 255)',
	},
	['c']: {
		background: 'rgb(77 89 147)',
		color: 'rgb(255 255 255)',
	},
	['consola']: {
		background: 'rgb(96 0 80)',
		color: 'rgb(236 74 255)',
	},
	['javascript']: {
		background: '#b1b100',
		color: 'black',
	},
	['desarrollo web']: {
		background: 'rgb(0 126 66)',
		color: 'rgb(67,255,166)',
	},
	['frontend']: {
		background: 'rgb(0 93 126)',
		color: 'rgb(84 210 255)',
	},
}

function setCategoryColor() {
	$categories.forEach((category) => {
		let name = category.textContent
		name = name.toLocaleLowerCase()

		const color = categoriesColor[name].color,
			bg = categoriesColor[name].background

		category.style.color = color
		category.style.backgroundColor = bg
	})
}

function toggleLogo() {
	const y = window.scrollY
	if (y >= 200) {
		$logo.classList.remove('hidden')
		if (!$nav.classList.contains('nav-fixed')) {
			$nav.style.opacity = 0
			setTimeout(() => {
				$nav.style.opacity = 1
				$nav.classList.add('nav-fixed')
			}, 300)
		}
	} else {
		$logo.classList.add('hidden')
		$nav.classList.remove('nav-fixed')
	}
}

d.addEventListener('DOMContentLoaded', (e) => {
	setCategoryColor()
})

d.addEventListener('scroll', (e) => {
	toggleLogo()
})
