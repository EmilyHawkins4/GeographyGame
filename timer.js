"use strict";

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

document.form_main.start.onclick = () => start();
document.form_main.stop.onclick = () => stop();

function start() {
    stop();
    cron = setInterval(() => { timer(); }, 10);
    console.log("it worked");
  }
  
  function stop() {
    clearInterval(cron);
    var endGame = document.createElement("h2");
    endGame.innerHTML= "it took you "+5+" to complete the challenge!"
    document.getElementById("endGameDiv").appendChild(endGame);
  }
  

  function timer() {
    if ((millisecond += 10) == 1000) {
      millisecond = 0;
      second++;
    }
    if (second == 60) {
      second = 0;
      minute++;
    }
    if (minute == 60) {
      minute = 0;
      hour++;
    }
    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
    document.getElementById('millisecond').innerText = returnData(millisecond);
  }
  
  function returnData(input) {
    return input > 10 ? input : `0${input}`
  }