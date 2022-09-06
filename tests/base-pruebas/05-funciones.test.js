import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Preubas en 05-funciones', () => {
  test('getUser debe de retornar un objecto', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };

    const user = getUser();

    expect(testUser).toEqual(user);
  });

  test('getUsuarioActivo debe de retornar un objecto', () => {
    const name = 'Oscar';

    const user2 = getUsuarioActivo(name);
    
    expect(user2).toEqual({
      uid: 'ABC567',
      username: name,
    });
  });
});
