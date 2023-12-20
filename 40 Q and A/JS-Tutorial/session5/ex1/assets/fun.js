var scroll_meter= document.getElementById("scroll_meter");
var scroll_position= document.getElementById("scroll_position");
var scroll_position_bar= document.getElementById("scroll_position_bar");
var mouse_click= document.getElementById("mouse_click");

var scroll_meter_counter= 0;

var click_counter= 0;

window.addEventListener("scroll", (event) => {

  let scroll= this.scrollY;
  scroll_position.innerText= Math.round(scroll)+"px";

  scroll_meter_counter+= scroll;
  scroll_meter.innerHTML= "<div id=\"scroll_meter_title\">You scrolled: </div><div id=\"scroll_meter_text\">"+ Math.round(scroll_meter_counter/3779)+ " Meters</div>";
});

window.addEventListener("click", (event) => {
  click_counter++;
  mouse_click.innerHTML="<div id=\"mouse_click_title\">Number of click: </div><div id=\"mouse_click_text\">"+ click_counter+ "</div>";
});

window.onscroll = function () {
  let windowScroll = document.documentElement.scrollTop;
  let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollAmount = (windowScroll / windowHeight) * 100;
  scroll_position_bar.style.height = scrollAmount + "%";

  if(scrollAmount<95){
    scroll_position.style.top = scrollAmount + "%";
    scroll_position.style.right="0px";
  }else{
    scroll_position.style.right = "30px";
  }
};