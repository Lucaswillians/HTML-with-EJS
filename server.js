//criando um servidor utilizando express
const express = require ('express');
const { title } = require('process');
//pegando a variavael express acima, e colocando ela na variavel app,
//e a instanciando
const app = express ();

//pego a variavel app, e falo com estou utilizando o ejs, 
// colocar o arquivo index.ejs dentro de uma pasta chamada views
// pois o view engine, faz com que isso seja obrigatorio para funcionar
app.set("view engine", "ejs");


//crio uma rota para fazer a requisição do nosso dominio, ou seja site
// o / chama nosso dominio, ou seja o lucas.com.br por exemplo
// fazendo a requisição com o require do nosso dominio, temos a resposta
// que e o que esta dentro da função, ele chama a "pagina" e entao temos a resposta
app.get("/", function(require, response)
{
    const items = [
        {
            title: "D",
            message: "esenvolver aplicações"
        },
        {
            title: "E",
            message: "JS usa javascript para renderizar HTML"
        },
        {
            title: "M",
            message: "uito maneiro de usar",
        },
        {
            title: "A",
            message: "morzinho"
        },
        {
            title: "I",
            message: "nstall EJS"
        },
        {
            title: "S",
            message: "intaxe maneira"
        }
    ];
    response.render("pages/index", {
        qualitys: items,
    });
})

//crio uma rota para fazer a requisição do nosso dominio, ou seja site
// /sobre chama nosso dominio com uma pagina sobre a mais por exemplo
// fazendo a requisição com o require, temos a resposta
// que e o que esta dentro da função, ele chama a "pagina" about
app.get("/sobre", function(require, response)
{
    response.render("pages/about");
})

// apenas peço para que o app, ou seja, tudo que ta o utilizando
// ouça a porta 8080 para rodar as parada
app.listen(8080);
//se tudo acima der bom, ou seja, ter sido escrito certo, isso mostrara no terminal
console.log("ta rodando");

