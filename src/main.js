import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

const products = document.querySelector('.products');
const tagH2 = document.createElement('h2');

document.querySelector('.cep-button').addEventListener('click', searchCep);

// console.log(await fetchProductsList('computador'));

const addLoading = () => {
  tagH2.innerHTML = 'carregando...';
  tagH2.classList.add('loading');
  products.appendChild(tagH2);
};

const removeLoading = () => {
  products.removeChild(tagH2);
};

async function criaListagemDeProdutos(produto) {
  addLoading();
  const dataResults = await fetchProductsList(produto);
  if (!dataResults === false) {
    removeLoading();
  }

  dataResults.forEach((dataResult) => {
    const retornoImg = createProductElement(dataResult);
    products.appendChild(retornoImg);
  });
}

criaListagemDeProdutos('computador');
