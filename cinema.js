
var cinema = "cinehouse"

var HarryPotter =
[{
  codigo: 5, 
  titulo: "Harry Potter",
  duracao: 300,
  atores:["Daniel Radclif","Emma Watson","Arnold P."],
  anoDeLancamento: 1980,
  emCartaz: false }]

let catalogo = [{
  codigo: 1, 
  titulo: "Volta ao Mundo",
  duracao: 120,
  atores:["John Clark","Vitoria C.","Jason P."],
  anoDeLancamento: 1982,
  emCartaz: false 

}, {

codigo: 2 , 
titulo: "De Volta para o Futuro",
duracao: 190,
atores: ["John V.","Vitoria C."],
anoDeLancamento: 1990,
emCartaz: true 
}

]

//function adicionarFilme(filme){

//return catalogo.push(HarryPotter)
//}

//adicionarFilme()

//const buscarFilme = id => catalogo.find(i=> i.codigo===id)
//console.log(buscarFilme(1))

const alterarStatusEmCartaz = (codigo) => {
  for (let i = 0; i < catalogo.length; i++) {
      catalogo[i].codigo == codigo ? catalogo[i].emCartaz =!catalogo[i].emCartaz :'';
  }
}
console.log(alterarStatusEmCartaz(2), catalogo)

function listarFilmesEmCartaz (){
    
  for (let i=0; i<catalogo.length; i++){
      if (catalogo[i].emCartaz === true){
          console.log(catalogo[i])
      }
  }    
}