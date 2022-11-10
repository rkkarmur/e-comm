const { Router } = require("express");
const connection = require("../connection").con;

const getById_extends = () => {
  const router = Router();

  router.get("/us/:user_id", (req, res, next) => {

    connection.query(`select user_id,user_name,email_id from 
    user where user_id=${req.params.user_id}`,
      (err, rows) => {
      //   const row=rows
      //   row.idAndEmail=row.user_id +" "+ row.email_id

           console.log(typeof rows);
           
        console.log(rows);
        if (!err) {
          res.send(rows);
           console.log("_____");
           console.log(rows);

        } else {
          res.status(500).send("internal server error");
        }
      }
    );
  });
  return router;

};

module.exports = getById_extends;
