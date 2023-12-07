function ranked(numWin,numLoss) {
    let rank = numWin-numLoss
    let elo
    switch(true){
        case rank < 10:
            elo = "Ferro";
            break;
        case rank >= 11 && rank <= 20:
            elo = "Bronze";
            break;
        case rank >= 21 && rank <= 50:
            elo = "Prata";
            break;
        case rank >= 51 && rank <= 80:
            elo = "Ouro";
            break;
        case rank >= 81 && rank <= 90:
            elo = "Diamante";
            break;
        case rank >= 91 && rank <= 100:
            elo = "Lendário";
            break;
        case rank >= 101:
            elo = "Imortal";
            break;
        }
    return console.log(`O Herói tem de saldo de ${rank} está no nível de ${elo}`)
    
}
ranked(101,0)
