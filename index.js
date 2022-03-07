const express = require('express')
const app = express()
const { main } = require('./functions')

let PORT = process.env.PORT || 3000

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/websiteToScrape.html")
})

app.get('/index', (req, res)=>{
    res.send("index")
})

app.get('/form', (req, res)=>{
    res.sendFile(__dirname + "/form.html")
})

app.get('/results', async (req, res)=>{
    const results = await main()
    res.send(results)
})

app.listen(PORT, ()=>{
    let message= (PORT==3000)? "App listening here http://localhost:3000" : ""
    console.log(message);
})
