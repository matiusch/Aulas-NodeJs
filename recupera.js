function recuperar(){
    fetch("http://localhost:3000/alunos",{"method":"GET"})
    .then(response => response.json())
    .the(json => exibe(json))
}

function exibe(json){
    var alunos;
    for(i=0;i<alunos.length;i++){
        json = alunos[i]
    }
}