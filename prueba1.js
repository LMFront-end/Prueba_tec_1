/*
1. Escribir una función que recibe un arreglo de string y retorna un arreglo con la longitud de cada string.

ej. al llamar fn(['str1', 'str22', 'str333', 'str4444']) debe retornar [4,5,6,7].
 */

/* const retornarLongitud = (str) => {

    const palabrasLongitud = [];

    str.forEach((palabra) => {

        palabrasLongitud.push(palabra.length);
    });

    return palabrasLongitud;
}

console.log(retornarLongitud(['str1', 'str22', 'str333', 'str4444'])); */

//notas: Con un map

const arr = ['hola', 'adios', 'estereo', 'bailoteo', 'playa']
const mapped = arr.map((r) => r.length)

console.log(mapped)

/*
2. Escribir una función que recibe un arrglo de string y retorna un arrglo con la longitud de cada string, ordenado de mayor a menor por la longitud de cada string.

ej. al llamar fn(['str1', 'str22', 'str333', 'str4444']) debe retornar [7,6,5,4].
*/

const arrayOrdenado = () => {

    const arr = ['str1', 'str22', 'str333', 'str4444']

    const mapped = arr.map((r) => r.length)

    return mapped.sort((a, b) => {

        return (b - a)
    });
}

console.log(arrayOrdenado())

/*
3. Escribir una función que encuentre un número en un arreglo de números de la forma más eficiente posible. El arreglo de números de entrada puede estar desordenado.
*/

const arregloNumeros = [1, 2, 3, 4, 5, 6];

const encontrarNumero = (arr, index) => {

    return arr.find(u => u === index)
}

console.log(encontrarNumero(arregloNumeros, 5));


/*
4. Escribir una función que al ser llamada saludo('Hola')('Mundo') imprima el texto 'Hola Mundo'.
*/

function saludo(mensaje) {

    return (mensaje2) => console.log(`${mensaje} ${mensaje2}`);
}

saludo(`Hola`)(`Mundo`);