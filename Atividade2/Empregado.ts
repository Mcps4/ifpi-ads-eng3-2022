class Empregado {
    _salario: number = 500;
    calcularSalario(): number { 
        return this._salario;
    }

    get salario(): number {
        return this._salario;
    }
}

class Diarista extends Empregado {
    calcularSalario(): number { 
        return this._salario / 30;
    }

    get salario(): number {
        return this._salario / 30;
    }
}

class Horista extends Empregado {
    calcularSalario(): number { 
        return this._salario / 24;
    }

    get salario(): number {
        return this._salario / 24;
    }
}

let Empregado1 = new Empregado();
let Diarista1 = new Diarista();
let Horista1 = new Horista();

console.log(Empregado1.salario);
console.log(Diarista1.salario);
console.log(Horista1.salario);


