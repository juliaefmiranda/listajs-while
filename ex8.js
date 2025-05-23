let num = 1;
let cubo = Math.pow (num, 3);

while(cubo <= 100){
    console.log('O cubo de', num, 'é', cubo);
    num++;
    cubo = Math.pow(num, 3);
}