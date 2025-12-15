const Nut = document.getElementById("Nut4")
Nut.onclick = function (){
    let number1 = document.getElementById("CD").value;
    let number2 = document.getElementById("CR").value;
    // chuyển chuỗi sang số

    number1 = Number(number1);
    number2 = Number(number2);
    // tính diện tích và chu vi
    let dienTich = number1 * number2;
    let chuVi = (number1 + number2) * 2;
    const ketQua = "Diện tích là : " + dienTich + " ; " + " Chu vi là : " + chuVi;
    // Nối DOM
    const inra = document.getElementById("inra4")
    
    // xuất ra màn hình

    inra.innerHTML = ketQua;
}