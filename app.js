function getNumber(numb){
    var result = document.getElementById("result")
    result.value += numb
}


function getResult(numb){
    //eval  method for equal sign to perform every action
    var result = document.getElementById("result")
    result.value = eval(result.value)
}

function clearResult(numb){
    var result = document.getElementById("result")
   // clear
    result.value = " "
}
