const Connection = require("../db");

const testController = {
  allData: (req, res) => {
    Connection.query("SELECT * FROM user", (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    });
  },
};

module.exports = testController;
