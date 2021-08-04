const express = require('express')
const app = express()
const cors = require('cors')
const port =   process.env.PORT || 8002

 
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
app.use(express.static(path.join(__dirname, '../build', )));
app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, '../build', 'index.html'));
});
 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})