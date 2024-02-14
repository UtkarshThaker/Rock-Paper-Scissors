let userScore=0;
let compScore=0;

const msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");
const userScorepara=document.querySelector("#userScore");
const compScorepara=document.querySelector("#compScore")

const draw=()=>{
    console.log("Game was Draw");
    msg.innerText=`Game Was Draw`;
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("You Won");
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`Congratulations ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor="green";
    } else{
        console.log("Comp Won");
        compScore++
        compScorepara.innerText=compScore
        msg.innerText=`Betterluck Next Time ${compChoice} Beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const genCompChoice=()=>{
    const options=["Rock","Paper","Scissors"];
    const rndIdx= Math.floor(Math.random()*3);
    return options[rndIdx];

}

const playGame=(userChoice)=>{
    console.log("User choice =",userChoice);
     //Generate Comp Choice
     const compChoice=genCompChoice();
     console.log("Comp choice =",compChoice);

     if(userChoice===compChoice){
        draw();
     }else{
        let useWin=true;
        if(userChoice==="Rock"){
          userWin= compChoice=="Paper"? false : true ;    
          }else if(userChoice==="Paper"){
            userWin=compChoice=="Scissors"? false: true;
          } else{
            userWin=compChoice=="Rock"? false:true;
          }
          showWinner(userWin, userChoice,compChoice);
     }

}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
      
        playGame(userChoice);

    })
})