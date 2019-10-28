const express = require('express')
const app = express()
app.get(['/DefaultRoute','/'],(request,response)=>{
    response.send('Yo!Up and running!')
})
app.listen(process.env.SERVER_PORT,()=>{
    console.log("Server up and listening on :  ",process.env.SERVER_IP,process.env.SERVER_PORT)
})