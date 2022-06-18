// Código calcula a sequência de Fibonacci até a posição [aux]

const aux = 100 //Número informado

let fibonacci = [0, 1]

    for(let i = 2; i < aux; i++) {
        aux2 = fibonacci[i-1] + fibonacci[i-2]
        fibonacci.push(aux2)
    }

console.log(fibonacci)

console.log(fibonacci.includes(aux))