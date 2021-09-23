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
      nama: "jaka",
      alamat: "bekasi",
      telp: 089485736432,
      dueDate: "2021-09-07",
      nominal: 500000,
    },
    {
      nama: "jaki",
      alamat: "jakarta",
      telp: 084324243534,
      dueDate: "2021-11-01",
      nominal: 600000,
    },
    {
      nama: "jaku",
      alamat: "solo",
      telp: 084324243534,
      dueDate: "2021-09-30",
      nominal: 700000,
    },
    {
      nama: "jake",
      alamat: "semarang",
      telp: 084324243534,
      dueDate: "2021-09-20",
      nominal: 800000,
    },
    {
      nama: "jako",
      alamat: "jogja",
      telp: 084324243534,
      dueDate: "2021-08-01",
      nominal: 900000,
    },
    {
      nama: "kaka",
      alamat: "makasar",
      telp: 084324243534,
      dueDate: "2021-09-26",
      nominal: 1000000,
    },
    {
      nama: "kaki",
      alamat: "pontianak",
      telp: 084324243534,
      dueDate: "2021-09-24",
      nominal: 1100000,
    },
    {
      nama: "kaku",
      alamat: "fakfak",
      telp: 084324243534,
      dueDate: "2021-09-05",
      nominal: 1200000,
    },
    {
      nama: "kake",
      alamat: "jayapura",
      telp: 084324243534,
      dueDate: "2021-10-01",
      nominal: 1300000,
    },
    {
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
    return;
  }

  FilterByDate(dataBuronan, dataPenghutang);
  // console.log(sisaBayar())
  // put all task to html
  for (let i = 0; i < dataPenghutang.length; i++) {
    // create div
    const todo = document.createElement("div");
    todo.classList.add("todo");
    // create list
    const newTodo = document.createElement("li");
    newTodo.innerText = `${dataPenghutang[i].nama} -- ${dataPenghutang[i].alamat} -- ${dataPenghutang[i].telp} -- ${dataPenghutang[i].dueDate} -- ${dataPenghutang[i].nominal}`;
    newTodo.classList.add("todo-item");
    todo.appendChild(newTodo);
    // todo.appendChild(button);

    // append to todoList
    todoList.appendChild(todo);
  }

  function hapusPeminjam(data, id) {
    // console.log(data[id]);
    let temp = data[0];
    data[0] = data[id];
    data[id] = temp;
    data.shift();
    return;
  }

  //nominal adalah input nominal baru yang diinginkan
  function updatePinjaman(data, nominal) {
    data.nominal = nominal;
    return;
  }
}
render();
