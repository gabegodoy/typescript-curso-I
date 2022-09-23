export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        const elemento = document.querySelector(seletor);
        if (elemento)
            this.elemento = elemento;
        else
            throw new Error(`Seletor ${seletor} não existe no DOM, veirifique e tente novamente.`);
        if (escapar)
            this.escapar = escapar;
    }
    update(model) {
        let template = this.template(model);
        this.elemento.innerHTML = template;
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
    }
}
