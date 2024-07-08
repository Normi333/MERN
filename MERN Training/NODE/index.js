const express = require('express')
const app = express()
const port = 3000

const todos = ["learn html","learn css", "learn php"];

app.get('/', (req, res) => {
    let textToDisplay = "";
    for (let i=0; i<todos.length; i++){
        textToDisplay += `<li>${todos[i]}</li>`;
    }

    res.send(`
        <ul>${textToDisplay}</ul>`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})