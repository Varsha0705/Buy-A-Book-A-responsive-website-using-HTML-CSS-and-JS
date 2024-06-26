
const searchButton = document.getElementById('search-button'),
    searchClose = document.getElementById('search-close'),
    searchContent = document.getElementById('search-content')

if (searchButton) {
    searchButton.addEventListener('click', () => {
        searchContent.classList.add('show-search')
    })
}

if (searchClose) {
    searchClose.addEventListener('click', () => {
        searchContent.classList.remove('show-search')
    })
}

const loginButton = document.getElementById('login-button'),
    loginClose = document.getElementById('login-close'),
    loginContent = document.getElementById('login-content')

if (loginButton) {
    loginButton.addEventListener('click', () => {
        loginContent.classList.add('show-login')
    })
}

if (loginClose) {
    loginClose.addEventListener('click', () => {
        loginContent.classList.remove('show-login')
    })
}

const shadowHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll',shadowHeader)

document.addEventListener('DOMContentLoaded', function () {
    let swiperHome = new Swiper('.home__swiper', {
        loop: true,
        spaceBetween: 10,
        grabCursor: true,
        slidesPerView: 'auto',
        centeredSlides: 'auto',

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1220: {
                spaceBetween: -12,
            }
        }

    })
});

document.addEventListener('DOMContentLoaded', function () {
    let swiperFeatured = new Swiper('.featured__swiper', {
        loop: true,
        spaceBetween: 16,
        grabCursor: true,
        slidesPerView: 'auto',
        centeredSlides: 'auto',

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',

        },

        breakpoints: {
            1150: {
                slidesPerView: 3,
                centeredSlides: false,
            }
        }

    })
});

document.addEventListener('DOMContentLoaded', function () {
    let swiperNew = new Swiper('.new__swiper', {
        loop: true,
        spaceBetween: 16,
        slidesPerView: 'auto',

        breakpoints: {
            1150: {
                slidesPerView: 3,
            }
        }

    })
});

const scrollUp=() => {
    const scrollUp=document.getElementById('scroll-up')
    this.scrollY>=350?scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-lie' : 'ri-sun-line'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

