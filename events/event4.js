function toggleMenu() {
    var menu = document.getElementById("mainMenu");
    menu.style.display = (menu.style.display === "none" || menu.style.display === "") ? "block" : "none";
}

function fechaMenu(){
    var menu = document.getElementById("mainMenu");
    menu.style.display = (menu.style.display === "none" || menu.style.display === "") ? "block" : "none";
}    

function enviarFormulario() {
    var mensagemElement = document.getElementById('mensagem');
    mensagemElement.innerText = 'Formulário enviado com sucesso!';
}