var text_name= document.getElementById("text_name");
var text_username= document.getElementById("text_username");
var text_age= document.getElementById("text_age");
var text_email= document.getElementById("text_email");
var text_password= document.getElementById("text_password");
var text_repassword= document.getElementById("text_repassword");

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var name_ok=false;
var username_ok=false;
var age_ok=false;
var email_ok=false;
var pass_ok=false;
var repass_ok=false;

var signup_button= document.getElementById("signup_button");

signup_button.addEventListener("click",()=>{
  signup();
});

function signup() {
  everythingisok();
}

text_name.addEventListener("keyup", ()=>{
  if(text_name.value!= ""){
    text_name.style.border="solid green 3px";
    name_ok=true;
  }else if(text_name.value== ""){
    text_name.style.border="solid red 3px";
    name_ok=false;
  }
  everythingisok();
});

text_username.addEventListener("keyup", ()=>{
  if(text_username.value.length> 4){
    text_username.style.border="solid green 3px";
    username_ok=true;
  }else if(text_username.value.length< 4){
    text_username.style.border="solid red 3px";
    username_ok=false;
  }
  everythingisok();
});

text_age.addEventListener("input", ()=>{
  everythingisok();
  if(text_age.value> 15){
    text_age.style.border="solid green 3px";
    age_ok=true;
  }else if(text_age.value< 15){
    text_age.style.border="solid red 3px";
    age_ok=false;
  }
});

text_email.addEventListener("input", ()=>{
  if(text_email.value.match(mailformat)){
    text_email.style.border="solid green 3px";
    email_ok=true;
  }else if(!text_email.value.match(mailformat)){
    text_email.style.border="solid red 3px";
    email_ok=false;
  }
  everythingisok();
});

text_password.addEventListener("input", ()=>{
  if(text_password.value.length> 8){
    text_password.style.border="solid green 3px";
    repassword_check();
    pass_ok=true;
  }else if(text_password.value.length< 8){
    text_password.style.border="solid red 3px";
    pass_ok=false;
  }
  everythingisok();
});

text_repassword.addEventListener("input", ()=>{
  repassword_check();
});

function repassword_check(){
  if(text_repassword.value== text_password.value){
    text_repassword.style.border="solid green 3px";
    repass_ok=true;
  }else if(text_repassword.value!= text_password.value){
    text_repassword.style.border="solid red 3px";
    repass_ok=false;
  }
  everythingisok();
}

function everythingisok(){
  if(name_ok && username_ok && age_ok && email_ok && pass_ok && repass_ok){
    signup_button.style.backgroundColor="#1a42bb";
    signup_button.style.color="white";
  }else if(!name_ok || !username_ok || !age_ok || !email_ok || !pass_ok || !repass_ok){
    signup_button.style.backgroundColor="red";
    signup_button.style.color="black";
  }
}