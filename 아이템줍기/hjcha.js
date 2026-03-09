function solution(rectangle, characterX, characterY, itemX, itemY) {
    // 1. 좌표를 2배로 확대하여 맵 초기화 (최대 좌표 50 -> 100)
    const field = Array.from(Array(102), () => Array(102).fill(0));
    
    // 2. 직사각형 영역 채우기
    const doubledRec = rectangle.map(r => r.map(v => v * 2));
    
    doubledRec.forEach(([x1, y1, x2, y2]) => {
        for (let i = x1; i <= x2; i++) {
            for (let j = y1; j <= y2; j++) {
                // 이미 내부(2)로 판정된 곳이 아니라면 1(테두리 후보)로 채움
                if (i > x1 && i < x2 && j > y1 && j < y2) {
                    field[i][j] = 2; // 내부를 뜻하는 2
                } else if (field[i][j] !== 2) {
                    field[i][j] = 1; // 테두리 후보 1
                }
            }
        }
    });

    // 3. BFS를 위한 준비
    const queue = [[characterX * 2, characterY * 2, 0]];
    const visited = Array.from(Array(102), () => Array(102).fill(false));
    visited[characterX * 2][characterY * 2] = true;
    
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    // 4. BFS 탐색 시작
    while (queue.length > 0) {
        const [currX, currY, dist] = queue.shift();

        // 아이템 위치에 도달하면 거리/2 반환
        if (currX === itemX * 2 && currY === itemY * 2) {
            return dist / 2;
        }

        for (let i = 0; i < 4; i++) {
            const nx = currX + dx[i];
            const ny = currY + dy[i];

            // 맵 범위 내에 있고, 테두리(1)이며, 방문하지 않은 곳일 때
            if (nx >= 0 && nx <= 100 && ny >= 0 && ny <= 100) {
                if (field[nx][ny] === 1 && !visited[nx][ny]) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny, dist + 1]);
                }
            }
        }
    }
}