const express = require('express');
const app = express();
const port = process.env.port || 3000;
const cors = require('cors');

app.use(cors());

app.use(express.static('public'));
app.use('/hello', express.static('public/hello'));
app.use(express.urlencoded({extended: true}));

app.get('/api/exercise', (req, res) => {
    const params = req.query;
    res.status(200).send(params);
});

app.get('/api/exercise', (req, res) => {
    let respText = '<h1>Hello from Express!</h1>' + '<h2>POST parameters</h2>' + 
    '<p>I received these parameters: </p>' + 
    '<ul>';
    const params = req.body;
    for (let attr in params){
        respText += `<li>${attr}: ${params[attr]}</li>`;
    }
    respText += '</ul>'
    res.status(200).send(respText);
});

app.post('/api/login', (req,res) => {
    const { user,pwd } = req.body;
    if(!user || !pwd) {
        res.status(400).send();
    } else if(user == 'mark' && pwd == 'giraffe') {
        res.status(200).send({ user });
    } else {
        res.status(403).send();
    }
})

app.get('/api', (req,res) => {
    res.send({msg: 'Hello world!'});
})

app.use((req, res, next) => {
    console.log(`Recieved: ${req.method} ${req.path}`);
    next();
});

app.use(express.json());

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});