// const menu = {
//   seletor: '.principal',
// };
// console.log(menu.seletor.toUpperCase());
// function upperName(name) {
//   return name.toUpperCase();
// }
// console.log(upperName('alee'));

// const upperName = (alee) => alee.toUpperCase();
// console.log(upperName);
// function handleMouse(event) {
//   console.log(event);
// }

// document.addEventListener('click', handleMouse);
// import { areaQuadrado } from './quadrado.js';
// import { perimetroQuadrado } from './quadrado.js';
// console.log(areaQuadrado(5));
// console.log(perimetroQuadrado(5));

// fetch('https://ranekapi.origamid.dev/json/api/produto')
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(json);
//   });

async function fetchProdutos(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

const produtos = fetchProdutos(
  'https://ranekapi.origamid.dev/json/api/produto',
);
console.log(produtos);
