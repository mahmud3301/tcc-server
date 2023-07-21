const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;
const blog = require('./data/data.json')

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/blog', (req, res) => {
    res.send(blog);
})

app.get('/blog/:id', (req, res) => {
    const {id} = req.params;
    const item = blog.find(item => item.id == id)
    res.send(item);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})