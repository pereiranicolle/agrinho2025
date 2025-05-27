function toggleProdutos() {
const lista = document.getElementById("lista-produtos");
const botao = document.querySelector(".botao"); // Seleciona o botão de visibilidade

if (lista.style.display === "none") {
lista.style.display = "flex";
botao.style.backgroundColor = "#228B22"; // Verde
botao.textContent = "Ocultar Produtos";
} else {
lista.style.display = "none";
botao.style.backgroundColor = "#B22222"; // Vermelho
botao.textContent = "Mostrar Produtos";
}
}