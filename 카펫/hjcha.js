function solution(brown, yellow) {
    // 전체 격자 수 = 갈색 + 노란색
    const total = brown + yellow;

    // 세로(h)는 최소 3부터 시작 (테두리 1줄 + 노란색 최소 1줄 + 테두리 1줄)
    // h <= sqrt(total) 인 이유: 가로 >= 세로 조건을 만족시키기 위해
    for (let h = 3; h <= Math.sqrt(total); h++) {
        // total이 h로 나누어떨어져야 직사각형이 됨
        if (total % h === 0) {
            const w = total / h; // 가로 길이

            // 핵심 공식:
            // 테두리 1줄을 빼면 안쪽 노란 영역의 크기는 (가로-2) * (세로-2)
            // 이 값이 yellow와 같으면 정답
            if ((w - 2) * (h - 2) === yellow) {
                return [w, h]; // [가로, 세로] 순서로 반환
            }
        }
    }
}