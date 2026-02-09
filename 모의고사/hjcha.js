function solution(answers) {
    // 답안 배열을 순회하면서 각 사람들의 패턴배열과 맞춰봄. 그리고 동일할 때마다 카운트
    // 따라서 패턴배열과 카운트 변수가 필요함.
    
    const cntObj = {
        "1": 0,
        "2": 0,
        "3": 0,
    }
    
    const pOneArr = [1, 2, 3, 4, 5];
    const pTwoArr = [2, 1, 2, 3, 2, 4, 2, 5];
    const pThreeArr = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    for(let i = 0; i < answers.length; i++) {
        if(answers[i] === pOneArr[i%pOneArr.length] ) cntObj["1"]++;
        if(answers[i] === pTwoArr[i%pTwoArr.length]) cntObj["2"]++;
        if(answers[i] === pThreeArr[i%pThreeArr.length]) cntObj["3"]++;
    }
    const maxVal = Math.max(cntObj["1"], cntObj["2"], cntObj["3"] );
    const answer = [];
    for(let key in cntObj) {
        if (cntObj[key] === maxVal) {
            answer.push(key);
        }
    }
    console.log(answer)
    return answer.map(Number).sort((a,b) => a-b);
    
}
