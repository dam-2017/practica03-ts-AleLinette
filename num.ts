export class Operacion{

constructor(){

    }

    public suma(num:number, num2:number):number{
        return num+num2;
    }

    public resta(num:number, num2:number):number{
        return num-num2;
    }

    public primo(num:number):string{
        var i=1;
        while(i<num){
            if(num % i==0 && i!=1){
                return "No es primo"
            }
            i++;
        }
        return "Es primo";
}

    public factorial(num:number):number{
         if(num==0 )
                return 1;
        else
                return (num*this.factorial(num -1));
    }   
}