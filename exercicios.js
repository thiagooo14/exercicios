let a = 0;
let b = 0;
let c = 0;
// 1:
console.log('exercicio 1');
a = 7;
b = 6;
console.log('adição: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + a * b);
console.log('Divisão: ' + a / b);
console.log('Módulo: ' + (a % b));
// 2:
console.log('exercicio 2');
a = 45;
b = 5;
if (a > b) {
  console.log('o valor a (' + a + ') é maior que valor b (' + b + ')');
} else {
  console.log('o valor b (' + b + ') é maior que valor a (' + a + ')');
}
// 3:
console.log('exercicio 3');
a = 42;
b = 23;
c = 6;
if (a > b && a > c) {
  console.log(
    'o valor a (' + a + ') é maior que valor b (' + b + ') e c (' + c + ')'
  );
} else if (b > a && b > c) {
  console.log(
    'o valor b (' + b + ') é maior que valor a (' + a + ')e c (' + c + ')'
  );
} else {
  console.log(
    'o valor c (' + c + ') é maior que valor a (' + a + ')e b (' + b + ')'
  );
}
// 4
console.log('exercicio 4');
let numero = -3;

if (numero > 0) {
  console.log('positive');
} else if (numero < 0) {
  console.log('negative');
} else {
  console.log('zero');
}
// 5
console.log('exercicio 5');
a = 90;
b = 45;
c = 45;

let somaDosAngulos = a + b + c;
let checaAnguloPositivo = a > 0 && b > 0 && c > 0;
if (checaAnguloPositivo) {
  if (somaDosAngulos === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log('angulo invalido');
}
// 6
console.log('exercicio 6');
let peça = 'rainha';

switch (peça.toLowerCase()) {
  case 'rei':
    console.log('Rei: uma casa para qualquer direção.');
    break;
  case 'rainha':
    console.log('Rainha: Horizontal, Vetical e Diagonal.');
    break;
  case 'bispo':
    console.log('Bispo: Diagonal.');
    break;
  case 'cavalo':
    console.log('Cavalo: "L" pode pular outra peças.');
    break;
  case 'torre':
    console.log('Torre: Horizontal e Vetical.');
    break;
  case 'peão':
    console.log('Peão: apenas uma casa pra frente.');
    break;
  default:
    console.log('peça invalida');
    break;
}
