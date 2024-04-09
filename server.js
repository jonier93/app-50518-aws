import ex from 'express';
import dir from 'path'

const app = ex()
const dir_front = dir.resolve()
app.use(ex.static("frontend/build"))

app.listen('5500', function(){
    console.log("Server started")
})

app.get('/', function(req, res){
    res.sendFile(dir_front + "/frontend/build/index.html")
})

app.get('/register_view', function(req, res){
    res.sendFile(dir_front + "/frontend/build/index.html")
})

app.get('/consult_view', function(req, res){
    res.sendFile(dir_front + "/frontend/build/index.html")
})

