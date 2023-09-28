// Exibicao o modal de compra
function mostrarModalCompra(produtoId) { // exibe o modal de compra na página
  const modal = document.getElementById("modalCompra"); // obtém uma referência ao elemento HTML com o ID "modalCompra"
  modal.style.display = "block"; //Essa linha define o estilo CSS do modal para "block", tornando-o visível na tela.

  // Fechamento do modal
  const closeButton = document.querySelector(".close"); // Aqui, o código procura o elemento com a classe CSS "close", referente ao X na canto superior esquerdo do modal

  closeButton.addEventListener("click", () => { //Este trecho de código adiciona um ouvinte de evento de clique ao botão de fechamento do modal, que define o estilo do modal para "none", tornando-o invisível.
    modal.style.display = "none";
  });

  // Adiciona o produto ao carrinho
  const adicionarCarrinhoButton = document.getElementById("adicionarCarrinho"); //Este trecho de código obtém uma referência ao elemento HTML com o ID "adicionarCarrinho" (botao dentro do modal)

  adicionarCarrinhoButton.addEventListener("click", () => { //Assim como o botão de fechamento, este trecho de código adiciona um ouvinte de evento de clique ao botão "Adicionar ao Carrinho"

    const quantidade = document.getElementById("quantidade").value; //Obtém a quantidade selecionada pelo usuário a partir de um campo com o ID "quantidade"

    alert( //e exibe um alerta com informações sobre o produto adicionado ao carrinho. Em seguida, ele define o estilo do modal para "none", ocultando-o.
      `${produtoId} adicionado ao carrinho com ${quantidade} unidades.`
    );
    modal.style.display = "none";
  });

  // Fecha o modal se o usuário clicar fora dele
  window.addEventListener("click", (event) => { //Este trecho de código adiciona um ouvinte de evento de clique ao objeto window (janela do navegador). Ele monitora os cliques do usuário fora do modal. Se o usuário clicar em qualquer lugar fora do modal, o estilo do modal é definido como "none" para fechá-lo.
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

// Evento de clique para os botões "Comprar"
const botoesComprar = document.querySelectorAll("button[data-id]"); //Este código seleciona todos os botões na página que têm um atributo "data-id". Refere aos botões "Comprar" que estão associados a produtos específicos.

botoesComprar.forEach((botao) => { // Isso itera sobre a lista de botões "Comprar" encontrados
  botao.addEventListener("click", (event) => { // Adiciona um ouvinte de evento de clique a cada um deles.
    const produtoId = event.target.getAttribute("data-id"); //obtém o valor do atributo "data-id" do botão, que corresponde ao ID do produto, e chama a função mostrarModalCompra para exibir o modal de compra para o produto correspondente.
    mostrarModalCompra(produtoId);
  });
});

 document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Mensagem enviada com sucesso!");
});



