import { expect, test, it } from "vitest";
import { render, screen } from '@testing-library/react';
import Footer from "./Footer";
test('Footer', () => {
    it('renderiza correctamente', () => {
    render(<Footer />);
    const footerElement = screen.getByTestId('container-footers');
    expect(footerElement).toBeInTheDocument();
    });
});