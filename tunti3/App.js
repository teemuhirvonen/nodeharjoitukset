const { validateQuery } = require('./modules/query_validator');

const express = require('express');
const app = express();
const port = process.env.port || 3000;
const cors = require('cors');

app.use(cors());

app.use(express.urlencoded({extended: true}));

app.get('/menus', (req, res) => {
    const param = req.query.action;
    console.log(param);
    const status = validateQuery(param);
    if (status == 400) {
        res.status(status).send();
    } else {
        res.status(status).send(req.query);
    }
});

app.use(express.json());

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});