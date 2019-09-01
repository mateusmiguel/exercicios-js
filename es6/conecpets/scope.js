function teste(x) {
  let y = 2;

  if (x > 5) {
    let y = 4; //novo valors
    console.log(x, y);
  }
}

teste(10);

// // Mutação
const usuario = { nome: "Mateus" };
usuario.nome = "Miguel";

console.log(usuario);
