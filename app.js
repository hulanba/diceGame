// Тогогчийн ээлжийг хадгалах хувьсагч
var activePlayer = 1;

//Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
//Ээлжийн оноог хадгалах хувьсагч
var roundScore = 0;
//Шооны аль талаараа буусаныг хадгалах хувьсагч 1-6 гэсэн утгыг санамсаргүйгээр үүсгэх
var dice = Math.floor(Math.random() * 6) + 1;

document.querySelector("#score-0").textContent = dice;
document.querySelector(".sc-0").textContent = 0;
document.querySelector(".sc-1").textContent = 0;
document.querySelector("#score-1").innerHTML = "<em>Yes!</em>";
document.querySelector(".dice").style.display = "none";
// click хийхэд ажиллах event listener

document.querySelector;
