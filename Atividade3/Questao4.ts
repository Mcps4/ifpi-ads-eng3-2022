abstract class FiguraGeometrica{
   abstract calcularArea(): number;
   abstract calcularPerimetro(): number;
    
}

class Quadrado extends FiguraGeometrica{
    private lado: number;
    constructor(lado: number){
        super();
        this.lado = lado;
    }
    calcularArea(): number{
        return this.lado * this.lado;
    }
    calcularPerimetro(): number{
        return this.lado * 4;
    }
}

class Circulo extends FiguraGeometrica{
    private raio: number;
    constructor(raio: number){
        super();
        this.raio = raio;
    }
    calcularArea(): number{
        return Math.PI * this.raio * this.raio;
    }
    calcularPerimetro(): number{
        return 2 * Math.PI * this.raio;
    }
}

class Triangulo extends FiguraGeometrica{
    private base: number;
    private altura: number;
    constructor(base: number, altura: number){
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea(): number{
        return (this.base * this.altura) / 2;
    }
    calcularPerimetro(): number{
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