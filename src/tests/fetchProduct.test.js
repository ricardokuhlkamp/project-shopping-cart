import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('Teste se fetchProductsList é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });

});
