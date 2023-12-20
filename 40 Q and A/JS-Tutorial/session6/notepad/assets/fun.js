var list_items= document.getElementsByClassName("list_items");
var new_item= document.getElementById("new_item");
var list_texts= document.getElementById("list_texts");
var save_button= document.getElementById("save_button");
var delete_button= document.getElementById("delete_button");

var title_element= document.getElementById("title_element");
var text_element= document.getElementById("text_element");

var current_item= 0;
var first_run= true;
var insert_new_item= false;
var item_saved= true;
var item_note = new Array();

save_button.addEventListener("click", save_item);
delete_button.addEventListener("click", delete_item);
new_item.addEventListener("click", add_new_item);

title_element.addEventListener("keypress", change_title);
text_element.addEventListener("keypress", change_text);

get_cookie();

function change_title(){
  item_saved= false;
}
function change_text(){
  item_saved= false;
}

function save_item(){
  if(item_saved){
    alert("Nothing to save!");
  }else{
    if(!insert_new_item && item_note.length>0){
      item_note[current_item][0]= title_element.value;
      item_note[current_item][1]= text_element.value;
      item_saved= true;
      load_list();
      save_cookie();
    }else{
      item_note.push([title_element.value, text_element.value]);
      insert_new_item= false;
      item_saved= true;
      load_list();
      save_cookie();
    }
  }
}


function load_element(item){
  if(!item_saved && item_note.length!= 0 && !first_run){
    if (confirm("Save this note?") == true) {
      item_note[current_item][0]= title_element.value;
      item_note[current_item][1]= text_element.value;
      load_list();
      item_saved= true;
    }
  }else{
    if(item_note.length!= 0){
      title_element.value= item_note[item][0];
      text_element.value= item_note[item][1];
      current_item= item;
    }
  }
  first_run= false;

}

function add_new_item(){
  if(item_note.length== 0){
    title_element.value= "Random Title: "+(Math.random() + 1).toString(36).substring(3);
    text_element.value= "";
    current_item= 0;
  }else{
    title_element.value= "Random Title: "+(Math.random() + 1).toString(36).substring(3);
    text_element.value= "";
    current_item= item_note.length;
  }
  insert_new_item= true;
}

function delete_item(){

  if(item_note.length>1){
    if(confirm("Are you Sure?") == true){
      item_note.splice(current_item, 1);
      load_list(0);
      load_element(0);
      save_cookie();
    }
  }else if(item_note.length==1){
    if(confirm("Are you Sure?") == true){
      item_note.splice(current_item, 1);
      load_list(0);
      load_element(0);
      title_element.value= "";
      text_element.value= "";
      save_cookie();
    }
  }
}

function load_list(){
    list_texts.innerHTML='<a href="#" class="list_items" id="new_item" onclick="add_new_item()">New Item</a>';
    for(var i=0; i<item_note.length; i++){
      list_texts.innerHTML+= '<a href="#" class="list_items" id="'+i+'" onclick="load_element(this.id)">'+item_note[i][0]+'</a>';
    }
}

function save_cookie(){
    document.cookie= ("items="+ JSON.stringify(item_note));
}

function get_cookie(cookieName) {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
      let [key,value] = el.split('=');
      if(key== "items"){
        cookie[key.trim()] = value;
        for(var i=0; i<JSON.parse(value).length; i++){
          item_note.push([JSON.parse(value)[i][0], JSON.parse(value)[i][1]]);
        }
        load_list();
        load_element(0);
      }
    })
  }

setInterval(() => {
  if(item_note.length==0){
    delete_button.style.display= "none";
  }else{
    delete_button.style.display= "inherit";
  }

  if(item_saved){
    save_button.style.display= "none";
  }else{
    save_button.style.display= "inherit";
  }
}, 300);

