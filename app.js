// Тогогчийн ээлжийг хадгалах хувьсагч
var activePlayer = 0;

//Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
//Ээлжийн оноог хадгалах хувьсагч
var roundScore = 0;
//Шооны аль талаараа буусаныг хадгалах хувьсагч 1-6 гэсэн утгыг санамсаргүйгээр үүсгэх
var diceNumber = Math.floor(Math.random() * 6) + 1;

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("cs-0").textContent = "0";
document.getElementById("cs-1").textContent = "0";
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
// click хийхэд ажиллах event listener
document.querySelector(".roll").addEventListener("click", function () {
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
    //элээд ээлжйн оноог 0 болгох
    document.getElementById("cs-" + activePlayer).textContent = 0;
    roundScore = 0;
    // дараа нь 1 буусан тохиолдолд ээлжийг солино
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    //Active player-г өөрчлөх
    document.querySelector(".wrap-1").classList.toggle("active");
    document.querySelector(".wrap-2").classList.toggle("active");

    //Шоог түр алга болгох

    diceDom.style.display = "none";

    /*if (activePlayer === 0) {
      activePlayer = 1;
    } else {
      activePlayer = 0;
    }*/
  }
});
