function matchesPlayedPerYear(matches) {
  const result = {};
  for (let match of matches) {
    const season = match.season;
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