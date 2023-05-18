import { appendBurgerModal, toggleModal } from './modules/burger.js'

const d = document
const $services = d.querySelector('.navbar-services'),
	$header = d.querySelector('header'),
	$servicesCloned = $services.cloneNode(true)

function isMobileDevice() {
	const mobileRegex = [
		{ name: 'android', regex: /Android/i },
		{ name: 'ios', regex: /iPhone|iPad|iPod/i },
		{ name: 'blackberry', regex: /BlackBerry/i },
		{ name: 'windows', regex: /IEMobile/i },
		{ name: 'opera', regex: /Opera Mini/i },
	]

	const userAgent = navigator.userAgent

	const filtered = mobileRegex.filter((device) => {
		return device.regex.test(userAgent)
	})

	return filtered.length > 0
}

function sendClientMessage(message) {
	const prex = '593'
	const tel = `${prex}987091528`
	let encoded = encodeURIComponent(message)
	const desktop = `https://web.whatsapp.com/send?phone=${tel}&text=${encoded}`

	const mobile = `https://api.whatsapp.com/send/?phone=%2B${tel}&text=${encoded}&type=phone_number&app_absent=0`
	const url = isMobileDevice() ? mobile : desktop
	window.open(url, '_blank')
}

d.addEventListener('DOMContentLoaded', (e) => {
	appendBurgerModal($header, $servicesCloned)
})

d.addEventListener('click', ({ target }) => {
	const $burgerModal = $header.querySelector('.burger-modal')
	toggleModal(target, $burgerModal)
	if (target.matches('figure button')) {
		const $caption = target.parentElement
		const $price = $caption.querySelector('small')
		const price = $price.textContent
		const preposition = price.includes('Desde') ? '' : 'de'
		const product = target.dataset.product
		const message = `Hola, me interesa solicitar el servicio de ${product} que tiene un precio ${preposition} ${price}`
		sendClientMessage(message)
	}
})
