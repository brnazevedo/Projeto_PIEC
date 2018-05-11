var emailInput = document.getElementById("email");
var passInput = document.getElementById("senha");
var buttonLog = document.getElementById("logbt");
var displayUser = document.getElementById("user");

const bd = firebase.auth().child("Aluno");

buttonLog.addEventListener("click",function(){
            firebase
                .auth()
                .signInWithEmailandPassword(emailInput.value,passInput.value)
                .then(function(result){
                    console.log(result);
                    
                })

})