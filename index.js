//DOM
const cardHolderNameField = document.getElementById("cardholder-name-field");
const nameDesign = document.querySelector(".name");

const cardNumberField = document.getElementById("card-number-field");
const cardNumberDesign = document.querySelector("#card-number");

const mm = document.getElementById("mm");
const yy = document.getElementById("yy");
const expMmField = document.getElementById("exp-mm-field");
const expYyField = document.getElementById("exp-yy-field");

const cvcDesign = document.querySelector("#cvc");
const cvcField = document.getElementById("cvc-field");

const formContainer = document.querySelector(".form-container");
const complete = document.querySelector(".complete");


const btnSubmit = document.querySelector(".submit");
const btnContinue = document.querySelector(".continue")

const form = document.getElementById("form");



//





cardHolderNameField.addEventListener("input",function(e){
    nameDesign.innerText = this.value;
});

cardNumberField.addEventListener("input", (e)=>{
    cardNumberDesign.innerText = cardNumberField.value;
});

expMmField.addEventListener("input", (e)=>{
    mm.innerText = expMmField.value;
});
expYyField.addEventListener("input", (e)=>{
    yy.innerText = expYyField.value;
});
cvcField.addEventListener("input", (e)=>{
    cvcDesign.innerText = cvcField.value;
});

/**
 * Add tips to the form when an error find
 * @param {String} errorMsg 
 * @param {String} parentID 
 */
function createError(errorMsg, parentID){
    const parent = document.getElementById(parentID);
    const error = document.createElement("p");
    error.classList.add("error-msg");
    error.innerText = errorMsg;
    parent.appendChild(error);
}

function validateName(){
    if(cardHolderNameField.value == ""){
        createError("Can't be blank", "cardholder-name-errors")
        return false;
    }
    return true;
}

function validateNumber(){
    if(cardNumberField.value == "" ){
        createError("Can't be blank", "card-number-errors")
        return false;
    }else if(!/\d{4}\s\d{4}\s\d{4}\s\d{4}/.test(cardNumberField.value)){
        createError("Wrong format, number only", "card-number-errors")
        return false;
    }
    return true;
}

function validateExpDate(){
    console.log(typeof expMmField.value)

    if(expMmField.value == ""){
        createError("Can't be blank","exp-field-errors");
        return false;
    }
    if( expMmField.value < 1 || expMmField.value>12){
        createError("Wrong format","exp-field-errors");
        return false
    }
    if(expYyField.value == ""){
        createError("Can't be blank","exp-field-errors");
        return false;
    }
    if( expYyField.value < 0 || expYyField.value>99){
        createError("Wrong format","exp-field-errors");
        return false
    }
    return true
}
function validateCVC(){
    if(cvcField.value == ""){
        createError("Can't be blank, wrong format","cvc-field-errors");
        return false;
    }
    if( cvcField.value < 0 || cvcField.value>999){
        createError("Wrong format","cvc-field-errors");
        return false
    }
    return true;
}

/**
 * To clear all error messages
 */
function clearErrors(){
    let errorMsgs = document.getElementsByClassName("error-msg");
    while(errorMsgs.length>0){
        errorMsgs[0].remove();
       
    }
    errorMsgs = document.getElementsByClassName("error-msg");
}

btnSubmit.onclick = ()=>{
    clearErrors();
    let ok = true;   
    if(!validateName()){  
        ok= false;
    }
    if(!validateNumber()){
        ok = false;
    }
    if(!validateExpDate()){
        ok=false;
    }
    if(!validateCVC()){
        ok=false;
    }
    if(ok){
        formContainer.style.display = "none";
        complete.style.display = "initial";
    }
    
}
btnContinue.onclick = ()=>{
    form.reset()
    formContainer.style.display = "initial";
    complete.style.display = "none";
}

/**
 * Add a gradient background to the field on focus event
 * @param {HTMLElement} item - Form Field
 */
function addFocusListener(item){
    item.addEventListener("focusin", ()=>{
        item.parentNode.style.backgroundImage = getComputedStyle(document.documentElement).getPropertyValue('--gradient');
    });

    item.addEventListener("focusout", ()=>{
        item.parentNode.style.backgroundImage = "";
    });
}


addFocusListener(cardHolderNameField);
addFocusListener(cardNumberField);
addFocusListener(expMmField);
addFocusListener(expYyField);
addFocusListener(cvcField);
