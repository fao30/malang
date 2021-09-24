const todoList = document.querySelector(".todo-list");

function render() {
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

    return;
  }

  FilterByDate(dataBuronan, dataPenghutang);
  // console.log(sisaBayar())
  // put all task to html
  const tableBody = document.querySelector(".tBody");
  var todoList = document.querySelector(".todo-list");

  var body = document.getElementsByTagName("body")[0];
  var tbl = document.createElement("table");
  var tblHead = document.createElement("thead");
  tblHead.classList.add("tblHead");
  var tblBody = document.createElement("tbody");

  for (var j = 0; j < dataPenghutang.length; j++) {
    var row = document.createElement("tr");
    row.classList.add("row" + String(j));
    for (var i = 0; i <= 7; i++) {
      var cell = document.createElement("th");
      cell.classList.add("cell" + String(i));

      if (i == 0) {
        if (j == 0) {
          var cellText = document.createTextNode("nama");
          cell.appendChild(cellText);
          row.appendChild(cell);
          row.style.background = "#ff9900";
          row.style.color = "black";
        } else {
          dataPenghutang[j].nomor = j;
          var cellText = document.createTextNode(dataPenghutang[j].nama);
          cell.appendChild(cellText);
          row.appendChild(cell);
        }
      } else if (i == 1) {
        var cellText = document.createTextNode(dataPenghutang[j].alamat);
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (i == 2) {
        var cellText = document.createTextNode(dataPenghutang[j].telp);
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (i == 3) {
        var cellText = document.createTextNode(dataPenghutang[j].dueDate);
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (i == 4) {
        var cellText = document.createTextNode(dataPenghutang[j].nominal);
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (i == 5) {
        if (j == 0) {
          var cellText = document.createTextNode("Edit");
          cell.appendChild(cellText);
          row.appendChild(cell);
          row.style.background = "#ff9900";
          row.style.color = "black";
        } else {
          let nh = "nominalHutang" + j;
          let bs = "btnSubmit" + j;
          const inputBox = document.createElement("INPUT");
          inputBox.setAttribute("type", "text");
          inputBox.setAttribute("id", nh);
          row.appendChild(inputBox);
          const btnSubmit = document.createElement("button");
          btnSubmit.innerHTML = "Submit";
          btnSubmit.setAttribute("id", bs);
          row.appendChild(btnSubmit);
        }
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
}
render();

for (let k = 0; k < dataPenghutang.length; k++) {
  let btn = "btnSubmit" + [k]; //pasti button#btnSubmit1
  let is = "#nominalHutang" + [k]; //pasti
  let isi = document.querySelector(is);
  let ti = ".row" + [k] + " " + ".cell4";
  let hapus = ".row" + k;
  let element = document.getElementById(btn); //pasti button#btnSubmit1
  if (element) {
    element.addEventListener("click", () => {
      dataPenghutang[k].nominal -= isi.value;
      let jumlah = document.querySelector(ti);
      jumlah.innerHTML = dataPenghutang[k].nominal;
      if (dataPenghutang[k].nominal <= 0) {
        // console.log(dataPenghutang[k].nominal,"iniiii");
        document.querySelector(hapus).style.display = "none";
      }
    });
  }
}
