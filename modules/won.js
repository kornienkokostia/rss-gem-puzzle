import { onPauseBtnClick, onStartBtnClick } from "./game-logic.js"
import { addResult } from "./results.js"

const checkIfWon = () => {
    const currentArr = [...document.querySelectorAll('.piece')]
        .map(el => el.classList.contains('empty-piece') ? 0 : Number(el.innerHTML))
    const soretedArr = [...currentArr].sort((a, b) => a - b)
    soretedArr.push(soretedArr.shift())

    if (JSON.stringify(currentArr) === JSON.stringify(soretedArr)) {
        addResult()
        document.querySelector('.main-wrapper').setAttribute('isWon', "yes")
        document.querySelector('.results-block').scrollTo({ top: document.querySelector('.results-block').scrollHeight, 
        behavior: 'smooth' })
        if (document.querySelector('.results-block').scrollHeight > document.querySelector('.results-block').clientHeight) {
            document.querySelector('.results-block-titles-wrapper').classList.add('results-block-scroll-margin')
        }
        document.querySelector('.congrats-message').innerHTML = `You solved the puzzle in 
            ${document.querySelector('.time-counter').innerHTML} and 
            ${document.querySelector('.moves-counter').innerHTML} moves!`
        document.querySelector('.congrats-popup').classList.remove('congrats-popup-hidden')
        document.querySelector('.congrats-popup').classList.add('congrats-popup-visible')
        document.querySelector('.blur-bg').classList.toggle('blur-visible')
        document.querySelector('.resume-btn').setAttribute('disabled', "true")
        document.querySelector('.start-btn').setAttribute('disabled', "true")
        document.querySelector('.results-btn').setAttribute('disabled', "true")
        document.querySelector('.save-btn').setAttribute('disabled', true)
        onPauseBtnClick()
    }
    
}

const onCongratsPopupYesBtnClick = () => {
    document.querySelector('.congrats-popup').classList.add('congrats-popup-hidden')
    document.querySelector('.congrats-popup').classList.remove('congrats-popup-visible')
    document.querySelector('.start-btn').removeAttribute('disabled')
    document.querySelector('.resume-btn').removeAttribute('disabled')
    document.querySelector('.results-btn').removeAttribute('disabled')
    document.querySelector('.blur-bg').classList.toggle('blur-visible')
    setTimeout(() => {
        onStartBtnClick()
    }, 450)
}

const onCongratsCancelBtnClick = () => {
    document.querySelector('.congrats-popup').classList.add('congrats-popup-hidden')
    document.querySelector('.congrats-popup').classList.remove('congrats-popup-visible')
    document.querySelector('.start-btn').removeAttribute('disabled')
    document.querySelector('.results-btn').removeAttribute('disabled')
    document.querySelector('.save-btn').setAttribute('disabled', true)
    document.querySelector('.blur-bg').classList.toggle('blur-visible')    
}

export {checkIfWon, onCongratsPopupYesBtnClick, onCongratsCancelBtnClick}