submit = document.getElementById('submit');
email = document.getElementById('email');
password = document.getElementById('password');
not= document.getElementById('not');

submit.addEventListener('click', sub);
function sub(){
    if(email.value == "mariam@gmail.com" && password.value == "password"){
        window.location.replace("../page2/index.html");
        }
    else {
        
        not.style.display="none"
        not.offsetWidth
        not.style.display="block"
    }
}
