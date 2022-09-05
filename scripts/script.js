// DOM ELEMENTS
const pWorktime = document.getElementById("work-timer");
const pShortBreakTime = document.getElementById("short-break-timer");
const pLongBreakTime = document.getElementById("long-break-timer");
const pnumberCicles = document.getElementById("number-cicles");
const timer = document.getElementById("timer");
const pCurrentCicle = document.getElementById("cicle");
const increaseWorkTime = document.getElementById("increase-work-time");
const decreaseWorkTime = document.getElementById("decrease-work-time");
const increaseShortBreakTime = document.getElementById(
  "increase-break-time__short"
);
const decreaseShortBreakTime = document.getElementById(
  "decrease-break-time__short"
);
const increaseLongBreakTime = document.getElementById(
  "increase-break-time__long"
);
const decreaseLongBreakTime = document.getElementById(
  "decrease-break-time__long"
);
const increaseCicles = document.getElementById("increase-cicles");
const decreaseCicles = document.getElementById("decrease-cicles");

// POMODORO VAR CONFIGS
let workTime = 25;
let shortBreakTime = 5;
let longBreakTime = 15;
let breakTime;
let cicles = 5;

// MODIFYNG DEFAULT CONFIGS
// work
increaseWorkTime.addEventListener("click", () => {
  if (workTime < 59) {
    workTime++;
    pWorktime.innerHTML = `${workTime}m`;
    convertedTime = workTime * 60;
    minutes = Math.trunc(convertedTime / 60);
    seconds = convertedTime % 60;
    timer.innerHTML = `${minutes} : ${seconds}`;
    return workTime;
  } else {
    increaseWorkTime.classList.setAttribute("disabled", "disabled");
    return workTime;
  }
});

decreaseWorkTime.addEventListener("click", () => {
  if (workTime > 1) {
    workTime--;
    pWorktime.innerHTML = `${workTime}m`;
    convertedTime = workTime * 60;
    minutes = Math.trunc(convertedTime / 60);
    seconds = convertedTime % 60;
    timer.innerHTML = `${minutes} : ${seconds}`;
    return workTime;
  } else {
    increaseWorkTime.classList.setAttribute("disabled", "disabled");
    return workTime;
  }
});

// shortBreaktime
increaseShortBreakTime.addEventListener("click", () => {
  if (shortBreakTime < 59) {
    shortBreakTime++;
    pShortBreakTime.innerHTML = `${shortBreakTime}m`;
    return shortBreakTime;
  } else {
    increaseShortBreakTime.classList.setAttribute("disabled", "disabled");
    return shortBreakTime;
  }
});

decreaseShortBreakTime.addEventListener("click", () => {
  if (shortBreakTime > 1) {
    shortBreakTime--;
    pShortBreakTime.innerHTML = `${shortBreakTime}m`;
    return shortBreakTime;
  } else {
    decreaseShortBreakTime.classList.setAttribute("disabled", "disabled");
    return shortBreakTime;
  }
});

// longBreaktime
increaseLongBreakTime.addEventListener("click", () => {
  if (longBreakTime < 59) {
    longBreakTime++;
    pLongBreakTime.innerHTML = `${longBreakTime}m`;
    return longBreakTime;
  } else {
    increaseLongBreakTime.classList.setAttribute("disabled", "disabled");
    return longBreakTime;
  }
});
decreaseLongBreakTime.addEventListener("click", () => {
  if (longBreakTime > 1) {
    longBreakTime--;
    pLongBreakTime.innerHTML = `${longBreakTime}m`;
    return longBreakTime;
  } else {
    decreaseLongBreakTime.classList.setAttribute("disabled", "disabled");
    return longBreakTime;
  }
});

// cicles
increaseCicles.addEventListener("click", () => {
  if (cicles < 10) {
    cicles++;
    pnumberCicles.innerHTML = `${cicles}`;
    return cicles;
  } else {
    increaseCicles.classList.setAttribute("disabled", "disabled");
    return cicles;
  }
});
decreaseCicles.addEventListener("click", () => {
  if (cicles > 1) {
    cicles--;
    pnumberCicles.innerHTML = `${cicles}`;
    return cicles;
  } else {
    decreaseCicles.classList.setAttribute("disabled", "disabled");
    return cicles;
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

btnStart.addEventListener("click", () => {
  runPomodoroTimer();
});

function runPomodoroTimer() {
  let isWork = true;
  let convertedTime = workTime * 60;
  pCurrentCicle.innerHTML = `Sessões restantes = ${cicles}`;
  remainingWorkTime = setInterval(() => {
    minutes = Math.trunc(convertedTime / 60);
    seconds = convertedTime % 60;
    convertedTime--;
    timer.innerHTML = `${minutes} : ${seconds}`;
    btnStart.setAttribute("disabled", "disabled");
    if (minutes === 0 && seconds === 0) {
      clearInterval(remainingWorkTime);
      breakMoment();
      isWork = false;
    }
  }, 100);
}
function breakMoment() {
  let isBreak = true;
  let convertedShortBreakTime = shortBreakTime * 60;
  let convertedLongBreakTime = longBreakTime * 60;
  let breakTime;
  if (cicles > 1) {
    breakTime = convertedShortBreakTime;
  } else {
    breakTime = convertedLongBreakTime;
  }
  let remainingBreakTime = setInterval(() => {
    minutes = Math.trunc(breakTime / 60);
    seconds = breakTime % 60;
    breakTime--;
    timer.innerHTML = `${minutes} : ${seconds}`;
    if (minutes === 0 && seconds === 0) {
      isBreak = false;
      clearInterval(remainingBreakTime);
      cicles--;
      if (cicles >= 1) {
        runPomodoroTimer();
      } else {
        endTimer();
      }
    }
  }, 100);
}

function endTimer() {
  console.log("fim");
}

btnStop.addEventListener("click", () => {
  clearInterval(remainingWorkTime);
  btnStart.removeAttribute("disabled", "disabled");
});

btnReset.addEventListener("click", () => {
  clearInterval(remainingWorkTime);
  convertedTime = workTime * 60;
  
  minutes = Math.trunc(convertedTime / 60);
  seconds = convertedTime % 60;
  timer.innerHTML = `${minutes} : ${seconds}`;
  
  pWorktime.innerHTML = `${workTime}m`;
  pShortBreakTime.innerHTML = `${shortBreakTime}m`;
  pLongBreakTime.innerHTML = `${longBreakTime}m`;
  pnumberCicles.innerHTML = cicles;
  btnStart.removeAttribute("disabled", "disabled");
});
