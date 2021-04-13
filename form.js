let email = document.getElementById("email");
let error = document.getElementById("error");
function validateEmail(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\.-]+).(.[a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email.value)){
        error.innerHTML = "Valid";
        error.style.color ="green";
        return true;
    }

    else{
        alert("Email Id is not valid");
        return false;
    }
}

let phonenumber = document.getElementById("phonenumber");
let error2 = document.getElementById("error2");

function validatePhone()
{
  let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(phoneno.test(phonenumber.value))
     {
	   return true;      
	 }
   else
     {
	   alert("Not a valid Phone Number!!");
	   return false;
     }
}



function passwordstrength() {
    var strength = document.getElementById('strength');
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{6,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{5,}).*", "g");
    var pwd = document.getElementById("password");
    if (pwd.value.length == 0) {
        strength.innerHTML = 'Type Password';
    } else if (false == enoughRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:red"><b>add more characters</b></span>';
        return false;
    } else if (strongRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:green"><b>Strong!</b></span>';
        return true;
    } else if (mediumRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:orange"><b>Medium!</b></span>';
        return false;
    } else {
        strength.innerHTML = '<span style="color:red"><b>Weak!</b></span>';
        return false;
    }
}

