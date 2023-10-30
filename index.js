// function unit(){
let num1 =document.getElementById("number1");
let num2 =document.getElementById("number2");
let answerField =document.getElementById("answerField");
let addButton =document.getElementById("addButton");
let substract =document.getElementById("substract")

function onclickAddition(){
    let firstNumber = Number(num1.value);
    let secNumber =Number(num2.value);
    answerField.value = firstNumber + secNumber;
    
}
 
function onClickSub(){
    let firstNumber = Number(num1.value);
    let secNumber =Number(num2.value);
    answerField.value =firstNumber - secNumber

}

addButton.onclick = onclickAddition;
substract.onclick = onClickSub;

window.Function.onclick = () => document.style.backgroundColor =`
rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})
`
// }
// window.onload = unit;