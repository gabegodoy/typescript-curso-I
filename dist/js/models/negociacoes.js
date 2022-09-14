export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    //Negociacao[] === Array<Negociacao>
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        // lista(): ReadonlyArray<Negociacao> === lista(): readonly Negociacao[]
        return this.negociacoes;
    }
}
