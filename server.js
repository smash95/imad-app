var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var Articles={
'Article-One':{
    title:'Aishwarya Chabukwar',
    heading:'My firt article',
    date: '5 sept,2016',
    content:`   <p>
      This is my first Article.Article (grammar), a grammatical element used to indicate definiteness or indefiniteness. Article (publishing), a piece of nonfictional prose that is an independent part of a publication. Articles of Confederation, the predecessor to the current United States Constitution.
      </p>
    
        <p> This is my first Article.Article (grammar), a grammatical element used to indicate definiteness or indefiniteness. Article (publishing), a piece of nonfictional prose that is an independent part of a publication. Articles of Confederation, the predecessor to the current United States Constitution.</p>
            <p> This is my first Article.Article (grammar), a grammatical element used to indicate definiteness or indefiniteness. Article (publishing), a piece of nonfictional prose that is an independent part of a publication. Articles of Confederation, the predecessor to the current United States Constitution.</p>`
            
},
'Article-Two':{
    title:'Aishwarya Chabukwar',
    heading:'My second article',
    date: '10 sept,2016',
    content:`   <p>
      This is my second Article.Article (grammar), a grammatical element used to indicate definiteness or indefiniteness. Article (publishing), a piece of nonfictional prose that is an independent part of a publication. Articles of Confederation, the predecessor to the current United States Constitution.
      </p>`
},
'Article-Three': {
    title:'Aishwarya Chabukwar',
    heading:'My Thrid article',
    date: '15 sept,2016',
    content:`   <p>
      This is my third Article.Article (grammar), a grammatical element used to indicate definiteness or indefiniteness. Article (publishing), a piece of nonfictional prose that is an independent part of a publication. Articles of Confederation, the predecessor to the current United States Constitution.
      </p>`

}
};
function createtemplate (data){
    

    var heading=data.heading;
    var content=data.content;
    var date=data.date;
    
var htmltemplate=`
<html>
    <head><title>Article-one | Aishwarya Chabukswar</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="/ui/style.css" rel="stylesheet" />
     </head>
    <body>
        <div class="container">
        <div>
            <a href='\'>Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        
        <div>
           ${content}
        </div>
        </div>
    </body>
    </html>`
;  
return htmltemplate;
}
    
    


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
  
});

var counter=0;
app.get('/counter', function (req, res) {
    counter=counter+2;
    res.send(counter.toString());
});





app.get('/:articleName',function(req,res){
    var articleName=req.parans.articleName;
    res.send(createtemplate(Articles[articleName]));
   });


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
