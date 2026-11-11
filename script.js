function highlightPicture(){
    document.getElementById("eventImage").style.border = "3px solid #f39c12";
    document.getElementById("eventImage").style.boxShadow = "0 8px 16px gray";
    document.getElementById("badge").innerHTML = "Click the picture to learn about us";
    document.getElementById("badge").style.backgroundColor = "#f39c12";
} 

function restorePicture(){
    document.getElementById("eventImage").style.border = "3px solid #2c3e50";
    document.getElementById("eventImage").style.boxShadow = "0 4px 8px gray";
    document.getElementById("badge").innerHTML = "Student Events";
    document.getElementById("badge").style.backgroundColor = "#2c3e50";
} 

function highlightField(x){
    x.style.background = "lightyellow";
} 

function restoreField(x){
    x.style.background = "white";
} 

function showMessage(text, color){
    document.getElementById("formMessage").innerHTML = text;
    document.getElementById("formMessage").style.color = color;
    document.getElementById("formMessage").style.fontWeight = "bold";
} 

function showError(text, color){
    window.alert(text);
    showMessage(text, "red");
    document.getElementById(fieldId).style.background = "#fadbd8";
    return false;
} 

function validateSignup(){
    var id = document.forms["signupForm"]["ID"].value;
    var name = document.forms["signupForm"]["name"].value;
    var email = document.forms["signupForm"]["email"].value;
    var password = document.forms["signupForm"]["password"].value;
    var confirm = document.forms["signupForm"]["confirm"].value;
    var category = document.forms["signupForm"]["category"].value;

    if (id == ""){
        return showError("ID", "Student ID must be filled out");
    } 

    if (!(parseInt(id) >= 1000000 && parseInt(id) <= 9999999)) {
        return showError("ID", "Student ID must be 7 digits");
    } 

    if (name == ""){
        return showError("name", "Full name must be filled out");
    } 

    if (email == ""){
        return showError("email", "Email must be filled out");
    }

    if (password == ""){
        return showError("password", "Password must be filled out");
    } 

    if (confirm != password){
        return showError("confirm", "Passwords do not match");
    } 

    if (category == ""){
        return showError("category", "Please choose your favorite event category");
    } 

    return true;
} 

function completeSignup(){
    var name = document.forms["signupForm"]["name"].value;
    var category = document.forms["signupForm"]["category"].value;
    var suggestion;

    switch (category){
        case "workshops":
            suggestion = "Don't miss the Coding Workshop on October 15.";
            break;
        case "sports":
            suggestion = "Don't miss the Sports Tournament on October 25.";
            break;
        case "career":
            suggestion = "We will let you know about the next career event.";
            break;
        default:
            suggestion = "Check the home page for upcoming activities.";
            break;
    } 

    showMessage("Welcome " + name + "! Your account has been created. " + suggestion, "green");
    return false; 
} 

function clearSignup(){
    document.getElementById("formMessage").innerHTML = "";
    restoreField(document.getElementById("ID"));
    restoreField(document.getElementById("name"));
    restoreField(document.getElementById("email"));
    restoreField(document.getElementById("password"));
    restoreField(document.getElementById("confirm"));
    restoreField(document.getElementById("category"));
} 

function validateLogin(){
    var email = document.forms["loginForm"]["email"].value;
    var password = document.forms["loginForm"]["password"].value;

    if (email == ""){
        return showError("email", "Email must be filled out");
    } 

    if (password == ""){
        return showError("password", "Password must be filled out");
    } 

    return true;
} 

function completeLogin(){
    var email = document.forms["loginForm"]["email"].value;

    showMessage("Welcome back, " + email + "!", "green");
    return false;
}

function clearLogin(){
    document.getElementById("formMessage").innerHTML = "";
    restoreField(document.getElementById("email"));
    restoreField(document.getElementById("password"));
}
