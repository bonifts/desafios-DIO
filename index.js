function calcularRankeadas(vitorias, derrotas){
    let saldoRankeadas = vitorias - derrotas
    return saldoRankeadas 
    let nivel = ""
      
}

let vitorias = 80
let derrotas = 15


if(vitorias < 10){console.log(nivel = "Ferro")}
else if(vitorias > 10 && vitorias <= 20){console.log(nivel = "Bronze")}
else if(vitorias > 20 && vitorias <= 50){console.log(nivel = "Prata")}
else if(vitorias > 50 && vitorias <= 80){console.log(nivel = "Ouro")}
else if(vitorias > 80 && vitorias <= 90){console.log(nivel = "Diamante")}
else if(vitorias > 90 && vitorias <= 100){console.log(nivel = "Lendário")}
else if(vitorias > 100){console.log(nivel = "Imortal")}


let resultado = calcularRankeadas(vitorias, derrotas)
console.log(resultado)
console.log("O herói tem de saldo " + resultado + " e está no nivel " + nivel)