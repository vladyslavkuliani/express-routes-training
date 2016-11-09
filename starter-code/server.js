// SERVER-SIDE JAVASCRIPT
// run npm install to install all required packages before starting server

var express = require('express');
var app = express();


// MIDDLEWARE
app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Allow CORS:
// not necessary since we'll be making requests from a js file
  // that we are also serving (as static assets in public)
// app.use(function(request, response, next) {
//   response.header("Access-Control-Allow-Origin", "*");
//   response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// ROUTES
// Root Route
app.get('/', function (req, res){
  res.sendFile('views/index.html',{ root : __dirname});
});

// Gallery View Route


var num = 5;
app.get('/pickanumber', function(req, res){
// The Number Guessing Game
  var number = parseInt(req.query.number);
  if(number > num){
    res.send("Too High!");
  }
  if(number < num){
    res.send("Too Low!");
  }
  res.send("Nailed it!");
});

app.post('/pickanumber', function(req, res){
  num = parseInt(req.body.number);
  res.send('Number was successfuly updated!');
});

// Gallery
var artworks = [
  {
    title: "T1",
    artist: "A1",
    description: "D1"
},
{
  title: "T2",
  artist: "A2",
  description: "D2"
}
];


app.get('/artworks', function(req, res){
  res.sendFile('views/art-gallery.html', {root: __dirname});
});

app.post('/artworks', function(request, response){
  var newArtwork = {
    name: request.body.title,
    artist: request.body.artist,
    description: request.body.description
  };
  artworks.push(newArtwork);
  response.json(artworks);
});
// SERVER START
var port = 3000;
app.listen(port, function(){
  console.log('Server Running at localhost:3000/');
});
