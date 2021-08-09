var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var divOutput = document.querySelector("#output");
// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverURL = "https://api.funtranslations.com/translate/pig-latin.json";

function getTranslationURl(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}


function clickHandler(){
    var inputText = txtInput.value;    //taking input

    //call the server for processing
    fetch(getTranslationURl(inputText))
    .then(response => response.json())
    .then(json => {
        var translateText = json.contents.translated;
        divOutput.innerText = translateText;
    })
    .catch(errorHandler) 

};

btnTranslate.addEventListener("click", clickHandler)
  
//live exercise
// var element = document.querySelector("textarea");
// var byClass = document.querySelector(".btn-primary");
// var byId = document.querySelector("#input-btn");
// var byAttr = document.querySelector("input[name='translator']")