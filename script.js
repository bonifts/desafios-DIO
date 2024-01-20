let nome = ""
let nivel = ""
let numeroVitorias = 0
 for (let i = 0; i <= 47; i++){
           numeroVitorias += 1
           console.log("Parabéns, " + nome + " . " + i + " batalhas foram travadas e vencidas!")

}

let numeroDerrotas = 9
const XP = numeroVitorias - numeroDerrotas



if(XP < 10){nivel = "Ferro"}
else if(XP > 10 && XP <= 20){nivel = "Bronze"}
else if(XP > 20 && XP <= 50){nivel = "Prata"}
else if(XP > 50 && XP <= 70){nivel = "Ouro"}
else if(XP > 70 && XP <= 80){nivel = "Platina"}
else if(XP > 80 && XP <= 90){nivel = "Ascendente"}
else if(XP > 90 && XP <= 100){nivel = "Imortal"}
else if(XP >= 100){nivel = "Radiante"}




console.log("O herói de nome " + nome + " está no nivel de " + nivel)