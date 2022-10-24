import { checkIfWon } from "./won.js"
import {startTimer, pauseTimer, resetTimer} from "./timer.js"
import { fillGameField } from "./create-elements.js"
import { closeResults } from "./results.js"

const turnOffFieldClick = () => {
    if (document.querySelector('.puzzle-block-wrapper')) {
        document.querySelector('.puzzle-block-wrapper').style.pointerEvents = 'none'
    }    
}
const turnOnFieldClick = () => {
    if (document.querySelector('.puzzle-block-wrapper')) {
        document.querySelector('.puzzle-block-wrapper').style.pointerEvents = 'all'
    }
}
const increaseMovesCount = () => {
    document.querySelector('.moves-counter').innerHTML = Number(document.querySelector('.moves-counter').innerHTML) + 1
}

const onItemsMove = () => {
    piecesArr = [...document.querySelectorAll('.piece')]
    const fieldSize = Math.sqrt(piecesArr.length)
    piecesArr.map(el => {
        el.addEventListener('click', (e) => {
            let clickedPiece = piecesArr.indexOf(e.target)
            let emptyPiece =  piecesArr.indexOf(document.querySelector('.empty-piece'))
            if (clickedPiece === emptyPiece - 1) {
                increaseMovesCount()
                turnOffFieldClick()
                playAudio ? audio.play() : false
                piecesArr[clickedPiece].style.transform = `translateX(${fieldSizeVh/fieldSize}vh)`
                piecesArr[emptyPiece].style.transform = `translateX(-${fieldSizeVh/fieldSize}vh)`
                setTimeout(() => {
                    piecesArr[clickedPiece].style.transform = `translateX(0)`
                    piecesArr[emptyPiece].style.transform = `translateX(0)`   
                    piecesArr[emptyPiece].before(piecesArr[emptyPiece], piecesArr[clickedPiece])
                    piecesArr = [...document.querySelectorAll('.piece')]  
                    turnOnFieldClick()
                    checkIfWon()               
                }, 500)
            }
            if (clickedPiece === emptyPiece + 1) {
                increaseMovesCount()
                turnOffFieldClick()
                playAudio ? audio.play() : false
                piecesArr[clickedPiece].style.transform = `translateX(-${fieldSizeVh/fieldSize}vh)`
                piecesArr[emptyPiece].style.transform = `translateX(${fieldSizeVh/fieldSize}vh)`
                setTimeout(() => {
                    piecesArr[clickedPiece].before(piecesArr[clickedPiece], piecesArr[emptyPiece])
                    piecesArr[clickedPiece].style.transform = `translateX(0)`
                    piecesArr[emptyPiece].style.transform = `translateX(0)` 
                    piecesArr = [...document.querySelectorAll('.piece')]  
                    turnOnFieldClick()  
                    checkIfWon()                          
                }, 500)
            }
            if (emptyPiece === clickedPiece + fieldSize) {
                increaseMovesCount()
                turnOffFieldClick()
                playAudio ? audio.play() : false
                piecesArr[clickedPiece].style.transform = `translateY(${fieldSizeVh/fieldSize}vh)`
                piecesArr[emptyPiece].style.transform = `translateY(-${fieldSizeVh/fieldSize}vh)`
                setTimeout(() => {
                    piecesArr[clickedPiece].before(piecesArr[emptyPiece])
                    piecesArr[emptyPiece - 1].after(piecesArr[clickedPiece])
                    piecesArr[clickedPiece].style.transform = `translateX(0)`
                    piecesArr[emptyPiece].style.transform = `translateX(0)`
                    piecesArr = [...document.querySelectorAll('.piece')]  
                    turnOnFieldClick()
                    checkIfWon()      
                }, 500)
            }
            if (emptyPiece === clickedPiece - fieldSize) {
                increaseMovesCount()
                turnOffFieldClick()
                playAudio ? audio.play() : false
                piecesArr[clickedPiece].style.transform = `translateY(-${fieldSizeVh/fieldSize}vh)`
                piecesArr[emptyPiece].style.transform = `translateY(${fieldSizeVh/fieldSize}vh)`
                setTimeout(() => {
                    piecesArr[emptyPiece].before(piecesArr[clickedPiece])
                    piecesArr[clickedPiece - 1].after(piecesArr[emptyPiece])
                    piecesArr[clickedPiece].style.transform = `translateX(0)`
                    piecesArr[emptyPiece].style.transform = `translateX(0)`
                    piecesArr = [...document.querySelectorAll('.piece')]  
                    turnOnFieldClick() 
                    checkIfWon()     
                }, 500)
            }
            piecesArr = [...document.querySelectorAll('.piece')]
        })
    })
}
const onItemsDrag = () => {
    let draggedPiece
    let emptyPiece = piecesArr.indexOf(document.querySelector('.empty-piece'))
    piecesArr = [...document.querySelectorAll('.piece')]
    const fieldSize = Math.sqrt(piecesArr.length)
  
    const handleDragStart = (e) => {
        e.target.style.opacity = '0.5'
        draggedPiece = piecesArr.indexOf(e.target) 
        e.dataTransfer.effectAllowed = 'move'
    }

    const handleDragOver = (e) => {
        emptyPiece = piecesArr.indexOf(document.querySelector('.empty-piece'))
        if (e.target === document.querySelector('.empty-piece') && (draggedPiece === emptyPiece - 1
            || draggedPiece === emptyPiece + 1 || emptyPiece === draggedPiece + fieldSize
            || emptyPiece === draggedPiece - fieldSize)) {
            e.preventDefault()
        }
        return false;
    }

    const handleDragEnter = (e) => {
        
        e.target.classList.add('over')
    }

    const handleDragLeave = (e) => {e.target.classList.remove('over')}

    const handleDrop = (e) => {
        if (e.stopPropagation) {e.stopPropagation()}
        
        if (draggedPiece === emptyPiece - 1) {
            increaseMovesCount()
            checkIfWon() 
            playAudio ? audio.play() : false
            piecesArr[emptyPiece].before(piecesArr[emptyPiece], piecesArr[draggedPiece])
            piecesArr = [...document.querySelectorAll('.piece')]
            emptyPiece = piecesArr.indexOf(document.querySelector('.empty-piece'))
        }
        if (draggedPiece === emptyPiece + 1) {
            increaseMovesCount()
            checkIfWon() 
            playAudio ? audio.play() : false
            piecesArr[draggedPiece].before(piecesArr[draggedPiece], piecesArr[emptyPiece])
            piecesArr = [...document.querySelectorAll('.piece')] 
            emptyPiece = piecesArr.indexOf(document.querySelector('.empty-piece')) 
        }
        if (emptyPiece === draggedPiece + fieldSize) {
            increaseMovesCount()
            checkIfWon() 
            playAudio ? audio.play() : false
            piecesArr[draggedPiece].before(piecesArr[emptyPiece])
            piecesArr[emptyPiece - 1].after(piecesArr[draggedPiece])
            piecesArr = [...document.querySelectorAll('.piece')]  
            emptyPiece = piecesArr.indexOf(document.querySelector('.empty-piece'))
        }
        if (emptyPiece === draggedPiece - fieldSize) {
            increaseMovesCount()
            checkIfWon() 
            playAudio ? audio.play() : false
            piecesArr[emptyPiece].before(piecesArr[draggedPiece])
            piecesArr[draggedPiece - 1].after(piecesArr[emptyPiece])
            piecesArr = [...document.querySelectorAll('.piece')]  
            emptyPiece = piecesArr.indexOf(document.querySelector('.empty-piece'))
        }
        return false;
    }

    const handleDragEnd = (e) => {
        e.target.style.opacity = '1'
        piecesArr.map(el => el.classList.remove('over'))
    }

    piecesArr.map(el => {
        el.addEventListener('dragstart', handleDragStart, false);
        el.addEventListener('dragenter', handleDragEnter, false);
        el.addEventListener('dragover', handleDragOver, false);
        el.addEventListener('dragleave', handleDragLeave, false);
        el.addEventListener('drop', handleDrop, false);
        el.addEventListener('dragend', handleDragEnd, false);
    })
}

