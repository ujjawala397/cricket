// //id_begin id_end  years
//     // 1 117 =2008
//     // 118 174=2009
//     // 175 234 =2010
//     // 235 307 =2011
//     // 308 381 =2012
//     // 382 457 =2013
//     // 458 517= 2014
//     // 518 576 =2015
//     // 577 636 =2016
//     // 1 59= 2017
//     // 7894  7953 =2018
//     // 11137 11415 =2019

// function runsYears(matches,deliveries) {
//   console.log(deliveries);

//     const result = {};

//     for(let match of matches) {
//       if(result[match.season]){
//         result[match.season].push(match.id)
//       }
//       else{
//         result[match.season] = [match.id]; 
//       }      
//     }
//     let obj={};
//     for(let year in result)
//     { 
//       var season=year;
//       // if(obj[season])
//       //   {  
//         for(let item in result[year])
//         {
//           console.log(item);
//           for(let delivery in deliveries)
//           {
//             console.log(delivery.match_id);
//             // let id = parseInt(delivery.match_id);
//             // let bowling_team = delivery.bowling_team;
//             // let extra_runs = parseInt(delivery.extra_runs);
//             // console.log(id);
//             // if(delivery.match_id==item)
//             // {
//             //     if(obj[season].hasOwnProperty(delivery.bowling_team))
//             //     {
//             //       obj[season][delivery.bowling_team]+=extra_runs;
//             //     }
//             //     else{
//             //       obj[season][delivery.bowling_team]=extra_runs;
//             //     }
//             //   }
//           // }
//         }
//         }
//         // else
//         // {
//         //   obj[season]={};
//         // }
//     }
//     // console.log(obj);
//     return obj;
//   }
//   module.exports = runsYears;


function runYears(matches, deliveries){
  let ids = matches.reduce((acc, curr) => {
    if(acc[curr.season])
    {
      acc[curr.season].push(curr.id);
    }
    else{
      acc[curr.season] = [curr.id];
    }
    console.log(acc);
    return acc;
  }, {});
  // console.log(ids);
  for(let season in ids){
    let obj = {};
    ids[season].map((id) => {
      deliveries.map((delivery) => {
        if(delivery.match_id == id){
          if(obj[delivery.bowling_team])
            obj[delivery.bowling_team] += parseInt(delivery.extra_runs);
          else
            obj[delivery.bowling_team] = parseInt(delivery.extra_runs);  
        }
      })
    })
    ids[season] = obj;
  }
  // console.log(ids);
  return ids;
}
module.exports=runYears;