let formCliente = document.querySelector(".form");
formCliente.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(formCliente);
  const data = Object.fromEntries(formData);
  fetch("https://6513726b8e505cebc2e9db94.mockapi.io/clientes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
});