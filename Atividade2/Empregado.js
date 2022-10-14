"use strict";
class Empregado {
    constructor() {
        this._salario = 500;
    }
    calcularSalario() {
        return this._salario;
    }
    get salario() {
        return this._salario;
    }
}
class Diarista extends Empregado {
    calcularSalario() {
        return this._salario / 30;
    }
    get salario() {
        return this._salario / 30;
    }
}
class Horista extends Empregado {
    calcularSalario() {
        return this._salario / 24;
    }
    get salario() {
        return this._salario / 24;
    }
}
let Empregado1 = new Empregado();
let Diarista1 = new Diarista();
let Horista1 = new Horista();
console.log(Empregado1.salario);
console.log(Diarista1.salario);
console.log(Horista1.salario);
