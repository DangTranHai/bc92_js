const Nut = document.getElementById("Nut3")
Nut.onclick = function (){
    let number1 = document.getElementById("My").value;

    // chuyển chuỗi sang số

    number1 = Number(number1);
    // quy đổi tiền
    let quyDoi = number1 * 23500;

    const ketQua = "Số tiền Việt là : " + quyDoi + " VND"
    // Nối DOM
    const inra = document.getElementById("inra3")
    // xuất ra màn hình

    inra.innerHTML = ketQua;
}