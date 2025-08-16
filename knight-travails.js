function knightMoves(originalPosition,targetPosition){

    let columns = 8;
    let rows = 8;
    let visited = Array.from({length:rows},()=>new Array(columns).fill(false));
    let queue = [];
    let moves = [[2,-1],[2,1],[1,-2],[-1,-2],[1,2],[-1,2],[-2,1],[-2,-1]];
    let parent = Array.from({length:rows},()=>new Array(columns).fill(null));
    queue.push(originalPosition);
    visited[originalPosition[0]][originalPosition[1]] = true;
    didFound = false;
    while(queue.length!==0){
    
        let currentNode = queue.shift();
        let [r,c] = currentNode;
        if(didFound){
            break;
        }
        for(let move of moves){
            let nr = r + move[0];
            let nc = c + move[1];
            if(nr>=0&&nr<rows && nc>=0 && nc<columns && !visited[nr][nc]){
                parent[nr][nc] = [r,c];
                if(nr===targetPosition[0]&&nc===targetPosition[1]){
                    didFound = true;
                    break;
                }
                queue.push([nr,nc])
                visited[nr][nc] = true;
            }
        }
    }
    let pathQueue = [];
   let [parentRow,parentColumn] = targetPosition;

   while(true){
    pathQueue.push([parentRow,parentColumn]);
    [parentRow,parentColumn] = parent[parentRow][parentColumn]
    if(parentRow===originalPosition[0]&&parentColumn===originalPosition[1]){
        break;
    }
   }
   pathQueue.push([originalPosition[0],originalPosition[1]])
   
   pathQueue = pathQueue.reverse()
   console.log(pathQueue)
}

knightMoves([0,0],[0,6]);

