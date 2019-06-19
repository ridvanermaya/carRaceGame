let playerOneScore = document.getElementById("player_one_score");
let playerTwoScore = document.getElementById("player_two_score");

let btnStartGame = document.getElementById("btn_start_game");
let btnRollDice = document.getElementById("btn_roll_dice");

let playerOneName = document.getElementById("player_one_name");
let playerTwoName = document.getElementById("player_two_name");

let playerOneEvents = document.getElementById("player_one_events");
let playerTwoEvents = document.getElementById("player_two_events");

let p1Score = playerOneScore.innerHTML = 0;
let p2Score = playerTwoScore.innerHTML = 0;

let p1FirstLapProgressBar = document.getElementById("p1_first_lap_progress_bar");
let p1SecondLapProgressBar = document.getElementById("p1_second_lap_progress_bar");
let p1ThirdLapProgressBar = document.getElementById("p1_third_lap_progress_bar");
let p2FirstLapProgressBar = document.getElementById("p2_first_lap_progress_bar");
let p2SecondLapProgressBar = document.getElementById("p2_second_lap_progress_bar");
let p2ThirdLapProgressBar = document.getElementById("p2_third_lap_progress_bar");

let playerOneEventImg1 = document.getElementById("player_one_event_img1");
let playerOneEventImg2 = document.getElementById("player_one_event_img2")
let playerTwoEventImg1 = document.getElementById("player_two_event_img1");
let playerTwoEventImg2 = document.getElementById("player_two_event_img2");

function startNewGame() {
    playerOneName.innerHTML = prompt("Enter a name for player one...");
    playerTwoName.innerHTML = prompt("Enter a name for player two...");
    playerOneEvents.innerHTML = "The game is starting...Roll Dice...";
    playerTwoEvents.innerHTML = "The game is starting...Roll Dice...";
    p1Score = 0;
    p2Score = 0;
    playerOneScore.innerHTML = p1Score;
    playerTwoScore.innerHTML = p2Score;
    p1FirstLapProgressBar.style.width = 0 + "%";
    p1SecondLapProgressBar.style.width = 0 + "%";
    p1ThirdLapProgressBar.style.width = 0 + "%";
    p2FirstLapProgressBar.style.width = 0 + "%";
    p2SecondLapProgressBar.style.width = 0 + "%";
    p2ThirdLapProgressBar.style.width = 0 + "%";
    btnRollDice.removeAttribute("disabled");
}

function randomNumber(number) {
    let randomNumber = Math.floor(Math.random() * number) + 1;
    return randomNumber;
}

function attrCreator (n) {
    let sourceOfImg = "/images/dice" + n + ".svg";
    return sourceOfImg;
}

function eventCreator (event) {
    let eventImg = "/images/" + event + ".svg";
    return eventImg;
}

