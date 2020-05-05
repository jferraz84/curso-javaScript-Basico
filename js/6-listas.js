console.log(`trabalhando com listas`);

// const salavdor = `Salvador`;
// const campinas = `Campinas`;
// const rioDejaneiro = `Rio de janeiro`;

const listasDeDestinos = new Array(
    `Salvador`,
    `Campinas`, 
    `Rio de janeiro`
);

listasDeDestinos.push(`Curitiba`); // Adicionando itens a lista
console.log("Destinos possíveis !");
console.log(listasDeDestinos);

listasDeDestinos.splice(1,1);
console.log(listasDeDestinos);
console.log(listasDeDestinos[1]);
