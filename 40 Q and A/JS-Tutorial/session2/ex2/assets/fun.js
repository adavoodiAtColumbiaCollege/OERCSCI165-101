var text_task= document.getElementById("text_task");
var text_length= document.getElementById("text_length");
var items_length= document.getElementById("items_length");
var label_task= document.getElementById("label_task");


var add_button= document.getElementById("add_button");
var remove_button= document.getElementById("remove_button");
var clear_button= document.getElementById("clear_button");

const section_array = document.getElementById("section_array");

var item_name = new Array();

text_task.addEventListener("input", ()=>{
  text_length.innerText= text_task.value.length;
});

add_button.addEventListener("click",()=>{
  additem();
  text_task.value= "";
  text_length.innerText= 0;
});
function additem() {
  if(text_task.value!= ""){
    item_name.push(text_task.value);
    printitems();
  }

}

remove_button.addEventListener("click",()=>{
  removeitem();
});
function removeitem() {
  item_name.length=item_name.length-1;
  printitems();
}

clear_button.addEventListener("click",()=>{
  clearitem();
});
function clearitem(){
  item_name.length=0;
  printitems();
}

function printitems(){
  section_array.innerHTML="";
  for(var i=0; i<item_name.length; i++){
    section_array.innerHTML+= '<div class=\"items\"><input type="checkbox" class="checkboxs">'+item_name[i]+'</input></div>';
  }
  if(item_name.length>0){
    label_task.style.display= "inherit";
  }else{
    label_task.style.display= "none";
  }
  items_length.innerText= item_name.length;
}