const baralho = require('./baralho');
const Jogador = require('./jogador');
const pokersolver = require('pokersolver');

class Poker {

    constructor() {
        this.APOSTA = 100;
        this.pote = 0
        this.jogadores = [];
        this.rodada = 'ociosa';
        this.posDealer = 0;
        this.posJogo = 0;
        this.cartasMesa = [];
        this.baralho = new baralho();

    }

    //Adiciona jogadores
    addJogador(nome, fichas) {
        let novoJogador = new Jogador(nome, fichas);
        console.log(`Jogador ${novoJogador.nome} foi adicionado ao jogo!`);

        novoJogador.jogo = this;
        this.jogadores.push(novoJogador);

    }

    //Reseta o jogo
    resetarMesa() {
        this.rodada = 'ociosa';
        this.pote = 0;
        this.cartasMesa = [];

        this.baralho = new baralho();

        for (let i = 0; i < this.jogadores.length; i++) {
            this.jogadores[i].resetaJogador();
        }
    }

    //Inicia o jogo
    comecar() {
        this.resetarMesa();

        console.log('-----JOGO DE POKER INICIADO-----');

        //distribui 2 cartas para cada jogador
        for (let i = 0; i < this.jogadores.length; i++) {
            let c1 = this.baralho.pop();
            let c2 = this.baralho.pop();

            this.jogadores[i].carta1 = c1;
            this.jogadores[i].carta2 = c2;

            console.log(`Jogador ${this.jogadores[i].nome} recebeu as cartas: ${c1} e ${c2}`);
        }

        //Determina o small blind e o big blind, e quem é o dealer
        let posSmall = (this.posDealer + 1) % this.jogadores.length;
        let posBig = (this.posDealer + 2) % this.jogadores.length;

        this.jogadores[posSmall].adicionarAposta(1/2 * this.APOSTA)
        this.jogadores[posBig].adicionarAposta(this.APOSTA);

        console.log(`Jogador ${this.jogadores[this.posDealer].nome} será o dealer!`);

        console.log(`Jogador ${this.jogadores[this.posSmall].nome} pagou o small blind de: ${(1/2 * this.APOSTA)}`);
        console.log(`Jogador ${this.jogadores[this.posBig].nome} pagou o big blind de: ${this.APOSTA}`);

        //Determina de quem será a vez de jogar
        this.posJogo = (posBig + 1) % this.jogadores.length;

        //Finaliza o Pré-Flop
        this.rodada = 'preflop';
        console.log('-----PRÉ FLOP - APOSTAS INICIAIS-----');
    }

    


}

module.exports = Poker;