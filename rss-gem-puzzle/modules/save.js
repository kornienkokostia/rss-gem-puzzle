const setLocalStorage = () => {
    localStorage.setItem('gameField', document.querySelector('.game-field').innerHTML)
    localStorage.setItem('moves', document.querySelector('.moves-counter').innerHTML)
    localStorage.setItem('time', document.querySelector('.time-counter').innerHTML)
    localStorage.setItem('fieldSize', Math.sqrt([...document.querySelectorAll('.piece')].length))
    localStorage.setItem('results', document.querySelector('.results-block').innerHTML)
}

const saveGame = () => {
    setLocalStorage()
}

export {saveGame}