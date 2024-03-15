var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var nome = document.getElementById("nome");

function alertar(event){
    if(true){
        alert("Voce clicou no botão!!!" + " " + nome.value);
    }
}