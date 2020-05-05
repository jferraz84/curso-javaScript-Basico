console.log(`Trabalhando com condicionais`);

const listasDeDestinos = new Array(
    `Salvador`,
    `Curitiba`, 
    `Rio de janeiro`
);

const idadeComprador = 17;
const estaAcompanhado = false;
const temPassComprada = true;


console.log("Destinos disponivies")
console.log(listasDeDestinos);
console.log("");

//listasDeDestinos.push(`Campinas`); // Adicionando itens a lista
//listasDeDestinos.splice(1,1); // Removendo um iten da lista

// if (idadeComprador >= 18) {

//         console.log("Comprador maior de idade");
//         console.log("Destino escolhido " +listasDeDestinos[1]);
//         listasDeDestinos.splice(1,1);
//         console.log("");
//         console.log("Destinos ainda disponivies");
//         console.log(listasDeDestinos);

//     } else if (estaAcompanhado) {
//             console.log("Comprador é menor, mas está ACOMPANHADO")
        
//         } else {
//             console.log("Não é maior de idade, e não está ACOMPANHADO, não é possivel vender para menores de idade");
//             console.log("Destinos ainda disponivies");
//             console.log(listasDeDestinos);
//     }

if (idadeComprador >= 18 || estaAcompanhado == true) {

    console.log("Boa Viajem");
    console.log("Destino escolhido " +listasDeDestinos[1]);
    listasDeDestinos.splice(1,1);
    console.log("");
    console.log("Destinos ainda disponivies");
    console.log(listasDeDestinos);
    
} else {
        console.log("Não é maior de idade, e não está ACOMPANHADO, não é possivel vender para menores de idade");
        console.log("Destinos ainda disponivies");
        console.log(listasDeDestinos);
}

console.log("Embarque \n ");

if (idadeComprador >= 18 && temPassComprada) {
    console.log("Boa Viajem!");
    
} else {
    console.log("Você não pode embarcar!")
}
