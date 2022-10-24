import { solvableArr } from "./solvable-arr.js"

const createDOM = () => {
    const mainBlockWrapper = `<div class="main-wrapper" isWon="no">
                            <div class="mobile-menu">
                                <div class="mobile-menu-choose-size-menu">
                                    <div class="mobile-menu-title">Choose the field size</div>
                                    <div class="size-menu-item">3&#215;3</div>
                                    <div class="size-menu-item">4&#215;4</div>
                                    <div class="size-menu-item">5&#215;5</div>
                                    <div class="size-menu-item">6&#215;6</div>
                                    <div class="size-menu-item">7&#215;7</div>
                                    <div class="size-menu-item">8&#215;8</div>
                                </div>
                            </div>
                            <div class="congrats-popup congrats-popup-hidden">
                                <div class="congrats-message-block">
                                    <div class="congrats-title">Hooray!</div>
                                    <div class="congrats-message"></div>
                                    <div class="congrats-question">Would you like to start a new game?</div>
                                </div>
                                <div class="congrats-buttons-block">
                                    <div class="congrats-start-new-game congrats-btn">Yes</div>
                                    <div class="congrats-cancel congrats-btn">No</div>
                                </div>
                            </div>
                            <div class="blur-bg"></div>
                            <div class="results-popup results-hidden">
                                <img src="./assets/icons/close-results-icon.svg" class="close-results-btn" alt="close-results-icon"></img>
                                <p class="results-popup-title">Results</p>
                                <div class="results-block-titles">
                                    <div class="results-block-titles-wrapper">
                                        <p class="results-block-title">Size</p>
                                        <p class="results-block-title">Moves</p>
                                        <p class="results-block-title">Time</p>
                                    </div>    
                                </div>
                                <div class="results-block"></div>
                            </div>
                            
                            <div class="header">
                                <div class="menu-btn-block">
                                    <span class="menu-btn-top-wrapper menu-btn-wrapper">
                                        <span class="menu-btn-top menu-btn"></span>
                                    </span>    
                                    <span class="menu-btn-bottom-wrapper menu-btn-wrapper">
                                        <span class="menu-btn-bottom menu-btn"></span>
                                    </span>
                                </div>
                                
                                <div class="play-audio-block">
                                    <button class="play-audio"></button>
                                </div>
                                
                                <div class="header-buttons">
                                    <button class="game-btn start-btn"><img src="./assets/icons/start-icon.svg" class="btn-icon" alt="start-icon"></img><p class="btn-text">Start</p></button>
                                    <button class="game-btn pause-btn" disabled><img src="./assets/icons/pause-icon.svg" class="btn-icon" alt="pause-icon"></img><p class="btn-text">Pause</p></button>
                                    <button class="game-btn resume-btn"><img src="./assets/icons/resume-icon.svg" class="btn-icon" alt="resume-icon"></img><p class="btn-text">Resume</p></button>
                                    <button class="game-btn save-btn" disabled><img src="./assets/icons/save-icon.svg" class="btn-icon" alt="save-icon"></img><p class="btn-text">Save</p></button>
                                    <button class="game-btn results-btn" disabled><img src="./assets/icons/results-icon.svg" class="btn-icon" alt="results-icon"></img><p class="btn-text">Results</p></button>
                                </div>
                                <div class="header-info">
                                    <div class="header-info-count-moves">Moves: <span class="moves-counter">0</span></div>
                                    <div class="header-info-count-time">Time: <span class="time-counter">00:00</span></div>
                                </div>
                            </div>
                            <div class="game-field"></div>
                            <div class="footer">
                                <div class="choose-size-menu">
                                    <div class="size-menu-current" current-value = "4"></div>
                                    <div class="size-menu-item">3&#215;3</div>
                                    <div class="size-menu-separator separator-hidden"></div>
                                    <div class="size-menu-item">4&#215;4</div>
                                    <div class="size-menu-separator separator-hidden"></div>
                                    <div class="size-menu-item">5&#215;5</div>
                                    <div class="size-menu-separator"></div>
                                    <div class="size-menu-item">6&#215;6</div>
                                    <div class="size-menu-separator"></div>
                                    <div class="size-menu-item">7&#215;7</div>
                                    <div class="size-menu-separator"></div>
                                    <div class="size-menu-item">8&#215;8</div>
                                </div>
                            </div>
                        </div>`
    const mainBlock = document.createElement('div')
    mainBlock.className = 'main'
    mainBlock.innerHTML += mainBlockWrapper
    document.body.append(mainBlock)
}

const fillGameField = () => {
    const currentArr = solvableArr(Number(document.querySelector('.size-menu-current').getAttribute('current-value')))
    if (document.querySelector('.puzzle-block-wrapper')) {
        document.querySelector('.game-field').removeChild(document.querySelector('.puzzle-block-wrapper'))
    }
    const puzzleBlockWrapper = document.createElement('div')
    puzzleBlockWrapper.className = 'puzzle-block-wrapper'
    for (let i = 0; i < currentArr.length; i++) {
        if (i === currentArr.indexOf(0)) {
            puzzleBlockWrapper.innerHTML += '<div class="empty-piece piece"></div>'
        } 
        else {
            const puzzlePiece = `<div class="puzzle-piece piece" draggable=true>${currentArr[i]}</div>`
            puzzleBlockWrapper.innerHTML += puzzlePiece 
        }
    }
    document.querySelector('.game-field').append(puzzleBlockWrapper)
    document.querySelector('.puzzle-block-wrapper').style.gridTemplateColumns = `repeat(${Number(document.querySelector('.size-menu-current').getAttribute('current-value'))}, 1fr)`
}

export {createDOM, fillGameField}