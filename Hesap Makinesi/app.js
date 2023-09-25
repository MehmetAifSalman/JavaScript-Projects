const display = document.querySelector(".calculator-input")
const keys = document.querySelector(".calculator-keys")

let displayValue = "0"
let firstVaalue = null
let operator = null
let waitingForSecondValue = false

updateDisplay();

function updateDisplay(){
    display.value = displayValue

}

keys.addEventListener("click",function(e){
    const element = e.target;

    if(!element.matches("button")) return;


    if (element.classList.contains("operator")){
        //console.log("operator",element.value);
        handleOperator(element.value);
        updateDisplay()


        return;
    }
    if (element.classList.contains("decimal")){
        //console.log("decimal",element.value);
        inputDecimal(element.value)
        updateDisplay()
        return;
    }
    if (element.classList.contains("clear")){
        //console.log("clear",element.value);
        clear()
        updateDisplay()
        return;
    }

   inputNumber(element.value)
   updateDisplay()
})


function inputNumber(num){

    if(waitingForSecondValue){
        displayValue = num
        waitingForSecondValue = false
    }else{
    displayValue = displayValue === '0'? num: displayValue + num
    }
    console.log(displayValue,firstVaalue,operator,waitingForSecondValue);
}

function inputDecimal(){
    if(!displayValue.includes(".")){
        displayValue += '.'
    }
   
}
function clear(){
    displayValue = "0"
}

function  handleOperator(Nextoperator){
    const value = parseFloat(displayValue)
    if (firstVaalue == null) {
        firstVaalue = value
    } else if (operator)
    {
        const result = calculate(firstVaalue , value , operator)
        displayValue = String(result)
        firstVaalue = result

    }
    waitingForSecondValue = true
    operator = Nextoperator
}

function calculate(first,second,operator){
    if(operator === "+"){
        return first + second
    }
    else if(operator === "-"){
        return first - second;
    }
    else if (operator === "*"){
        return first * second
    }
    else if(operator === "/"){
        return first / second
    }
    else{
        return second
    }
}