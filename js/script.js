const formulario = document.querySelector("#formulario");

function lerFormulario()
 {
  return {
  codinome: document.querySelector("#codinome").value,
  nome: document.querySelector("#nome").value,
  idade: document.querySelector("#idade").value,
  poder: document.querySelector("#poder").value,
  ingresso: document.querySelector("#ingresso").value,
  email: document.querySelector("#email").value
};
 }

function capitalizar(texto) {
  const palavras = texto.trim().toLowerCase().split(" ");
  const resultado = [];

  for (const palavra of palavras) {
    if (palavra !== "") {
        resultado.push(palavra[0].toUpperCase() + palavra.slice(1));
    }
}

function paraNumero(texto) {
  return Number(texto);
}

 function tratar(dados) {
  codinome = capitalizar(dados.codinome),
  nome = capitalizar(dados.nome),
  idade = paraNumero(dados.idade),
  poder = paraNumero(dados.poder),
  ingresso = dados.ingresso,
  email = dados.email.trim().toLowerCase();
  return dados;
}

formulario.addEventListener("submit", function(evento) {
  evento.preventDefault();
  try {
    const recruta = tratar(lerFormulario());

  } catch (erro) {

  } finally {

    }
});