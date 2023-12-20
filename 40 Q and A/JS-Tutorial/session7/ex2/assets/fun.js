var cookie_time= 0;
var timerRunning= true;

var first_text= document.getElementById('first_text');
var last_text= document.getElementById('last_text');
var restart_button= document.getElementById("restart_button");

var thisis_firsttime= true;


class timeAgo{
  constructor(date) {
    this.date = date;
  }
  date_convert(){
  const date = (this.date instanceof Date) ? this.date : new Date(this.date);
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}
}


check_localsorage();

function set_lasttime() {
  localStorage.setItem("last_visit",new Date().toLocaleString());
}

function set_firsttime() {
  localStorage.setItem("first_visit",new Date().toLocaleString());
}

function check_localsorage(){
  if(localStorage.getItem("first_visit")){
    thisis_firsttime= false;
    show_visit_time();
    set_lasttime();
  }else{
    set_firsttime();
    set_lasttime();
    show_visit_time();
  }
}

function show_visit_time(){
  if(!thisis_firsttime){
    var first_date= new timeAgo(localStorage.getItem("first_visit"));
    first_text.innerText= first_date.date_convert()+" | Time:"+ localStorage.getItem("first_visit");
    
    var last_date= new timeAgo(localStorage.getItem("last_visit"));
    last_text.innerText= last_date.date_convert()+" | Time:"+ localStorage.getItem("last_visit");
  }else{
    first_text.innerText="Now";
    last_text.innerText="Now";
  }
}

function restart_visit(){
  localStorage.clear();
  check_localsorage();
}
