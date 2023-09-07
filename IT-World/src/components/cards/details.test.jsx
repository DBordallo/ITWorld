import { it,} from "vitest";
import {  render,  } from "@testing-library/react";
import CardsDetails from "./Details-Card";

it("muestra detalles del artículo correctamente", async () => {
  const fakeArticle = {
    id: 1,
    title: "Ejemplo de artículo",
    imageData: "",
    quantity: 2,
    price: 10,
    description: "Descripción del artículo",
  };

  // Simula una solicitud fetch
  globalThis.fetch = () =>
    Promise.resolve({
      json: () => Promise.resolve(fakeArticle),
    });

  render(CardsDetails);
});
