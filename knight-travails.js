function knightMoves(originalPosition,targetPosition){

    let columns = 8;
    let rows = 8;
    let visited = Array.from({length:rows},()=>new Array(columns).fill(false));
    let queue = [];
    let moves = [[2,-1],[2,1],[1,-2],[-1,-2],[1,2],[-1,2],[-2,1],[-2,-1]];
    let parent = Array.from({length:rows},()=>new Array(columns).fill(null));
    queue.push(originalPosition);
    visited[originalPosition[0]][originalPosition[1]] = true;
    console.log(visited)
    while(queue.length!==0){
    
        let currentNode = queue.shift();
        console.log(currentNode);
        let [r,c] = currentNode;
        for(let move of moves){
            let nr = r + move[0];
            let nc = c + move[1];
        }
        
    }
}

knightMoves([0,0],[1,2]);

