

function texto(...palavra:string[]):string{

    var div:string="";
    

    for(let i=0;i<palavra.length;i++){
        
        div += (`<div>${palavra[i]}</div>\n`);
    }

    var html=(`<HTML><head></head><body>\n ${div} </body></html>`);

    return html;

}


console.log(texto("valorA","valorB","valorC"));



