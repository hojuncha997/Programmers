function solution(n, costs) {
    let answer = 0;
    
    // 1. 비용을 기준으로 오름차순 정렬
    costs.sort((a, b) => a[2] - b[2]);
    
    // 2. 각 노드의 부모를 저장하는 배열 (Union-Find용)
    const parent = Array.from({ length: n }, (_, i) => i);

    // 부모 노드를 찾는 함수 (Path Compression 적용)
    function find(parent, x) {
        if (parent[x] === x) return x;
        return parent[x] = find(parent, parent[x]);
    }

    // 두 노드를 합치는 함수 (Union)
    function union(parent, a, b) {
        const rootA = find(parent, a);
        const rootB = find(parent, b);
        if (rootA !== rootB) {
            parent[rootB] = rootA;
            return true; // 연결 성공
        }
        return false; // 이미 연결되어 있음 (사이클 발생 방지)
    }

    // 3. 간선들을 순회하며 MST 구성
    let bridgeCount = 0;
    for (const [start, end, cost] of costs) {
        // 사이클이 형성되지 않을 때만 다리 추가
        if (union(parent, start, end)) {
            answer += cost;
            bridgeCount++;
            
            // 모든 섬이 연결되면(간선 수 = n-1) 종료
            if (bridgeCount === n - 1) break;
        }
    }

    return answer;
}