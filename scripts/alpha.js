// function play(){
//     // step-1: hide the screen. to hide the screen add the class hidden to the home screen section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);

//     // show the playground
//     const playgroundSection = document.getElementById('play-ground')
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList);
// }

//callBack function>>
function handleKeyboardKyUpEvent(event){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    // stop the game if pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // key player is expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    console.log(playerPressed, currentAlphabet);
    
//     // check right or wrong key pressed
    if(playerPressed === expectedAlphabet){
        console.log('you get a point!');

        const currentScore = getTextElementValueById('current-score');
        console.log(currentScore);
        const updatedScore = currentScore + 1;
        setTexElementValueById('current-score', updatedScore);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();

// ...................................
//         // update score:
//         //1. get the current score
//         const currentScoreElement = document.getElementById              ('current-score');
//         const currentScoreText = currentScoreElement.innerText;
//         const currentScore = parseInt(currentScoreText);
//         console.log(currentScore);
//         //2. increase the score by 1
        // const newScore = currentScore + 1;
//         //3. show the updated score
//         currentScoreElement.innerText = newScore;
//         // start a new round
        
    }
    else {
        console.log('you missed. you lost a life');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTexElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();
        }
        // ................................
        // step:1- get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // step:2- reduce the life count
        // const newLife = currentLife - 1;
        // // step:3- display the updated life count
        // currentLife.innerText = newLife;
    }
}

// capture keyboard key press>>
document.addEventListener('keyup', handleKeyboardKyUpEvent);


function continueGame(){
    // step: 1- generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet', alphabet);

    // set or randomly generated alphabet to the screen(show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background Color
    setBackgroundColorById(alphabet);

}

function play(){
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');

    // reset score and life
    setTexElementValueById('current-life', 5);
    setTexElementValueById('current-score', 0);

    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    // 1. get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTexElementValueById('last-score', lastScore);

    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet')
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}

