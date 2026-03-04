function solution(m, n, puddles) {
    // 1. DP 테이블 초기화 (0으로 채움)
    // n행 m열의 격자를 만듭니다.
    const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

    // 2. 웅덩이 위치 표시
    // 문제의 좌표가 [m, n] 형태이므로 [y, x]로 변환하여 -1로 표시
    for (const [pm, pn] of puddles) {
        dp[pn][pm] = -1;
    }

    // 3. 시작점 설정 (집의 위치)
    dp[1][1] = 1;

    // 4. 격자 순회
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            // 시작점이나 웅덩이는 건너뜀
            if (i === 1 && j === 1) continue;
            if (dp[i][j] === -1) {
                dp[i][j] = 0; // 웅덩이는 경로의 수 0
                continue;
            }

            // 점화식: 위쪽 + 왼쪽
            // 1,000,000,007로 나눈 나머지를 저장
            dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % 1000000007;
        }
    }

    return dp[n][m];
}