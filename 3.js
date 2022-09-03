//bài 3: cách đọc ba số nguyên

var btnsonguyen = document.getElementById("btnsonguyen");
btnsonguyen.onclick = function () {
    //đầu vào: User nhập vào số có ba chữ só

    var a = document.getElementById("so").value;

    //xử lý:
    // Lấy số hàng chục, hàng trăm, hàng đơn vị.

    chusohangdonvi = a % 10; // số dư là chữ số hàng đơn vị
    // console.log(chusohangdonvi);
    chusohangchuc = Math.floor((a / 10) % 10);
    // console.log(chusohangchuc);
    chusohangtram = Math.floor(a / 100);
    // console.log(chusohangtram);

    //đọc số

    if (a < 100 || a > 999) {
        document.getElementById("showInfosonguyen").innerHTML = "Nhập số nguyên có ba chữ số"
    }
    else {
        switch (chusohangtram) {
            case 1: chusohangtram = "Một trăm"; break;
            case 2: chusohangtram = "Hai trăm"; break;
            case 3: chusohangtram = "Ba trăm"; break;
            case 4: chusohangtram = "Bốn trăm"; break;
            case 5: chusohangtram = "Năm trăm"; break;
            case 6: chusohangtram = "Sáu trăm"; break;
            case 7: chusohangtram = "Bảy trăm"; break;
            case 8: chusohangtram = "Tám trăm"; break;
            case 9: chusohangtram = "Chín trăm"; break;
        }
        if (chusohangchuc == 0) {
            chusohangchuc = "lẻ"
        }
        switch (chusohangchuc) {
            case 1: chusohangchuc = "mười"; break;
            case 2: chusohangchuc = "hai mươi"; break;
            case 3: chusohangchuc = "ba mươi"; break;
            case 4: chusohangchuc = "bốn mươi"; break;
            case 5: chusohangchuc = "năm mươi"; break;
            case 6: chusohangchuc = "sáu mươi"; break;
            case 7: chusohangchuc = "bảy mươi"; break;
            case 8: chusohangchuc = "tám mươi"; break;
            case 9: chusohangchuc = "chín mươi"; break;
        }
        switch (chusohangdonvi) {
            case 1: chusohangdonvi = "mốt "; break;
            case 2: chusohangdonvi = "hai "; break;
            case 3: chusohangdonvi = "ba "; break;
            case 4: chusohangdonvi = "bốn "; break;
            case 5: chusohangdonvi = "năm "; break;
            case 6: chusohangdonvi = "sáu "; break;
            case 7: chusohangdonvi = "bảy"; break;
            case 8: chusohangdonvi = "tám "; break;
            case 9: chusohangdonvi = "chín "; break;
        }
        
        //đầu ra: Kết quả hiển thị cách đọc số có ba chữ số.
        document.getElementById("showInfosonguyen").innerHTML = chusohangtram + " " + chusohangchuc +" "+ chusohangdonvi;
    }
}


