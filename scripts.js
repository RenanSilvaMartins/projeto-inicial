var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);

function alertar(event){
    if(true){
        alert("Voce clicou no botão!!!" + event);
    }
}