let btn = document.querySelectorAll(".btn");
let resetbtn = document.querySelector(".reset")
let newGameBtn = document.querySelector("#msg-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

const resetGame = () =>{
    turnO= true;
    count = 0;
    enablebtn();
    msgContainer.classList.add("hide");
};
let turnO = true;
let count = 0 ;
const winPattern = [
    [0 , 1, 2],
    [3, 4, 5],
    [6 , 7 , 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

btn.forEach((btn) => {
    btn.addEventListener("click" , () => {
        console.log("i am clicked");
        if(turnO) {
        btn.innerHTML= "O";
        turnO = false;
        }
    else{
        btn.innerHTML= "X";
        turnO = true;
    }
    btn.disabled = true;
    count++;

    let isWinner = checkWinner();
    if(count===9 && !isWinner){
        gameDraw();
    };
    }
)});
const gameDraw = () => {
    msg.innerText = `Game is Draw`;
    msgContainer.classList.remove("hide");

}
const disablebtn = () => {
    for (let box of btn) {
      box.disabled = true;
    }
  };
  
  const enablebtn = () => {
    for (let box of btn) {
      box.disabled = false;
      box.innerText = "";
    }
  };
  
  const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disablebtn();
  };
  
  const checkWinner = () => {
    for (let pattern of winPattern) {
      let pos1Val = btn[pattern[0]].innerText;
      let pos2Val = btn[pattern[1]].innerText;
      let pos3Val = btn[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          showWinner(pos1Val);
          return true;
        }
      }
    }
  };
  
  newGameBtn.addEventListener("click", resetGame);
  resetbtn.addEventListener("click", resetGame);

