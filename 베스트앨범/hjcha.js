// 맵 만들어서 일단 정리 : 고유번호에 따라 장르와 플레이를 넣어줌
// 장르별 토탈 내림차순 정렬
// 장르에서 노래별 내림차순 정렬하고
// 두개씩 잘라내어 인덱스에 넣기
function solution(genres, plays) {
    const genreMap = new Map();
    
    genres.forEach((genre, i) => {
        const play = plays[i];
        const data = genreMap.get(genre) || {total:0, songs: []};
        data.total += play;
        data.songs.push({id:i, play});
        genreMap.set(genre, data)
    })
    // 여기까지 했으면 장르맵이 플레이 순서와 무관하게 만들어졌음
    
    const sortedGenres = [...genreMap.values()].sort((a,b) => {
        return b.total - a.total
    })
    // 배열로 만들고 장르별로 토탈 순으로 정렬
    
    const answer = [];
    
    // 이제 장르에 대해서 순회하면서 내림차순으로 가장 많이 재생된 곡 2개 넣기
    sortedGenres.forEach((genreData) => {
        genreData.songs.sort((a,b) => {
            if(a.play !== b.play) {
                return b.play - a.play
            }
            return a.id - b.id
        })
        // 장르데이터의 곡배열이 정렬됐음
        
        answer.push(...genreData.songs.slice(0,2).map((song) => song.id))
    })
    
    return answer;
}
