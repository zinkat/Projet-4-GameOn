function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeSpan = document.querySelector(".close");
const submitBtn = document.getElementById("submit");
const inputInvalid = document.getElementsByClassName("text-control"); //style bordure input


//********************************* launch modal form event******************************************//
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
function launchModal() {
modalbg.style.display = "block";
};

//**********************************close modal form event ******************************************//
closeSpan.addEventListener("click", closeModal);
function closeModal() {
  modalbg.style.display = "none";
};

//****************************************vérification prenom *******************************//
const NameReg = /^[A-zA-ZéèêîïÉÈÊÏÎ][a-zéèêàçîï]+([-'\s][a-zA-ZéèêîïÉÈÊÏÎ][a-zéèêàçîï]+)?/;
const firstName = document.getElementById("first");
const errorMessageF = document.querySelector(".error-msg");
submitBtn.addEventListener('click',nameValidator);
firstName.addEventListener('blur',nameValidator);

function nameValidator(e) {
  let validprenom = false;

  if(firstName.value == "") {
    errorMessageF.textContent = "N'oublier pas de saisir 2 caractères ou plus pour le champ du prénom";
    inputInvalid[0].style.border = "2px solid #e54858";
    validprenom = false;
  }
  else if(firstName.value.length < 2) 
   { errorMessageF.textContent="Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    inputInvalid[0].style.border = "2px solid #e54858";
    e.preventDefault();
    validprenom = false;
   }
  else if(NameReg.test(firstName.value) == false) {
    errorMessageF.textContent = "Format incorrect";
    inputInvalid[0].style.border = "2px solid #e54858";
    e.preventDefault();
    validprenom = false;
  }
  else {
    errorMessageF.textContent="";
  inputInvalid[0].style.border = "2px solid #279e7a";
  validprenom = true;
  }
  return validprenom;
}

//****************************************validation last name *******************************//
const NameRegL = /^([a-zA-Z ]+)$/;
const lastName = document.getElementById("last");
const errorMessageL = document.querySelector(".error-msg-last");
submitBtn.addEventListener('click', nameValidatorL);
lastName.addEventListener('blur',nameValidatorL)

let validnom = false;
function nameValidatorL(e) {
  if(lastName.value == "") {
    errorMessageL.textContent = "N'oublier pas de saisir 2 caractères ou plus pour le champ du nom";
    inputInvalid[1].style.border = "2px solid #e54858";
    e.preventDefault();
    validnom = false
  }
  else if(lastName.value.length < 2) { 
    errorMessageL.textContent="Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    inputInvalid[1].style.border = "2px solid #e54858";
    e.preventDefault();
    validnom = false
  }
  else if(NameRegL.test(lastName.value) == false) {
    errorMessageL.textContent = "Format incorrect";
    inputInvalid[1].style.border = "2px solid #e54858";
    e.preventDefault();
    validnom = false
  } 
  else{
    errorMessageL.textContent="";
    inputInvalid[1].style.border = "2px solid #279e7a";
    validnom = true;
  };
  //console.log(validnom);
  return validnom;
};
//console.log(validnom)

//****************************************validation email adresse *******************************//
let emailRegex = /^([a-z A-Z 0-9\.-]+)@([a-z A-Z 0-9]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
const email = document.getElementById("email");
let mailInvalid = document.querySelector(".mail-valid");
submitBtn.addEventListener('click', emailValidator);
email.addEventListener('blur', emailValidator);
let validmail = false;
function emailValidator (e){
if(emailRegex.test(email.value)== false) {
  mailInvalid.textContent = "Veillez saisir une adresse mail valide";
  inputInvalid[2].style.border = "2px solid #e54858";
  e.preventDefault();
  validmail = false;
}

else{
  mailInvalid.textContent = "";
  inputInvalid[2].style.border = "2px solid #279e7a";
  validmail = true;
};
//console.log( validmail)
return validmail;
};

//****************************************validation birthdate  *******************************//
const dateOfBirth = document.getElementById("birthdate");
let birthValid = document.querySelector(".birth-valid");
submitBtn.addEventListener('click',birthValidator);
dateOfBirth.addEventListener('blur', birthValidator );

let anniv = false;
function birthValidator (e){
if(dateOfBirth.validity.valueMissing) {
    birthValid.textContent = "Vous devez entrer votre date de naissance";
    inputInvalid[3].style.border = "2px solid #e54858";
    e.preventDefault();
    anniv = false
  }else {
    let dateBirth = dateOfBirth.value;
    //console.log(dateBirth);
    var arrdateBirth = dateBirth.split("-")
    var yearOfBirth=arrdateBirth[0];
    //console.log(arrdateBirth);
    var monthOfBirth=arrdateBirth[1];
    var dayOfBirth=arrdateBirth[2];
    //console.log(yearOfBirth);
    //console.log(monthOfBirth);
    //console.log(dayOfBirth);
    var today = new Date()
    var age = today.getFullYear() - yearOfBirth;
    //console.log(age,today.getFullYear(),yearOfBirth);
    if (today.getMonth()+1 < monthOfBirth || (today.getMonth()+1 == monthOfBirth && today.getDate() < dayOfBirth ) ){
      age--;
    }
   // console.log(age);
   // console.log(today.getMonth()+1 < monthOfBirth);
    if (age >= 16){
      birthValid.textContent = "";
      inputInvalid[3].style.border = "2px solid #279e7a";
      anniv = true;
    }
    else {
      birthValid.textContent = "Compétition reservée à l'âge de 16 ans et plus";
      inputInvalid[3].style.border = "2px solid #e54858";
      e.preventDefault();
      anniv = false;
    }  
  };
  //console.log( anniv)
  return anniv;
};

//*****************************************nombre de tournois *******************************//
const quantityGame = document.getElementById("quantity");
let quantityNumber = document.querySelector(".quantityNumber");
submitBtn.addEventListener('click',verifyQuantity);
quantityGame.addEventListener('blur', verifyQuantity);

let tournoisNbr = false;
function verifyQuantity(e) {
  if (quantityGame.validity.valueMissing){
    quantityNumber.textContent = "Champ obligatoire, merci de renter une valeur entre 0 et 99";
    inputInvalid[4].style.border = "2px solid #e54858"
    e.preventDefault();
    tournoisNbr = false;
  }
  else if ( quantityGame.value >= 100 || quantityGame.value < 0 ) {
    quantityNumber.textContent = "la valeur doit etre entre 0 et 99";
    inputInvalid[4].style.border = "2px solid #e54858"
    e.preventDefault();
    tournoisNbr = false;
  }
 else if (quantityGame.value <= 100 && quantityGame.value >= 0) { 
    quantityNumber.textContent = "";
    inputInvalid[4].style.border = "2px solid #279e7a"
    tournoisNbr = true;
  }
  //console.log(tournoisNbr);
  return tournoisNbr;
};
//console.log(tournoisNbr);

//*****************************************choix option location*******************************//
const locationOptions = document.querySelectorAll(".city");
const messageLocation = document.querySelector(".locationMsg");
const hidMsg = document.querySelector(".delMsg");
submitBtn.addEventListener('click', choiceLocation);
hidMsg.addEventListener("change",choiceLocation);

let valid = false;
function choiceLocation(e){
  for (let i = 0; i < locationOptions.length; i++){
   
    if(locationOptions[i].checked) {
      valid = true;
      break;
    }  
  };
    if(valid){
      messageLocation.textContent = ""
      valid = true;
    }
    else{ 
    messageLocation.textContent = "Vous devez choisir une option.";
    e.preventDefault();
    valid = false;
    }
  return valid 
};

//*****************************************validation conditions GU ********************************//
const chekCondition = document.querySelector(".condition");
const messageCondition = document.querySelector(".conditionMsg");
submitBtn.addEventListener('click', validatorCondition);

let ok = false;
function validatorCondition(e){
  if(chekCondition.checked){
    messageCondition.textContent = "";
    ok = true;
  }else{
    messageCondition.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
    e.preventDefault();
    ok = false
  }
  return ok
};

//*****************************************déactivation bouton submit ********************************//
submitBtn.disabled = true;
submitBtn.style.backgroundColor = "gray";
submitBtn.style.cursor = "not-allowed";
chekCondition.addEventListener('change',enableBtn);

function enableBtn() {
  if(chekCondition.checked){
    submitBtn.disabled = false;
    submitBtn.style.backgroundColor = "#e54858"
    submitBtn.style.cursor = "pointer";
  }else{
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor = "gray";
    submitBtn.style.cursor = "not-allowed";
  }
};

//*****************************************envoi formulaire et stockage $ ********************************//
submitBtn.addEventListener ('click', submitForm);
function submitForm(){
  let result = false
  if ( nameValidator() && nameValidatorL() && emailValidator () && birthValidator () && verifyQuantity() && choiceLocation() && validatorCondition()){ 
    result = true;
    //delete localStorage.firstName;
  }else{
    result = false;
  }
  localStorage.setItem('result', result)
};

// ********************************affichage message de confirmation******************************//
const inscriModal = document.querySelector(".container");
var result = localStorage.getItem('result');
   //console.log("result " + result);
function showSubmitMsg(){
  showModal();
  function showModal(){
    inscriModal.style.display = "block";
  }
}
   //console.log(localStorage.getItem('firstname'));
if (localStorage.getItem('result')){
    //console.log(localStorage.getItem('result'));
  delete localStorage.result;
  showSubmitMsg();
  //setTimeout('showSubmitMsg()',200)
};

// ********************************close modal showSubmitMsg******************************//
const btnConfirme= document.querySelector(".btnConfirme");
const closeSpanMsg = document.querySelector(".closeMsg")
btnConfirme.addEventListener("click", hideModal);
closeSpanMsg.addEventListener("click", hideModal);

function hideModal(){
  inscriModal.style.display = "none";
};