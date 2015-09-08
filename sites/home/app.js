// lokale Variable express erfordert express-applikation
var express = require('express');
//app --> 1 Instanz der express-Methode --> Erstellt eine express-Applikation!
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

// Express is a built-in-middleware. Express.static basiert auf serve-static und wird benötigt, um den statische Pfade einer Express-Applikation anzusprechen ---> hier, statischer Inhalt der App im Ordner "public"
app.use(express.static('public'));




//Ermöglicht das ansprechen des HTTP-Webserver ---> Gleich der http.Server.listen()-Methode in Node Hört auf localhost Port 3001
var server = app.listen(3001, function () {

    var host = server.address().address
    var port = server.address().port
        //Ausgabe auf der Konsole bei Start des Webservers
    console.log("Example app listening at http://%s:%s", host, port)

})

// respond with "Hello World!" on the homepage
app.get('/', function (req, res) {
    res.sendFile("Hallo Welt")
});

// accept POST request on the homepage
app.post('/', function (req, res) {
    var input = req.body.username;
    res.send("Ich habe einen Post erhalten! Inhalt: " + input);
});

// this middleware will be executed for every request to the app
app.use(function (req, res, next) {
    console.log('HALLO REQUEST!');
    next();
})

// get-Methode, um Benutzer zu begrüßen
app.get("/get/:who", function (req, res) {
    res.end("Hallo " + req.params.who + ".");
});