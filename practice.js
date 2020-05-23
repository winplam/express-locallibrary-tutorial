const express = require('express')
const app = express()
const port = 3000

// View engine setup.
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('practice');
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
