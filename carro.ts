export class Carro{
    private placa  : string;
    private cor    : string;
    private modelo : string;
    private ano    : number;
    private ligado : boolean;

    public getPlaca():string{
        return this.placa;
    }
    public setPlaca(placa:string):void{
        this.placa = placa;
    }

    public getCor():string{
        return this.cor;
    }
    public setCor(cor:string):void{
        this.cor = cor;
    }

    public getModelo():string{
        return this.modelo;
    }
    public setModelo(modelo:string):void{
        this.modelo = modelo;
    }

    public getAno():number{
        return this.ano;
    }
    public setAno(ano:number):void{
        this.ano = ano;
    }
    public getLigado():boolean{
        return this.ligado;
    }
    public setLigado(ligado:boolean):void{
        this.ligado = ligado
    }

    public ligar() : void{
        this.ligado = true
    }

    public desligar():void{
        this.ligado = false
    }

    public andar(): void{

        if(this.ligado){
            console.log(`o carro ${this.modelo} do ano ${this.ano} de placa ${this.placa} esta se locomovendo`);
        }else{
            console.log("o carro está desligado");
        }

    }

    public parar(): void{
        
        if(this.ligado){
            console.log(`o carro ${this.modelo} do ano ${this.ano} de placa ${this.placa} acabou de parar`);
        }else{
            console.log("o carro está desligado");
        }
    }
}