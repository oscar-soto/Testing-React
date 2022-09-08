import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

// Tarea
// Pruebas en el <CounterApp />

// test: debe de hacer match con el snapshot
// test: debe de mostrar el valor inicial del 100 <CounterApp value={100} />

describe('Pruebas en el <CounterApp />', () => {
  const initialValue = 100;
  test('Debe hacer match con el snapshot', () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar el valor inicial del 100 <CounterApp value={100}', () => {
    render(<CounterApp value={initialValue} />);
    expect(screen.getByText(100)).toBeTruthy();

    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(
      '100'
    );
  });

  test('Debe de incrementar con el boton +1', () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText('101')).toBeTruthy();
  });

  test('Debe de decrementar con el boton -1', () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText('-1'));
    // screen.debug();
    expect(screen.getByText('99')).toBeTruthy();
  });

  test('Debe de funcionar el bton de reset', () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    // fireEvent.click(screen.getByText('reset'));
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }))

    expect(screen.getByText(initialValue)).toBeTruthy();
    // screen.debug();
  });
});
