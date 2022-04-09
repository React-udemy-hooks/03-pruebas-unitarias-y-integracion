import { retornaArreglo } from "../../base/07-deses-arr"

describe('Pruenas en deses 7', () => {
  test('Debe retornar un arreglo', async () => { 
    const [letras, numeros] = retornaArreglo()

    expect(letras).toBe('ABC');
    expect(typeof letras).toBe('string');

    expect(numeros).toBe(123);
    expect(typeof numeros).toBe("number");
  })
})