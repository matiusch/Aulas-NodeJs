function ano(anobi:number):void{

    if(anobi%4 == 0 && anobi%100 !=0 || anobi%400 == 0 ){
        console.log(`o ano ${anobi} é um ano bissexto`)
    }else{
        
        console.log(`o ano ${anobi} não é um ano bissexto`)
    }
}

ano(2012);