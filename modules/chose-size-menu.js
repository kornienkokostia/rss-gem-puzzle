import { onPauseBtnClick, onResumeBtnClick } from "./game-logic.js"

const onSizeClick = (el) => {
    const footerMenuSeparators = [...document.querySelectorAll('.size-menu-separator')]
    const footerMenuItems = [...document.querySelectorAll('.size-menu-item')].splice(6)
    const footerMenuItemsMobile = [...document.querySelectorAll('.size-menu-item')].splice(0, 6)
    footerMenuSeparators.map(el => el.classList.remove('separator-hidden'))
    if (el === footerMenuItems[0] || el === footerMenuItemsMobile[0]) {
        document.querySelector('.size-menu-current').style.transform = 'translateX(calc(0vh))'
        footerMenuSeparators[0].classList.add('separator-hidden')
        document.querySelector('.size-menu-current').setAttribute('current-value', "3")
    }
    if (el === footerMenuItems[1] || el === footerMenuItemsMobile[1]) {
        document.querySelector('.size-menu-current').style.transform = 'translateX(calc(17.409vh))'
        footerMenuSeparators[0].classList.add('separator-hidden')
        footerMenuSeparators[1].classList.add('separator-hidden')
        document.querySelector('.size-menu-current').setAttribute('current-value', "4")
    }
    if (el === footerMenuItems[2] || el === footerMenuItemsMobile[2]) {
        document.querySelector('.size-menu-current').style.transform = 'translateX(calc(34.818vh))'
        footerMenuSeparators[1].classList.add('separator-hidden')
        footerMenuSeparators[2].classList.add('separator-hidden')
        document.querySelector('.size-menu-current').setAttribute('current-value', "5")
    }
    if (el === footerMenuItems[3] || el === footerMenuItemsMobile[3]) {
        document.querySelector('.size-menu-current').style.transform = 'translateX(calc(52.227vh))'
        footerMenuSeparators[2].classList.add('separator-hidden')
        footerMenuSeparators[3].classList.add('separator-hidden')
        document.querySelector('.size-menu-current').setAttribute('current-value', "6")
    }
    if (el === footerMenuItems[4] || el === footerMenuItemsMobile[4]) {
        document.querySelector('.size-menu-current').style.transform = 'translateX(calc(69.636vh))'
        footerMenuSeparators[3].classList.add('separator-hidden')
        footerMenuSeparators[4].classList.add('separator-hidden')
        document.querySelector('.size-menu-current').setAttribute('current-value', "7")
    }
    if (el === footerMenuItems[5] || el === footerMenuItemsMobile[5]) {
        document.querySelector('.size-menu-current').style.transform = 'translateX(calc(87.085vh))'
        footerMenuSeparators[4].classList.add('separator-hidden')
        document.querySelector('.size-menu-current').setAttribute('current-value', "8")
    }
}

const onMenuBtnClick = () => {
    document.querySelector('.menu-btn-block').classList.toggle('menu-open')
    document.querySelector('.mobile-menu').classList.toggle('mobile-menu-opened')
    if (document.querySelector('.puzzle-block-wrapper')) {
        if (document.querySelector('.menu-btn-block').classList.contains('menu-open')) {
            onPauseBtnClick()
        } else {
            if (document.querySelector('.main-wrapper').getAttribute('isWon') === "no") {
                onResumeBtnClick()
            }
        }
    }
}

export {onSizeClick, onMenuBtnClick}