const boardContainer = document.querySelector(".board-container");


function createBoard(){
    
    for(let i=0;i<8;i++){
        for(let j=0;j<8;j++){
            const block = document.createElement("div");
            if((i+j)%2===0){
                block.setAttribute("class","white");
            }
            else{
                block.setAttribute("class","black")
            }
            block.setAttribute('data-index',`${i}${j}`)
            boardContainer.appendChild(block);
        }
    }
}


createBoard();