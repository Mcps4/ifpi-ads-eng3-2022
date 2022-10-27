"use strict";
class Conta {
    constructor(nome, saldo) {
        this.nome = nome;
        this.saldo = saldo;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getSaldo() {
        return this.saldo;
    }
    setSaldo(saldo) {
        this.saldo = saldo;
    }
}
class ContaCorrente extends Conta {
    calcularTributo() {
        return this.getSaldo() * 0.1;
    }
}
class SeguroDeVida {
    calcularTributo() {
        return 50;
    }
}
class AuditoriaInterna {
    constructor() {
        this.tributaveis = [];
    }
    adicionarTributavel(tributavel) {
        this.tributaveis.push(tributavel);
    }
    calcularTotalTributos() {
        let total = 0;
        for (let tributavel of this.tributaveis) {
            total += tributavel.calcularTributo();
        }
        return total;
    }
}
class teste {
    teste() {
        let auditoriaInterna = new AuditoriaInterna();
        auditoriaInterna.adicionarTributavel(new ContaCorrente("Zezinho", 5000));
        auditoriaInterna.adicionarTributavel(new SeguroDeVida());
        auditoriaInterna.adicionarTributavel(new ContaCorrente("Arnold", 10000000));
        auditoriaInterna.adicionarTributavel(new SeguroDeVida());
        console.log(auditoriaInterna.calcularTotalTributos());
    }
}
let testes = new teste;
testes.teste();
