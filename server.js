const express = require("express")
const bodyParser = require("body-parser")
const https = require("https")
const cors = require("cors")

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cors())
app.use(bodyParser.json())


app.get('/', (req,res)=>{
    const user = {
        username:"Deakin",
        password:"123"
    }
    res.send(user)
})

app.post('/' , (req,res)=>{
    const username = req.body.username
    const data = {
        email_address : username
    }

    console.log(data);

    res.status(200).send("Received the username: " + username);
});


app.listen(3007, function(){
console.log("Server is running on port 3007")
})

