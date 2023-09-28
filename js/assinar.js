let formCliente = document.querySelector(".form");//esta pegando o objeto pela classe
formCliente.addEventListener("submit", (event) => {//função submit serva para enviar formulario
  event.preventDefault();//criou o evento
  const formData = new FormData(formCliente);
  const data = Object.fromEntries(formData);
  fetch("https://6513726b8e505cebc2e9db94.mockapi.io/clientes", {//chama a api
    method: "POST",//get consulta e post cria
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())//converte o retorno da api em um objeto
    .then((data) => console.log(data));//retorno da resposta convertida
});