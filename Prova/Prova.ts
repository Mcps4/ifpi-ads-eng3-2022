class Guerreiros implements Defensivel{
    id:number
    descricao:string
    forcaAtaque:number = 10
    life:number

    constructor(id:number,descricao:string,forcaAtaque:number,life:number){
        this.id = id
        this.descricao = descricao
        this.forcaAtaque = forcaAtaque
        this.life = life
    }

    defenderAtaque(){
       let dano = this.life - this.forcaAtaque
       return dano
    }

    atacar(defensivel:Defensivel){
        if(defensivel.estaEliminado()){
            throw new JaEliminadoException('Oponente já faleceu')
        }
        defensivel.defenderAtaque(this.forcaAtaque)
    }

    estaEliminado(): boolean {
        if(this.life = 0){
            return true
        }
        return false
    }

}

class BasesMilitares implements Defensivel{
    id:number
    localizacaoX:number
    localizacaoY:number
    percentualDano:number = 0

    constructor(id:number,localizacaoX:number,localizacaoY:number,percentualDano:number){
        this.id = id
        this.localizacaoX = localizacaoX
        this.localizacaoY = localizacaoY
        this.percentualDano = percentualDano
    }

    defenderAtaque(valorAtaque:number){
       let dano = this.percentualDano + valorAtaque
       return dano
    }

    estaEliminado(): boolean {
        if(this.percentualDano >= 90){
            return true
        }
        return false
    }
}

interface Defensivel {
    estaEliminado(): boolean;
    defenderAtaque(valorAtaque: number);
}

class CenarioDeBatalha{
    avaliar(defencivel1:Defensivel[], defencivel2:Defensivel[]){
        let i = 0
        if(defencivel1.length > defencivel2.length){
            console.log('O vencedor é o defencivel1')
        }
        else if(defencivel2.length > defencivel1.length){
            console.log('O vencedor é o defencivel2')
        }
        
        console.log('Jogo empatado')
       
        
    }
}

class JaEliminadoException extends Error{
    constructor(message: string){
        super(message)
    }
}

let guerreiro1:Guerreiros = new Guerreiros(1,'soldado', 30, 100)
let guerreiro2:Guerreiros = new Guerreiros(2,'general', 50, 100)
let base1:BasesMilitares = new BasesMilitares(1,200,200,0)
let base2:BasesMilitares = new BasesMilitares(2,350,200,0)
let CenarioDeBatalha1:CenarioDeBatalha = new CenarioDeBatalha()
guerreiro1.atacar(base1)
console.log(base1.percentualDano)
guerreiro2.atacar(base2)
console.log(base2.percentualDano)
base1.defenderAtaque(50)
console.log(guerreiro1.life)
base2.defenderAtaque(40)
guerreiro1.estaEliminado()
guerreiro2.atacar(guerreiro1)
console.log(CenarioDeBatalha1.avaliar(guerreiro1[10], base1[20]))
