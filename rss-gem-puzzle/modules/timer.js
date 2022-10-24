const pad = ( val ) => val > 9 ? val : "0" + val

const timeToSeconds = (time) => {
    const arr = time.split(':')
    const mins = Number(arr[0])
    const seconds = Number(arr[1])
    return mins * 60 + seconds
}

const startTimer = () => {
    pauseTimer()
    cron = setInterval(() => { timer() }, 1000);
}
const pauseTimer = () => {
    clearInterval(cron);
}
const resetTimer = () => {
    totalSeconds = 0
    document.querySelector(".time-counter").innerHTML = `00:00`
}
const timer = () => {
    totalSeconds++
    document.querySelector(".time-counter").innerHTML = `${pad(parseInt(totalSeconds / 60))}:${pad(totalSeconds % 60)}`
}

let totalSeconds = localStorage.getItem('time') ? timeToSeconds(localStorage.getItem('time')) : 0;
let cron;

export {startTimer, pauseTimer, resetTimer}