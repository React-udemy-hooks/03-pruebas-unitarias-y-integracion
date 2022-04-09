import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp'
import heroes from '../../data/heroes'



describe('Pruebas en funciones de Héroes', () => {
  test('debe retornar un héroe por id', () => { 
    
    const id = 1

    const heroe = getHeroeById(id)
    
    const heroeData = heroes.find(h => h.id === id)
    expect(heroe).toEqual(heroeData)

    })
  test("debe retornar un undefined si el heroe no existe", () => {
    const id = 10;

    const heroe = getHeroeById(id);


    expect(heroe).toBe(undefined);
  });
  
  test("debe retornar los héroes de DC", () => {
    const ownerDC = 'DC';

    const DCheroes = getHeroesByOwner(ownerDC)
    const DCheoresTest = heroes.filter((h) => h.owner === ownerDC)
    expect(DCheroes).toEqual(DCheoresTest);
    
  

  });
    test("debe retornar los héroes de Marvel", () => {
      
      const owner = "Marvel";
      const MHeroes = getHeroesByOwner(owner);
      //const MHeroesTest = heroes.filter((h => h.owner === owner))
      expect(MHeroes.length).toBe(2);
    });



})

