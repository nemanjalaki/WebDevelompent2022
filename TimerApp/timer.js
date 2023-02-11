// console.log(new Date(ms).toISOString().slice(14, 19));
// 1970-01-01T00:25:00.000Z pomocu slice uklanjamo sve osim M:S

(function (){
  
let interval = 1000;
let newTimeInterval;
let timer;

//selektors
let buttons = document.getElementById("top-buttons");

let start = document.getElementById("start");
let stopw = document.getElementById("stop");
let reset = document.getElementById("reset");

// events -------------------------------------------------------------

buttons.addEventListener("click", function (e){
  if (e.target.id === "pomodoro"){
    minutes = 25;
    console.log(e.target.id);
    console.log(minutes);
  } else if (e.target.id === "short"){
    minutes = 1;
    console.log(e.target.id);
    console.log(minutes);
  } else {
    minutes = 10;
    console.log(e.target.id);
    console.log(minutes);
  }
  resetTimer();
  showTimer();
  stopInterval(newTimeInterval);
});

start.addEventListener("click", function(){
  stopInterval(newTimeInterval);
  newTimeInterval = setInterval(subTimer, 1000);
});

stopw.addEventListener("click", function(){
  stopInterval(newTimeInterval);
});

reset.addEventListener("click", function(){
  resetTimer();
  showTimer();
  stopInterval(newTimeInterval);
});

// functions
function resetTimer(){
  timer = minutes * 1000 * 60;
}

function showTimer(){
  timerView = (new Date(timer).toISOString().slice(14, 19));
  document.querySelector("#timer-container p").textContent = timerView;
  document.title = timerView + " Timer App";
};

function subTimer(){
  if (timer > 0){
    timer = timer - interval;
  }else{
    stopInterval(newTimeInterval);
    playSound();
  }
  showTimer(timer);
}

function stopInterval(n){
  clearInterval(n);
}

function playSound() {
  let audio = document.createElement("audio");
  audio.setAttribute("src", "beep-04.mp3");
  audio.volume = 1;
  audio.play();
}
})();



