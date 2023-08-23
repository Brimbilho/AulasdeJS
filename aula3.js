var verdade = true;
if (verdade) {
    console.log ("É verdadeiro");
}
if(false) {
    console.log ("É falso")
}

var idade = 14
if (idade == 14){
    console.log ("minha idade")
}

if (idade > 14)
console.log("não é minha idade")

// == ou ===
 
var idade1 = 28
var idade2 = "28"
if(idade1 == idade2){
    console.log("é igual")
}
if (idade1 === idade2){
console.log("é MUITO igual")
}
if(false == 0){
    console.log("são iguais")
}

// atividade!

var numero = prompt("qual o número?")
if(numero == 1){
    console.log("é igual a 1")
}
else if (numero == 2){
    console.log("é igual a 2")
}
else if (numero == 3){
    console.log("é igual a 3")
}
else if (numero == 4){
    console.log("é igual a 4")
}
else if (numero == 5){
    console.log("é igual a 5");
}
else if (numero == ""){
    console.log ("número inválido")
}