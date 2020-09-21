const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.post('/', (req, res) => {
    let url = `https://www.metaweather.com/api/location/search/?query=${req.body.city}`;
    axios.get(url)
        .then(({data}) => res.json(data))
        .catch((err) => res.json(err));
});

app.listen(port, () => {
    console.log(`Weather app listening at http://localhost:${port}`);
});