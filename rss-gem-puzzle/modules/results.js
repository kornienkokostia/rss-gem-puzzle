import {onPauseBtnClick, onResumeBtnClick} from "./game-logic.js"

let resultsNum = 0

const showResults = () => {
    document.querySelector('.results-popup').classList.add('results-visible')
    document.querySelector('.results-popup').classList.remove('results-hidden')
    onPauseBtnClick()   
    document.querySelector('.resume-btn').setAttribute('disabled', "true")
    document.querySelector('.pause-btn').setAttribute('disabled', "true")
}

const closeResults = () => {
    document.querySelector('.results-popup').classList.remove('results-visible')
    document.querySelector('.results-popup').classList.add('results-hidden')
    if (document.querySelector('.main-wrapper').getAttribute('isWon') === "no") {
        onResumeBtnClick()
        document.querySelector('.pause-btn').removeAttribute('disabled')
        document.querySelector('.resume-btn').removeAttribute('disabled')
    }
    
}

const addResult = () => {
    resultsNum++
    const fieldSize = Math.sqrt([...document.querySelectorAll('.piece')].length)
    const result = document.createElement('div')
    result.className = 'result'
    result.innerHTML += `<div class="result-number">${resultsNum}</div>
                        <div class="result-wrapper">
                            <div class="field-size">${fieldSize}&#215;${fieldSize}</div>
                            <div class="number-of-moves">${document.querySelector('.moves-counter').innerHTML}</div>
                            <div class="result-time">${document.querySelector('.time-counter').innerHTML}</div>
                        </div>`
    document.querySelector('.results-block').append(result)

    const allRecordsArr = [...document.querySelectorAll('.result')]
    document.querySelector('.results-block').removeChild(document.querySelector('.result'))
    let coefs = []
    allRecordsArr.forEach((el, i) => coefs.push({i : i, el: Number([...[...el.childNodes][2].childNodes][3].innerHTML)}))
    coefs.sort((a, b) => a.el - b.el)

    for (let i = 0; i < coefs.length; i++) {
        const currEl = allRecordsArr[coefs[i].i]
        const numberNode = [...currEl.childNodes][0]
        numberNode.innerHTML = i+1
        document.querySelector('.results-block').append(currEl)
    }
}

export {showResults, closeResults, addResult}