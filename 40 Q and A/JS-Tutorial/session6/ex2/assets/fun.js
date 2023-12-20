var url_text= document.getElementById("url_text");
var url_text_text= null;
let height = screen.availHeight;
let width = screen.availWidth;
 

let opened_window = null;
let url_repated= false;

function openURL() {
  if(!url_repated){
    url_text_text= url_text.value;
    if(url_text_text!= "" && validURL(url_text_text)){
    
        opened_window = window.open(url_text_text, "opened_url", "resizable");
        url_repated= true;
        document.getElementById("open_button").innerText = "Focus";

    }else{
      alert("Wrong URL!");
      opened_window.open("http://yahoo.com", "opened_url", "resizable");

    }
  }else{
    focusWindow();
  }

}

function focusWindow(){
  if (!opened_window === null || !opened_window.closed){
    opened_window.focus();
    opened_window.resizeBy(height, width);
  }
}
function closeURL() {

    if (opened_window === null || opened_window.closed) {
      alert("Open URL First!");
    } else {
      opened_window.close();
    };

}

function check_url_repeated(){
  if(url_text_text!= url_text.value){
    document.getElementById("open_button").innerText ="Open";
    url_repated= false;
  }else{
    document.getElementById("open_button").innerText = "Focus";
    url_repated= true;
  }
}

function validURL(url) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
    '((\\d{1,3}\\.){3}\\d{1,3}))'+
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
    '(\\?[;&a-z\\d%_.~+=-]*)?'+
    '(\\#[-a-z\\d_]*)?$','i');
  return !!pattern.test(url);
}

getCookie();
url_text.addEventListener("keyup", setCookie);
url_text.addEventListener("keyup", check_url_repeated);

function getCookie() {
  if(document.cookie != ""){
    url_text.value = document.cookie
    .split('; ')
    .find((row) => row.startsWith('url='))
    ?.split('=')[1];
  }
}
function setCookie(url) {
  document.cookie = "url="+url_text.value;
}