function rollDice() {
    let score;
    if (p1Score < 100) {
        let randomNumber1 = randomNumber(4);
        let randomNumber2 = randomNumber(4);
        if (randomNumber1 === randomNumber2) {
            score = (randomNumber1 + randomNumber2) * 2;
            playerOneEvents.innerHTML = "Wow you got doubles!!! You got " + score + " points.";
            p1Score += score;
            playerOneScore.innerHTML = p1Score;
            p1FirstLapProgressBar.style.width = p1Score + "%";
            playerOneEventImg1.setAttribute("src", attrCreator(randomNumber1));
            playerOneEventImg2.setAttribute("src", attrCreator(randomNumber2));
        }
        else {
            score = randomNumber1 + randomNumber2;
            playerOneEvents.innerHTML = "Nothing is special, you got " + score + " points.";
            p1Score += score;
            playerOneScore.innerHTML = p1Score;
            p1FirstLapProgressBar.style.width = p1Score + "%";
            playerOneEventImg1.setAttribute("src", attrCreator(randomNumber1));
            playerOneEventImg2.setAttribute("src", attrCreator(randomNumber2));
        }
    }
    if (p1Score < 200 && p1Score >= 100) {
        let randomNumber1 = randomNumber(6);
        if (randomNumber1 === 1 || randomNumber1 === 2 || randomNumber1 === 4) {
            score = randomNumber1;
            playerOneEvents.innerHTML = "Nothing is special, you got " + score + " points.";
            p1Score += score;
            playerOneScore.innerHTML = p1Score;
            p1SecondLapProgressBar.style.width = p1Score -100 + "%";
            playerOneEventImg1.setAttribute("src", attrCreator(randomNumber1));
            playerOneEventImg2.setAttribute("src", eventCreator("nothingSpecial"));
        }
        else if (randomNumber1 === 3) {
            score = -3;
            playerOneEvents.innerHTML = "Your tire burst, you lose 3 points";
            p1Score += score;
            playerOneScore.innerHTML = p1Score;
            p1SecondLapProgressBar.style.width = p1Score -100 + "%";
            playerOneEventImg1.setAttribute("src", attrCreator(randomNumber1));
            playerOneEventImg2.setAttribute("src", eventCreator("tire"));
        }
        else if (randomNumber1 === 5) {
            score = 5;
            playerOneEvents.innerHTML = "You scored " + score + ", oil spills for the other player. The other player loses 5 points.";
            p1Score += score;
            playerOneScore.innerHTML = p1Score;
            p2Score -= 5;
            playerTwoScore.innerHTML = p2Score;
            p1SecondLapProgressBar.style.width = p1Score -100 + "%";
            playerOneEventImg1.setAttribute("src", attrCreator(randomNumber1));
            playerOneEventImg2.setAttribute("src", eventCreator("oilSpill"));
        }
        else if (randomNumber1 === 6) {
            score = randomNumber1 * 2;
            playerOneEvents.innerHTML = "Wow you rolled " + randomNumber1 + " and you got " + score + " points";
            p1Score += score;
            playerOneScore.innerHTML = p1Score;
            p1SecondLapProgressBar.style.width = p1Score -100 + "%";
            playerOneEventImg1.setAttribute("src", attrCreator(randomNumber1));
            playerOneEventImg2.setAttribute("src", eventCreator("double"));
        }
    }
    if (p1Score > 200 && p1Score < 300) {
        let randomNumber1 = randomNumber(12);
        if (randomNumber1 === 2 || randomNumber1 === 4) {
            score = randomNumber1;
            playerOneEvents.innerHTML = "Nothing is special, your score is " + score + " points.";
            p1Score += score;
            playerOneScore.innerHTML = p1Score;
            p1ThirdLapProgressBar.style.width = p1Score - 200 + "%";
            playerOneEventImg1.setAttribute("src", attrCreator(randomNumber1));
            playerOneEventImg2.setAttribute("src", eventCreator("nothingSpecial"));
            
        }
        if (randomNumber1 === 1 || randomNumber1 === 6) {
            score = randomNumber1 * 2;
            playerOneEvents.innerHTML = "Wow you got doubles!! Your score is " + score + " points.";
            p1Score += score;
            playerOneScore.innerHTML = p1Score;
            p1ThirdLapProgressBar.style.width = p1Score - 200 + "%";
            playerOneEventImg1.setAttribute("src", attrCreator(randomNumber1));
            playerOneEventImg2.setAttribute("src", eventCreator("double"));
        }
        if (randomNumber1 === 5) {
            score = randomNumber1;
            playerOneEvents.innerHTML = "You spilled oil on the road, the other player loses 5 points. Your score is " + randomNumber1 + " points.";
            p1Score += score;
            playerOneScore.innerHTML = p1Score;
            p2Score -= -5;
            playerTwoScore.innerHTML = p2Score;
            p1ThirdLapProgressBar.style.width = p1Score - 200 + "%";
            playerOneEventImg1.setAttribute("src", attrCreator(randomNumber1));
            playerOneEventImg2.setAttribute("src", eventCreator("oilSpill"));
        }
        if (randomNumber1 === 8) {
            score = -10;
            playerOneEvents.innerHTML = "You got into an accident and lost 10 points";
            p1Score += score;
            playerOneScore.innerHTML = p1Score;
            p1ThirdLapProgressBar.style.width = p1Score - 200 + "%";
            playerOneEventImg1.setAttribute("src", attrCreator(randomNumber1));
            playerOneEventImg2.setAttribute("src", eventCreator("carCrash"));
        }
        if (randomNumber1 === 9) {
            score = -5;
            playerOneEvents.innerHTML = "You ran into a town, TRAFFIC, lost 5 points";
            p1Score += score;
            playerOneScore.innerHTML = p1Score;
            p1ThirdLapProgressBar.style.width = p1Score - 200 + "%";
            playerOneEventImg1.setAttribute("src", attrCreator(randomNumber1));
            playerOneEventImg2.setAttribute("src", eventCreator("town"));
        }
        if (randomNumber1 === 10) {
            score = randomNumber1 + 15;
            playerOneEvents.innerHTML = "You used turbo boost. You scored " + score + " points.";
            p1Score += score;
            playerOneScore.innerHTML = p1Score;
            p1ThirdLapProgressBar.style.width = p1Score - 200 + "%";
            playerOneEventImg1.setAttribute("src", attrCreator(randomNumber1));
            playerOneEventImg2.setAttribute("src", eventCreator("turbo"));
        }
        if (randomNumber1 === 11) {
            score = -8;
            playerOneEvents.innerHTML = "One of your tire burst. You lost 8 points.";
            p1Score += score;
            playerOneScore.innerHTML = p1Score;
            p1ThirdLapProgressBar.style.width = p1Score - 200 + "%";
            playerOneEventImg1.setAttribute("src", attrCreator(randomNumber1));
            playerOneEventImg2.setAttribute("src", eventCreator("tire"));
        }
        if (randomNumber1 === 3) {
            let randomNumber2 = randomNumber(8);
            score = randomNumber1 + randomNumber2;
            playerOneEvents.innerHTML = "You rolled an additional 8-sided die. You scored " + score + " points.";
            p1Score += score;
            playerOneScore.innerHTML = p1Score;
            p1ThirdLapProgressBar.style.width = p1Score - 200 + "%";
            playerOneEventImg1.setAttribute("src", attrCreator(randomNumber1));
            playerOneEventImg2.setAttribute("src", attrCreator(randomNumber2));
        }
        if (randomNumber1 === 7) {
            let randomNumber2 = randomNumber(10);
            score = randomNumber1 + randomNumber2;
            playerOneEvents.innerHTML = "You rolled an additional 10-sided die. You scored " + score + " points.";
            p1Score += score;
            playerOneScore.innerHTML = p1Score;
            p1ThirdLapProgressBar.style.width = p1Score - 200 + "%";
            playerOneEventImg1.setAttribute("src", attrCreator(randomNumber1));
            playerOneEventImg2.setAttribute("src", attrCreator(randomNumber2));
        }
        if (randomNumber1 === 12) {
            let randomNumber2 = randomNumber(20);
            score = randomNumber1 + randomNumber2;
            playerOneEvents.innerHTML = "You rolled an additional 20-sided die. You scored " + score + " points.";
            p1Score += score;
            playerOneScore.innerHTML + p1Score;
            p1ThirdLapProgressBar.style.width = p1Score - 200 + "%";
            playerOneEventImg1.setAttribute("src", attrCreator(randomNumber1));
            playerOneEventImg2.setAttribute("src", attrCreator(randomNumber2));
        }
    }
    if (p2Score < 100) {
        let randomNumber1 = randomNumber(4);
        let randomNumber2 = randomNumber(4);
        if (randomNumber1 === randomNumber2) {
            score = (randomNumber1 + randomNumber2) * 2;
            playerTwoEvents.innerHTML = "Wow you got doubles!!! You got " + score + " points.";
            p2Score += score;
            playerTwoScore.innerHTML = p2Score;
            p2FirstLapProgressBar.style.width = p2Score + "%";
            playerTwoEventImg1.setAttribute("src", attrCreator(randomNumber1));
            playerTwoEventImg2.setAttribute("src", attrCreator(randomNumber2));
        }
        else {
            score = randomNumber1 + randomNumber2;
            playerTwoEvents.innerHTML = "Nothing is special, you got " + score + " points.";
            p2Score += score;
            playerTwoScore.innerHTML = p2Score;
            p2FirstLapProgressBar.style.width = p2Score + "%";
            playerTwoEventImg1.setAttribute("src", attrCreator(randomNumber1));
            playerTwoEventImg2.setAttribute("src", attrCreator(randomNumber2));
        }
    }
    if (p2Score < 200 && p2Score >= 100) {
        let randomNumber1 = randomNumber(6);
        if (randomNumber1 === 1 || randomNumber1 === 2 || randomNumber1 === 4) {
            score = randomNumber1;
            playerTwoEvents.innerHTML = "Nothing is special, you got " + score + " points.";
            p2Score += score;
            playerTwoScore.innerHTML = p2Score;
            p2SecondLapProgressBar.style.width = p2Score -100 + "%";
            playerTwoEventImg1.setAttribute("src", attrCreator(randomNumber1));
            playerTwoEventImg2.setAttribute("src", eventCreator("nothingSpecial"));
        }
        else if (randomNumber1 === 3) {
            score = -3;
            playerTwoEvents.innerHTML = "Your tire burst, you lose 3 points";
            p2Score += score;
            playerTwoScore.innerHTML = p2Score;
            p2SecondLapProgressBar.style.width = p2Score -100 + "%";
            playerTwoEventImg1.setAttribute("src", attrCreator(randomNumber1));
            playerTwoEventImg2.setAttribute("src", eventCreator("tire"));
        }
        else if (randomNumber1 === 5) {
            score = 5;
            playerTwoEvents.innerHTML = "You scored " + score + ", oil spill for the other player. The other player loses 5 points.";
            p2Score += score;
            playerTwoScore.innerHTML = p2Score;
            p1Score -= 5;
            playerOneScore.innerHTML = p1Score;
            p2SecondLapProgressBar.style.width = p2Score -100 + "%";
            playerTwoEventImg1.setAttribute("src", attrCreator(randomNumber1));
            playerTwoEventImg2.setAttribute("src", eventCreator("oilSpill"));
        }
        else if (randomNumber1 === 6) {
            score = randomNumber1 * 2;
            playerTwoEvents.innerHTML = "Wow you rolled " + randomNumber1 + " and you got " + score + " points";
            p2Score += score;
            playerTwoScore.innerHTML = p2Score;
            p2SecondLapProgressBar.style.width = p2Score -100 + "%";
            playerTwoEventImg1.setAttribute("src", attrCreator(randomNumber1));
            playerTwoEventImg2.setAttribute("src", eventCreator("double"));
        }
    }
    if (p2Score > 200 && p2Score < 300) {
        let randomNumber1 = randomNumber(12);
        if (randomNumber1 === 2 || randomNumber1 === 4) {
            score = randomNumber1;
            playerTwoEvents.innerHTML = "Nothing is special, your score is " + score + " points.";
            p2Score += score;
            playerTwoScore.innerHTML = p2Score;
            p2ThirdLapProgressBar.style.width = p2Score - 200 + "%";
            playerTwoEventImg1.setAttribute("src", attrCreator(randomNumber1));
            playerTwoEventImg2.setAttribute("src", eventCreator("nothingSpecial"));
        }
        if (randomNumber1 === 1 || randomNumber1 === 6) {
            score = randomNumber1 * 2;
            playerTwoEvents.innerHTML = "Wow you got doubles!! Your score is " + score + " points.";
            p2Score += score;
            playerTwoScore.innerHTML = p2Score;
            p2ThirdLapProgressBar.style.width = p2Score - 200 + "%";
            playerTwoEventImg1.setAttribute("src", attrCreator(randomNumber1));
            playerTwoEventImg2.setAttribute("src", eventCreator("double"));
        }
        if (randomNumber1 === 5) {
            score = randomNumber1;
            playerTwoEvents.innerHTML = "You spilled oil on the road, the other player loses 5 points. Your score is " + randomNumber1 + " points.";
            p2Score += score;
            playerTwoScore.innerHTML = p2Score;
            p1Score -= -5;
            playerOneScore.innerHTML = p1Score;
            p2ThirdLapProgressBar.style.width = p2Score - 200 + "%";
            playerTwoEventImg1.setAttribute("src", attrCreator(randomNumber1));
            playerTwoEventImg2.setAttribute("src", eventCreator("oilSpill"));
        }
        if (randomNumber1 === 8) {
            score = -10;
            playerTwoEvents.innerHTML = "You got into an accident and lost 10 points";
            p2Score += score;
            playerTwoScore.innerHTML = p2Score;
            p2ThirdLapProgressBar.style.width = p2Score - 200 + "%";
            playerTwoEventImg1.setAttribute("src", attrCreator(randomNumber1));
            playerTwoEventImg2.setAttribute("src", eventCreator("carCrash"));
        }
        if (randomNumber1 === 9) {
            score = -5;
            playerTwoEvents.innerHTML = "You ran into a town, TRAFFIC, lost 5 points";
            p2Score += score;
            playerTwoScore.innerHTML = p2Score;
            p2ThirdLapProgressBar.style.width = p2Score - 200 + "%";
            playerTwoEventImg1.setAttribute("src", attrCreator(randomNumber1));
            playerTwoEventImg2.setAttribute("src", eventCreator("town"));
        }
        if (randomNumber1 === 10) {
            score = randomNumber1 + 15;
            playerTwoEvents.innerHTML = "You used turbo boost. You scored " + score + " points.";
            p2Score += score;
            playerTwoScore.innerHTML = p2Score;
            p2ThirdLapProgressBar.style.width = p2Score - 200 + "%";
            playerTwoEventImg1.setAttribute("src", attrCreator(randomNumber1));
            playerTwoEventImg2.setAttribute("src", eventCreator("turbo"));
        }
        if (randomNumber1 === 11) {
            score = -8;
            playerTwoEvents.innerHTML = "One of your tire burst. You lost 8 points.";
            p2Score += score;
            playerTwoScore.innerHTML = p2Score;
            p2ThirdLapProgressBar.style.width = p2Score - 200 + "%";
            playerTwoEventImg1.setAttribute("src", attrCreator(randomNumber1));
            playerTwoEventImg2.setAttribute("src", eventCreator("tire"));
        }
        if (randomNumber1 === 3) {
            let randomNumber2 = randomNumber(8);
            score = randomNumber1 + randomNumber2;
            playerTwoEvents.innerHTML = "You rolled an additional 8-sided die. You scored " + score + " points.";
            p2Score += score;
            playerTwoScore.innerHTML = p2Score;
            p2ThirdLapProgressBar.style.width = p2Score - 200 + "%";
            playerTwoEventImg1.setAttribute("src", attrCreator(randomNumber1));
            playerTwoEventImg2.setAttribute("src", attrCreator(randomNumber2));
        }
        if (randomNumber1 === 7) {
            let randomNumber2 = randomNumber(10);
            score = randomNumber1 + randomNumber2;
            playerTwoEvents.innerHTML = "You rolled an additional 10-sided die. You scored " + score + " points.";
            p1Score += score;
            playerTwoScore.innerHTML = p2Score;
            p2ThirdLapProgressBar.style.width = p2Score - 200 + "%";
            playerTwoEventImg1.setAttribute("src", attrCreator(randomNumber1));
            playerTwoEventImg2.setAttribute("src", attrCreator(randomNumber2));
        }
        if (randomNumber1 === 12) {
            let randomNumber2 = randomNumber(20);
            score = randomNumber1 + randomNumber2;
            playerTwoEvents.innerHTML = "You rolled an additional 20-sided die. You scored " + score + " points.";
            p2Score += score;
            playerTwoScore.innerHTML + p2Score;
            p2ThirdLapProgressBar.style.width = p2Score - 200 + "%";
            playerTwoEventImg1.setAttribute("src", attrCreator(randomNumber1));
            playerTwoEventImg2.setAttribute("src", attrCreator(randomNumber2));
        } 
    }
    if (p1Score >= 300) {
        alert(playerOneName.innerHTML + " wins!");
    }
    if (p2Score >= 300) {
        alert(playerTwoName.innerHTML + " wins!");
    }
}