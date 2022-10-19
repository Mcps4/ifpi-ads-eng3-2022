"use strict";
class Funcionario {
    constructor(salario) {
        this.salario = salario;
    }
}
class Gerente extends Funcionario {
    constructor(salario) {
        super(salario);
    }
    getBonificacao() {
        return this.salario * 0.4;
    }
}
class Diretor extends Gerente {
    constructor(salario) {
        super(salario);
    }
    getBonificacao() {
        return this.salario * 0.6;
    }
}
class Presidente extends Funcionario {
    constructor(salario) {
        super(salario);
    }
    getBonificacao() {
        return this.salario + 1000;
    }
}
let gerente = new Gerente(1000);
let diretor = new Diretor(2000);
let presidente = new Presidente(3000);
console.log(gerente.getBonificacao());
console.log(diretor.getBonificacao());
console.log(presidente.getBonificacao());
