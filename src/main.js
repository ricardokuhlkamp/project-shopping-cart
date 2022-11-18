import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import {
  createProductElement,
  createCartProductElement,
  totalPrice } from './helpers/shopFunctions';
import { getSavedCartIDs } from './helpers/cartFunctions';

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

const erroAPI = () => {
  const tag = document.createElement('h2');
  tag.classList.add('error');
  tag.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
  products.appendChild(tag);
};

async function criaListagemDeProdutos(produto) {
  addLoading();
  try {
    const dataResults = await fetchProductsList(produto);
    dataResults.forEach((dataResult) => {
      const retorno = createProductElement(dataResult);
      products.appendChild(retorno);
    });
  } catch (error) {
    erroAPI();
  }

  removeLoading();
}

criaListagemDeProdutos('computador');
fetchProduct('MLB1405519561');

async function verificaLocalStorage() {
  if (localStorage.getItem('cartProducts')) {
    const savedCardIDSStorage = getSavedCartIDs();
    const retornoMap = savedCardIDSStorage.map((savedId) => fetchProduct(savedId));
    const container = document.querySelector('.cart__products');
    const results = await Promise.all(retornoMap);
    const lis = results.map((result) => createCartProductElement(result));
    lis.forEach((li) => container.appendChild(li));
  }
  totalPrice();
}

verificaLocalStorage();
