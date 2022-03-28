require("dotenv").config();
const schedule = require("node-schedule")

const Server = require("./models/server");
const server = new Server();

const { insertData } = require("./jobs/insert-data");

insertData();

schedule.scheduleJob("0 * * * *", async function () {
  insertData();
  console.log("insert")
});


server.listen();
