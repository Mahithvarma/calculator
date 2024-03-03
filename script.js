const display = document.getElementById('display');

function update(ele){
    display.value += ele;
}

function reset(){
    display.value = '';
}

function backspace(){
    display.value = display.value.substring(0, display.value.length-1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = 'Error';
    }
}