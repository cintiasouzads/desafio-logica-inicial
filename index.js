function jogador(vitorias, derrotas){
    let saldo = vitorias-derrotas;
    let nivel = "";
    if(vitorias < 10){
        nivel = "ferro"
    }else if(vitorias >= 11 && vitorias <= 20){
        nivel =  "bronze"
    }else if(vitorias >=21 && vitorias <= 50 ){
        nivel =  "prata"
    }else if(vitorias >=51 && vitorias <= 80 ){
        nivel =  "ouro"
    }else if(vitorias >=81 && vitorias <= 90 ){
        nivel= "diamante"
    }else if(vitorias >=91 && vitorias <= 100 ){
        nivel= "lendario"
    }else if(vitorias >=101 ){
        nivel= "imortal"
    }
    console.log(`O herói saldo de ${saldo} e nivel ${nivel} `)
}

jogador(80,20)

