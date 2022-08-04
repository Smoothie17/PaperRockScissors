const choices = ['rock', 'paper', 'scissors']

function game () {
  playRound();

}



function playRound() {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();


}
function playerChoice() {
  let input = prompt('Type Rock, Paper, or Scissors');
  while (input == null) {
    input = prompt ('Type Rock, Paper, or Scissors')
  }
  input = input.toLowerCase();
  let check = validateInput(input)
  while  (check == false){
    prompt( 'Type Rock, Paper, or Scissors, spelling needs to be exact');
    while (input == null) {
      input = prompt ('Type Rock, Paper, or Scissors');
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  //console.log(input);
  

}

function computerChoice() {
  return choices[Math.floor(Math.random()*choices*3)]

}
function validateInput(choice) {
 return choices.includes(choice);
   
  }


game();