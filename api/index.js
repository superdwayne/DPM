const express = require('express')
const app = express()
const cors = require('cors')
const port = 8002

 
const shapes = { 
  "shapes": {
    "circle": 'dodecahedronBufferGeometry',
    "square": 'tetrahedronGeometry',
    "oval": Math.floor((Math.random() * 100) + 1)
    },
  }
 
app.use(cors())

app.get('/api/index', (req, res) => {
 res.json(shapes)
 //console.log(req)
})

 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})