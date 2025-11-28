const mapa = new Map();

mapa.set(4, "Ysma");
mapa.set(2, "João");
mapa.set(3, "Maria");

// console.log(mapa.get(1));
// console.log(mapa.get(2));
// console.log(mapa.get(3));

// for(const chave of mapa.keys()){
//     console.log(chave);
// }

for(const valor of mapa.values()){
    console.log("O valor é", valor );
}

console.log(mapa);
// for(const [chave, valor] of mapa.entries()){
//     console.log(chave, valor);
// }