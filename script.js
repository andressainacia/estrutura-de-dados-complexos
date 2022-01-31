// Crie um objeto que receba ao menos três propriedades sobre você.
let perfil= {
    nome:"andressa",
    idade:17,
    altura:1,65
}
// objeto inicial uma nova propriedade sem alterar seu original.
perfil . signo = "virgem"
// Remova uma propriedade desse objeto.
delete perfil.altura
//Mostre no console todas as propriedades desse objeto.
console.log(perfil)
// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
let cadastro=[{
    nome:"andressa",
    idade:17,
    telefone:32900746019,
    amigos:["maria clara","kyira","morgana","pedro"]
},{
    nome:"jose",
    idade:50,
    telefone:32999662810,
    amigos:["adriana","agata","aoltoin","fernando"]
},{
    nome:"joao pedro",
    idade:20,
    telefone:32999675539,
    amigos:["adalberto","maria","beatriz","alucard"]
},{
    nome:"mitsuya",
    idade:18,
    telefone:32999664323,
    amigos:["draken","baji","mickey","minato"]
},{
    nome:"sergio",
    idade:42,
    telefone:32999186576,
    amigos:["francisco","antonia","francisca","bartolomeu"]
}]
// Mostre no console o nome de um amigo de cada lista.
for(let i=0;i<cadastro.length; i++){
    console.log(cadastro[i].amigos[1])
}
