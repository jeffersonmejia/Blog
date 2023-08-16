const d = document,
	$nav = d.querySelector('nav'),
	$logo = d.querySelector('.logo-nav')

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

d.addEventListener('scroll', (e) => {
	toggleLogo()
})
