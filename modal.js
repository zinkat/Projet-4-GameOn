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


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// launch modal form
function launchModal() {
modalbg.style.display = "block";


};

// closeSpan.forEach((spn) => spn.addEventListener("click", closeModal));

// close modal form //close modal event
closeSpan.addEventListener("click", closeModal);
function closeModal() {
  modalbg.style.display = "none";
};

// closeSpan.onclick = function (){
//   modalbg.style.display = "none";
// }
const submitBtn = document.getElementById("submit");
// if(submitBtn.disabled = true ){
//   submitBtn.style.backgroundColor = "gray";
// }
const form = document.querySelector(".form");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const dateOfBirth = document.getElementById("birthdate");
const inputInvalid = document.getElementsByClassName("text-control");

//vérification prenom.
const NameReg = /^[A-zA-ZéèêîïÉÈÊÏÎ][a-zéèêàçîï]+([-'\s][a-zA-ZéèêîïÉÈÊÏÎ][a-zéèêàçîï]+)?/;
submitBtn.addEventListener('click',nameValidator);

const errorMessageF = document.querySelector(".error-msg");
firstName.addEventListener('blur', function(e) {  
  if(e.target.value.length < 2) 
   { errorMessageF.textContent="Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    inputInvalid[0].style.border = "2px solid red";
   }
  else if(NameReg.test(firstName.value) == false) {
    errorMessageF.textContent = "Format incorrect";
    inputInvalid[0].style.border = "2px solid red";

  }else{errorMessageF.textContent="";
   inputInvalid[0].style.border = "2px solid green";
  };
  })
function nameValidator (e) {
  if(firstName.validity.valueMissing) {
    errorMessageF.textContent = "N'oublier pas de saisir 2 caractères ou plus pour le champ du prénom";
    inputInvalid[0].style.border = "2px solid red";
    e.preventDefault();
  }

  else if(NameReg.test(firstName.value) == false) {
    errorMessageF.textContent = "Format incorrect";
    inputInvalid[0].style.border = "2px solid red";
    e.preventDefault();
  };
};
//validation last name
const NameRegL = /^([a-zA-Z ]+)$/;
submitBtn.addEventListener('click', nameValidatorL);
const errorMessageL = document.querySelector(".error-msg-last");

lastName.addEventListener('blur', function(e) { 
  
  if(e.target.value.length < 2) 
  { errorMessageL.textContent="Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    inputInvalid[1].style.border = "2px solid red";
  }
  else if(NameRegL.test(lastName.value) == false) {
    errorMessageL.textContent = "Format incorrect";
    inputInvalid[1].style.border = "2px solid red";
  }
  else{errorMessageL.textContent="";
  inputInvalid[1].style.border = "2px solid green";
  };
});  
function nameValidatorL (e) {

  if(lastName.value == "") {
    errorMessageL.textContent = "N'oublier pas de saisir 2 caractères ou plus pour le champ du nom";
    inputInvalid[1].style.border = "2px solid red";
    e.preventDefault();
  }

  else if(NameRegL.test(lastName.value) == false) {
    errorMessageL.textContent = "Format incorrect";
    inputInvalid[1].style.border = "2px solid red";
    e.preventDefault();
  } 
};

//validation adresse mail
let mailInvalid = document.querySelector(".mail-valid");
let emailRegex = /^([a-z A-Z 0-9\.-]+)@([a-z A-Z 0-9]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
submitBtn.addEventListener('click', emailValidator)
email.addEventListener('blur', emailValidator);

function emailValidator (e){
if(emailRegex.test(email.value)== false) {
  mailInvalid.textContent = "Veillez saisir une adresse mail valide";
  inputInvalid[2].style.border = "2px solid red";
  e.preventDefault();
}
else{
  mailInvalid.textContent = "";
  inputInvalid[2].style.border = "2px solid green";
};
};

// validation date de naissance 

submitBtn.addEventListener('click',birthValidator);
let birthValid = document.querySelector(".birth-valid");
dateOfBirth.addEventListener('blur', birthValidator );
function birthValidator (e){
if(dateOfBirth.validity.valueMissing) {
    birthValid.textContent = "Vous devez entrer votre date de naissance";
    inputInvalid[3].style.border = "2px solid red";
    e.preventDefault();
  }else{
    birthValid.textContent = "";
    inputInvalid[3].style.border = "2px solid green";
  };
};
///nombre de tournois 
const quantityGame = document.getElementById("quantity");
submitBtn.addEventListener('click',verifyQuantity);
quantityGame.addEventListener('blur', verifyQuantity);
let quantityNumber = document.querySelector(".quantityNumber");

function verifyQuantity() {
  if (quantityGame.validity.valueMissing){
    quantityNumber.textContent = "Champ obligatoire, merci de renter une valeur entre 0 et 99";
    inputInvalid[4].style.border = "2px solid red"
  }
 else if (quantityGame.value >= 0 && quantityGame.value <= 99) { 
    quantityNumber.textContent = "";
    inputInvalid[4].style.border = "2px solid green"
  }

  else if ( quantityGame.value >= 99 || quantityGame.value < 0 ) {
    quantityNumber.textContent = "la valeur doit etre entre 0 et 99";
    inputInvalid[4].style.border = "2px solid red"
  }
 
  // else  {
  //   quantityNumber.textContent = "";
  //   inputInvalid[4].style.border = "2px solid green"
  // }; 
};

//choix option location

submitBtn.addEventListener('click', choiceLocation);
const locationOptions = document.querySelectorAll(".city");
const messageLocation = document.querySelector(".locationMsg");

function choiceLocation(e){
let valid = false;
  for (let i = 0; i < locationOptions.length; i++){
   
   if(locationOptions[i].checked) {
    valid = true;
     break;
   }
  };

  if(valid){
    messageLocation.textContent = "";

  }
  else{ 
  messageLocation.textContent = "Vous devez choisir une option.";
  e.preventDefault();
  }
};

//validation conditions

submitBtn.addEventListener('click', validatorCondition);
const chekCondition = document.querySelector(".condition");
const messageCondition = document.querySelector(".conditionMsg");
//console.log(chekCondition);

function validatorCondition(e){

if(chekCondition.checked){
  messageCondition.textContent = "";
 
}else{
  messageCondition.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
  e.preventDefault();
}
};


                   ////////////////////////////////////////////////////////////
const modalMsg =document.querySelector(".valid-btn");
const inscriModal = document.querySelector(".container");
const btnConfirme= document.querySelector(".btnConfirme");


// let input = document.getElementsByClassName("text-control").value;
// input.addEventListener("", checkValue);
//chekCondition.addEventListener('change',checkValue)

// function checkValue(){
  
    
//     if(input.value[0] !==""){
   
//       submitBtn.disabled = false;

//       modalMsg.addEventListener('click',showMsg);

//       function showMsg(){
      
//         inscriModal.style.display = "block";

//       };

//       btnConfirme.addEventListener("click", hideModal);

//       function hideModal(){
//         inscriModal.style.display = "none"
//       }

//       };
  
//   }

//  submitBtn.disabled = false;
//}

 submitBtn.addEventListener('click',showMsg);

function showMsg(){
 
  inscriModal.style.display = "block";
  alert(coucou)

};

btnConfirme.addEventListener("click", hideModal);

function hideModal(){
  inscriModal.style.display = "none"
}

// };








