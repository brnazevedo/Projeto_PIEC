var nameInput = document.getElementById("usuario");
var passInput = document.getElementById("senha");
var emailInput = document.getElementById("email");
var campusInput = document.getElementById("campus");
var cursoInput = document.getElementById("curso");
var buttonCad = document.getElementById("cadbt");


function formcad (nome,senha,email,campus,curso){
    create(nameInput.value,passInput.value,emailInput.value,campusInput.value,cursoInput.value);
}

//ação do botão
buttonCad.addEventListener("click", formcad);

//função create

function create (name,pass,mail,camp,course){
    var data = {
        Nome : name,
        Senha : pass,
        Email : mail,
        Campus : camp,
        Course : course
    }

    return firebase.database().ref().child('Aluno').push(data);
};



