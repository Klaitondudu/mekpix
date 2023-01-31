const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()
var favicon = require('serve-favicon');

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname+'/src/index.html'))
})


app.use('/', router)
app.listen(process.env.port || 3000)