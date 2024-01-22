class heroi {
    constructor(nome, idade, tipo, ataque){
      this.nome = nome 
      this.idade = idade
      this.tipo = tipo 
      this.ataque = ataque 
    }
    atacar(){
    console.log("O " + tipo + " atacou usando " + ataque)
    
    
    if(tipo = "guerreiro"){console.log(ataque = "espada")}
    else if(tipo = "mago"){console.log(ataque = "magia")}
    else if(tipo = "monge"){console.log(ataque = "artes maciais")}
    else if(tipo = "ninja"){console.log(ataque = "shuriken")}
    
    }
    
   
}
 let heroiDaDIO = new heroi ("Felipão", 28, "mago")
 heroiDaDIO.atacar()

