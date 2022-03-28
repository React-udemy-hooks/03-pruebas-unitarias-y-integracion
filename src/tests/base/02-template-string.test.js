import { getSaludo } from "../../base/02-template-string"


describe('Pruebas en 02-template-string.js', () => {

  test('getSaludo debe retornar: Hola Patricia', () => { 

    const nombre = 'Patricia'

    const saludo = getSaludo(nombre)
    console.log(saludo)

    expect( saludo ).toBe( 'Hola ' + nombre )


  })
  // getSaludo debe retornar Hola Carlos si no hay argumento nombre
    
  test('getSaludo debe retornar Hola Carlos si no hay argumento en nombre', () => {
    const saludo = getSaludo()
    console.log(saludo)
    expect( saludo ).toBe('Hola Carlos')
  })
})