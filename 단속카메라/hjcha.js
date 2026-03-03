function solution(routes) {
    // 진출 지점(routes[i][1]) 기준 오름차순 정렬
    routes.sort((a, b) => a[1] - b[1]);
    
    let camera = -30001; // 카메라 위치 초기값 (범위 밖)
    let answer = 0;
    
    for (const [enter, exit] of routes) {
        // 현재 카메라가 이 차량의 진입 지점보다 앞에 있으면 → 못 만남
        if (camera < enter) {
            camera = exit;  // 이 차량의 진출 지점에 카메라 설치
            answer++;
        }
    }
    
    return answer;
}