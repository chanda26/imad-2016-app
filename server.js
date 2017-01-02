var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one': {
        title:'Article-One | chanda kumari',
        heading:'Artile one',
        date:'Jan 2,2017',
        content:`
        <p>
            this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the
            content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my
            first article.
        </p>
        <p>
            this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the
            content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my
            first article.
        </p>
        <p>
            this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the
            content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my
            first article.
        </p>`
        
    },
    'article-two': {
        title:'Article-Two | chanda kumari',
        heading:'Artile two',
        date:'Jan 5,2017',
        content:`
        <p>
            this is the content of my second article.
        </p>`
        
    },
    'article-three': {
    title:'Article-Three | chanda kumari',
        heading:'Artile three',
        date:'Jan 8,2017',
        content:`
        <p>
            this is the content of my third article.
        </p>`
    }
};
function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    var htmlTemplate=`
    <html>
        <head>
            <title>
            ${title}
            </title>
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        
        <body>
            <div class="container">
                <div>
                <a href="/">home</a>
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
    </html>
    `;
    return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName]));
   
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
