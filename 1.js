// bài tập tính ngày kế tiếp:

var btnngayketiep = document.getElementById("btnngayketiep");
btnngayketiep.onclick = function () {
  //đầu vào: user nhập vào ngày, tháng, năm
  var d = document.getElementById("ngay").value;
  var m = document.getElementById("thang").value;
  var y = document.getElementById("nam").value;
  var nextd = d;
  var nextm = m;
  var nexty = y;
  //xử lý:
  //  kiểm tra năm nhuần:
  if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) {
    kieunam = "Năm Nhuần";
  } else {
    kieunam = "Năm không Nhuần";
  }
  // tính số ngày:
  var songay = "";
  m = Number(m);
  if (m >= 1 && m <= 12) {
    switch (m) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        songay = 31;
        break;

      case 4:
      case 6:
      case 9:
      case 11:
        songay = 30;
        break;

      case 2:
        if (kieunam == "Năm Nhuần") {
          songay = 29;
        } else songay = 28;

    }
  }
  // tính ngày kế tiếp
  if (d < songay) {
    nextd++;
    nexty = y;
    nextm = m;
  } else if ((d = songay)) {
    if (m == 12) {
      nextd = 1;
      nextm = 1;
      nexty++;
    } else {
      nextd = 1;
      nextm++;
      nexty = y;
    }
  }
  //đầu ra: Kết quả ngày tháng năm kế tiếp
  document.getElementById(
    "showInfongayketiep"
  ).innerHTML = "Ngày tháng năm kế tiếp là: " + nextd + "/" + nextm + "/" + nexty;
};
