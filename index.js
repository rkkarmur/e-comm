const express = require("express");

const login = require("./router/login");
const registration = require("./router/registration");
const user_update = require("./router/user_update");
const user_delete = require("./router/user_delete");
const getById = require("./router/user_find");
const getById_extends = require("./router/getById_extends");










const app = express();

// const router=express.Router()

// router.get('/',(req,res,next)=>{
//     res.status(200).send("------>")
// })
// app.use('/', router)

app.use(express.json())

app.use("/", login());
app.use("/", registration());
app.use("/", user_update());
app.use("/", user_delete());
app.use("/", getById());
app.use("/", getById_extends());








app.listen(3030, (err) => {
    if (err) throw err;
    else console.log("Server is running at port 3030" );
  });