const { Router } = require("express");
const connection = require("../connection").con;

const login = () => {
  const router = Router();

  router.get("/login", (req, res, next) => {
    console.log("----->login");
    try{
      // throw new Error("HSJGSYHJVSGH")
      if (!req.body.email_id || !req.body.password) {
        res.status(400).send("please enter email and password  ");
      } else {
        connection.query(
          `SELECT email_id,password FROM user1 
          WHERE email_id='${req.body.email_id}' AND password ='${req.body.password}';`,
          (err, rows) => {
            if (!err) {
              if (rows?.length) {
                res.send("log in successfully");
              } else {
                res.status(401).send("Invalid id or password");
              }
            } else {
              console.log(rows);
              res.status(501).end("server error");
            }
          }
        );
      }
    }
    catch(err){
      console.log("-------->", err);
      res.status(500).send(err)
    }
  });
  return router;
};
module.exports = login;
