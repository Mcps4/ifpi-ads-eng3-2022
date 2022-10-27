class Conta{
    private nome: string;
    private saldo: number;
    constructor(nome: string, saldo: number){
        this.nome = nome;
        this.saldo = saldo;
    }

    getNome(): string{
        return this.nome;
    }
    setNome(nome: string): void{
        this.nome = nome;
    }
    getSaldo(): number{
        return this.saldo;
    }
    setSaldo(saldo: number): void{
        this.saldo = saldo;
    }

}

interface Tributavel{
    calcularTributo(): number;
}

class ContaCorrente extends Conta implements Tributavel{
    calcularTributo(): number{
        return this.getSaldo() * 0.1;
    }
}

class SeguroDeVida implements Tributavel{
    calcularTributo(): number{
        return 50;
    }
}

class AuditoriaInterna{
    tributaveis: Tributavel[] = [];

    adicionarTributavel(tributavel: Tributavel): void{
        this.tributaveis.push(tributavel);
    }

    calcularTotalTributos(): number{
        let total: number = 0;
        for(let tributavel of this.tributaveis){
            total += tributavel.calcularTributo();
        }
        return total;
    }
}

class TestarConta{
    teste(){
        let auditoriaInterna = new AuditoriaInterna();
        auditoriaInterna.adicionarTributavel(new ContaCorrente("Zezinho", 5000));
        auditoriaInterna.adicionarTributavel(new SeguroDeVida());
        auditoriaInterna.adicionarTributavel(new ContaCorrente("Arnold", 10000000));
        auditoriaInterna.adicionarTributavel(new SeguroDeVida());
        
        console.log(auditoriaInterna.calcularTotalTributos());
    }
}

let testes = new TestarConta();
testes.teste();

