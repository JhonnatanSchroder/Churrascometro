// Carne 400g por pessoa + de 6 horas - 650
// Cerveja - 1200 ml por pesso + 6 horas - 2000 ml
// Refrigerante/Agua - 1000 ml por pessoa + 6 horas 1500ml


let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resposta = document.getElementById("resposta");

function calcular(){
    
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdeTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdeTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdeTotalBebida = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas);

    resposta.innerHTML = `<p>${qtdeTotalCarne / 1000} Kilos de carne por pessoa</p>`;
    resposta.innerHTML += `<p>${Math.ceil(qtdeTotalCerveja / 350)} latas de cerveja</p>`;
    resposta.innerHTML += `<p>${Math.ceil(qtdeTotalBebida / 2000)} garrafas de bebidas</p>`;
 
}

function carnePP(duracao){
    if(duracao >= 6){
        return 650
    }
    else{
        return 400
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000
    }
    else{
        return 1200
    }
}

function bebidaPP(duracao){
    if(duracao >= 6){
        return 1500
    }
    else{
        return 1000
    }
}