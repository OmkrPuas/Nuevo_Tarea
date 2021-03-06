import {sumar, totalizador} from "./App.js";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2, "")).toEqual(5);
  });
  it("Deberia mostrar cuantos productos se compra", () => {
    expect(totalizador(3,1, "")).toEqual(3);
  });
  it("Deberia mostrar el precio de comprar X productos con Y costo", () => {
    expect(totalizador(3,5, "")).toEqual(15);
  });
  it("Deberia mostrar el precio de comprar X productos con Y costo con descuento", () => {
    expect(totalizador(10,100, "")).toEqual(970);
  });
  it("Deberia mostrar el precio total con descuento e impuesto", () => {
    expect(totalizador(10,100, "UT")).toEqual(1036.5);
  });
});

