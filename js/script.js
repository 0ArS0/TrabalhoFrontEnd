// Exibicao o modal de compra
function mostrarModalCompra(produtoId) {
  const modal = document.getElementById("modalCompra");
  modal.style.display = "block";

  // Fechamento do modal
  const closeButton = document.querySelector(".close");
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Adiciona o produto ao carrinho
  const adicionarCarrinhoButton = document.getElementById("adicionarCarrinho");
  adicionarCarrinhoButton.addEventListener("click", () => {
    const quantidade = document.getElementById("quantidade").value;
    alert(
      `Produto ${produtoId} adicionado ao carrinho com ${quantidade} unidades.`
    );
    modal.style.display = "none";
  });

  // Feche o modal se o usuário clicar fora dele
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

// Evento de clique para os botões "Comprar"
const botoesComprar = document.querySelectorAll("button[data-id]");
botoesComprar.forEach((botao) => {
  botao.addEventListener("click", (event) => {
    const produtoId = event.target.getAttribute("data-id");
    mostrarModalCompra(produtoId);
  });
});






