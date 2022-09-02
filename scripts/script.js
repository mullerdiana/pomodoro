// DOM ELEMNTS
// const focus = document.getElementById("focus");
// const pause = document.getElementById("pause");
const pWorktime = document.getElementById("work-timer");
const pShortBreakTime = document.getElementById("short-break-timer");
const pLongBreakTime = document.getElementById("long-break-timer");
const pnumberCicles = document.getElementById("number-cicles");
const timer = document.getElementById("timer");

const increaseWorkTime = document.getElementById("increase-work-time");
const decreaseWorkTime= document.getElementById("decrease-work-time");
const increaseShortBreakTime = document.getElementById("increase-break-time__short");
const decreaseShortBreakTime= document.getElementById("decrease-break-time__short");
const increaseLongBreakTime = document.getElementById("increase-break-time__long");
const decreaseLongBreakTime= document.getElementById("decrease-break-time__long");
const increaseCicles = document.getElementById("increase-cicles");
const decreaseCicles= document.getElementById("decrease-cicles");

// POMODORO VAR CONFIGS
let workTime = 25;
let shortBreakTime = 5;
let longBreakTime = 15;
let cicles = 5;
let step = 0;

// MODIFYNG DEFAULT CONFIGS
// work
increaseWorkTime.addEventListener("click", () => {
  if (workTime < 59) {
    workTime++;
    pWorktime.innerHTML = `${workTime}m`;
  } else {
    increaseWorkTime.classList.setAttribute("disabled", "disabled");
  }
});

decreaseWorkTime.addEventListener("click", () => {
  if (workTime > 1) {
    workTime--;
    pWorktime.innerHTML = `${workTime}m`;
  } else {
    increaseWorkTime.classList.setAttribute("disabled", "disabled");
  }
});

// shortBreaktime
increaseShortBreakTime.addEventListener("click", () => {
  if (shortBreakTime < 59) {
    shortBreakTime++;
    pShortBreakTime.innerHTML = `${shortBreakTime}m`;
  } else {
    increaseShortBreakTime.classList.setAttribute("disabled", "disabled");
  }
});

decreaseShortBreakTime.addEventListener("click", () => {
  if (shortBreakTime > 1) {
    shortBreakTime--;
    pShortBreakTime.innerHTML = `${shortBreakTime}m`;
  } else {
    decreaseShortBreakTime.classList.setAttribute("disabled", "disabled");
  }
});

// longBreaktime
increaseLongBreakTime.addEventListener("click", () => {
  if (longBreakTime < 59) {
    longBreakTime++;
    pLongBreakTime.innerHTML = `${longBreakTime}m`;
  } else {
    increaseLongBreakTime.classList.setAttribute("disabled", "disabled");
  }
});
decreaseLongBreakTime.addEventListener("click", () => {
  if (longBreakTime > 1) {
    longBreakTime--;
    pLongBreakTime.innerHTML = `${longBreakTime}m`;
  } else {
    decreaseLongBreakTime.classList.setAttribute("disabled", "disabled");
  }
});

// cicles
increaseCicles.addEventListener("click", () => {
  if (cicles < 10) {
    cicles++;
    pnumberCicles.innerHTML = `${cicles}`;
  } else {
    increaseCicles.classList.setAttribute("disabled", "disabled");
  }
});
decreaseCicles.addEventListener("click", () => {
  if (cicles > 1) {
    cicles--;
    pnumberCicles.innerHTML = `${cicles}`;
  } else {
    decreaseCicles.classList.setAttribute("disabled", "disabled");
  }
});


// STARTING VIEWS
pWorktime.innerHTML = `${workTime}m`;
pShortBreakTime.innerHTML = `${shortBreakTime}m`;
pLongBreakTime.innerHTML = `${longBreakTime}m`;
pnumberCicles.innerHTML = cicles;






// POMODORO ACTIONS
const btnStart = document.getElementById("btn-start");
const btnStop = document.getElementById("btn-stop");
const btnReset = document.getElementById("btn-reset");






let remainingWorkTime;
let minutes;
let seconds;

let pomodoroTimer = {
  work: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60,
  longBreakInterval: 4 * 60,
};

let pomodoro =[
    {}
]

btnStart.addEventListener("click", () => {
    remainingWorkTime = setInterval(() => {
      minutes = Math.trunc(pomodoroTimer.work / 60);
      seconds = pomodoroTimer.work % 60;
      pomodoroTimer.work--;
      timer.innerHTML = `${minutes} : ${seconds}`;
      if(minutes === 0 && seconds ===0){
        clearInterval(remainingWorkTime)
      }
    }, 1000);
  btnStart.setAttribute("disabled", "disabled");
  btnContinue.classList.toggle("visible");
});

btnStop.addEventListener("click", () => {
  clearInterval(remainingWorkTime);
  btnStart.removeAttribute("disabled", "disabled");
});