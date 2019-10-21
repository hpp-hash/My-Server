const express = require('express')
const app = express()

// static files in 'public' folder will be served
app.use(express.static('public'))

app.listen(3000, () => console.log('Server running on port 3000'))