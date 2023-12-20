var new_text_message= document.getElementById("new_text_message");

function send_message() {
  document.getElementById("section_messages").innerHTML += '<div id="out_message"><p>'+new_text_message.value+'</p></div>';
  document.getElementById("section_messages").innerHTML += '<div id="in_message"><p>'+'it\'s ok'+'</p></div>';
}
function clear_chat() {
  document.getElementById("section_messages").innerHTML = "";
}