export abstract class View<T> {
  protected elemento: HTMLElement;
  private escapar = false;
  
  constructor(seletor:string, escapar?:boolean){
    const elemento = document.querySelector(seletor);
    if (elemento) this.elemento = elemento as HTMLElement;
    else throw new Error(`Seletor ${seletor} não existe no DOM, veirifique e tente novamente.`);
    
    if (escapar) this.escapar = escapar
  }

  protected abstract template(model: T): string;

  public update(model: T):void{
    let template = this.template(model);
    this.elemento.innerHTML = template;
    if (this.escapar){
     template = template.replace(/<script>[\s\S]*?<\/script>/, '');
    }
  }
  
}