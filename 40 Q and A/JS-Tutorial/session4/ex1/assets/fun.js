let i = 0;
let j = 0;

let selected_borderstyle= "2px solid #7EC342";
var programming_button= document.querySelector("#programming_button");
var ds_button= document.querySelector("#ds_button");
var technology_button= document.querySelector("#technology_button");
var ml_button= document.querySelector("#ml_button");
var politics_button= document.querySelector("#politics_button");
var buttons= document.querySelectorAll(".list_button");

programming_button.addEventListener("click", ()=>{
  temp_List_name= programming_List_name;
  temp_List_title= programming_List_title;
  temp_List_text= programming_List_text;
  temp_List_img= programming_List_img;
  printitems(temp_List_name, temp_List_title, temp_List_text, temp_List_img, "Programming");
  clearstyle();
  document.querySelector("#programming_button").style.border = selected_borderstyle;
});

ds_button.addEventListener("click", ()=>{
  temp_List_name= ds_List_name;
  temp_List_title= ds_List_title;
  temp_List_text= ds_List_text;
  temp_List_img= ds_List_img;
  temp_List_name= ds_List_name;
  printitems(temp_List_name, temp_List_title, temp_List_text, temp_List_img, "Data Science");
  clearstyle();
  document.querySelector("#ds_button").style.border = selected_borderstyle;
});

technology_button.addEventListener("click", ()=>{
  temp_List_name= technology_List_name;
  temp_List_title= technology_List_title;
  temp_List_text= technology_List_text;
  temp_List_img= technology_List_img;
  temp_List_name= technology_List_name;
  printitems(temp_List_name, temp_List_title, temp_List_text, temp_List_img, "Technology");
  clearstyle();
  document.querySelector("#technology_button").style.border = selected_borderstyle;
});

ml_button.addEventListener("click", ()=>{
  temp_List_name= ml_List_name;
  temp_List_title= ml_List_title;
  temp_List_text= ml_List_text;
  temp_List_img= ml_List_img;
  temp_List_name= ml_List_name;
  printitems(temp_List_name, temp_List_title, temp_List_text, temp_List_img, "Machine Learning");
  clearstyle();
  document.querySelector("#ml_button").style.border = selected_borderstyle;
});

politics_button.addEventListener("click", ()=>{
  temp_List_name= politics_List_name;
  temp_List_title= politics_List_title;
  temp_List_text= politics_List_text;
  temp_List_img= politics_List_img;
  temp_List_name= politics_List_name;
  printitems(temp_List_name, temp_List_title, temp_List_text, temp_List_img, "Politics");
  clearstyle();
  document.querySelector("#politics_button").style.border = selected_borderstyle;
});

function clearstyle(){
  j=0;
  while(buttons[j]){
    buttons[j].style.border = "2px solid #DFDFDF";
    j++;
  }
}

function printitems(name, title, text, img, category){
  section_array.innerHTML="";
  i=0;
  section_array.innerHTML+= '<div class= category><h1>'+category+'</h1></div>';
  while(name[i]){
    section_array.innerHTML+='<div class="card_container"><div class="left_side"><p class="text_name">'+name[i]+'</p><p class="text_title">'+title[i]+'</p><p class="text_text">'+text[i]+'</p><p class="text_category">'+category+'</p></div><div class="right_side"><img src="'+img[i]+'"/></div></div>';
    i++;
  }
}


var programming_List_name = ['Mohamed Aboelez in Level Up Coding','Diego A. Rojas in Javarevisited'];
var programming_List_title = ['Turn Your Best Developers Into Managers','Java is here to stay: 7 features you will love in JDK 20'];
var programming_List_text = ['There are a couple of reasons for this. I apologize for my previous outburst. However, I do have some more positive thoughts to share. As you might have noticed, I’m part of a small yet expanding group that','Explore the latest features in one of the most demanded programming languages worldwide — When I started my career, 10 years ago, JDK 7'];
var programming_List_img = ["./assets/photo1.png","./assets/photo2.png"];


var ds_List_name = ['Shahin kumar', 'Bex T. in Towards Data Science'];
var ds_List_title = ['Finance Data Analysis Project', 'Measuring The Speed of New Pandas 2.0 Against Polars'];
var ds_List_text = ['This case is about a bank (Thera Bank) whose management wants to explore ways of converting its liability customers to personal loan customers (while retaining them as depositors). A campaign that the', 'Even though the new PyArrow backend for Pandas is bringing exciting features, it still looks disappointing in terms of speed. — People have'];
var ds_List_img = ["./assets/photo3.png","./assets/photo4.png"];


var technology_List_name = ['Renjith Ravindranathan in techbeatly','Michael King'];
var technology_List_title = ['ChatGPT for your Kubernetes Cluster — k8sgpt','ChatGPT 4 Jailbreak — Step-By-Step Guide with Prompts: MultiLayering technique'];
var technology_List_text = ['Have you tried chatting with ChatGPT and got shocked by its fantastic responses? Well k8sgpt brings you chatgpt for your k8s platform. It enables the user to analyze issues in the cluster and reports it back','Welcome to “ChatGPT 4 Jailbreak: A Step-by-Step Guide with Prompts”! In this thrilling piece, you’ll explore the mysterious world of OpenAI'];
var technology_List_img = ["./assets/photo5.png","./assets/photo6.png"];


var ml_List_name = ['Cassie Kozyrkov','Henry Lai in Towards Data Science'];
var ml_List_title = ['Unboxing Google Bard and GPT-4','What Are the Data-Centric AI Concepts behind GPT Models?'];
var ml_List_text = ['A first look at two major AI releases — Here comes an AI unboxing video! These shiny new tools were released just over a week ago, so they’re fresh out of the oven. In the video, you’ll see me running ','Unpacking the data-centric AI techniques used in ChatGPT and GPT-4 — Artificial Intelligence (AI) has made incredible strides in'];
var ml_List_img = ["./assets/photo7.png","./assets/photo8.png"];


var politics_List_name = ['Cassie Kozyrkov','Henry Lai in Towards Data Science'];
var politics_List_title = ['One of the Guys','Two New Bills Will Affect Your Entire Online Existence'];
var politics_List_text = ['The Nashville shooter’s gender identity has led to charges of “trans terrorism” — but the face of gun violence is almost always a cis white man. — As I move through this life, I try to find reasons to be gratefu','This is one thing both the right and left can agree on — I called my local congressman this morning. Congressional Representative Daniel'];
var politics_List_img = ["./assets/photo9.png","./assets/photo10.png"];

var temp_List_name=[];
var temp_List_title=[];
var temp_List_text=[];
var temp_List_img=[];


temp_List_name= programming_List_name;
temp_List_title= programming_List_title;
temp_List_text= programming_List_text;
temp_List_img= programming_List_img;
printitems(temp_List_name, temp_List_title, temp_List_text, temp_List_img, "Programming");
clearstyle();
document.querySelector("#programming_button").style.border = selected_borderstyle;