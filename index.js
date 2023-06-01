const express = require('express')

const app = express()
const port = 3002

app.use(express.json()) // parses incoming requests with JSON payloads

app.listen(port, () => console.log(`Express server listening on ${port}`))