var today = new Date();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var date =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
var dayNow = today.getDate();
var monthNow = today.getMonth() + 1;
var yearNow = today.getFullYear();

let dataAll = [
  {
    nomor: "No",
    nama: "Nama",
    alamat: "Alamat",
    telp: "Telp",
    dueDate: "dueDate",
    nominal: "Nominal",
  },
  {
    nomor: "1",
    nama: "jaka",
    alamat: "bekasi",
    telp: 089485736432,
    dueDate: "2021-09-07",
    nominal: 500000,
  },
  {
    nomor: "2",
    nama: "jaki",
    alamat: "jakarta",
    telp: 084324243534,
    dueDate: "2021-11-01",
    nominal: 600000,
  },
  {
    nomor: "3",
    nama: "jaku",
    alamat: "solo",
    telp: 084324243534,
    dueDate: "2021-09-30",
    nominal: 700000,
  },
  {
    nomor: "4",
    nama: "jake",
    alamat: "semarang",
    telp: 084324243534,
    dueDate: "2021-09-20",
    nominal: 800000,
  },
  {
    nomor: "5",
    nama: "jako",
    alamat: "jogja",
    telp: 084324243534,
    dueDate: "2021-08-01",
    nominal: 900000,
  },
  {
    nomor: "6",
    nama: "kaka",
    alamat: "makasar",
    telp: 084324243534,
    dueDate: "2021-09-26",
    nominal: 1000000,
  },
  {
    nomor: "7",
    nama: "kaki",
    alamat: "pontianak",
    telp: 084324243534,
    dueDate: "2021-09-24",
    nominal: 1100000,
  },
  {
    nomor: "8",
    nama: "kaku",
    alamat: "fakfak",
    telp: 084324243534,
    dueDate: "2021-09-05",
    nominal: 1200000,
  },
  {
    nomor: "9",
    nama: "kake",
    alamat: "jayapura",
    telp: 084324243534,
    dueDate: "2021-10-01",
    nominal: 1300000,
  },
  {
    nomor: "10",
    nama: "kako",
    alamat: "aceh",
    telp: 084324243534,
    dueDate: "2021-09-01",
    nominal: 1400000,
  },
];

dataBuronan = [];
dataPenghutang = [];
function FilterByDate(dataBuronan, dataPenghutang) {
  for (let i = 0; i < dataAll.length; i++) {
    let myTime = dataAll[i].dueDate;
    let dateNow = today;
    let dateData = new Date(myTime);
    if (dateNow > dateData) {
      dataBuronan.push(dataAll[i]);
    } else {
      dataPenghutang.push(dataAll[i]);
    }
  }
  dataBuronan.unshift({
    nomor: "No",
    nama: "Nama",
    alamat: "Alamat",
    telp: "Telp",
    dueDate: "dueDate",
    nominal: "Nominal",
    denda: "Denda",
  });
  dataPenghutang.unshift({
    nomor: "No",
    nama: "Nama",
    alamat: "Alamat",
    telp: "Telp",
    dueDate: "dueDate",
    nominal: "Nominal",
  });
  return;
}

FilterByDate(dataBuronan, dataPenghutang);

function dendaTelat(dataBuronan) {
  for (let i = 0; i < dataBuronan.length; i++) {
    let myTime = new Date(dataBuronan[i].dueDate);
    let dateNow = today;

    var DifferencTime = dateNow.getTime() - myTime.getTime();
    var DifferenceDays = Math.floor(DifferencTime / (1000 * 3600 * 24));

    if (DifferenceDays <= 7) {
      dataBuronan[i]["denda"] = dataBuronan[i]["nominal"] * 0.5;
    } else if (DifferenceDays <= 14) {
      dataBuronan[i]["denda"] = dataBuronan[i]["nominal"] * 0.7;
    } else if (DifferenceDays <= 21) {
      dataBuronan[i]["denda"] = dataBuronan[i]["nominal"] * 0.9;
    } else if (DifferenceDays <= 28) {
      dataBuronan[i]["denda"] = dataBuronan[i]["nominal"] * 1.2;
    } else if (DifferenceDays > 28) {
      dataBuronan[i]["denda"] =
        dataBuronan[i]["nominal"] * (1.2 + DifferenceDays / 100);
    }
  }

  return dataBuronan;
  // return dataBuronan
  // telat  <= 1 minggu,   bunga = 50 %
  // telat  <= 2 minggu,   bunga = 70 %
  // telat  <= 3 minggu,   bunga = 90 %
  // telat  <= 4 minggu,   bunga = 120 %
  // telat  <= 4 minggu,   bunga = 120 % + (jumlah hari telat) %
}
dendaTelat(dataBuronan);
function render() {
  const tableBody = document.querySelector(".tBody");
  var todoList = document.querySelector(".todo-list");

  var body = document.getElementsByTagName("body")[0];
  var tbl = document.createElement("table");
  var tblHead = document.createElement("thead");
  tblHead.classList.add("tblHead");
  var tblBody = document.createElement("tbody");

  for (var j = 0; j < dataBuronan.length; j++) {
    var row = document.createElement("tr");
    row.classList.add("row" + String(j));
    for (var i = 0; i <= 6; i++) {
      var cell = document.createElement("th");
      cell.classList.add("cell" + String(i));

      if (i == 0) {
        if (j == 0) {
          var cellText = document.createTextNode(dataAll[j].nomor);
          cell.appendChild(cellText);
          row.appendChild(cell);
          row.style.background = "#ff9900";
          row.style.color = "black";
        } else {
          dataAll[j].nomor = j;
          var cellText = document.createTextNode(dataAll[j].nomor);
          cell.appendChild(cellText);
          row.appendChild(cell);
        }
      } else if (i == 1) {
        var cellText = document.createTextNode(dataBuronan[j].alamat);
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (i == 2) {
        var cellText = document.createTextNode(dataBuronan[j].telp);
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (i == 3) {
        var cellText = document.createTextNode(dataBuronan[j].dueDate);
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (i == 4) {
        var cellText = document.createTextNode(dataBuronan[j].nominal);
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (i == 5) {
        var cellText = document.createTextNode(dataBuronan[j].denda);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
    }

    tblBody.appendChild(row);
  }

  tblHead.appendChild(tblBody);
  tbl.appendChild(tblHead);

  todoList.appendChild(tbl);

  tbl.setAttribute("border", "1");
  tbl.setAttribute("class", "content-table");
  tbl.setAttribute("style", "overflow-x: auto"); // CEK
  tbl.style.background = "blue";

  // function hapusPeminjam(data, id) {
  //   // console.log(data[id]);
  //   let temp = data[0];
  //   data[0] = data[id];
  //   data[id] = temp;
  //   data.shift();
  //   return;
  // }

  // //nominal adalah input nominal baru yang diinginkan
  // function updatePinjaman(data, nominal) {
  //   data.nominal = nominal;
  //   return;
  // }
}
render();
