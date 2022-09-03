// bài4

var btnsv = document.getElementById("btnsv");
btnsv.onclick = function () {
    //đầu vào: Tên và toạ độ
    var x = document.getElementById("toa-do-1").value;
    var y = document.getElementById("toa-do-2").value;
    var z = document.getElementById("toa-do-3").value;
    var a = document.getElementById("name1").value;
    var b = document.getElementById("name2").value;
    var c = document.getElementById("name3").value;
    var kq = "Sinh viên xa trường nhất là: " + a;

    //xử lý:so sánh các toạ độ
    if (x > y) {
        if (x > z) {
            kq = "Sinh viên xa trường nhất là " + a
        }
        else if (x < z) {
            kq = "Sinh viên xa trường nhất là" + c
        }
        else if (x = z) {

            kq = "Sinh viên xa trường nhất là" + a + "và" + c

        }
    }
    else if (x < y) {
        if (y > z) {
            kq = "Sinh viên xa trường nhất là" + b
        }
        else if (y < z) {
            kq = "Sinh viên xa trường nhất là " + c
        }
        else if (y = z) {

            kq = "Sinh viên xa trường nhất là" + b +"và" + c
        }
    }
    else if (x = y) {
        if (x > z) {
            kq = "Sinh viên xa trường nhất là" + a + "và" +b
        }
        else if (x < z) {
            kq = "Sinh viên xa trường nhất là " + c
        }
        else if (x = z) {
            kq = "Cả ba bạn đều có khoảng cách tới trường như nhau" 
        }
    }
    // đầu ra: kết quả hiển thị người xa nhất
    document.getElementById("showInfosv").innerHTML = kq;
}



