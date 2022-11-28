const express = require('express');
const app = express();

app.listen(3005,function(){
    console.log('Done.')
});
app.use(express.static('public'));

app.get('/index.html',function(req, res){
    res.sendFile(__dirname+'/index.html')});

app.get('/education.html',function(req, res){
    res.sendFile(__dirname+'/education.html')});

app.get('/project.html',function(req, res){
    res.sendFile(__dirname+'/project.html')});

app.get('/more_infomation.html',function(req, res){
    res.sendFile(__dirname+'/more_infomation.html')});