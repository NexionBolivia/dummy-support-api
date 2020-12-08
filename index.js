const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    console.log(req.body)
    sleep(3000).then(() => {
        res.json({
            "token": "customToken",
            "odk_server_url": "http://192.168.100/",
            "odk_username": "marcel",
            "odk_password": "custom password"
        })
    })
})
app.get('/', (req, res) => {
    res.send("working")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}