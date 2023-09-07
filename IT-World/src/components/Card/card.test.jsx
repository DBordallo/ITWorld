import {  render, screen } from "@testing-library/react";
import {  expect, test } from "vitest";
import Cards from '../Card/Card'

test('Renderiza Cards',()=>{
    render(<Cards/>)
    const countElement = screen.getByText(/Entrar/i)
    expect(countElement).toBeDefined()
})