const form= document.getElementById('form');
const email= document.getElementById('email');
const password= document.getElementById('password');



//functions
// FOR SHOW ERROR
function showError(input,  message) {
    const formControl = input.parentElement;
    formControl.className="form-control error";
    const small= formControl.querySelector('small');
    small.innerText=message;
    
}

// FOR SHOW showSuccess
function showSuccess(input){
    const formControl = input.parentElement;
   formControl.className="form-control success";
}
 
//TO VALIDATE EMAIL USING REGEX
function checkEmail(input) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
        
    } else{
        showError(input, 'please enter a valid email or ID');
    }
    
    
}
// TO VALIDATE BLANK FIELDS
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim()===""){ //Trim is used to remove any white spaces.
            showError(input, `${input.id} is required`);
        }
        else{
            showSuccess(input);
        }
    })
}

//EVENT LISTNERS

form.addEventListener('submit', function(e){
e.preventDefault();
checkRequired([email, password]);
checkEmail(email);

});

