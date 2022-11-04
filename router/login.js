const {Router} = require("express");
const connection = require("../connection").con;

const login = () =>{
    const router = Router();

    router.get("/login", (req, res, next) => {
        console.log("----->login");
        connection.query(`SELECT email_id,password FROM user 
        WHERE email_id='${req.body.email_id}' AND password ='${req.body.password}';`
         ,
         (err, rows) => {
          if (!err) {
            if(rows?.length){

                res.send("log in successfully");
            }
            else{
                res.status(401).send("Invalid id or password")
            }
            console.log("-------");
          } else {
            console.log(rows);
            res.status(501).end("server error");
          }
        });
      });
      return router
    }
module.exports = login