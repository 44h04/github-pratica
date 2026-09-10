// tipos primitivos
var boolean = false;
console.log('###### tipos primitivos ######');
console.log('O valor da variável boolean é:', boolean);

//template string
console.log(`A variável ${boolean} tem o tipo ${typeof(boolean)}`);

var nome = 'lucas';
var nome = 'LUCAS'; // declaração, o que prevalece é a segunda declaração, pois a primeira é sobrescrita

// let sobrenome ='Sousa';
// let sobrenome = 'SOUSA';

// const nomeDoMeio ='Silva';
// const nomeDoMeio = 'SILVA';

function nomeDaFuncao () {
    var sobrenome = 'Sousa';
    console.log(sobrenome);

};

console.log(nome);
nomeDaFuncao();

// comparação
var igual = '0' == 0;
console.log(igual);
// comparação com == compara apenas o valor, não o tipo da variável

var igualIdentico = '0' === 0;
console.log(igualIdentico);
// === é mais rigoroso, pois compara o tipo da variável também, não apenas o valor

operadores aritméticos
var soma = 1 + 1;
console.log(soma);

var somar = 1 + '1';
console.log(somar);
// quando somamos um número com uma string, o resultado é uma string

// operadores relacionais
//<, >, <-, >=, <=, ==, ===, !=, !==

var menorQue = 5 > 2;
var maiorQue = 5 < 2;
var maiorOuIgual = 5 >= 2;
var menorOuIgual = 5 <= 2;
var diferente = 5 != 2;
var diferenteIdentico = 5 !== 2;

console.log(`o valor da variável menorQue é: ${menorQue}`);
console.log(`o valor da variável maiorQue é: ${maiorQue}`);
console.log(`o valor da variável maiorOuIgual é: ${maiorOuIgual}`);
console.log(`o valor da variável menorOuIgual é: ${menorOuIgual}`);
console.log(`o valor da variável diferente é: ${diferente}`);
console.log(`o valor da variável diferenteIdentico é: ${diferenteIdentico}`);

// operadores lógicos
var e = true && false;
var ou = true || false;
var nao = !true;
console.log(`o valor da variável e é: ${e}`);
console.log(`o valor da variável ou é: ${ou}`);
console.log(`o valor da variável nao é: ${nao}`);