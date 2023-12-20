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
item_note.push(["One","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."]);
item_note.push(["Two","It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."]);
item_note.push(["Three",'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.']);
item_note.push(["Four","There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."]);

load_list();
load_element(0);

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
    }else{
      item_note.push([title_element.value, text_element.value]);
      insert_new_item= false;
      item_saved= true;
      load_list();
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
    title_element.value= "";
    text_element.value= "";
    current_item= 0;
  }else{
    title_element.value= "";
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
    }
  }else if(item_note.length==1){
    if(confirm("Are you Sure?") == true){
      item_note.splice(current_item, 1);
      load_list(0);
      load_element(0);console.log(item_note.length);

      title_element.value= "";
      text_element.value= "";
    }
  }
}

function load_list(){
  list_texts.innerHTML='<a href="#" class="list_items" id="new_item" onclick="add_new_item()">New Item</a>';
  for(var i=0; i<item_note.length; i++){
    list_texts.innerHTML+= '<a href="#" class="list_items" id="'+i+'" onclick="load_element(this.id)">'+item_note[i][0]+'</a>';
  }
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
}, 500);

