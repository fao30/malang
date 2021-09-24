let dataMe = [];
//untuk masuk ke ke login
function loginPage(login, pass) {
  let data = [
    {
      nama: "jaka",
      alamat: "bekasi",
      telp: 081212,
      due: 01 / 10 / 2021,
      nominal: 500000,
    },
    {
      nama: "jaki",
      alamat: "jakarta",
      telp: 081212,
      due: 10 / 10 / 2021,
      nominal: 600000,
    },
    {
      nama: "jaku",
      alamat: "solo",
      telp: 081212,
      due: 15 / 10 / 2021,
      nominal: 700000,
    },
    {
      nama: "jake",
      alamat: "semarang",
      telp: 081212,
      due: 25 / 09 / 2021,
      nominal: 800000,
    },
    {
      nama: "jako",
      alamat: "jogja",
      telp: 081212,
      due: 26 / 09 / 2021,
      nominal: 900000,
    },
    {
      nama: "kaka",
      alamat: "makasar",
      telp: 081212,
      due: 27 / 09 / 2021,
      nominal: 1000000,
    },
    {
      nama: "kaki",
      alamat: "pontianak",
      telp: 081212,
      due: 01 / 09 / 2021,
      nominal: 1100000,
    },
    {
      nama: "kaku",
      alamat: "fakfak",
      telp: 081212,
      due: 02 / 09 / 2021,
      nominal: 1200000,
    },
    {
      nama: "kake",
      alamat: "jayapura",
      telp: 081212,
      due: 15 / 09 / 2021,
      nominal: 1300000,
    },
    {
      nama: "kako",
      alamat: "aceh",
      telp: 081212,
      due: 23 / 09 / 2021,
      nominal: 1400000,
    },
  ];
  let users = [
    {
      id: "admin",
      password: "123",
      role: "admin",
    },
    {
      id: "me",
      password: "123",
      role: "user",
    },
  ];
  let result = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i]["id"] == login && users[i]["password"] == pass) {
      result.push(true, users[i]["role"]);
      // console.log(result);
      break;
    }
    if (i == users.length - 1) {
      Swal.fire("ERROR!", "maaf password / id anda salah, fokus bos!", "error");
      return "error";
    }
  }
  return result;
}

let id = document.querySelector("#id");
let pass = document.querySelector("#pass");
let loginForm = document.querySelector("#loginForm");
let hasil = "";
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let hasilLogin = loginPage(id.value, pass.value);
  hasil = hasilLogin;
  if (hasilLogin != "error") {
    localStorage.setItem("role", hasil[1]);
    document.querySelector("#loginForm").style.display = "none";
    window.location.href = "homepage.html";
  }

  id.value = "";
  pass.value = "";
});

let sta = document.querySelector("#admin");
sta.textContent = "test";

// home button untuk pilih buron apa pinjaman
// let pinjam = document.querySelector("#pinjamButton");
// pinjam.addEventListener("click", function () {
//   if (hasil[1] == "admin") {
//     document.querySelector(".beranda").style.display = "none";
//     document.querySelector("#pinjaman").style.display = "flex";
//   } else {
//     document.querySelector(".beranda").style.display = "none";
//     document.querySelector("#pinjaman2").style.display = "flex";
//   }
// });
// let buron = document.querySelector("#buronButton");
// buron.addEventListener("click", function () {
//   document.querySelector(".beranda").style.display = "none";
//   document.querySelector("#buron").style.display = "flex";
// });
// // //
// let pinjHome = document.querySelector("#pinjamanHome");
// pinjHome.addEventListener("click", function () {
//   document.querySelector("#pinjaman").style.display = "none";
//   document.querySelector(".beranda").style.display = "flex";
// });
// let pinjHome2 = document.querySelector("#pinjamanHome2");
// pinjHome2.addEventListener("click", function () {
//   document.querySelector("#pinjaman2").style.display = "none";
//   document.querySelector(".beranda").style.display = "flex";
// });
// let buronHome = document.querySelector("#buronHome");
// buronHome.addEventListener("click", function () {
//   document.querySelector("#buron").style.display = "none";
//   document.querySelector(".beranda").style.display = "flex";
// });
