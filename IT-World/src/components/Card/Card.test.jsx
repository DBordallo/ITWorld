import {  render, screen } from "@testing-library/react";
import {  expect, test } from "vitest";
import Cards from '../../main'

test('renderiza Cards',()=>{
    render(<Cards/>)
    const countElement = screen.getByText(/portatil/i)
    expect(countElement).toBeDefined()
})