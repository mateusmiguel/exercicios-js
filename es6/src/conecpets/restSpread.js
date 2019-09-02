// REST
function soma(a, b, ...params) {
  return params;
}

console.log(soma(1, 3, 4, 5, 6, 7));

// SPREAD
const usuario = {
  nome: "Mateus",
  idade: 27,
  empresa: "Devplace"
};

const usuarioCopy = {
  ...usuario,
  empresa: "Kroton"
};

console.log(usuario);
console.log(usuarioCopy);
