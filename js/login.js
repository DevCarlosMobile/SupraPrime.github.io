/* Validação do login */
function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){
        location.href = "index.html";
        
        /* Mensagens de erro no formulário */
    }else{
        document.getElementById('email-invalid-error').style.display = 'block'
        document.getElementById('senha-invalid-error').style.display = 'block'
    }
}



