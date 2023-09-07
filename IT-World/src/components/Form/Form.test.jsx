import { render, screen, fireEvent,  expect } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, it } from 'vitest';
import Form from '../Form/Form';

test('Form component', ()=>{
it('renders the form and form submission', () => {
  render(<Form/>);

  // Simular el llenado del formulario
  userEvent.type(screen.getByLabelText('Título'), 'Mi producto');
  userEvent.type(screen.getByLabelText('Descripción'), 'Descripción de mi producto');
  userEvent.type(screen.getByLabelText('Cantidad'), '10');
  userEvent.type(screen.getByLabelText('Precio'), '50');

  // Simular la selección de una imagen
  const fileInput = screen.getByLabelText('Subir Producto');
  const imageFile = new File(['(imagen de prueba)'], 'imagen.jpg', { type: 'image/jpeg' });
  fireEvent.change(fileInput, { target: { files: [imageFile] } });

  // Comprobar que la imagen se muestra
  const imagePreview = screen.getByAltText('Preview');
  expect(imagePreview).toBeInTheDocument();

  // Simular la presentación del formulario
  userEvent.click(screen.getByText('Subir Producto'));

  // Puedes agregar más aserciones aquí para verificar el comportamiento deseado después de enviar el formulario
});

});