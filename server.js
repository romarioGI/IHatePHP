const express = require("express");
const app = express();
const sql = require("mssql");

let dbConfig = {
  server: "MSI\\MSSQLSERVER01",
  database: "University"
};

app.post("/connect", express.json({ type: "*/*" }), async function (req, res) {
  dbConfig.user = req.body.user;
  dbConfig.password = req.body.password;

  try {
    const pool = new sql.ConnectionPool(dbConfig);
    const poolConnect = pool.connect();
    await poolConnect;
    pool.request();
    res.send({
      status: 200,
    });
  } catch (err) {
    res.send({
      status: 500,
    });
  }
});

app.get("/", async function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
  const result = await getData(req.query.query);
  res.send(result);
});

app.listen(5050, function () {
  console.log("Server is working!");
});

async function getData(query) {
  console.log(query);
  
  const pool = new sql.ConnectionPool(dbConfig);
  const poolConnect = pool.connect();

  try {
    await poolConnect;
    const request = pool.request();
    const result = await request.query(query);

    return result;
  } catch (err) {
    console.log(err);

    if (err.precedingErrors.length)
      return {
        error: err.precedingErrors[0].originalError.message,
        status: 500,
      };

    return {
      error: err.originalError.info.message,
      status: 500,
    };
  }
}
