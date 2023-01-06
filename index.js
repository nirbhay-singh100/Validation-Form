function validate()
{
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("Password").value;
  var confirmPassword = document.getElementById("confirm_password").value;

  checkUsername(username);
  checkEmail(email);
  checkPassword(password);
  checkPasswordsMatch(password , confirmPassword);
}

function checkUsername(username){
  if(username.length > 7){
    document.getElementById("username").classList.add("success");
    document.getElementById("username").classList.replace("error","success");
    document.getElementById("username_error").innerText = "";
  }
  else{
    document.getElementById("username").classList.add("error");
    document.getElementById("username_error").innerText = "username must be 8 characters long";
  }
}

function checkEmail(email){
  if(email.length>8 && email.includes("@gmail")){
    document.getElementById("email").classList.add("success");
    document.getElementById("email").classList.replace("error","success");
    document.getElementById("email_error").innerText = "";
  }
  else{
    document.getElementById("email").classList.add("error");
    document.getElementById("email_error").innerText = "email must includes @gmail, 8 chars long";
  }
}

function checkPassword(password){
  if(password.length > 8 && password.includes("#")){
    document.getElementById("Password").classList.add("success");
    document.getElementById("Password").classList.replace("error","success");
    document.getElementById("Password_error").innerText = "";
  }
  else{
    document.getElementById("Password").classList.add("error");
    document.getElementById("Password_error").innerText = "Password must be 8 char long, includes #";
  }
}

function checkPasswordsMatch(password , confirmPassword){
  if(password === confirmPassword && confirmPassword.length!=0){
    document.getElementById("confirm_password").classList.add("success");
    document.getElementById("confirm_password").classList.replace("error","success");
    document.getElementById("confirm_password_error").innerText = "";
  }
  else{
    document.getElementById("confirm_password").classList.add("error");
    document.getElementById("confirm_password_error").innerText = "Both passwords should be same";
  }
}
