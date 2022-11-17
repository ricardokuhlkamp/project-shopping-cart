export const fetchProduct = async (produto) => {
  // seu código aqui
  if (produto === undefined || produto === '') {
    throw new Error('ID não informado');
  }
  const API_PRODUCT_ID = 'https://api.mercadolibre.com/items/';
  const response = await fetch(`${API_PRODUCT_ID}${produto}`);
  const data = await response.json();
  return data;
};

export const fetchProductsList = async (query) => {
  // seu código aqui
  if (typeof query === 'undefined') {
    throw new Error('Termo de busca não informado');
  }

  const API_ML = 'https://api.mercadolibre.com/sites/MLB/search?q=';
  const resposta = await fetch(`${API_ML}${query}`);
  const data = await resposta.json();
  return data.results;
};
