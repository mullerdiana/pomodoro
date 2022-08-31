const work = document.getElementById("work");
const pause = document.getElementById("pause");
const cicle = 0;
const timer = document.getElementById("timer"); 

const btnStart = document.getElementById("btn-start");
const btnStop = document.getElementById("btn-stop");
const btnContinue = document.getElementById("btn-continue");
const btnReset = document.getElementById("btn-reset");

let pomodoroTimer = {
    work: 25*60,
    shortBreak: 5*60,
    longBreak: 15*60,
    longBreakInterval: 4*60,
  }
let minutes = pomodoroTimer

// audios
// var bell = new Audio("./audio/bell.mp3");



btnStart.addEventListener('click', () => {
    let remainingTime = setInterval(() => {
        pomodoroTimer.work--
        let minute = 
    timer.innerHTML = `${pomodoroTimer.work} : `
    }, 1000);

});



console.log("teste");