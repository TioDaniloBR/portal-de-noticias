var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/tecnologia',function(req, res){
    res.render("secao/tecnologia");
});
app.get('/formulario_inclusao_noticia',function(req, res){
    res.render("admin/form_add_noticia");
});
app.get('/noticias',function(req, res){
    res.render("noticias/noticias");
});
app.get('/noticia',function(req, res){
    res.render("noticias/noticia");
});
app.get('/tecnologia',function(req, res){
    res.render("secao/tecnologia");
});
app.get('/',function(req, res){
    res.render("home/index");
});

app.listen(3000, function(){
    console.log("Servidor rodando com express");
});