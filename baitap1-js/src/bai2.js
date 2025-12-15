const Nut = document.getElementById("Nut2")
Nut.onclick = function (){
    let number1 = document.getElementById("so1").value;
    let number2 = document.getElementById("so2").value;
    let number3 = document.getElementById("so3").value;
    let number4 = document.getElementById("so4").value;
    let number5 = document.getElementById("so5").value;


    // chuyển chuỗi sang số 

    number1 = Number(number1)
    number2 = Number(number2)
    number3 = Number(number3)
    number4 = Number(number4)
    number5 = Number(number5)


    // tính tổng 

    let TongTB = (number1 + number2 +number3 +number4 +number5) / 5

    const ketQua = "Trung bình cộng của 5 số là  : " + TongTB

    // Nối DOM 
    const inra = document.getElementById("inra2")
    // xuất ra màn hình 

    inra.innerHTML = ketQua; 

}