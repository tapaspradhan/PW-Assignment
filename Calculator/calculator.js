let num1=document.getElementById("num1");
let num2=document.getElementById("num2");
let operator=document.getElementById("operator");
let calculateBtn=document.getElementById("calculateBtn");
let result=document.getElementById("result");

const miniCalculate=()=>{
    let value1=parseFloat(num1.value);
    let value2=parseFloat(num2.value);
    let op=operator.value;

    switch (op) {
    
        case "+":
            result.textContent=value1+value2;
            break;
        case "-":
            result.textContent=value1-value2;
            break;
        case "*":
            result.textContent=value1*value2;
            break;
        case "/":
            result.textContent=value1/value2;
            break;
    
        default:
            result.textContent="Invalid Operator";
            break;
    }
}
calculateBtn.addEventListener("click",miniCalculate);

