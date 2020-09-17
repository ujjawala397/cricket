function matchesPlayedPerYear(matches) {
// console.log(matches);

  const result = {};
  for (let match of matches) {
        const season = match.season;
        // if(season==2020)
        // {
        //   console.log(match.id);
        // }
    // console.log(season);
    if (result[season]) {
      result[season] += 1;
    } else {
      result[season] = 1;
    }
  }
  // console.log(result);
  return result;
}

module.exports = matchesPlayedPerYear;