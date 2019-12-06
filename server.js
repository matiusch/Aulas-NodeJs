// carrega a biblioteca do Express na variavel express
var express = require("express");
var cors    = require("cors");

//cria um servidor invocando a biblioteca 
var server = express();
server.use(cors);

var listaAlunos = [
    {
        "id": 1,
        "nome": "Matheus Prestes",
        "email": "matheus.m.prestes@gmail.com",
        "nota": 10
    },
    {
        "id": 2,
        "nome": "Cleiton",
        "email": "cleiton@gmail.com",
        "nota": 10
    },
    {

        "id": 3,
        "nome": "Isidro",
        "email": "isidro@gmail.com",
        "nota": 10

    }
];


server.get("/alunos/:id", function (req, res) {

    var id = req.params.id;

    if (id <= 0 || id >= 4){
        res.json(" Não encontrado")
    }else{
        console.log("Browser acessou ao caminho /alunos");
        res.json(listaAlunos[id - 1]);
    }

});

server.get("/alunos", function (req, res) {
    console.log("Browser acessou ao caminho /alunos");
    res.json(listaAlunos);
});

server.listen(3000, function () {
    console.log("Servidor rodando na porta 3000");
});

function recuperar(){

}

