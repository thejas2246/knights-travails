function equalsArray(a,b){
    if(a===b) return true;
    if(a==null||b==null) return false;
    if(a.length!==b.length) return false;

    for(let i =0;i<a.length;i++){
        if(a[i]!==b[i]) return false
    }
    return true
}

function knightMoves(originalPosition,targetPosition){
    if(equalsArray(originalPosition,targetPosition)){
        throw new Error("same original and target position")
    }

    let columns = 8;
    let rows = 8;
if(originalPosition[0]<0||originalPosition[0]>=rows||originalPosition[1]<0||originalPosition[1]>=columns){
    throw new Error("out of range");
}
if(targetPosition[0]<0||targetPosition[0]>=rows||targetPosition[1]<0||targetPosition[1]>=columns){
    throw new Error("out of range");
}
    
    let visited = Array.from({length:rows},()=>new Array(columns).fill(false));
    let queue = [];
    let moves = [[2,-1],[2,1],[1,-2],[-1,-2],[1,2],[-1,2],[-2,1],[-2,-1]];
    let parent = Array.from({length:rows},()=>new Array(columns).fill(null));
    queue.push(originalPosition);
    visited[originalPosition[0]][originalPosition[1]] = true;
    let didFound = false;
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
   return pathQueue;
}

let move = knightMoves([0,0],[0,7]);
console.log(move)

