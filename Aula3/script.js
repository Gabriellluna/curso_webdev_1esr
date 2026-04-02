// function calcularEstatisticas(numeros) {
//   let soma = 0;
//   let min = numeros[0];
//   let max = numeros[0];
  
//   // Itera pelo array para acumular a soma e atualizar os valores de min e max
//   for (let i = 0; i < numeros.length; i++) {
//     soma += numeros[i];
//     if (numeros[i] < min) {
//       min = numeros[i];
//     }
//     if (numeros[i] > max) {
//       max = numeros[i];
//     }
//   }
  
//   const media = soma / numeros.length;
  
//   // Retorna os resultados em um objeto
//   return { sominha:soma, medinha:media, miniminho:min, maximinho:max };
//   // sintaxe sugar return { soma, media, min, max };

// }

const somar = (numeros) =>
{
  let soma = 0;
  let min = numeros[0];
  let max = numeros[0];
  
  // Itera pelo array para acumular a soma e atualizar os valores de min e max
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
    if (numeros[i] < min) {
      min = numeros[i];
    }
    if (numeros[i] > max) {
      max = numeros[i];
    }
  }
  
  const media = soma / numeros.length;
  
  // Retorna os resultados em um objeto
  return { sominha:soma, medinha:media, miniminho:min, maximinho:max };
  // sintaxe sugar return { soma, media, min, max };
    
    }

const subtrair = (a,b) => a-b

const resultados = somar([5, 10, 15, 20, 25]);
console.log(resultados);

console.log(subtrair(10,5))