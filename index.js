//1.a) 10 e 50
//b) Nada
//2.a) Ela pede ao usuário um texto e depois na função transforma a frase em caixa baixa e 
// verifica se existe a palavra ''cenoura''
//b) i. true ii.true iii.false

function ImprimirFrase(){
    console.log('Eu sou Yago, tenho 19 anos, moro em São Leopoldo e sou estudante.')
}

ImprimirFrase()

function MinhaFrase(nome,idade,cidade,profissao){
    nome = prompt('Qual é seu nome?')
    idade = Number(prompt('Quantos anos você tem?'))
    cidade = prompt('Qual cidade você mora?')
    profissao = prompt('Qual sua profissão?')
    console.log('Meu nome é '+nome+', tenho '+idade+' anos de idade, moro em '+cidade+' e atualmente sou '+profissao)
}

// MinhaFrase()

// Escreva uma função que receba 2 números como parâmetros, e,
// dentro da função, faça a soma das duas entradas e retorne o resultado.
// Invoque a função e imprima no console o resultado.

function calculo(numero,numero2){
    let resultado = Number(numero) + Number(numero2)
    return resultado
}

console.log(calculo(3,4))

// b) Faça uma função que recebe 2 números e retorne um booleano que
// informa se o primeiro número é maior ou igual ao segundo.

function bool(numero,numero2){
    resultado = Number(numero) >= Number(numero2)
    return resultado

}

console.log(bool(4,4))

// c) Escreva uma função que receba um número e devolva um booleano
// indicando se ele é par ou não


function par(numero){
    resultado = Number(numero)%2 == 0
    return resultado

}

console.log(par(3))


// d) Faça uma função que recebe uma mensagem ( string ) como
// parâmetro e imprima o tamanho dessa mensagem, juntamente com
// uma versão dela em letras maiúsculas.


function retorno(frase){
    frase = prompt('Escreva uma frase')
    tamanho = frase.length
    caixaAlta = frase.toUpperCase()
    return 'O tamanho da frase é '+ tamanho+' e essa é a frase em caixa alta: ' + caixaAlta
    
}

console.log(retorno())

// 3.  Crie uma função para cada uma das operações básicas (soma,
//     subtração, multiplicação e divisão). Em seguida, peça para o usuário
//     inserir dois números e chame essas 4 funções com esses valores
//     enviados pelo usuário sendo o argumento.

//     Por fim, mostre no console o
//     resultado das operações:
//     Números inseridos: 30 e 3
//     Soma: 33
//     Diferença: 27
//     Multiplicação: 90
//     Divisão: 10

numero1 = Number(prompt('Me diga um número'))
numero2 = Number(prompt('Me diga outro número'))

function soma(){
    resultado = numero1 + numero2
    return resultado
}

function subtracao(){
    resultado = numero1 - numero2
    return resultado
}

function divisao(){
    resultado = numero1 / numero2
    return resultado
}

function multiplicacao(){
    resultado = numero1 * numero2
    return resultado
}


console.log('Números inseridos: '+numero1+ ' e '+numero2)
console.log('Soma: '+soma())
console.log('Diferença: '+subtracao())
console.log('Multiplicação: '+multiplicacao())
console.log('Divisão: '+divisao())

//     Números inseridos: 30 e 3
//     Soma: 33
//     Diferença: 27
//     Multiplicação: 90
//     Divisão: 10
