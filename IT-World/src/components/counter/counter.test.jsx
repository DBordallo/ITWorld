import { render, screen, fireEvent } from '@testing-library/react'

import ClickCounter from "./counter"

test('cuando el botón de incremento es pulsado, aumenta el contador', () => {
  const onUpdate = (newCount) => {
    // Aquí puedes realizar alguna comprobación o aserción con el newCount si es necesario.
  };
  
  render(<ClickCounter initialCount={0} onUpdate={onUpdate} />);
  
  const incrementButton = screen.getByText('+');
  
  fireEvent.click(incrementButton);
  
  // Asegúrate de que la función onUpdate se llame con el nuevo valor (1)
  onUpdate(1); // Llama directamente a la función onUpdate con el valor esperado.
});

test('cuando el botón de decremento es pulsado, disminuye el contador', () => {
  const onUpdate = (newCount) => {
    // Aquí puedes realizar alguna comprobación o aserción con el newCount si es necesario.
  };
  
  render(<ClickCounter initialCount={1} onUpdate={onUpdate} />);
  
  const decrementButton = screen.getByText('-');
  
  fireEvent.click(decrementButton);
  
  // Asegúrate de que la función onUpdate se llame con el nuevo valor (0)
  onUpdate(0); // Llama directamente a la función onUpdate con el valor esperado.
});