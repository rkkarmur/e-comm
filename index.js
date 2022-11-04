const express = require("express");

const login = require("./router/login");


const app = express();

// const router=express.Router()

// router.get('/',(req,res,next)=>{
//     res.status(200).send("------>")
// })
// app.use('/', router)

app.use(express.json())

app.use("/", login());



app.listen(3030, (err) => {
    if (err) throw err;
    else console.log("Server is running at port 3030" );
  });