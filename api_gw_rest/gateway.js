const express = require('express');
const app = express();
const helmet = require('helmet')
const routes = require('./routes')
const PORT = 3001;

app.use(express.json())
app.use(helmet())
app.use('/',routes)

app.listen(PORT, () => {
    console.log('gateway has started on port ' + PORT);
})