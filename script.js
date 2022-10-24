import { onSizeClick, onMenuBtnClick } from "./modules/chose-size-menu.js"
import { createDOM} from "./modules/create-elements.js"
import {onStartBtnClick, onPauseBtnClick, onResumeBtnClick, onItemsMove, onItemsDrag, onPlayAudioBtnClick} from "./modules/game-logic.js"
import { closeResults, showResults } from "./modules/results.js"
import { saveGame } from "./modules/save.js"
import { onCongratsCancelBtnClick, onCongratsPopupYesBtnClick } from "./modules/won.js"

createDOM()

const footerMenuItems = [...document.querySelectorAll('.size-menu-item')]
const footerMenuItemsMobile = [...document.querySelectorAll('.size-menu-item')].splice(0, 6)

if (localStorage.getItem('gameField')) {
    document.querySelector('.game-field').innerHTML = localStorage.getItem('gameField')
    document.querySelector('.moves-counter').innerHTML = localStorage.getItem('moves')
    document.querySelector('.time-counter').innerHTML = localStorage.getItem('time')
    document.querySelector('.results-block').innerHTML = localStorage.getItem('results')
    document.querySelector('.pause-btn').removeAttribute('disabled')
    document.querySelector('.save-btn').removeAttribute('disabled')
    document.querySelector('.results-btn').removeAttribute('disabled')
    document.querySelector('.resume-btn').removeAttribute('disabled')
    onPauseBtnClick()
    onItemsMove()
    onItemsDrag()
    onSizeClick(footerMenuItems[Number(localStorage.getItem('fieldSize'))-3])
    if (document.querySelector('.results-block').scrollHeight > document.querySelector('.results-block').clientHeight) {
        document.querySelector('.results-block-titles-wrapper').classList.add('results-block-scroll-margin')
    }   
}

document.querySelector('.start-btn').addEventListener('click', onStartBtnClick)
document.querySelector('.pause-btn').addEventListener('click', onPauseBtnClick)
document.querySelector('.resume-btn').addEventListener('click', onResumeBtnClick)
document.querySelector('.results-btn').addEventListener('click', showResults)
document.querySelector('.close-results-btn').addEventListener('click', closeResults)
document.querySelector('.congrats-start-new-game').addEventListener('click', onCongratsPopupYesBtnClick)
document.querySelector('.congrats-cancel').addEventListener('click', onCongratsCancelBtnClick)
document.querySelector('.save-btn').addEventListener('click', saveGame)
document.querySelector('.play-audio-block').addEventListener('click', onPlayAudioBtnClick)
document.querySelector('.menu-btn-block').addEventListener('click', onMenuBtnClick)
footerMenuItems.map(el => {el.addEventListener('click', () => {onSizeClick(el)})})
footerMenuItemsMobile.map(el => el.addEventListener('click', onMenuBtnClick))
