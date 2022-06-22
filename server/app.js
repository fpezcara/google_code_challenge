const express = require('express')
const app = express()
const cors = require('cors');
const port = 3000;
const data = require("./data");


app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'))

app.get("/home", (req, res) => res.send(data))


app.get('/home/:search', (req, res) => {
    const query = req.params.search;
    if (data[query] == undefined){
        res.send("Page not added yet")
    } else {
        res.send(data[query])
    }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})


