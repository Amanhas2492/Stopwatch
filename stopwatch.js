let startSecond =0;
let stopWatch;

let displayTimer = document.querySelector('#timer');

function calculateTime(){
    let hours = Math.floor(startSecond/3600);
    let minutes = Math.floor((startSecond % 3600)/60);
    let seconds = Math.floor(startSecond % 60)

   let displayHours = (hours < 10) ? '0' + hours:hours;
   let displayMinutes = (minutes < 10) ? '0' + minutes:minutes;
   let displaySeconds = (seconds < 10) ? '0' + seconds:seconds;

displayTimer.textContent = displayHours + ':' + displayMinutes + ':' + displaySeconds;

startSecond ++;

}

let stopBtn = document.querySelector('.stop');
let startBtn = document.querySelector('.start');
let resetBtn = document.querySelector('.reset');

startBtn.addEventListener('click', () => {
stopWatch = setInterval(calculateTime, 1000);
startBtn.disabled = true;
});

stopBtn.addEventListener('click', () =>{
    clearInterval(stopWatch);
    startBtn.disabled = false;
})

resetBtn.addEventListener('click', () =>{
    clearInterval(stopWatch);
    startBtn.disabled = false;
    startSecond = 0;
    calculateTime();
});

calculateTime();