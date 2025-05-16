function add (firstInput, secondInput){
    return firstInput + secondInput
}

function multiply (firstInput, secondInput){
    return firstInput * secondInput
}

function substract (firstInput, secondInput){
    return firstInput - secondInput
}

function division (firstInput, secondInput){
    return firstInput / secondInput
}

function calculator (firstInput, secondInput, operator ){
    return operator(firstInput, secondInput)

}


console.log (calculator(5, 0, multiply));


