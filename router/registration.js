const { Router } = require("express");
const connection = require("../connection").con;

const registration = () => {
  const router = Router();

 
  router.post("/registration", (req, res, next) => {
    if (!req.body.user_name || !req.body.email_id || !req.body.password) {
      res.status(400).send("please enter user name,email and password  ");
    } else {
      connection.query(
        `select * from user where email_id = '${req.body.email_id}';`,
        (err, row) => {
          if (!err) {
            if (row?.length) {
              res.status(400).send("Email already exist.");
            } else {
              connection.query(
                `INSERT INTO user ( user_name, email_id, password)
                          VALUES ( '${req.body.user_name}', '${req.body.email_id}', '${req.body.password}');`,
                (err, rows) => {
                  if (!err) {
                    res.send("User Created");
                  } else {
                    console.log(err);
                    res.status(500).end("Internal Server Error");
                  }
                }
              );
            }
          }
        }
      );
    }
  });

  return router;
};
module.exports = registration;
