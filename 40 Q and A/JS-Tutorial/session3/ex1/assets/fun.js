var section_agreement = document.getElementById("section_agreement");
var section_main = document.getElementById("main");
var get_email = document.getElementById("get_email");
var set_email = document.getElementById("set_email");

var alertshow= false;
var emailok= false;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

section_agreement.addEventListener("scroll", (event) => {
  if(!alertshow && section_agreement.scrollTop > section_agreement.scrollHeight-430){
    alert("Thanks for read!");
    alertshow= true;
  }
});

get_email.addEventListener("input", ()=>{
  if(get_email.value.match(mailformat)){
    set_email.style.border="solid green 3px";
    emailok=true;
  }else if(!get_email.value.match(mailformat)){
    set_email.style.border="solid red 3px";
    emailok= false;
  }
});

set_email.addEventListener("click", ()=>{
  if (emailok && confirm("' "+get_email.value+" ' It's your mail?")) {
    section_main.innerHTML="<img src=\"assets/email_animation.gif\" style=\"height:30%; width:30%; margin-left:30%;\">";
    section_main.innerHTML+="<p>We Are Sending Email to you!</p>";
  }
});