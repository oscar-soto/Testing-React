import { usContext } from '../../src/base-pruebas/06-deses-obj';

describe('Prueba en 06-deses-obj', () => {
  test('Deberia devolver un Objecto', () => {
    const nombreClave = 'the_rock';
    const anios = 18;

    const context = usContext({ clave: nombreClave, edad: anios });

    expect(context).toEqual({
      nombreClave,
      anios,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    });
  });
});
