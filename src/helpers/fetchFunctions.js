export const fetchProduct = () => {
  // seu código aqui
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
