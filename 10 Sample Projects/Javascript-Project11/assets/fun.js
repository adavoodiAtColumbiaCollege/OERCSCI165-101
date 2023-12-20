var textview= document.getElementById("textview");

function insert(num) {
    textview.value = textview.value + num;
}

function equal(){
    var exp = textview.value;
    if(exp){
        textview.value = eval(exp)
    }
}

function backspace(){
    var exp = textview.value;
    textview.value = exp.substring(0, exp.length - 1); /* remove the element from total length ? 1 */
}
