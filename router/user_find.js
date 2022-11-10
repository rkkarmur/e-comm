const { Router } = require("express");
const connection = require("../connection").con;

const getById = () => {
  const router = Router();

  router.get("/user/:user_id", (req, res, next) => {

    connection.query(`select user_id,user_name,email_id from 
    user where user_id=${req.params.user_id}`,
      (err, rows) => {
        

        if (!err) {
          res.send(rows);
          console.log("_____");
        } else {
          res.status(500).send("internal server error");
        }
      }
    );
  });
  return router;

};

module.exports = getById;
