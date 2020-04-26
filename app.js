// Тогогчийн ээлжийг хадгалах хувьсагч
var activePlayer = 1;

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
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "./img/dice-" + diceNumber + ".png";
});
