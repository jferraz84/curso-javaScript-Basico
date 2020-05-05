console.log(`Trabalhando com condicionais`);

const listasDeDestinos = new Array(
    `Salvador`,
    `Curitiba`, 
    `Rio de janeiro`
);

const idadeComprador = 15;
const estaAcompanhado = false;
let temPassComprada = false;
const destino = `Salvador`;

console.log("\n Destinos disponiveis");
console.log(listasDeDestinos);
console.log("");

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

let contador = 0;
let destinoExiste = false;

while (contador < 3) {
    if (listasDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa viajem")
} else {
    console.log("Operação não realizada!")
}

for (let i=0; i < 3; i++) {

    if (listasDeDestinos[contador] == destino){
        destinoExiste = true;
        
    }
    
}