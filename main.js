
let score = 0;


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function computerPlay() {
    let a = getRndInteger(1,3);
    return a;         
}


function gamePlay(c,u) {

    if(c==u) return "Draw!";

    let g = c.toString() + u.toString();
    if(g == "13") 
    {   
        score--;
        return "Rock destroys Scissors! You Lose!" ;
    }
    else if(g == "31") 
    {
        score++;
        return "Rock destroys Scissors! You Win!" ;
    }
    else if(g == "23") 
    {
        score++;
        return "Scissors cut Paper! You Win!" ;
    }
    else if(g == "32") 
    {
        score--;
        return "Scissors cut Paper! You Lose!" ;
    }

    else if(g == "12") 
    {
        score++;
        return " Paper covers Rock! You Win!" ;
    }
    else if(g == "21")
    {
        score--;
        return " Paper covers Rock! You Lose!" ;
    }

}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }
  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
    let result;

    if(e.keyCode == 82)
        result = 1;
    else if(e.keyCode == 80 )
        result = 2;
    else if(e.keyCode == 83 )
        result = 3;

    document.getElementById("resultBox").innerHTML = gamePlay(computerPlay(),result) ;
    document.getElementById("scoreTxt").innerHTML = "Score : " + score ;
    
  }
  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);


