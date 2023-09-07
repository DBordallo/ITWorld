import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';


test('Renderiza Cards en la ruta "/"', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <router />
      </MemoryRouter>
    );
  
    
  });