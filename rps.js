let computerScore = 0;
let humanScore = 0;
let counter = 0;

// Selectors
const container = document.querySelector("#container");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissors");

// Paragraph element creation
const declaration = document.createElement("p");
const scores = document.createElement("p")

// Button 'click' listeners, if clicked, call playRound with their respective throw
rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
});

paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
});

scissorButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())
});

function getComputerChoice()
{
    // Random value from 0-2
    let outcome = Math.floor(Math.random() * 3);
    
    if (outcome === 0)
        return "rock";
    else if (outcome === 1)
        return "paper";
    // If its not 0 or 1 then it has to be 2 since that's the max it can generate to
    else 
        return "scissors";
}

function playRound(humanChoice, computerChoice)
{   
    if (computerChoice === "rock")
    {
        if (humanChoice === "paper")
        {
            humanScore++;
            declaration.textContent = "You win, Paper beats Rock!";
        }
        else if (humanChoice === "scissors")
        {
            computerScore++;
            declaration.textContent = "You lose, Rock beats Scissors!";
        }
        else
            declaration.textContent = "It's a tie, nobody wins!";
    }

    else if (computerChoice === "paper")
    {
        if (humanChoice === "scissors")
        {
            humanScore++;
            declaration.textContent = "You win, Scissors beats Paper!";
        }
        else if (humanChoice === "rock")
        {
            computerScore++;
            declaration.textContent = "You lose, Paper beats Rock!";
        }
        else
            declaration.textContent = "It's a tie, nobody wins!";
    }

    else if (computerChoice === "scissors")
    {
        if (humanChoice === "rock")
        {
            humanScore++;
            declaration.textContent = "You win, Rock beats Scissors!"
        }
        else if (humanChoice === "paper")
        {
            computerScore++;
            declaration.textContent = "You lose, Scissors beats Paper!"
        }
        else
            declaration.textContent = "It's a tie, nobody wins!"
    }

    // increment counter after calculation but before endgame check so declaration displays accurately
    counter++;
    
    // Update and Append scores and declaration
    scores.textContent = `Your score: ${humanScore} | Computer score: ${computerScore}`;  
    container.appendChild(declaration);
    container.appendChild(scores);

    // Check for the winner
    if (counter === 5)
    {
        if (humanScore > computerScore)
            declaration.textContent = "You win, congratulations!";
        else if (computerScore > humanScore)
            declaration.textContent = "You lose, better luck next time!";
        else
            declaration.textContent = "Its a draw!";

        // Update scores before resetting score values so the next round resets the score via appendage
        // Declaration appears after score, so they swap places when the game is over. Unintentional, but looks nice
        container.appendChild(scores);
        container.appendChild(declaration);

        // Reset
        humanScore = 0;
        computerScore = 0;
        counter = 0;
    }
}
