document.addEventListener("keydown", function(event){
    console.log(event)
});





for (i = 0; i < 8; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        /*change the color of the letters into white, 
        * i have create a class in style.css
        * than call it using js in this line of code
        * */
        //  this.classList.add("color");

        let pressedButton = this.innerHTML;        
        switch(pressedButton){
            case 'w':
                var audio = new Audio('./sounds/crash.mp3'); 
                audio.play();
            break;
            case 'a':
                var audio2 = new Audio('./sounds/kick-bass.mp3');
                audio2.play();
            break;
            case 's':
                var audio3 = new Audio('./sounds/snare.mp3');
                audio3.play();
            break;
            case  'd':
                var audio4 = new Audio('./sounds/tom-1.mp3');
                audio4.play();
            break;
            case 'j':
                var audio5 = new Audio('./sounds/tom-2.mp3');
                audio5.play();
            break;
            case 'k':            
                var audio6 = new Audio('./sounds/tom-3.mp3');
                audio6.play();
            break;
            case 'l':
                var audio7 = new Audio('./sounds/tom-4.mp3');
                audio7.play();   
            break;      
            default:
                console.log("press the instruments ! ") ;   
        }

});

}


    //My peace of art
    // let innerHtml = this.innerHTML;
    // let letterArray = ['w', 'a', 's', 'd','j', 'k', 'l'];
    // let voiceArray = [];

    // var audio = new Audio('./sounds/crash.mp3'); 
    // var audio2 = new Audio('./sounds/kick-bass.mp3');
    // var audio3 = new Audio('./sounds/snare.mp3');
    // var audio4 = new Audio('./sounds/tom-1.mp3');
    // var audio5 = new Audio('./sounds/tom-2.mp3');
    // var audio6 = new Audio('./sounds/tom-3.mp3');
    // var audio7 = new Audio('./sounds/tom-4.mp3');

    // voiceArray.push(audio);
    // voiceArray.push(audio2);
    // voiceArray.push(audio3);
    // voiceArray.push(audio4);
    // voiceArray.push(audio5);
    // voiceArray.push(audio6);
    // voiceArray.push(audio7);
    // let arrayLength = voiceArray.length;
    // for(i = 0;i < arrayLength ; i++){
    //     if (innerHtml == letterArray[i]){
    //         voiceArray[i].play();         
    //     }
    // }
        

    // if (innerHtml == "w"){
    // var audio = new Audio('./sounds/crash.mp3'); // creating a new audio object
    // audio.play();

    // }
    // else if (innerHtml == "a"){
    // var audio = new Audio('./sounds/kick-bass.mp3'); // creating a new audio object
    // audio.play();
    // }
    // else if (innerHtml == "s"){
    //     var audio = new Audio('./sounds/snare.mp3'); // creating a new audio object
    //     audio.play();
    //     }
    // else if (innerHtml == "d"){
    //     var audio = new Audio('./sounds/tom-1.mp3'); // creating a new audio object
    //     audio.play();
    //     }
    // else if (innerHtml == "j"){
    //     var audio = new Audio('./sounds/tom-2.mp3'); // creating a new audio object
    //     audio.play();
    //     }
    // else if (innerHtml == "k"){
    //     var audio = new Audio('./sounds/tom-3.mp3'); // creating a new audio object
    //     audio.play();
    //     }
    // else if (innerHtml == "l"){
    //     var audio = new Audio('./sounds/tom-4.mp3'); // creating a new audio object
    //     audio.play();
    //     }

    


  
    

