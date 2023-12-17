class Heroi {
    constructor (nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar () {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shurien';
                break;
            default:
                ataque = 'usou um ataque desconhecido';
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}
const heroiMago = new Heroi ('Merlin', 150, 'mago');
heroiMago.atacar();

const heroiGuerreiro = new Heroi ('Conan', 30, 'guerreiro');
heroiGuerreiro.atacar();

const heroiMonge = new Heroi ('Fagner', 100, 'monge');
heroiMonge.atacar();

const heroiNinja = new Heroi ('Buda', 500, 'ninja');
heroiNinja.atacar();