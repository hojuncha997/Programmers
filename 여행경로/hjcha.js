function solution(tickets) {
    // 1. 알파벳 순으로 앞서는 경로를 찾기 위해 미리 정렬
    tickets.sort((a, b) => a[1] < b[1] ? -1 : 1);
    
    const len = tickets.length;
    const visited = Array(len).fill(false);
    let answer = [];

    function dfs(current, path) {
        // 모든 티켓을 사용했다면 정답 확정 (이미 정렬했으므로 첫 번째 완성 경로가 최적)
        if (path.length === len + 1) {
            answer = path;
            return true;
        }

        for (let i = 0; i < len; i++) {
            if (!visited[i] && tickets[i][0] === current) {
                visited[i] = true;
                // 다음 공항으로 이동하며 경로 추가
                if (dfs(tickets[i][1], [...path, tickets[i][1]])) {
                    return true;
                }
                // 길을 찾지 못한 경우 백트래킹 (다시 티켓 미사용 처리)
                visited[i] = false;
            }
        }
        return false;
    }

    // 항상 "ICN"에서 시작
    dfs("ICN", ["ICN"]);
    
    return answer;
}