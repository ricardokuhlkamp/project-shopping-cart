export const getAddress = async (query) => {
  // seu código aqui
  const tagAddress = document.querySelector('.cart__address');
  const AWESOME_API = 'https://cep.awesomeapi.com.br/json/';
  const BRASIL_API = 'https://brasilapi.com.br/api/cep/v2/';
  const promise1 = fetch(`${AWESOME_API}${query}`);
  const promise2 = fetch(`${BRASIL_API}${query}`);
  try {
    const promises = [promise1, promise2];
    const ResultPromises = await Promise.any(promises);
    const data = await ResultPromises.json();
    console.log(data);
    if (data.code === 'not_found' || data.type === 'service_error') {
      tagAddress.innerHTML = 'CEP não encontrado';
    } else if (data.district) {
      const { address, district, city, state } = data;
      tagAddress.innerHTML = `${address} - ${district} - ${city} - ${state}`;
    } else {
      const { street, neighborhood, city, state } = data;
      tagAddress.innerHTML = `${street} - ${neighborhood} - ${city} - ${state}`;
    }
  } catch (error) {
    console.log('erro: ', error);
    tagAddress.innerHTML = 'CEP não encontrado';
    console.error(error.message);
  }
};

export const searchCep = () => {
  // seu código aqui
  const cepInput = document.querySelector('.cep-input');
  const cep = cepInput.value;
  const number = 8;
  if (cep.length === number) {
    getAddress(cep);
  }
};
