const Nut = document.getElementById("Nut5")
Nut.onclick = function (){
    let Number = document.getElementById("so").value * 1;

    // tách số hàng chục và hàng đơn vị
    let hangChuc = Math.floor(Number / 10);
    let hangDonVi = Number % 10;
    // tính tổng 2 số

    let tongHaiSo = hangChuc + hangDonVi;

    const ketQua = "Tổng của 2 số là : " + tongHaiSo;

    const inra = document.getElementById("inra5");

    inra.innerHTML = ketQua;



}