//efeito do botão voltar ao Topo

function topo(){
    window.scrollTo(
        {
            top: 0,
            left:0,
            behavior: 'smooth',
        }
    )
}

//Validação de Login

function Login() {
    var logado = 0;
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if (usuario == 'admin' && senha == '123456') {
        window.location = "venda.html";
        logado = 1;
    }

    if (usuario == 'wesley' && senha == '12345678') {
        window.location = "venda.html";
        logado = 1;
    }

    if (logado == 0) {
        alert("Acesso negado. Dados incorretos");
    }
}

//Ativar alert no botão cadastrar
function cadastro() {
    alert("Cadastrado com sucesso!");
    // Definindo que o usuário está logado após o cadastro
    logado = 1;
    window.location.href = "index.html";
}