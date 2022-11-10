const { Router } = require("express");
const connection = require("../connection").con;

const user_delete = () => {
  const router = Router();

  router.delete("/user_delete/:user_id", (req, res, next) => {
    connection.query(
      `SELECT * FROM user WHERE user_id = ${req.params.user_id};`,
      (err, row) => {
        
        if (!err) {
          if (row?.length) {
            connection.query(
              `UPDATE user
                    SET is_active= '0'
                    WHERE user_id = ${req.params.user_id};`,
              (err, row) => {
                if (!err) {
                  res.status(200).send("delete successfully");
                } else {
                  res.status(500).send("internal sever error ");
                }
              }
            );
            
          } else {
            res.status(401).send("data not found ");
          }
        } else {
          res.send("server error");
        }
      }
    );
  });

  return router;
};

module.exports = user_delete;
