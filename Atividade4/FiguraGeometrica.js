"use strict";
class Quadrado {
    constructor(lado) {
        this.lado = lado;
    }
    calcularArea() {
        return this.lado * this.lado;
    }
    calcularPerimetro() {
        return this.lado * 4;
    }
}
class Circulo {
    constructor(raio) {
        this.raio = raio;
    }
    calcularArea() {
        return Math.PI * this.raio * this.raio;
    }
    calcularPerimetro() {
        return 2 * Math.PI * this.raio;
    }
}
class Triangulo {
    constructor(base, altura) {
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
/*public interface Comparavel{
    comparar(FiguraGeometrica: Comparavel): number{
        if(this.calcularArea() > FiguraGeometrica.calcularArea()){
            return 1;
        }
        else if(this.calcularArea() < FiguraGeometrica.calcularArea()){
            return -1;
        }
        else{
            return 0;
        }

    
}
*/
let quadrado = new Quadrado(15);
let circulo = new Circulo(18);
let triangulo = new Triangulo(14, 16);
console.log(quadrado.calcularArea());
console.log(quadrado.calcularPerimetro());
console.log(circulo.calcularArea());
console.log(circulo.calcularPerimetro());
console.log(triangulo.calcularArea());
console.log(triangulo.calcularPerimetro());
