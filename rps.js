let computerScore = 0;
let humanScore = 0;

function getComputerChoice()
{
    let outcome = Math.floor(Math.random() * 3);
    console.log(outcome);
    if (outcome === 0)
        return "rock";
    else if (outcome === 1)
        return "paper";
    else 
        return "scissors";
}

function getHumanChoice()
{
    let choice = prompt("Rock, Paper, or Scissors?");
    return choice;
}

function playRound(humanChoice, computerChoice)
{
    humanChoiceActual = humanChoice.toLowerCase();
    if (computerChoice === "rock")
    {
        if (humanChoiceActual === "paper")
        {
            humanScore++;
            console.log("You win, Paper beats Rock!")
        }
        else if (humanChoiceActual === "scissors")
        {
            computerScore++;
            console.log("You lose, Rock beats Scissors!")
        }
        else
        {
            console.log("It's a tie, nobody wins!")
        }
    }

    else if (computerChoice === "paper")
    {
        if (humanChoiceActual === "scissors")
        {
            humanScore++;
            console.log("You win, Scissors beats Paper!")
        }
        else if (humanChoiceActual === "rock")
        {
            computerScore++;
            console.log("You lose, Paper beats Rock!")
        }
        else
        {
            console.log("It's a tie, nobody wins!")
        }
    }

    else if (computerChoice === "scissors")
    {
        if (humanChoiceActual === "rock")
        {
            humanScore++;
            console.log("You win, Rock beats Scissors!")
        }
        else if (humanChoiceActual === "paper")
        {
            computerScore++;
            console.log("You lose, Scissors beats Paper!")
        }
        else
        {
            console.log("It's a tie, nobody wins!")
        }
    }

    console.log(`Your score: ${humanScore}`)
    console.log(`Computer score: ${computerScore}`)
}

function playgame()
{
    humanScore = 0;
    computerScore = 0;

    for (i = 0; i < 5; i++)
    {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection)
    }

    if (humanScore > computerScore)
        console.log("You win, congratulations!")
    else if (computerScore > humanScore)
        console.log("You lose, better luck next time!")
    else
        console.log("Its a draw!")
}

playgame()
