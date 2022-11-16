import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductImageElement } from './helpers/shopFunctions';

const products = document.querySelector('.products');

document.querySelector('.cep-button').addEventListener('click', searchCep);

// console.log(await fetchProductsList('computador'));

async function criaListagemDeProdutos(produto) {
  const dataResults = await fetchProductsList(produto);

  dataResults.forEach((dataResult) => {
    const retornoImg = createProductImageElement(dataResult.thumbnail);
    products.appendChild(retornoImg);
  });

  // createProductImageElement(dataResult.thumbnail);
  // createCustomElement(produto, )
}

criaListagemDeProdutos('computador');
