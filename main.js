// Botão de visibilidade
function toggleProdutos() {
  const lista = document.getElementById("lista-produtos");
  lista.style.display = (lista.style.display === "none") ? "flex" : "none";
}

// Carrinho
let contador = 0;
const contadorEl = document.getElementById("contador");

document.querySelectorAll(".comprar").forEach(botao => {
  botao.addEventListener("click", () => {
    contador++;
    contadorEl.textContent = contador;
    alert("Produto adicionado ao carrinho!");
  });
});