var timer_text= document.getElementById('timer_text');
var reset_button= document.getElementById("reset_button");
var start_button = document.getElementById("start_button");
var lap_list = document.getElementById("lap_list");

var cookie_time= 0;
var time_running= false;
var lap_array= [];
var timeoutId = null;
var ms = 0;
var sec = 0;
var min = 0;

function counter_fun(){
  if (!time_running) {
    start_button.innerText="Pause";
    start();
    time_running= true;
  }else{
    start_button.innerText="Start";
    pause();
    time_running= false;
  }
}
function start() {
  setCookie(min+":"+sec+":"+ms);
  timeoutId = setTimeout(function() {
    ms = parseInt(ms);
    sec = parseInt(sec);
    min = parseInt(min);
    ms++;
    if (ms == 100) {
      sec = sec + 1;
      ms = 0;
    }
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (ms < 10) {
      ms = '0' + ms;
    }
    if (sec < 10) {
      sec = '0' + sec;
    }
    if (min < 10) {
      min = '0' + min;
    }
    timer_text.innerText = min + ':' + sec + ':' + ms;
    start();
  }
                         , 10);
}

function pause() {
  clearTimeout(timeoutId);
  start_button.disabled = false;
}
function reset() {
  ms = 0;
  sec = 0;
  min = 0;
  pause();
  setCookie('00:00:00');
  timer_text.innerText = '00:00:00';
  start_button.innerText="Start";
  time_running= false;
  lap_list.innerHTML="";
  lap_array.splice(0, lap_array.length);
}

function setCookie(time) {
  document.cookie = "Timer="+time;
}

function getCookie() {
  if(document.cookie != ""){
    cookie_time = document.cookie
    .split('; ')
    .find((row) => row.startsWith('Timer='))
    ?.split('=')[1];

    ms = cookie_time.substring(6,8);
    sec = cookie_time.substring(3,5);
    min = cookie_time.substring(0,2);

    timer_text.innerText = cookie_time;
  }
  else{
    setCookie('00:00:00');
    cookie_time=0;
    timer_text.innerText = "00" + ':' + "00" + ':' + "00";
  }
}
function addlap(){
  if(ms>0){
    lap_array.push(min+":"+sec+":"+ms);
    const lap = document.createElement("div");
    lap.className = "lapping";
    lap.innerHTML = '<span>Lap '+lap_array.length+'</span><span>'+min+":"+sec+":"+ms+'</span>';
    lap_list.appendChild(lap);
  }
}

getCookie();
