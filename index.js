const express = require('express')
const app = express()

// static files in 'public' folder will be served over port 3000
// nginx re-routes port 80 to port 3000
app.use(express.static('public'))

app.listen(3000, () => console.log('Server running on port 3000'))