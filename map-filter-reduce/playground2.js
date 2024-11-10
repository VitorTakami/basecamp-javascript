// EXEMPLO DE FUNÇÃO COM THIS 
const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr, thisArg) {
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

//const nums = [1,2];

//console.log('this -> maçã', mapComThis(nums, maca));

//console.log('this -> laranja', mapComThis(nums, laranja));

// EXEMPLO DE FUNÇÃO SEM THIS

function mapSemThis(arr) {
    return arr.map(function(item) {
        return item * 2;
    });
}

const nums = [2,4,6,8,10];

//console.log(mapSemThis(nums));


// EXEMPLOS COM FILTER

function filtraPares(arr) {
    return arr.filter(callback_par)
}

function callback_par(item) {
    return item % 2 === 0;
}

function callback_impar(item) {
    return item % 2 !== 0;
}

function filtraImpares(arr) {
    return arr.filter(callback_impar)
}

const meuArray = [1,23,55,67,30,2,4]

console.log(filtraPares(meuArray))
console.log(filtraImpares(meuArray))

// EXEMPLOS COM FILTER

function somaNumeros(arr) {
    return arr.reduce(function(prev, current) {
        console.log({prev});
        console.log({current});
        return prev + current; 
    })
}


function subtraiNumeros(arr) {
    return arr.reduce(function(prev, current) {
        console.log({prev});
        console.log({current});
        return prev - current; 
    },10)
}

const arr = [1,2];

//console.log(somaNumeros(arr));
console.log("Saldo Final: " + subtraiNumeros(arr));

const lista = [
    { 
        name: 'Sabao em pó',
        preço: 30,
    },
    {
        name: 'cereal',
        preço: 12,
    },
    {
        name: 'toalha',
        preço: 30,
    },
];

const saldoDisponivel = 100;
function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current) {
        console.log({prev});
        console.log({current});
        return prev - current.preço; 
    },saldoDisponivel)
}




console.log(calculaSaldo(saldoDisponivel, lista));
