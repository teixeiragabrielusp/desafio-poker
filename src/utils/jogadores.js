class Jogadores {
    constructor(nome, fichas) {
        this.nome = nome;
        this.fichas = fichas;
        this.carta1 = {};
        this.carta2 = {};

        this.aposta = 0;

        this.acao = '';
        this.tomouAcao = false;
        this.ultimaAcao = false;

        
        this.jogo = null;
    }

    smallBlind() {
        this.acao = 'small';
        this.tomouAcao = true;

        this.addAposta(5);
        this.jogo.proximaRodada();
    }

    bigBlind() {
        this.acao = 'big';
        this.tomouAcao = true;

        this.addAposta(10);
        this.jogo.proximaRodada();
    }

    apostaOuNaposta() {
        this.tomouAcao = true;

        let dif = this.jogo.maiorAposta() - this.aposta;
        this.addAposta(dif);

        if (dif > 0) {
            this.acao = 'aposta';
        } else {
            this.acao = 'naposta';
        }

        this.jogo.proximaRodada();
    }

    allIn() {
        this.acao = 'allin';
        this.ultimaAcao = true;

        this.addAposta(this.chips);
        this.jogo.proximaRodada();
    }

    desistir() {
        this.acao = 'desistir';
        this.ultimaAcao = true;

        this.jogo.proximaRodada();
    }

    adicionarAposta(valorAposta){
        if(this.fichas < valorAposta) {
            return 'Você não possui fichas suficientes'
        }
        this.fichas -= valorAposta;
        this.aposta += valorAposta;
    }
}

module.exports = Jogadores;