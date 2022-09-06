import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroesData from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {
  test('GetHeroeById debe de retornar un heroe por ID', () => {
    const id = 1;
    const hero = getHeroeById(id)

    // console.log(hero)

    expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
  });

  test('GetHeroeById debe de retornar undefined si no existe el ID', () => {
    const id = 100;
    const hero = getHeroeById(id)

    // console.log(hero)

    expect( hero ).toBe( undefined )

    // Manera corta, recordar que false es un valor falsy
    // expect(hero).toBeFalsy();
  });

  // Tare:
  // Debe de retornar un arreglo con los heroies de DC
  // Length === 3
  // toEqual al arreglo filtrado

  // Debe de retornar un arreglo con los heroies de Marvel
  // Length === 2

  test('GetHeroByOwner debe retornar los herores de DC', () => {
    const owner = 'DC'
    const heroes = getHeroesByOwner(owner)

    expect( heroes.length ).toBe( 3 )
    expect( heroes ).toEqual( heroes.filter((heroe) => heroe.owner === owner) )
  })

  test('GetHeroByOwner debe retornar los herores de Marvel', () => {
    const owner = 'Marvel'
    const heroes = getHeroesByOwner(owner)

    expect( heroes.length ).toBe( 2 )
    expect( heroes ).toEqual( heroesData.filter((heroe) => heroe.owner === owner) )
  })
});
