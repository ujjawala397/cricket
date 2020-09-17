const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchesWonByEachTeam = require("./ipl/matchesWonByEachTeam");
const extraRuns = require("./ipl/extraRuns");
const bowlers = require("./ipl/topEconomicalPlayers.js");
const matchStory = require("./ipl/matchStory.js");
const runsYears=require("./ipl/runsYears.js");


const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";
const JSON_OUTPUT_FILE_ONE_PATH = "./public/data_won.json";
const JSON_OUTPUT_FILE_TWO_PATH = "./public/data_runs.json";
const JSON_OUTPUT_FILE_THREE_PATH = "./public/data_bowler.json";
const JSON_OUTPUT_FILE_FOUR_PATH = "./public/data_story.json";
const JSON_OUTPUT_FILE_LAST_PATH = "./public/data_interactive.json";

function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      // console.log(matches); // To run file use "node index.js"
      csv()
      .fromFile(DELIVERIES_FILE_PATH)
      .then(deliveries=>{
          
          
          let result = matchesPlayedPerYear(matches);
          saveMatchesPlayedPerYear(result);
          
          let won = matchesWonByEachTeam(matches);
          savewonMatchesByEachTeam(won);

          let runs=extraRuns(deliveries);
          saveExtraRuns(runs);

          let bowler=bowlers(deliveries);
          saveBowlers(bowler);

          let story=matchStory(matches);
          saveMatchStory(story);

          let runsYear=runsYears(matches,deliveries);
          saveRunsYears(runsYear);
      })
    });
   
}

function saveMatchesPlayedPerYear(result) {
  const jsonData = {
    matchesPlayedPerYear: result
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}
function savewonMatchesByEachTeam(won) {
  const jsonData = {
    matchesWon: won
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_ONE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

function saveExtraRuns(runs)
{
  const jsonData={
    extraRuns:runs
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_TWO_PATH,jsonString,"utf8",err=>{
    if(err){
      console.error(err);
    }
  });
}

function saveBowlers(bowler) {
  const jsonData = {
    topEconomicalPlayers: bowler
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_THREE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}


function saveMatchStory(matchStory) {
  const jsonData = {
    Story: matchStory
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_FOUR_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

function saveRunsYears(runsYear){
  const jsonData={
    years:runsYear
  };
  const jsonString= JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_LAST_PATH,jsonString,"utf8",err=>{
    if(err){
      console.log(err);
    }
  });
}

main();