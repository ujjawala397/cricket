function getWonCount(year,matches){
  
  
const result = {};
  for (let item of matches) 
  {
    const season = parseInt(item.season);
    const winner = item.winner;
      if(season == year){
        if (result[winner]) {
          result[winner] += 1;
        } else {
          result[winner] = 1;
        }
      }

    }

    return result;
}


function matchesWonByEachTeam(matches) {
  var obj = [];
  for(let year=2008;year<=2019;year++){
    let a=getWonCount(year,matches);
    obj.push(a);
  }
    
    // console.log(obj);
    return obj;
  }
  module.exports = matchesWonByEachTeam;