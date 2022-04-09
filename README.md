# 03-pruebas-unitarias-y-integracion

1. [Intro pruebas unitarias y de integración](#schema1)
1. [Primera Prueba](#schema2)
1. [Jest - Expect - toBe](#schema3)
1. [Pruebas 02-template-string.js](#schema4)
1. [toEqual](#schema5)



<hr>

<a name="schema1"></a>

# 1 Intro pruebas unitarias y de integración

- Pruebas unitarias: Enfocadas en pequeñas funcionalidades
- Integración: Enfocadas en cómo reaccionan varias piezas en conjunto
- Características de las pruebas  

  * 1. Fáciles de escribir
  * 2. Fáciles de leer
  * 3. Confiables
  * 4. Rápidas
  * 5. Principalmente unitarias

- Concepto AAA
  * Arrange (Areglar): Preparamos el estado inicial:
    * Inicializamos variables
    * Importaciones necesarias
  * Act (Actuar): Aplicamos acciones o estímulos:
    * Llamar métodos
    * Simular clicks
    * Realizar acciones sobre el paso anterior
  * Assert (Afirmar): Observar el comportamiento resultante:
    * Son los resultados esperados
    * Ej: Que algo cambie, algo incremente o bien que nada suceda
  

<hr>

<a name="schema2"></a>

# 2 Primera Prueba
- Creamos un carpeta `tests`y dentro de esta carpeta creamos `demo.test.js`
y ejecutamos 
~~~
npm run test
~~~
- Esto es lo que sale por consola
~~~
  console.log
    hola

      at Object.<anonymous> (src/tests/demo.test.js:1:9)

 FAIL  src/tests/demo.test.js
  ● Test suite failed to run

    Your test suite must contain at least one test.

      at onResult (node_modules/@jest/core/build/TestScheduler.js:175:18)
      at node_modules/@jest/core/build/TestScheduler.js:316:17
      at node_modules/emittery/index.js:260:13
          at Array.map (<anonymous>)
      at Emittery.emit (node_modules/emittery/index.js:258:23)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        2.304 s
Ran all test suites related to changed files.

Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press q to quit watch mode.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press Enter to trigger a test run.


~~~
Cuando creamos la app con el comando 
~~~bash
npx create-react-app intro-javascript
~~~
se instala la libería `jest-dom` que es la que ejecuta los test, configuración por defecto
- `demo.test.js`
~~~js
test('debe ser true', () => {
  const isActive = true

  if (isActive) {
    throw new Error('No está activo')
  }
})
~~~

<hr>

<a name="schema3"></a>

# 3 Jest - Expect - toBe
Doc: https://jestjs.io/

Doc: https://jestjs.io/docs/expect

- Vamos a cambiar `demo.test.js`
~~~js

test('deben ser iguales los string', () => {
  // 1. Inicialización 
  const mensaje = 'Hola Mundo';

  // 2. Estímulo
  const mensaje2 = `Hola Mundo`

  // 3. Observar el comportamient
  expect( mensaje).toBe(mensaje2)
  
})
~~~

- Para tener organizadas todas las pruebas de un mismo archivo creamos una función `describe` y metemos todas la funciones test dentro,
~~~js
describe('Pruebas en el archivo demo.test.js', () => {
  test("deben ser iguales los string", () => {
    // 1. Inicialización
    const mensaje = "Hola Mundo";

    // 2. Estímulo
    const mensaje2 = `Hola Mundo`;

    // 3. Observar el comportamient
    expect(mensaje).toBe(mensaje2);
  });
})
~~~
<hr>

<a name="schema4"></a>

# 4 Pruebas 02-template-string.js
Creamos dentro de la carpeta `test` la misma estructura de carpeta donde tenemos los archivos para hacer los test, entonces creamos la carpeta `base` y dentro de esta `02-template-string.test.js`
- 1. Tenemos que exportar la función `getSaludo` de `02-template-string.js`
~~~js
export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}
~~~
- Por lo tanto tenemos que importar `getSaludo` en `02-template-string.test.js`
~~~js
import { getSaludo } from "../../base/02-template-string"


describe('Pruebas en 02-template-string.js', () => {

  test('getSaludo debe retornar: Hola Patricia', () => { 

    const nombre = 'Patricia'

    const saludo = getSaludo(nombre)
    console.log(saludo)

    expect( saludo ).toBe( 'Hola ' + nombre )


  })
})
~~~

<hr>

<a name="schema5"></a>

# 5 toEqual
Pruebas 05-funciones.js.

Exportamos la función que vamos a testear
~~~js
export const getUser = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
});
~~~
`05-funciones.test.js` al poner toBe para comparar dos objetos nos da un error, porque toBe no compara objetos hay que usar toEqual
~~~js
describe('Pruebas en 05-funciones', () => {
  test('getUser debe retornar un objeto', () => { 
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();
    console.log(user)

    expect(user).toBe(userTest);
   })
})
~~~
Cambiando toBe por toEqual nos pasa el test correctamente
~~~js
  expect(user).toEqual(userTest);
~~~
<hr>

<a name="schema6"></a>

# 6 Pruebas 07-deses-arr.js
- Pruebas de test 07-deses-arr.js y creamos el archivo `07-deses-arr.test.js`

- Primera versión
~~~js

import { retornaArreglo } from "../../base/07-deses-arr"

describe('Pruenas en deses 7', () => {
  test('Debe retornar un arreglo', async () => { 
    const arr = retornaArreglo()
    expect(arr).toEqual(['ABC', 123])
  })
})
~~~
- Segunda version con destructuración
~~~js
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
~~~