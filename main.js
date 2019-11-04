function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function computerPlay() {
    let a = getRndInteger(1,3);
    return a;         
}

function userPlay() {
    let result = window.prompt("Enter your move").toLowerCase();
    if(result == "rock" )
        return 1;
    else if(result == "paper" )
        return 2;
    else if(result == "scissors" )
        return 3;
    else return 1 ;
}

function gamePlay(c,u) {

    if(c==u) return "Draw!";

    let g = c + u;
    if(g == 4) return "Rock destroys Scissors!" ;
    else if(g == 5) return "Scissors cut Paper!" ;
    else if(g == 3) return " Paper covers Rock!" ;

}

console.log(gamePlay(computerPlay(),userPlay())) ;