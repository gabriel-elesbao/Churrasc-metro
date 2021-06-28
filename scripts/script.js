
let inputAdultos = document.getElementById('adultos')
let inputCriancas = document.getElementById('criancas')
let inputDuracao = document.getElementById('duracao')

let resultado = document.getElementById('resultado')

function calcular(){
    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value
   


    let qtdeTotalCarne = carnePp(duracao) * adultos + (carnePp(duracao) / 2 * criancas)
    let qetdeTotalCerveja = cervejaPp(duracao) * adultos
    let qetdeTotalBebidas = bebidasPp(duracao) * adultos + (carnePp(duracao) / 2 * criancas)  
    

        resultado.innerHTML=`<p>${qtdeTotalCarne/1000} Kg de Carne</p>`
        resultado.innerHTML+=`<p>${Math.ceil(qetdeTotalCerveja/355)} Latas de Cerveja</p>`
        resultado.innerHTML+=`<p>${Math.ceil(qetdeTotalBebidas/2000)} Pet's 2l de Litros de Bebida</p>`
   
    
}

function carnePp(duracao){
    if(duracao >= 6){
        return 650

    } else{
        return 400
    }
   
}



function cervejaPp(duracao){
    if(duracao >= 6){
        return 2000
    } else{
        return 1200
    }
   
}
function bebidasPp(duracao){
    if(duracao >= 6){
        return 1500
    } else{
        return 1000
    }
   
}

