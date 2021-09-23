let dataMe = [];
//untuk masuk ke ke login
function loginPage(login, pass) {
  let dataLogin = [
    ["admin1", 123, "admin"],
    ["admin2", 456, "admin"],
    ["me1", 123, "me"],
    ["me2", 456, "me"],
    ["me3", 789, "me"],
  ];
  let result = [];
  for (let i = 0; i < dataLogin.length; i++) {
    if (dataLogin[i][0] == login && dataLogin[i][1] == pass) {
      result.push(true, dataLogin[i][2]);
      break;
    }
    if (i == dataLogin.length - 1) {
      return "error";
    }
  }
  return result;
}

let id = document.querySelector("#id");
let pass = document.querySelector("#pass");
let loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let hasilLogin = loginPage(id.value, pass.value);
  console.log(hasilLogin);
  if (hasilLogin != "error") {
    document.querySelector("#loginForm").style.display = "none";
    document.querySelector(".testButton").style.display = "flex";
  }
  id.value = "";
  pass.value = "";
});
// home button untuk pilih buron apa pinjaman
let pinjam = document.querySelector("#pinjamButton");
pinjam.addEventListener("click", function () {
  document.querySelector(".testButton").style.display = "none";
  document.querySelector("#pinjaman").style.display = "flex";
});
let buron = document.querySelector("#buronButton");
buron.addEventListener("click", function () {
  document.querySelector(".testButton").style.display = "none";
  document.querySelector("#buron").style.display = "flex";
});
// //
let pinjHome = document.querySelector("#pinjamanHome");
pinjHome.addEventListener("click", function () {
  document.querySelector("#pinjaman").style.display = "none";
  document.querySelector(".testButton").style.display = "flex";
});
let buronHome = document.querySelector("#buronHome");
buronHome.addEventListener("click", function () {
  document.querySelector("#buron").style.display = "none";
  document.querySelector(".testButton").style.display = "flex";
});
