const NUT = document.getElementById("Nut1")
NUT.onclick = function (){
    let number1 = document.getElementById("luong").value * 1;
    let number2 = document.getElementById("songaylam").value * 1;

    // tính tổng lương 
    let total = number1 * number2 

    let ketQua = "Tổng lương của nhân viên là : " + total;

    // nối DOM tới in ra màn hình
    const inra = document.getElementById("inra1");

    // in ra màn hình 

    inra.innerHTML = ketQua;
}