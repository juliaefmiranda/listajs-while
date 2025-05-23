let numero = 1;
let soma = 0;
let contador = 0;

while(soma <= 40){
    soma += numero;
    console.log('A soma', contador, 'resultou em', soma);
    contador++
    numero++
}

console.log('Soma final:', soma);
console.log('Quantidade de números somados:', contador)