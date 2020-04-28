var isNewGame;
var activePlayer;
var scores;
var roundScore;
var diceDom = document.querySelector(".dice");
starGame();
function starGame() {
  isNewGame = true;
  // Тогогчийн ээлжийг хадгалах хувьсагч
  activePlayer = 0;

  //Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
  scores = [0, 0];
  //Ээлжийн оноог хадгалах хувьсагч
  roundScore = 0;
  //Шооны аль талаараа буусаныг хадгалах хувьсагч 1-6 гэсэн утгыг санамсаргүйгээр үүсгэх

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("cs-0").textContent = "0";
  document.getElementById("cs-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".wrap-0").classList.remove("winner");
  document.querySelector(".wrap-1").classList.remove("winner");

  document.querySelector(".wrap-0").classList.remove("active");
  document.querySelector(".wrap-1").classList.remove("active");

  document.querySelector(".wrap-0").classList.add("active");

  diceDom.style.display = "none";
}

// click хийхэд ажиллах event listener
document.querySelector(".roll").addEventListener("click", function () {
  if (isNewGame) {
    //1-6 хүртэл санамсаргүй тоо
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    //шооны зургийг гаргаж ирэх
    diceDom.style.display = "block";
    //санамсаргүй утгат харгалзах зургийг гаргаж ирэх
    diceDom.src = "./img/dice-" + diceNumber + ".png";
    if (diceNumber !== 1) {
      roundScore = roundScore + diceNumber;
      document.getElementById("cs-" + activePlayer).textContent = roundScore;
    } else {
      switchToNext();
    }
  } else {
    alert("Тоглоом дууссан байна ШИНЭЭР ЭХЛҮҮЛЭХ товчийг дарж эхлүүлнэ үү!");
  }
});

document.querySelector(".hold").addEventListener("click", function () {
  if (isNewGame) {
    scores[activePlayer] = scores[activePlayer] + roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      //Тоглоом дууссан төлөвтэй болгоно
      isNewGame = false;
      document.getElementById("name-" + activePlayer).textContent = "Winner!!!";

      document.querySelector(".wrap-" + activePlayer).classList.add("winner");
      document
        .querySelector(".wrap-" + activePlayer)
        .classList.remove("active");
    } else {
      switchToNext();
    }
  } else {
    alert("Тоглоом дууссан байна ШИНЭЭР ЭХЛҮҮЛЭХ товчийг дарж эхлүүлнэ үү!");
  }
});

function switchToNext() {
  //элээд ээлжйн оноог 0 болгох
  document.getElementById("cs-" + activePlayer).textContent = 0;
  roundScore = 0;
  // дараа нь 1 буусан тохиолдолд ээлжийг солино
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  //Active player-г өөрчлөх
  document.querySelector(".wrap-0").classList.toggle("active");
  document.querySelector(".wrap-1").classList.toggle("active");

  //Шоог түр алга болгох
  diceDom.style.display = "none";
}

//шинээр тоглоом эхлүүлэх
document.querySelector(".start").addEventListener("click", starGame);
