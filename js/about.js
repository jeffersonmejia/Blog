const d = document,
	$nav = d.querySelector('nav'),
	$logo = d.querySelector('.logo-nav'),
	$contactMeSection = d.querySelector('footer')

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

function scrollContactMe() {
	const $highlightItems = $contactMeSection.querySelectorAll('a')

	$contactMeSection.scrollIntoView({ behavior: 'smooth' })

	setTimeout(() => {
		$highlightItems.forEach((el, index) => {
			if (index > 0) el.style.color = 'white'
		})
	}, 1000)
	setTimeout(() => {
		$highlightItems.forEach((el) => {
			el.style.color = 'var(--text-color-gray)'
		})
	}, 2000)
}

d.addEventListener('click', (e) => {
	if (e.target.matches('.contact-me-ancle')) {
		scrollContactMe()
	}
})
d.addEventListener('scroll', (e) => {
	if (window.innerWidth > 800) {
		toggleLogo()
	}
})
