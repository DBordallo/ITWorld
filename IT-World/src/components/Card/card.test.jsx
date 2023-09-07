
import {  expect, test, it } from "vitest";
import { render, screen } from '@testing-library/react';
import Cards from './Card';

test('Cards', () => {
  it('renderiza correctamente', () => {
    render(<Cards />);
    const cardsElement = screen.getByTestId('cards');
    expect(cardsElement).toBeInTheDocument();
  });
});

