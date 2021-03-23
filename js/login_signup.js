function btnSubmit() {
    alert("Processing submission");
}

function forgotPass() {
    var email = prompt("Enter your email in order to reset your password:");
    if(email != "" && email != null) {
        var pass1 = prompt("Please enter your new password:");
        while(pass1 == "") {
            pass1 = prompt("Password cannot be empty. Please try again:");
        }
        if(pass1 == null) {
            alert("Password reset cancelled.");
        }
        else{
            var pass2 = prompt("Please enter the same password again for verification:");
            if(pass2 != "" && pass2 != null) {
                if(pass1 == pass2){
                    alert("Please allow 5-10 minutes for a confirmation email to be sent.");
                }
                else {
                    alert("Password reset cancelled. The two passwords were not the same.");
                }
            }
            else {
                alert("Password reset cancelled.");
            }
        }
    }
}

function signupCheck() {
    alert("Processing submission");
    var pass1 = document.getElementById("exampleInputPassword1").value;
    var pass2 = document.getElementById("exampleInputPassword2").value;
    if(pass1 == pass2){
        var email = document.getElementById("exampleInputEmail1").value;
        var post = document.getElementById("post").value;
        var box1 = document.getElementById("exampleCheck1").checked;
        var box2 = document.getElementById("exampleCheck2").checked;
        var box3 = document.getElementById("exampleCheck3").checked;
        if(email != "" && post != "" && box1 != false && box2 != false && box3 != false){
        }
        else{
            alert("One or more required fields were empty. Sign Up cancelled.");
        }
    }
    else{
        alert("Passwords were different. Sign Up cancelled.");
    }
}