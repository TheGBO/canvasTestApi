const express = require('express');
app = express();


var objectPosition = {
    x: 0,
    y: 0
}

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.use(express.json())

app.get('/position', (req, res) => {
    res.json(objectPosition);
});

app.put('/position', (req, res) => {
    data = req.body;
    objectPosition.x += data.x;
    objectPosition.y += data.y;
    res.json(objectPosition);
});

app.patch('/position', (req, res) => {
    data = req.body;
    objectPosition.x = data.x;
    objectPosition.y = data.y;
    res.json(objectPosition);
});


app.listen(process.env.PORT, () => {
    console.log(`Listening at ${process.env.PORT}`);
});