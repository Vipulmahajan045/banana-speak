var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var divOutput = document.querySelector("#output");


function clickHandler(){
    divOutput.innerText = "jdjdjdjdjjdjdjdj " + txtInput.value;

};

btnTranslate.addEventListener("click", clickHandler)
  
//live exercise
// var element = document.querySelector("textarea");
// var byClass = document.querySelector(".btn-primary");
// var byId = document.querySelector("#input-btn");
// var byAttr = document.querySelector("input[name='translator']")