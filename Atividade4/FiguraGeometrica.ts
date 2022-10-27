interface FiguraGeometrica{
    calcularArea(): number;
    calcularPerimetro(): number;
}
 
class Quadrado implements FiguraGeometrica, IComparavel{
        private lado: number;
        constructor(lado: number){
            this.lado = lado;
        }
        calcularArea(): number{
            return this.lado * this.lado;
        }
        calcularPerimetro(): number{
            return this.lado * 4;
        }

        comparar(objeto: IComparavel): number{
            if(this.calcularArea() > objeto.calcularArea()){
                return 1;
            }else if(this.calcularArea() < objeto.calcularArea()){
                return -1;
            }else{
                return 0;
            }
        }
}
 
class Circulo implements FiguraGeometrica, IComparavel{
        private raio: number;
        constructor(raio: number){
            this.raio = raio;
        }
        calcularArea(): number{
            return Math.PI * this.raio * this.raio;
        }
        calcularPerimetro(): number{
            return 2 * Math.PI * this.raio;
        }

        comparar(objeto: IComparavel): number{
            if(this.calcularArea() > objeto.calcularArea()){
                return 1;
            }else if(this.calcularArea() < objeto.calcularArea()){
                return -1;
            }else{
                return 0;
            }
        }
}
 
class Triangulo implements FiguraGeometrica, IComparavel{
        private base: number;
        private altura: number;
        constructor(base: number, altura: number){
            this.base = base;
            this.altura = altura;
        }
        calcularArea(): number{
            return (this.base * this.altura) / 2;
        }
        calcularPerimetro(): number{
            return this.base * 3;
        }

        comparar(objeto: IComparavel): number{
            if(this.calcularArea() > objeto.calcularArea()){
                return 1;
            }else if(this.calcularArea() < objeto.calcularArea()){
                return -1;
            }else{
                return 0;
            }
        }
}

interface IComparavel{
    comparar(FormaGeometrica: FiguraGeometrica): number;
}

class TestarFiguraGeometrica{
    teste(){
        let quadrado = new Quadrado(12);
        let circulo = new Circulo(22);
        let triangulo = new Triangulo(19, 5);

        console.log(quadrado.calcularArea());
        console.log(quadrado.calcularPerimetro());
        console.log(circulo.calcularArea());
        console.log(circulo.calcularPerimetro());
        console.log(triangulo.calcularArea());
        console.log(triangulo.calcularPerimetro());
        console.log(quadrado.comparar(circulo));
        console.log(quadrado.comparar(triangulo));
        console.log(circulo.comparar(triangulo));
    }
    
}



 
 