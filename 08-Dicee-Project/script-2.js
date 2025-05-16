function randomGenerator (min, max){

    return  Math.floor(Math.random() * (max - min + 1)) + min;
}


let firstDice = new Image();
firstDice.src = './images/dice1.png';

let secondDice = new Image();
secondDice.src = './images/dice2.png';

let thirdDice = new Image();
thirdDice.src = './images/dice3.png'

let fourthDice = new Image();
fourthDice.src = './images/dice4.png'

let fifthDice = new Image();
fifthDice.src = './images/dice5.png'

let sixthDice = new Image();
sixthDice.src = './images/dice6.png'


let dicesImagesArray = [];

dicesImagesArray.push(firstDice);
dicesImagesArray.push(secondDice);
dicesImagesArray.push(thirdDice);
dicesImagesArray.push(fourthDice);
dicesImagesArray.push(fifthDice);
dicesImagesArray.push(sixthDice);


var randomDiceImagesArray = dicesImagesArray[Math.floor(Math.random)* dicesImagesArray.length];










window.addEventListener("load", (event) => {
    
    var element = document.querySelector("h1");

    let randomIntFirstPlayer = randomGenerator(1, 6);

    let randomIntSecondPlayer = randomGenerator(1, 6);

    var attributSelector =  document.querySelector("#d1");
    var element = document.getElementById("#d1");
    
   
    // attributSelector.setAttribute(dicesImagesArray[1]);

   
  

    // if (randomIntFirstPlayer == 1){
    
    // attributSelector.setAttribute("src","./images/dice1.png");
    // }

    // else if (randomIntFirstPlayer == 2){
    
    // attributSelector.setAttribute("src","./images/dice2.png");
    // }
    // else if (randomIntFirstPlayer == 3){
        
    //     attributSelector.setAttribute("src","./images/dice3.png");
    //     }
    //     else if (randomIntFirstPlayer == 4){
            
    //         attributSelector.setAttribute("src","./images/dice4.png");
    //         }
    //         else if (randomIntFirstPlayer == 5){
                
    //             attributSelector.setAttribute("src","./images/dice5.png");
    //             }
    //             else if (randomIntFirstPlayer == 6){
                    
    //                 attributSelector.setAttribute("src","./images/dice6.png");
    //                 }



    // if(randomIntFirstPlayer  > randomIntSecondPlayer ) {
    // element.textContent = "Player one win";
    // }
    // else if (randomIntFistPlayer < randomIntSecondPlayer){
    //     element.textContent = "Player two win";
    // }
    // else {
    //     element.textContent = "Drawn";
    // }
    

});







