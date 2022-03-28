# 03-pruebas-unitarias-y-integracion

1. [Intro pruebas unitarias y de integración](#schema1)
1. [Primera Prueba](#schema2)
1. [Jest - Expect - toBe](#schema3)



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
