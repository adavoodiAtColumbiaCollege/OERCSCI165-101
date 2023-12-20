var item_button= document.getElementById("item_button");
var item_radio= document.getElementById("item_radio");
var item_checkbox= document.getElementById("item_checkbox");
var item_text= document.getElementById("item_text");
var item_color= document.getElementById("item_color");
var item_file= document.getElementById("item_file");

function showitemdetail(item){
  section_array.innerText="This item Code is:\n"+ item.outerHTML;
}

item_button.addEventListener("click", ()=>{
  showitemdetail(item_button);
});

item_radio.addEventListener("click", ()=>{
  showitemdetail(item_radio);
});

item_checkbox.addEventListener("click", ()=>{
  showitemdetail(item_checkbox);
});

item_text.addEventListener("click", ()=>{
  showitemdetail(item_text);
});

item_color.addEventListener("click", ()=>{
  showitemdetail(item_color);
});

item_file.addEventListener("click", ()=>{
  showitemdetail(item_file);
});