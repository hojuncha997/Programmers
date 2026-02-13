function solution(name) {
    const n = name.length;
    
    // 1. 각 문자를 변경하는 데 필요한 상하 조작 횟수
    let upDown = 0;
    for (const ch of name) {
        const diff = ch.charCodeAt(0) - 65; // A=0
        upDown += Math.min(diff, 26 - diff);
    }
    
    // 2. 좌우 이동 최솟값 (연속된 A 구간을 기준으로 되돌아가는 경우 고려)
    let minMove = n - 1; // 단순히 오른쪽으로 쭉 가는 경우
    
    for (let i = 0; i < n; i++) {
        let nextI = i + 1;
        while (nextI < n && name[nextI] === 'A') {
            nextI++;
        }
        // i까지 갔다가 되돌아와서 끝에서부터 가는 경우
        minMove = Math.min(minMove, i * 2 + (n - nextI));
        // 끝에서부터 먼저 갔다가 되돌아와서 i까지 가는 경우
        minMove = Math.min(minMove, (n - nextI) * 2 + i);
    }
    
    return upDown + minMove;
}