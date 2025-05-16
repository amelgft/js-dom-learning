//generate a random number between min and max
function randomGenerator (min, max){

    return  Math.floor(Math.random() * (max - min + 1)) + min;
}



window.addEventListener("load", (event) => {

    let randomIntFirstPlayer = randomGenerator(1, 6);
    let randomIntSecondPlayer = randomGenerator(1, 6);


    var attributSelector =  document.querySelector("#d1");
    var secondAttributSelector = document.querySelector("#d2");

  

    if (randomIntFirstPlayer == 1){
    
    attributSelector.setAttribute("src","./images/dice1.png");
    }

    else if (randomIntFirstPlayer == 2){
    
    attributSelector.setAttribute("src","./images/dice2.png");
    }
    else if (randomIntFirstPlayer == 3){
        
        attributSelector.setAttribute("src","./images/dice3.png");
        }
        else if (randomIntFirstPlayer == 4){
            
            attributSelector.setAttribute("src","./images/dice4.png");
            }
            else if (randomIntFirstPlayer == 5){
                
                attributSelector.setAttribute("src","./images/dice5.png");
                }
                else if (randomIntFirstPlayer == 6){
                    
                    attributSelector.setAttribute("src","./images/dice6.png");
                    }
                //    Setting the dice image for the second player

                    if (randomIntSecondPlayer == 1) {
                        secondAttributSelector.setAttribute("src", "./images/dice1.png");
                            } else if (randomIntSecondPlayer == 2) {
                                secondAttributSelector.setAttribute("src", "./images/dice2.png");
                                } else if (randomIntSecondPlayer == 3) {
                                    secondAttributSelector.setAttribute("src", "./images/dice3.png");
                                    } else if (randomIntSecondPlayer == 4) {
                                        secondAttributSelector.setAttribute("src", "./images/dice4.png");
                                        } else if (randomIntSecondPlayer == 5) {
                                            secondAttributSelector.setAttribute("src", "./images/dice5.png");
                                            } else if (randomIntSecondPlayer == 6) {
                                                secondAttributSelector.setAttribute("src", "./images/dice6.png");
                                                }
    var element = document.querySelector("h1");
    if(randomIntFirstPlayer  > randomIntSecondPlayer ) {
    element.textContent = "Player one win";
    }
    else if (randomIntFirstPlayer < randomIntSecondPlayer){
        element.textContent = "Player two win";
    }
    else {
        element.textContent = "Drawn";
    }


});