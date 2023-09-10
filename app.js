const express = require("express");


const app = express()
const PORT = 4000

app.use(express.json())


app.get("/", (req, res)=>{
    const slack = req.query.slack_name
    const track = req.query.track
  const currentUTCDate = new Date().toUTCString();

    const dayOfWeek = new Date().getUTCDay();

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayName = dayNames[dayOfWeek];

    const response = {
      slack_name: slack,
      current_day: dayName,
      utc_time: currentUTCDate,
      track: track,
    };

})



app.listen(PORT, () => {
    console.log("app is running on port " + PORT)
})