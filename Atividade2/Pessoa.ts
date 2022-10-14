class Pessoa {
    _nome: string;
    _sobrenome: string;

    constructor(nome: string, sobrenome: string) {
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    get nome() {
        return this._nome;
    }

    get sobrenome() {
        return this._sobrenome;
    }

    get nomeCompleto() {
        return this._nome + ' ' + this._sobrenome;
    }
}

class Funcionario extends Pessoa {
    _matricula: string;
    _salario: number;

    constructor(nome: string, sobrenome: string, matricula: string, salario: number) {
        super(nome, sobrenome);
        this._matricula = matricula;
        this._salario = salario;
    }

    get matricula() {
        return this._matricula;
    }

    get salario() {
        if (this._salario < 0 ){
            throw new Error("Salário inválido");
        }
        return this._salario;
    }

    calcularSalarioPrimeiraParcela(): number {
        return this._salario  * 0.6;
    }

    calcularSalarioSegundaParcela(): number {
        return this._salario * 0.4;
    }


}

class Professor extends Funcionario{
    _titulacao: string;

    constructor(nome: string, sobrenome: string, matricula: string, salario: number, titulacao: string) {
        super(nome, sobrenome, matricula, salario);
        this._titulacao = titulacao;
    }

    get titulacao() {
        return this._titulacao;
    }

    calcularSalarioPrimeiraParcela(): number {
        return this._salario;
    }

    calcularSalarioSegundaParcela(): number {
        return 0;
    }

}

let Pessoa1 = new Pessoa("João", "Silva");
console.log(Pessoa1.nomeCompleto);

let Funcionario1 = new Funcionario("luis", "carlos", "1", 2000);
console.log(Funcionario1.nomeCompleto);
console.log(Funcionario1.salario);
console.log(Funcionario1.calcularSalarioPrimeiraParcela());
console.log(Funcionario1.calcularSalarioSegundaParcela());

let Professor1 = new Professor("junior", "augusto", "2", 3000, "Mestre");
console.log(Professor1.nomeCompleto);
console.log(Professor1.salario);
console.log(Professor1.calcularSalarioPrimeiraParcela());
console.log(Professor1.calcularSalarioSegundaParcela());
