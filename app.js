function btnAddOnAction() {
     let inputnum1 =document.getElementById("txtNum1").value;
    let inputnum2 =document.getElementById("txtNum2").value;

   
    console.log(inputnum1);
    console.log(inputnum2);

    let result = parseInt(inputnum1) + parseInt(inputnum2);
    outPut.innerText = "Result is - " + result;

    console.log(result);

}


function btnSubtractOnAction(){
 let inputnum1 =document.getElementById("txtNum1").value;
let inputnum2 =document.getElementById("txtNum2").value;

 console.log(inputnum1);
console.log(inputnum2);

  let result = parseInt(inputnum1) - parseInt(inputnum2);
outPut.innerText = "Result is - " + result;

    console.log(result);

}


function btnMultiplicationOnAction(){
 let inputnum1 =document.getElementById("txtNum1").value;
let inputnum2 =document.getElementById("txtNum2").value;

 console.log(inputnum1);
console.log(inputnum2);

  let result = parseInt(inputnum1) * parseInt(inputnum2);
outPut.innerText = "Result is - " + result;

    console.log(result);

}


function btnDivisionOnAction(){
 let inputnum1 =document.getElementById("txtNum1").value;
let inputnum2 =document.getElementById("txtNum2").value;

 console.log(inputnum1);
console.log(inputnum2);

  let result = parseInt(inputnum1) / parseInt(inputnum2);
outPut.innerText = "Result is - " + result;

    console.log(result);

}



let buttons = document.querySelectorAll('input[type="button"]');

let colors = ["#22c55e", "#f97316", "#3b82f6", "#a855f7"];

buttons.forEach((btn, index) => {
    btn.style.backgroundColor = colors[index];
    btn.style.color = "white";
    btn.style.padding = "12px";
    btn.style.border = "none";
    btn.style.borderRadius = "10px";
    btn.style.fontSize = "16px";
    btn.style.fontWeight = "bold";
    btn.style.cursor = "pointer";
    btn.style.margin = "5px";
});

let inputs = document.querySelectorAll('input[type="text"]');

inputs.forEach((box) => {
    box.style.width = "300px";
    box.style.height = "40px";
    box.style.padding = "10px";
    box.style.fontSize = "18px";
    box.style.borderRadius = "10px";
    box.style.border = "2px solid #a78bfa";
});

document.body.style.paddingTop = "40px";

let box = document.getElementById("calcBox");

box.style.width = "500px";
box.style.backgroundColor = "transparent";
box.style.padding = "30px";
box.style.borderRadius = "20px";
box.style.margin = "50px auto"; // 50px from top, auto = center in middle
box.style.textAlign = "center";
box.style.boxShadow = "0px 10px 30px rgba(0,0,0,0.3)";

document.getElementById("outPut").style.color = "#1e293b";















document.body.style.backgroundColor = "#677ec7";

