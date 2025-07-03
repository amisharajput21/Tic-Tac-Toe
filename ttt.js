let boxes=document.querySelectorAll(".box");
let newButton=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let resetbtn=document.querySelector("#resetbtn");
let drawMsg=document.querySelector("#drawmsg");
let drawContainer=document.querySelector(".draw-container");
let restartbtn=document.querySelector("#restartbtn");
// let restartbtn=document.querySelector("restartbtn")
let turnO=true;
let winnerlist=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const resetGame = ()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    drawContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO===true){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    });
});
const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
const showWinner = (winner) => {
    msg.innerText=`congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const showDraw=()=>{
    drawMsg.innerText=`Game is Draw`;
    drawContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    for(let pattern of winnerlist){
        let pos1Val=boxes[pattern[0]].innerText; 
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
                return true;
            }
        }
    }
    //check for draw
    let allFilled=[...boxes].every(box=>box.innerText!=="");
    if(allFilled){
        showDraw();
    }
};

newButton.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
restartbtn.addEventListener("click",resetGame);
