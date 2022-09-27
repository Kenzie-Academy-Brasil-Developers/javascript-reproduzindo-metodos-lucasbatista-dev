array = [1, 2, 3, 4, 5];
console.log(`Array inicial = ${array}`);
// Método map() --> Similar ao forEach, só que esse cria um novo array de dados, enquanto o foreach apenas mostra os dados

// Com for loop
let newArrayLoopMap = [];
for (let i = 0; i < array.length; i++) {
  // Adicionando *2 a cada numero do array e retornando um novo
  newArrayLoopMap.push(array[i] * 2);
}
console.log(
  `Novo array com loop simulando o método map() = ${newArrayLoopMap}`
);

// Com map()
const newArrayWithMap = array.map((element) => element * 2);

console.log(`Novo array utilizando o metodo map() ${newArrayWithMap}`);
// Método filter() --> Cria um novo array, filtrando todos os elementos que condicionamos na callback

// Com for loop

let newArrayLoopFilter = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] > 2) {
    newArrayLoopFilter.push(array[i]);
  }
}
console.log(
  `Novo array com loop simulando o método filter() = ${newArrayLoopFilter}`
);

// Com filter()

const newArrayWithFilter = array.filter((element) => element > 2);
console.log(`Novo array utilizando o metodo filter() = ${newArrayWithFilter}`);

// Método find() --> Retorna o primeiro elemento que satisfaça a condição passada pela callback

// Com foor loop

let findNumber;
for (let i = 0; i < array.length; i++) {
  if (array[i] === 4) {
    findNumber = array[i];
  }
}
console.log(
  `Retorno da busca do número indicado, utilizando o loop simulando o metodo find() = ${findNumber}`
);

// Com find()

let findNumberWithFind = array.find((element) => element === 4);
console.log(
  `Retorno da busca do número indicado, utilizando o metodo find() = ${findNumberWithFind}`
);

// Método reduce() --> Reduz todos os elementos de um array a um elemento só, somando todos eles

// Com loop
let contadoraForLoop = 0;
for (let i = 0; i < array.length; i++) {
  contadoraForLoop += array[i];
}
console.log(
  `Resultado da soma dos elementos do array utilizando for loop simulando o metodo reduce = ${contadoraForLoop}`
);

// Com reduce()

let contadoraWithReduce = array.reduce((count, value) => {
  return count + value;
});
console.log(
  `Resultado da soma dos elementos do array utilizando o metodo reduce() = ${contadoraWithReduce}`
);
// Método includes() --> Verifica se determinado array contém o elemento que foi passado por parâmetro

// Com loop

function includesNumber(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

console.log(
  `Retorno de função criada para simular o metodo includes () - resultado = ${includesNumber(
    array,
    5
  )}`
);
console.log(
  `Retorno de função criada para simular o metodo includes () - resultado = ${includesNumber(
    array,
    28
  )}`
);

// Com includes()
let includesNumberWithIncludes1 = array.includes(5);
console.log(
  `Retorno do método includes() para determinar se informação é true or false = ${includesNumberWithIncludes1}`
);
let includesNumberWithIncludes2 = array.includes(10);
console.log(
  `Retorno do método includes() para determinar se informação é true or false = ${includesNumberWithIncludes2}`
);

// Método indexOf() --> Retorna o primeiro índice no qual determinado elemento pode ser encontrado no array

// Com loop
function whatPositioningOfIndex(array, value) {
  let positioningIndex;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      positioningIndex = [i];
    }
    return positioningIndex;
  }
}
console.log(
  `Retorno da posição do elemento na matriz utilizando for para simular o metodo indexOf() é = ${whatPositioningOfIndex(
    array,
    1
  )} `
);

// Com indexOf()

let indexOfPositioning = array.indexOf(1);
console.log(
  `Retorno da posição do elemento na matriz utilizando o metodo indexOf() = ${indexOfPositioning}`
);
