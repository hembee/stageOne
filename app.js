const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  const slack = req.query.slack_name;
  const track = req.query.track;
  const currentUTCDate = new Date().toUTCString();
  const dayOfWeek = new Date().getUTCDay();
  const git_repo = "https://github.com/hembee/stageOne";
  const git_file = "https://github.com/hembee/stageOne/blob/main/app.js";

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
    github_file_url: git_file,
    github_repo_url: git_repo,
    status_code: 200,
  };

  res.status(200).json(response);
});

app.listen(PORT, () => {
  console.log("app is running on port " + PORT);
});
