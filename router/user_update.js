const { Router } = require("express");
const connection = require("../connection").con;

const user_update = () => {
  const router = Router();

  router.put("/user_update/:user_id", (req, res, next) => {
    if ( !req.body.email_id || !req.body.user_name || !req.body.password) {
      res.status(400).send("please enter user name,email and password  ");
    } else {
      connection.query(
        `select * from user where email_id = '${req.body.email_id}' and user_id <> ${req.params.user_id};`,
        (err, row) => {
          if (!err) {
            if (row?.length) {
              res.status(403).send("email already exists");
            } else {
              connection.query(
                `UPDATE user SET user_name = '${req.body.user_name}',email_id = '${req.body.email_id}',password= '${req.body.password}'
                      WHERE user_id = ${req.params.user_id};`,
                (err, rows) => {
                  if (!err) {
                    res.send("update successfully");
                  } else {
                    console.log(err);
                    res.status(500).end("Internal Server Error");
                  }
                }
              );
            }
          } else {
            console.log(err);
            res.status(500).end("Internal Server Error");
          }
        }
      );
    }
  });

  return router;
};
module.exports = user_update;
