const express = require("express")
const app = express()

require('dotenv').config({});

app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
app.use(express.json())

const port = process.env.PORT || 3000;

app.get("/",function (req,res){
  try {
    res.render("index")
  } catch (error) {
    console.log(error)
  }
})


app.listen(port,()=>{
    console.log(`server started at port localhost:${port}`)
})

