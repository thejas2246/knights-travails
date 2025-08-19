const boardContainer = document.querySelector(".board-container");


function createBoard(){
    
    for(let i=0;i<8;i++){
        for(let j=0;j<8;j++){
            const block = document.createElement("div");
            boardContainer.appendChild(block);
        }
    }
}


createBoard();