export class Cadena{
    cadena:string;

    constructor( cadena:string){
        this.cadena = cadena;
    }

    get palindromo(): boolean {
       let reversa: string=this.cadena.split("").reverse().join("").toLowerCase();
       reversa = reversa.replace(/\s/g,"");
        if(reversa == this.cadena.replace(/\s/g,"").toLowerCase()){
            return true;
        }else{
            return false;
        }
    }
    get vocales():number{
        let letras : Array<string> = this.cadena.split("");
        var cont:number = 0;
        for(let letra of letras ){
         switch (letra.toLowerCase()) {
             case "a": cont++;
                 break;
             case "e": cont++;
                 break;
             case "i": cont++;
                 break;
             case "o": cont++;
                 break;
             case "u": cont++;
                 break;
         }
        }
        return cont;
    }

    get letras():number{
        var cont : number = 0;
        let letras : Array<string> = this.cadena.split("");
        for(let letra of letras){
            if(/[a-z]/.test(letra.toLocaleLowerCase()))
            cont++;
        }
        return cont;
    }

    get palabras():number{
        var cont:number=0;
        let palabras : Array<string> = this.cadena.split(" ");
        for(let palabra of palabras){
            if(palabra.length!=0)
                cont++
        }
        return cont;
    }

    get text():string{
        return this.cadena;
    }


}