const mongoose = require("mongoose");
const dburl = require("./config").db_url;
mongoose
  .connect(dburl)
  .then((data) => {
    console.log("Database successfully connected");
  })
  .catch((data) => {
    console.error(err);
  });
module.exports = mongoose;
