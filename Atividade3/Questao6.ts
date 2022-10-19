abstract class Funcionario {
    protected salario: number;
    constructor(salario: number){
    this.salario = salario;
    }
    abstract getBonificacao(): number;

}

class Gerente extends Funcionario {
    constructor(salario: number){
        super(salario);
    }
    getBonificacao(): number{
        return this.salario * 0.4;
    }
}

class Diretor extends Gerente {
    constructor(salario: number){
        super(salario);
    }
    getBonificacao(): number{
        return this.salario * 0.6;
    }
}

class Presidente extends Funcionario {
    constructor(salario: number){
        super(salario);
    }
    getBonificacao(): number{
        return this.salario + 1000;
    }
}

let gerente = new Gerente(1000);
let diretor = new Diretor(2000);
let presidente = new Presidente(3000);

console.log(gerente.getBonificacao());
console.log(diretor.getBonificacao());
console.log(presidente.getBonificacao());

