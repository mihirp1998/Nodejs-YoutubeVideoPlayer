var express = require('express');
var path = require('path');
var nunjucks = require( 'nunjucks' ) ;
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');
console.log('hello');

nunjucks.configure( 'templates', {
    autoescape: true,
    cache: false,
    express: app
} ) ;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "helloworld123",
  database: "comments"
});
con.connect(function(err) {
  if (err) throw err;

})



app.engine( 'html', nunjucks.render ) ;
app.set( 'view engine', 'html' ) ;

app.get('/',function(req,res){
	var values =[]
	con.query("SELECT * FROM list", function (err, result, fields) {
    if (err) throw err;
    for (i = 0;i<result.length;i++){
    	values[i] = result[i]
    }
    console.log('answer');
    console.log(values);
 		res.sendFile(path.join('/home/mihir/profSarang/templates' , 'index.html'));
/*	var items = [{ title: "foo", id: 1 }, { title: "bar", id: 2}];
*/	
	console.log('no')
    console.log(values);
res.render('index.html',{items : values});
  });

})

app.get('/temp_style.css',function(req,res){
res.sendFile(path.join('/home/mihir/profSarang/templates' , 'temp_style.css'));
})


app.get('/item.html',function(req,res){
res.sendFile(path.join('/home/mihir/profSarang/templates' , 'item.css'));
})


app.get('/jquery.mb.YTPLayer.js',function(req,res){
	console.log('ytplayer')
	res.sendFile(path.join('/home/mihir/profSarang/templates' , 'abc.js'));
})


app.get('/jquery-3.2.1.js',function(req,res){
	console.log('jquery')
	res.sendFile(path.join('/home/mihir/profSarang/templates' , 'jquery-3.2.1.js'));
})

app.listen(3000,function(){
	console.log('listening on port 3000')
})

app.get('/main.js',function(req,res){
	console.log('main')
	res.sendFile(path.join('/home/mihir/profSarang/templates' , 'main.js'));
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (err, req, res, next) {
  console.log(err.stack)
  res.status(500).send('Something broke!')
})
app.post('/open',function(req,res){
	var comment = req.body.comment;
	var time = req.body.time;
	var name = req.body.name;
	console.log(comment);
	console.log(time)
	var query = 'insert into list(comments,name,time) values(\'comment_ans\',\'name_ans\',\'time_ans\')'
	query = query.replace('comment_ans',comment)
	query = query.replace('time_ans',time)
	query = query.replace('name_ans',name)

	console.log('query '+ query)
	con.query(query,function(err,result){
		if(err) throw err;
		else console.log('success')
	})

})

//app.use(app.router);

