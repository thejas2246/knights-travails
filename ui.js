import { Knight } from "./knight-class.js";
import { knightMoves } from "./knight-travails.js";

const boardContainer = document.querySelector(".board-container");

let knight = new Knight();

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
            addEventLisnerToBlock(block);
            boardContainer.appendChild(block);
        }
    }
}

function addEventLisnerToBlock(block){
    block.addEventListener("click",()=>{
        let val = block.getAttribute(["data-index"])
        let index = val.split('');

        showPathOnBoard([0,0],[Number(index[0]),Number(index[1])])
    })
}

let delay = 1000;
function showPathOnBoard(start,end){
    let path = knightMoves(start,end)

    path.forEach((p,index)=>{
        let currentBlock = document.querySelector(`[data-index = '${p[0]}${p[1]}']`)
        setTimeout(()=>{
             const image = document.createElement("img");
            currentBlock.appendChild(image)
            image.src = "./image/knight.png"
            console.log(image)
        },delay*(index+1))
        console.log(currentBlock)
        
    })
}

createBoard();