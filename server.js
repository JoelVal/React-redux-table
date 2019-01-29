var express = require('express');
var hdbr  = require('express-handlebars');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const handlebars = require('./handlebars')(hdbr)
//app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.engine('hbs', handlebars.engine)
app.set('view engine', 'hbs');
app.use(express.static('public'))



app.get('/', function (req, res) {
    res.send(`
    <!doctype html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Login</title>		
            
    
    
    </head>
    <body>
    
        <div id="root"></div>
        <script src="/javascripts/bundle.js"></script>
        
    </body>
    </html>`)
  })

app.get('/page', (req, res, next) => 
{
        const fs = require('fs');
        let rawdata = fs.readFileSync('./db/1.json');  
        const result = {
            total: 60,
            pageData: JSON.parse(rawdata)
        }
        console.log(req.query.limit + ' ' + req.query.skip)
        res.json(result) 
})

app.listen(3000);