let imgs = document.querySelectorAll(".user-imgs");
let button = document.querySelector('button');

let playerScore = 0;
let compScore = 0;
let pScore = document.getElementById("player-score");
let cScore = document.getElementById("computer-score");
let parentElement = document.getElementById('result');

// If play Again button is clicked, highlighted is removed
button.addEventListener("click", function () {
    for (let b = 0; b < imgs.length; b++) {
        imgs[b].style.border = "2px solid rgba(128, 128, 128, 0.616)";
    }
    playerScore = 0;
    compScore = 0;
    console.log(playerScore);
    console.log(compScore);
    parentElement.textContent = "RESULTS: ";
    pScore.textContent = "Player: " + playerScore;
    cScore.textContent = "Computer: " + compScore;
})

for (let i = 0; i < imgs.length; i++) {

    imgs[i].addEventListener("click", function () {

        // Reset border
        for (let j = 0; j < imgs.length; j++) {
            imgs[j].style.border = "2px solid rgba(128, 128, 128, 0.616)";
        }

        // Add border
        imgs[i].style.border = "5px solid yellow";

        // Select the containers
        let comptImg = document.getElementById("compt-img");

        let images = ["images/rock.PNG", "images/paper.PNG", "images/scissors.PNG"];

        let shuffle = setInterval(function () {
            parentElement.textContent = "RESULTS: ";
            let randomIndex = Math.floor(Math.random() * 3);
            comptImg.src = images[randomIndex];
        }, 500);

        setTimeout(function () {
            clearInterval(shuffle);
            let randomNumber = Math.floor(Math.random() * 3);
            comptImg.src = images[randomNumber];
            let resultText = "";

            if (randomNumber === i) {
                resultText = "Tie";
            } else if (
                (i === 0 && randomNumber === 2) || (i === 1 && randomNumber === 0) ||
                (i === 2 && randomNumber === 1)
            ) {
                resultText = "You Win!";
                playerScore++;
            } else {
                resultText = "Computer Wins!";
                compScore++;
            }
            parentElement.textContent = "RESULTS: " + resultText;
            pScore.textContent = "Player: " + playerScore;
            cScore.textContent = "Computer: " + compScore;
        }, 3000);


    })
}

