const form = document.getElementById("loginForm");

const email = document.getElementById("email");
const senha = document.getElementById("senha");

const erroEmail = document.getElementById("erroEmail");
const erroSenha = document.getElementById("erroSenha");

const mensagem = document.getElementById("mensagem");

const mostrarSenha = document.getElementById("mostrarSenha");



mostrarSenha.addEventListener("click", function () {

    if (senha.type === "password") {
        senha.type = "text";
        mostrarSenha.textContent = "🙈";
    } else {
        senha.type = "password";
        mostrarSenha.textContent = "👁";
    }

});


form.addEventListener("submit", function (event) {

    event.preventDefault();

    erroEmail.textContent = "";
    erroSenha.textContent = "";
    mensagem.textContent = "";

    let valido = true;



    if (email.value.trim() === "") {

        erroEmail.textContent = "Digite seu e-mail.";
        valido = false;

    } else if (!email.value.includes("@")) {

        erroEmail.textContent = "Digite um e-mail válido.";
        valido = false;

    }


    if (senha.value.trim() === "") {

        erroSenha.textContent = "Digite sua senha.";
        valido = false;

    } else if (senha.value.length < 6) {

        erroSenha.textContent = "A senha deve ter pelo menos 6 caracteres.";
        valido = false;

    }

    if (valido) {

        mensagem.textContent = "Login realizado com sucesso!";
        mensagem.style.color = "#43a047";

        setTimeout(function () {
            window.location.href = "index.html";
        }, 1000);

    }

});