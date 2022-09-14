import { Negociacoes } from "./negociacoes.js";
export class Negociacao {
    constructor(data, quantidade, valor) {
        this.negociacoes = new Negociacoes;
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
