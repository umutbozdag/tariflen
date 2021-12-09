import express from 'express'
import searchRoute from './api/routes/search.js'

const app = express()
const port = 3000;


app.use('/search', searchRoute)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})