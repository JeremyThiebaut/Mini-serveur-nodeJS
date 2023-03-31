const express = require("express");
const router = require("./app/router");
const cors = require("cors");

const app = express();
const PORT = 3001;

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(router);

app.listen(PORT, () => {
  console.log(`port ouvert sur ${PORT}`);
});
