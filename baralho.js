function baralhoPoker() {

    let naipes = ['p', 'c', 'o', 'e']; //p = paus; c = copas; o = ouros; e = espada
    let cartas = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A']; //T = 10, J = Valete, Q = Dama, K = Rei
    let baralho = [];

    let naipesLen = naipes.length;
    let cartasLen = cartas.length;

    //Define o baralho (carta + naipe)
    for (let i = 0; i < naipesLen; i++) {
        for (let j = 0; j < cartasLen; j++) {
            baralho.push(cartas[j] + naipes[i]);
        }
    }

    //Embaralhar o baralho = randomizar um array
    let currentIndex = baralho.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = baralho[currentIndex];
        baralho[currentIndex] = baralho[randomIndex];
        baralho[randomIndex] = temporaryValue;
    }

    console.log(baralho);
    return baralho;

}

module.exports = baralhoPoker;