const onStartBtnClick = () => {
    fillGameField()
    resetTimer()
    startTimer()
    onResumeBtnClick()
    closeResults()
    localStorage.removeItem('gameField')
    localStorage.removeItem('moves')
    localStorage.removeItem('time')
    localStorage.removeItem('fieldSize')
    localStorage.removeItem('results')
    document.querySelector('.main-wrapper').setAttribute('isWon', "no")
    document.querySelector('.pause-btn').removeAttribute('disabled')
    document.querySelector('.save-btn').removeAttribute('disabled')
    document.querySelector('.results-btn').removeAttribute('disabled')
    document.querySelector('.resume-btn').removeAttribute('disabled')
    document.querySelector('.moves-counter').innerHTML = '0'
    onItemsMove()
    onItemsDrag()
}

const onPauseBtnClick = () => {
    document.querySelector('.resume-btn').style.display = 'flex'
    document.querySelector('.pause-btn').style.display = 'none'
    turnOffFieldClick()
    pauseTimer()
}
const onResumeBtnClick = () => {
    document.querySelector('.resume-btn').style.display = 'none'
    document.querySelector('.pause-btn').style.display = 'flex'
    turnOnFieldClick()
    startTimer()
}

const onPlayAudioBtnClick = () => {
    document.querySelector('.play-audio').classList.toggle('audio-on')
    playAudio ? playAudio = false : playAudio = true
}

let piecesArr = []
const audio = new Audio()
audio.src = `./assets/sounds/on-piece-move.wav`
let playAudio = false
let fieldSizeVh = 65

if ((window.innerWidth < 425 && window.innerHeight > 700) || window.innerWidth < 425) {
    fieldSizeVh = 40
}
if ((window.innerWidth >= 425 && window.innerHeight <= 700) || window.innerWidth >= 425) {
    fieldSizeVh = 65
}

console.log(fieldSizeVh)

window.addEventListener('resize', () => {
    if ((window.innerWidth < 425 && window.innerHeight > 700) || window.innerWidth < 425) {
        fieldSizeVh = 40
    }
    if ((window.innerWidth >= 425 && window.innerHeight <= 700) || window.innerWidth >= 425) {
        fieldSizeVh = 65
    }
    if (window.innerWidth >= 745 && window.innerHeight <= 700) {
        document.querySelector('.mobile-menu').classList.remove('mobile-menu-opened')
    }
})

export {onStartBtnClick, onPauseBtnClick, onResumeBtnClick, turnOffFieldClick, turnOnFieldClick, onItemsMove,
    onItemsDrag, onPlayAudioBtnClick}