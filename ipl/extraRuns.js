function extraRuns(deliveries) {
    const result = {};
    for (let match of deliveries) {
      const id = parseInt(match.match_id);
    //   console.log(id);
      const bowling_team = match.bowling_team;
    //   console.log(bowling_team);
      const extra_runs = parseInt(match.extra_runs);
    //   console.log(extra_runs);
      if (id > 576 && id < 637) {
        // console.log(bowling_team + ' ' + extra_runs);
        if (result[bowling_team]) {
          result[bowling_team] += extra_runs;
        } else {
          result[bowling_team] = extra_runs;
        }
      }
    }
    // console.log(result);
    return result;
  }
  module.exports = extraRuns;