const express = require('express')
const app = express()
const cors = require('cors')
const port = 8008

 
const shapes = { 
  "shapes": {
    "circle": Math.floor((Math.random() * 100) + 1),
    "square": Math.floor((Math.random() * 100) + 1),
    "oval": Math.floor((Math.random() * 100) + 1)
    },
  }
 
app.use(cors())

app.get('/api/index', (req, res) => {
 res.json(shapes)
 //console.log(res)
})

 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})