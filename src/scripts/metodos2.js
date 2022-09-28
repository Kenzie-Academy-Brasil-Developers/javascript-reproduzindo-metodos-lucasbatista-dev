const array = [1, 2, 3, 4, 5];
console.log(`Array inicial ==> ${array}`);

//-------------------------------------------------------------------------------------------------------------------------------------------------//

// Método map() --> Similar ao forEach, só que esse cria um novo array de dados(podendo criar dados novos também), enquanto o foreach apenas mostra os dados

// --> Com Metodo map()
const newArrayWithMap = array.map((element, index, array) => element * 2);

console.log(`-- Novo array utilizando o método map() = ${newArrayWithMap}`);

// --> Com Função e callback

function callBackMap(element, index, array) {
  return `O valor ${element} está no index: ${index}, a partir da matriz: ${array}`;
}
function functionMap(array, callback) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(callBackMap(array[i] * 2, [i], array));
  }
  return newArr;
}
console.log(
  `-- Criando novo array * 2 utilizando função para representar o método map() ==> ${functionMap(
    array,
    callBackMap
  )} `
);

//-------------------------------------------------------------------------------------------------------------------------------------------------//

// Método filter() --> Cria um novo array, filtrando todos os elementos que condicionamos na callback

// --> Com Metodo filter()

const newArrayWithFilter = array.filter((element, index, array) => element > 2);
console.log(
  `-- Novo array utilizando o método filter() ==> ${newArrayWithFilter}`
);

// --> Com Função e callback

function callBackFilter(element, index, array) {
  if (element > 2) {
    return element;
  }
}

function functionFilter(array, callback) {
  const newArr = [];
  let retornoCallBack = "";
  for (let i = 0; i < array.length; i++) {
    retornoCallBack = callBackFilter(array[i], i, array);
    if (retornoCallBack !== undefined) {
      newArr.push(retornoCallBack);
    }
  }
  return newArr;
}
console.log(
  `-- Novo array com loop simulando o método filter() ==> ${functionFilter(
    array,
    callBackFilter
  )}`
);

//-------------------------------------------------------------------------------------------------------------------------------------------------//

// Método find() --> Retorna o primeiro elemento que satisfaça a condição passada pela callback
// --> Com Metodo find()
let findNumberWithFind = array.find((element) => element === 4);
console.log(
  `-- Retorno da busca do número indicado, utilizando o metodo find() = ${findNumberWithFind}`
);

// --> Com Função e callback

function callBackFind(element, index, array) {
  if (element > 2) {
    return element;
  }
}

function functionFind(array, callback) {
  for (let i = 0; i < array.length; i++) {
    let element = callback(array[i], [i], array);
    if (element !== undefined) {
      return element;
    }
  }
}
console.log(
  `-- Retorno da busca do número indicado, utilizando o loop simulando o metodo find() = ${functionFind(
    array,
    callBackFind
  )}`
);

//-------------------------------------------------------------------------------------------------------------------------------------------------//

// Método reduce() --> Reduz todos os elementos de um array a um elemento só, somando todos eles

// --> Com Metodo reduce()
let contadoraWithReduce = array.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
});
console.log(
  `-- Resultado da soma dos elementos do array utilizando o metodo reduce() = ${contadoraWithReduce}`
);

// --> Com Função e callback

function callbackReduce(previousValue, currentValue) {
  return previousValue + currentValue;
}

function functionReduce(array, callback, firstValue = 50) {
  for (let i = 0; i < array.length; i++) {
    firstValue = callback(firstValue, array[i]);
  }
  return firstValue;
}
console.log(
  `Resultado da soma dos elementos do array utilizando loop simulando o metodo reduce = ${functionReduce(
    array,
    callbackReduce
  )}`
);

//-------------------------------------------------------------------------------------------------------------------------------------------------//

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
  `-- Retorno da posição do elemento na matriz utilizando for para simular o metodo indexOf() é = ${whatPositioningOfIndex(
    array,
    1
  )} `
);

// Com indexOf()

let indexOfPositioning = array.indexOf(1);
console.log(
  `-- Retorno da posição do elemento na matriz utilizando o metodo indexOf() = ${indexOfPositioning}`
);

//-------------------------------------------------------------------------------------------------------------------------------------------------//

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
  `-- Retorno de função criada para simular o metodo includes () - resultado = ${includesNumber(
    array,
    5
  )}`
);
console.log(
  `-- Retorno de função criada para simular o metodo includes () - resultado = ${includesNumber(
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
  `-- Retorno do método includes() para determinar se informação é true or false = ${includesNumberWithIncludes2}`
);
