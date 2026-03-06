function solution(begin, target, words) {
    // 1. target이 words에 없으면 절대 못 만드니까 0 반환
    if (!words.includes(target)) return 0;

    // 2. BFS 준비: [현재 단어, 변환 횟수]를 담은 큐
    let queue = [[begin, 0]];
    let visited = new Set(); // 중복 방문 방지

    while (queue.length > 0) {
        let [curr, step] = queue.shift();

        // 3. 정답 확인: 목표 단어에 도착했으면 횟수 리턴
        if (curr === target) return step;

        for (let word of words) {
            // 4. 조건 확인: 아직 안 가본 단어 && 딱 한 글자만 다른 단어
            if (!visited.has(word) && canConvert(curr, word)) {
                visited.add(word);          // 방문 처리
                queue.push([word, step + 1]); // 다음 단계 큐에 삽입
            }
        }
    }

    return 0; // 모든 경로를 다 뒤졌는데도 못 찾으면 0
}

// 한 글자만 다른지 체크하는 헬퍼 함수
function canConvert(word1, word2) {
    let diffCount = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) diffCount++;
    }
    return diffCount === 1; // 딱 1개만 다를 때 true
}