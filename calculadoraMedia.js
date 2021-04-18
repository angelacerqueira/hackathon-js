let numeros = [];
let quantidadeDeNumeros = Number(prompt("Digite a quantidade de números desejada"));
let somatorioDeNumeros = 0;

for(var i = 0; i < quantidadeDeNumeros; i++){
    numeros[i] = Number(prompt("Digite o número"));
}

numeros.forEach(numero => {
    somatorioDeNumeros = somatorioDeNumeros + numero;
});

const mediaAritmetica = somatorioDeNumeros / quantidadeDeNumeros;
const msgMedia = `Media Aritmetica = ${mediaAritmetica}`; //Template String
alert(msgMedia);