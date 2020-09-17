function topEconomicalBowlers(deliveries){
    let result = {}; 
    let bowl = []; 
    let obj = [];
    for(let item of deliveries){
        const bowler = item.bowler;
        const match_id = parseInt(item.match_id);
        const total_runs = parseInt(item.total_runs);
        if(match_id> 517 && match_id < 577){
            if(obj[bowler]){
                obj[bowler] += total_runs;
            }else{
                obj[bowler] = total_runs;
            }

            if(bowl[bowler]){
                bowl[bowler] += 1;
            }else{
                bowl[bowler] = 1;
            }
        }
    }
    for(let b in bowl){
        bowl[b] = parseFloat(parseInt(bowl[b]/6)+"."+parseInt(bowl[b]%6));
    }
    for(let r in obj){
        obj[r] = parseInt(obj[r])/bowl[r];
    }
    const test = [];
    for(let rr in obj){
        test.push(obj[rr])
    }
    test.sort(function(a, b){return a - b}).splice(10,test.length);
    for(let rrr in obj){
        if(test.includes(parseFloat(obj[rrr]))){
            result[rrr] = obj[rrr];
        } 
    }
    return result;
}

module.exports = topEconomicalBowlers;