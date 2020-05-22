const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

// static files in 'public' folder will be served over port 3000
// nginx re-routes port 80 to port 3000
app.use(express.static('public'))

app.get('/data', (req, res) => {
    res.send({
        id: 'hi',
        pass: 'hi'
    })
})

app.listen(PORT, () => console.log('Server running on port 3000'))