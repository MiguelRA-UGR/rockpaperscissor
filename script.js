let options = ["ROCK","PAPER","SCISSORS"];

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissors");
const resultText = document.getElementById("result-text");
const userImg = document.getElementById("user-img");
const computerImg = document.getElementById("computer-img");
const startBtn = document.getElementById("start_game");

const usertext = document.getElementById("user-text");
const computertext = document.getElementById("computer-text");

let user_wins = 0;
let computer_wins = 0;


rockBtn.addEventListener("click", ()=>{
    playRound("ROCK");
});

paperBtn.addEventListener("click", ()=>{
    playRound("PAPER");
});

scissorBtn.addEventListener("click", ()=>{
    playRound("SCISSORS");
});

startBtn.addEventListener("click", ()=>{
    start_game();
});

function start_game(){

    user_wins=0;
    computer_wins=0;

    rockBtn.style.visibility='visible';
    paperBtn.style.visibility='visible';
    scissorBtn.style.visibility='visible';
    startBtn.style.visibility='hidden';

    usertext.innerHTML = "Welcome!";
    usertext.innerHTML = "User: " + user_wins;
    computertext.innerHTML = "Computer: " + computer_wins;
}

function getComputerChoice(options) {
	return options[Math.floor(Math.random()*3)];
}

function roundResult(computer_choice,user_choice){
    
    let computer_win =false;
    let user_win =false;

    if (user_choice == computer_choice){
        resultText.innerHTML = "Tie";
    }
    else if(user_choice=="ROCK"){

        if(computer_choice=="PAPER"){
            computer_win=true;  
        }
        if(computer_choice=="SCISSORS"){
            user_win=true;
        }
    }

    else if(user_choice=="PAPER"){
        if(computer_choice=="SCISSORS"){
            computer_win=true;

        }
            
        if(computer_choice=="ROCK"){
            user_win=true;
        }
    }

    else if(user_choice=="SCISSORS"){
        if(computer_choice=="ROCK"){
            computer_win=true;
        }
        if(computer_choice=="PAPER"){
            user_win=true;
        }
    }
   
    if(computer_win){
        computer_wins+=1;
        resultText.innerHTML = "You loose";
        computertext.innerHTML = "Computer: " + computer_wins; 
    }

    else if(user_win){
        user_wins+=1;
        resultText.innerHTML = "You win";
        usertext.innerHTML = "User: " + user_wins;
    }
   
}

function playRound(user_choice){
    
    computer_choice = getComputerChoice(options);
     
    switch(user_choice){
        case "ROCK":
            userImg.src = "images/rock.png";
        break;

        case "PAPER":
            userImg.src = "images/paper.png";
        break;

        case "SCISSORS":
            userImg.src = "images/scissor.png";
        break;
    }

    switch(computer_choice){
        case "ROCK":
            computerImg.src = "images/rock.png";
        break;

        case "PAPER":
            computerImg.src = "images/paper.png";
        break;

        case "SCISSORS":
            computerImg.src = "images/scissor.png";
        break;
    }

    
    computerImg

    if(user_wins < 3 && computer_wins < 3){
        roundResult(computer_choice,user_choice);
    }
    
    else{

        if(user_wins==3)
            resultText.innerHTML = "Winner:User";
        else
            resultText.innerHTML = "Winner:Computer";

        startBtn.style.visibility='visible';

        rockBtn.style.visibility='hidden';
        paperBtn.style.visibility='hidden';
        scissorBtn.style.visibility='hidden';
        
    }
    
}









