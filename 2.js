//bài 2: Tính số ngày

var btntinhsongay = document.getElementById("btntinhsongay");
btntinhsongay.onclick = function () {

    //đầu vào: User nhập vào tháng và năm.

    var m = document.getElementById("thang").value;
    var y = document.getElementById("nam").value;

    //xử lý
    //  kiểm tra năm nhuần 
    if (((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0)) {
        kieunam = "Năm Nhuần";

    } else {
        kieunam = "Năm không Nhuần";
    }
    let songay = "";
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
                }
                else
                    songay = 28;
                break;
        }
    }
    //đầu ra: kết quả: số ngày của năm đó và năm đó là năm gì
    document.getElementById("showInfotinhsongay").innerHTML = "Tháng: " + m + " có " + songay + " ngày. Năm " + y + " là " + kieunam;

}
