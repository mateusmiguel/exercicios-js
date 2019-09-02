const usuario = {
  nome: "Mateus",
  idade: "27",
  endereco: {
    cidade: "Campinas",
    estado: "SC"
  }
};

function mostraNome({ nome, idade }) {
  console.log(nome, idade);
}

mostraNome(usuario);
