function matchStory(matches){
    const obj = {};
    for(let match of matches){
        const winner = match.winner;
        if(obj[winner]){
            obj[winner] +=1;
        }else obj[winner] = 1;
    }

    return obj;
}   

module.exports = matchStory;

