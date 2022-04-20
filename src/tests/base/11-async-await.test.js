import { getImagen } from "../../base/11-async-await"


describe('Pruebas async-await', () => { 
  test('Debe retornr la url de la imagen', async() => { 
    const url = await getImagen();
    console.log(url)
    expect(typeof url).toBe('string')
   })
})