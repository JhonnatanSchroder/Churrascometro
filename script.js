

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("calculando....");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value

    let qtdeTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdeTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdeTotalBebidas = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas);
    

    resultado.innerHTML = `<p>${qtdeTotalCarne/1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdeTotalCerveja / 355)} latas de Cerveja (Adultos)</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdeTotalBebidas/ 2000)} Garrafas de Refrigerante</p>`
}

function carnePP(duracao){
    if(duracao >= 6){
        return 650
    }else {
        return 400
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000
    }else {
        return 1200
    }
}

function bebidaPP(duracao){
    if(duracao >= 6){
        return 1500
    }else {
        return 1000
    }
}


