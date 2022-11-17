import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('Teste se fetchProductsList é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });
  it('Execute a função fetchProduct com o argumento do produto "MLB1405519561" e teste se fetch foi chamada', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toBeCalled();
  })
  it('Teste se, ao chamar a função fetchProduct com o argumento do produto "MLB1405519561", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1405519561"', async () => {
    const endpoint = 'https://api.mercadolibre.com/items/MLB1405519561';
    const produto = 'MLB1405519561';
    await fetchProduct(produto)
    expect(fetch).toBeCalledWith(endpoint);
  });
  it('Teste se o retorno da função fetchProduct com o argumento do produto "MLB1405519561" é uma estrutura de dados igual ao objeto produto que já está importado no arquivo.', async () => {
    expect(await fetchProduct('MLB1405519561')).toMatchObject(product);
  });
  it('Teste se, ao chamar a função fetchProduct sem argumento, retorna um erro com a mensagem: "ID não informado"', () => {
    expect(fetchProduct()).rejects.toThrow('ID não informado');
  })
});
