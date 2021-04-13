let email = document.getElementById("email");
let error = document.getElementById("error");
function validate(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\.-]+).(.[a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email.value)){
        error.innerHTML = "Valid";
        error.style.color ="green";
        return true;
    }

    else{
        error.innerHTML ="Invalid";
        error.style.color = "red";
        return false;
    }
}

let phonenumber = document.getElementById("phonenumber");
let error2 = document.getElementById("error2");

function phno()
{
  let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(phoneno.test(phonenumber.value))
     {
	   return true;      
	 }
   else
     {
	   alert("Not a valid Phone Number");
	   return false;
     }
}


var pwd = document.getElementById("pwd");
var error1 = document.getElementById("error1");

function CheckPassword()
{
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(decimal.test(pwd.value))
    {
        alert('Correct, try another...')
        return true;
    }
    else
    {
        alert('Wrong...!')
        return false;
    } 
}

 



