const pekerja = localStorage.getItem("role");
console.log(pekerja[1]);
if (pekerja == "admin") {
  document.querySelector("#admin").style.display = "flex";
} else {
  document.querySelector("#me").style.display = "flex";
}
