const divResult = document.querySelector("#resultat");

let gameBoard = [
    [0,0,0,0],
    [0,1,0,0],
    [0,0,2,0],
    [0,0,0,0]
];

let gameAnswers = [
    [1,3,4,5],
    [6,1,4,5],
    [7,3,2,2],
    [6,7,8,8]
];

alreadySelected = [];
selectedBtnNum = 0;
readyToCheck = true;

printGameBoard()

function printGameBoard() {
    let txt = "";

    for(let i=0; i < gameBoard.length; i++){
        txt += "<div>";
        for(let j=0; j < gameBoard[i].length; j++){
            if(gameBoard[i][j] === 0) {
                txt += "<button class='btn btn-primary m-2' style='width:100px; height:100px' onClick=checkNumber(\""+i+"-"+j+"\") >Afficher</button>";
            } else {
                txt += "<img src='/static/images/"+getImage(gameBoard[i][j])+"' alt='elephant' style='width:100px; height:100px'>"
            }
            
        }
        txt +="</div>";
    }

    divResult.innerHTML = txt;
}

function getImage(image_number) {
    image_path = "";
    switch(image_number){
        case 1: image_path += "elephant.png";
        break;
        case 2: image_path += "giraffe.png";
        break;
        case 3: image_path += "hippo.png";
        break;
        case 4: image_path += "monkey.png";
        break;
        case 5: image_path += "panda.png";
        break;
        case 6: image_path += "parrot.png";
        break;
        case 7: image_path += "penguin.png";
        break;
        case 8: image_path += "pig.png";
        break;
        // case 9: image_path += "rabbit.png";
        // break;
        // case 10: image_path += "snake.png";
        // break;
        // case 11: image_path += "bear.png";
        // break;
        // case 12: image_path += "chicken.png";
        // break;
        // case 13: image_path += "crocodile.png";
        // break;
        // case 14: image_path += "duck.png";
        // break;
        // case 15: image_path += "frog.png";
        // break;
        // case 16: image_path += "goat.png";
        // break;
        default: console.log("not valid");
    }
    return image_path;
};

function checkNumber(btn) {

    if (readyToCheck) {
         console.log("clicked");
    // Each time we clicked, we increment this variable:
    selectedBtnNum++
    let row = btn.substr(0,1);
    let col = btn.substr(2,1);
    gameBoard[row][col] = gameAnswers[row][col];

    printGameBoard() 

        // If two images are printed we can check them
        if (selectedBtnNum > 1) {
            ready = false;
            setTimeout(() => {
                if(gameBoard[row][col] !== gameAnswers[alreadySelected[0]][alreadySelected[1]]){
                    gameBoard[row][col] = 0;
                    gameBoard[alreadySelected[0]][alreadySelected[1]] = 0; 
                }
            printGameBoard()
            ready = true;
            // Initialize at zero to begin from 0 at each click and check only pairs.
            selectedBtnNum = 0
            alreadySelected = [row,col];
            }, 500)
        } else {
            alreadySelected = [row,col];
        }
   }
};


