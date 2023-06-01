class navigation {
	// Responsible for navigation/navbar
	pos = window.scrollY

	init = () => {
		this.burgerBtn = document.querySelector('.burger-btn')
		this.navMobile = document.querySelector('.nav-mobile')
		this.navBar = document.querySelector('.nav')
		this.navLinks = document.querySelectorAll('.nav__link')
		this.navLinksMobile = document.querySelectorAll('.nav-mobile__link')

		this.handleListeners()
	}

	showMenu = () => {
		this.navMobile.classList.toggle('show')
	}

	hideMenu = () => {
		// When the link has been clicked (mobile navigation)
		this.navMobile.classList.remove('show')
	}

	checkScroll = () => {
		// If you scroll down navbar disappear
		if (this.pos < window.scrollY) {
			this.navBar.style.opacity = 0
			this.navBar.style.zIndex = -100
		} else if (this.pos > window.scrollY) {
			this.navBar.style.opacity = 1
			this.navBar.style.zIndex = 100
		}
		this.pos = window.scrollY
	}

	handleListeners = () => {
		this.burgerBtn.addEventListener('click', this.showMenu)
		this.navLinksMobile.forEach(link => link.addEventListener('click', this.hideMenu))
		document.addEventListener('scroll', this.checkScroll)
	}
}

class offerCards {
	// Responsible for change button color when mouseon in offerCards
	init = () => {
		this.cards = document.querySelectorAll('.offer__card')

		this.handleListeners()
	}

	addBtnColor = e => {
		// let btn = e.target.lastElementChild
		// btn.classList.add('offerbtn-color')
		let btn = e.target.querySelector('.offer__btn')
		btn.classList.add('offerbtn-color')
	}

	removeBtnColor = e => {
		let btn = e.target.querySelector('.offer__btn')
		btn.classList.remove('offerbtn-color')
	}

	handleListeners = () => {
		this.cards.forEach(card => card.addEventListener('mouseenter', this.addBtnColor))
		this.cards.forEach(card => card.addEventListener('mouseleave', this.removeBtnColor))
	}
}

class year {
	// Responsible for year in the footer
    init = () => {
        this.year = document.querySelector('.year')

        this.handleYear()
    }

    handleYear = () => {
        let date = new Date().getFullYear()
        this.year.textContent = date + " "
    }
}

const menu = new navigation()
const offer = new offerCards()
const checkYear = new year()

window.addEventListener('load', () => {
	menu.init(), offer.init(), checkYear.init()
})
