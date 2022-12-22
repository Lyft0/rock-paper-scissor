$(document).ready(function () {
  var playerPick;
  var compPick;
  var possible = ["Rock", "Paper", "Scissor"];

  //var button = document.getElementsByTagName("button");
  button = $("button");

  function gameStart() {
    // document.querySelector(".promptGame").style.display = "none";
    // document.querySelector("#playerPick").innerText = "Choose!";
    // document.querySelector("#comPick").innerText = "Waiting...";
    $(".promptGame").css("display", "none");
    $("#playerPick").text("Choose!");
    $("#comPick").text("Waiting...");

    for (let i = 0; i < button.length; i++) {
      button[i].addEventListener("click", chooseClick, false);
    }
  }

  function chooseClick(square) {
    let id = square.target.id;
    let button1 = document.getElementById(id);
    playerPick = button1.childNodes[1].textContent;
    compPick = possible[Math.floor(Math.random() * possible.length)];

    // document.querySelector("#playerPick").innerText = playerPick;
    // document.querySelector("#comPick").innerText = compPick;
    $("#playerPick").text(playerPick);
    $("#comPick").text(compPick);
    checkWin(playerPick, compPick);
  }

  function checkWin(playerPick, compPick) {
    let condition;
    if (playerPick == compPick) {
      condition = "Seri!";
    } else if (
      (playerPick == "Scissor" && compPick == "Paper") ||
      (playerPick == "Paper" && compPick == "Rock") ||
      (playerPick == "Rock" && compPick == "Scissor")
    ) {
      condition = "Menaang!!";
    } else {
      condition = "Kalah..";
    }
    console.log(playerPick);
    console.log(compPick);
    console.log(condition);
    for (let i = 0; i < button.length; i++) {
      button[i].removeEventListener("click", chooseClick, false);
    }
    gameOver(condition);
  }

  function gameOver(condition) {
    let color;
    if (condition == "Menaang!!") {
      color = "rgba(60,219,1,0.8)";
    } else if (condition == "Kalah..") {
      color = "rgba(178,23,23,0.8)";
    } else {
      color = "rgba(86,151,246,0.8)";
    }

    // document.querySelector(".promptGame").style.backgroundColor = color;
    // document.querySelector(".promptGame").style.display = "block";
    // document.querySelector(".promptGame p").innerText = condition;
    $(".promptGame").css("background-color", color);
    $(".promptGame").css("display", "block");
    $(".promptGame > p").text(condition);

    // let replay = document.getElementById("replay");
    // replay.addEventListener("click",function () {
    //     gameStart();
    // },false);
    $("#replay").click(function () {
      gameStart();
    });
  }

  gameStart();
});
