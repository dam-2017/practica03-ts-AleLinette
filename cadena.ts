export class Cadena{
    cadena: string;
    
    constructor(cadena:string){
        this.cadena = cadena;
    }

    get numeropalabra():number{
        let c: any;
        c = this.cadena.split(" ");
        return c.length;
    }

    get numeroletra(): number{
        return this.cadena.trim().length;
        
    }


    get palindromo(): string{
        if(this.cadena==this.cadena.split("").reverse().join(""))
            return "Es palindromo";
         else 
            return "No es palindromo";
    }

    
}
  