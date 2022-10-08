let options = ["ROCK","PAPER","SCISSORS"];

function getComputerChoice(options) {
	return options[Math.floor(Math.random()*3)];
}


function game(){
    let user_wins = 0;
    let computer_wins = 0;
    for(i=0; i<5 && Math.abs(user_wins - computer_wins) < 3;i++){
    
        user_choice = prompt("Write your choice").toUpperCase();
        
        while(user_choice != "SCISSORS" && user_choice != "PAPER" && user_choice != "ROCK"){
            window.alert("Write a valid option(Options: Rock, Paper,Scissors)");
            user_choice = prompt("Write your choice").toUpperCase();
        }
        
        computer_choice = getComputerChoice(options);
        
        window.alert("Your choice is " + user_choice + 
        "\nComputer choice is " + computer_choice + "\n"); 
    
        //Computer wins
        if (user_choice =="ROCK" && computer_choice=="PAPER"){
            window.alert("Computer wrapped user's rock with his fancy paper");
            computer_wins+=1;
        }
        else if(user_choice=="SCISSORS" && computer_choice=="ROCK"){
            window.alert("Computer smashed your scissors with his ROCK");
            computer_wins+=1;
        }
        else if(user_choice=="PAPER" && computer_choice=="SCISSORS"){
            window.alert("The computer cut your paper into a thousand little pieces");
            computer_wins+=1;
        }
    
        //User wins
        else if(user_choice=="ROCK" && computer_choice=="SCISSORS"){
            user_wins++;
            window.alert("Wow. Those scissors have seen better days. User wins");
        }
    
        else if(user_choice=="SCISSORS" && computer_choice=="PAPER"){
            user_wins++;
            window.alert("Oh...That scissors look really sharp. User wins");
        }
    
        else if(user_choice=="PAPER" && computer_choice=="ROCK"){
            user_wins++;
            window.alert("That paper wrapper suits the rock really well. User wins");
        }
    
        //Draws
        else if(user_choice=="ROCK" && computer_choice=="ROCK"){
            window.alert("Boom! Rock against Rock, nobody wins");
        }
    
        else if(user_choice=="PAPER" && computer_choice=="PAPER"){
            window.alert("Look! It looks like those papers are hugging. What a beatiful draw");
        }
    
        else if(user_choice=="SCISSORS" && computer_choice=="SCISSORS"){
            window.alert("Metal doesn't cut metal. Well, maybe it does, but not this time. TIE!");
        }
    
        window.alert("\nComputer Points:" + computer_wins + 
        "\nUser Points: " + user_wins + "\n");   
    }
    
    if(computer_wins>user_wins){
        window.alert("Beep, beep, Computer sent you to sleep");
    }
    else if(computer_wins<user_wins){
        window.alert("It seems like...YOU ARE THE WINNER!\nCongratulations on beating the dumbest Computer ever");
    }
    else{
        window.alert("Nobody wins today...or everybody does?. I don't know, we have a draw");
    }
}
game();

window.alert("Final results: \nComputer Points:" + computer_wins + 
"\nUser Points: " + user_wins);







