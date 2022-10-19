"use strict";
class FiguraGeometrica {
}
class Quadrado extends FiguraGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcularArea() {
        return this.lado * this.lado;
    }
    calcularPerimetro() {
        return this.lado * 4;
    }
}
class Circulo extends FiguraGeometrica {
    constructor(raio) {
        super();
        this.raio = raio;
    }
    calcularArea() {
        return Math.PI * this.raio * this.raio;
    }
    calcularPerimetro() {
        return 2 * Math.PI * this.raio;
    }
}
class Triangulo extends FiguraGeometrica {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return (this.base * this.altura) / 2;
    }
    calcularPerimetro() {
        return this.base * 3;
    }
}
let quadrado = new Quadrado(8);
let circulo = new Circulo(10);
let triangulo = new Triangulo(7, 7);
console.log(quadrado.calcularArea());
console.log(quadrado.calcularPerimetro());
console.log(circulo.calcularArea());
console.log(circulo.calcularPerimetro());
console.log(triangulo.calcularArea());
console.log(triangulo.calcularPerimetro());
