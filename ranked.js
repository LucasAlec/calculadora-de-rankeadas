const prompt = require ('prompt-sync')();

function getSaldo() {
    let vitorias
    let derrotas
    let saldo
    do {
        vitorias = parseInt(prompt('Quantidade de vitórias: '))
        derrotas = parseInt(prompt('Quantidade de derrotas: '))
        saldo = (vitorias - derrotas)
    } while (vitorias < 0 || derrotas<0)
    return saldo
}

function getNivelHero(saldo){
    let nivel;
    if (saldo <= 10 ){
        nivel = 'Ferro'
        return nivel
    }

    if (saldo <= 20 ){
        nivel = 'Bronze'
        return nivel
    }

    if (saldo <= 50 ){
        nivel = 'Prata'
        return nivel
    }

    if (saldo <= 80 ){
        nivel = 'Ouro'
        return nivel
    }

    if (saldo <= 90 ){
        nivel = 'Diamante'
        return nivel
    }

    if (saldo <= 100 ){
        nivel = 'Lendário'
        return nivel
    }

    if (saldo >= 101 ){
        nivel = 'Imortal'
        return nivel
    }

}

let saldo = getSaldo()
let nivel = getNivelHero(saldo)

console.log(`O Herói tem saldo de ${saldo} está no nível de ${nivel}`)