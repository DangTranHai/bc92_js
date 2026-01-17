import { NhanVien } from "../models/nhanvien.js";
import { QuanLyNhanVien } from "../models/quanlynhanvien.js";
import Validation from "../models/validation.js";

document.addEventListener("DOMContentLoaded", function () {


  let qlnv = new QuanLyNhanVien();
  let validation = new Validation();


  let tknv = document.getElementById("tknv");
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let datepicker = document.getElementById("datepicker");
  let luongCB = document.getElementById("luongCB");
  let chucvu = document.getElementById("chucvu");
  let gioLam = document.getElementById("gioLam");


  document.getElementById("btnThem").onclick = function () {
    document.getElementById("formQLNV").reset();

    tknv.disabled = false;

    document.getElementById("btnThemNV").style.display = "inline-block";
    document.getElementById("btnCapNhat").style.display = "none";

    document.querySelectorAll(".sp-thongbao").forEach(span => {
      span.innerHTML = "";
      span.style.display = "none";
    });
  };

 
  function hienThi(ds) {
    let content = "";
    for (let i = 0; i < ds.length; i++) {
      let nv = ds[i];
      content += `
        <tr>
          <td>${nv.taiKhoan}</td>
          <td>${nv.hoTen}</td>
          <td>${nv.email}</td>
          <td>${nv.ngayLam}</td>
          <td>${nv.chucVu}</td>
          <td>${nv.tongLuong.toLocaleString()}</td>
          <td>${nv.loaiNV}</td>
          <td>
            <button type="button"
              class="btn btn-warning btn-sm me-1"
              onclick="suaNV('${nv.taiKhoan}')">
              sửa
            </button>

            <button type="button"
              class="btn btn-danger btn-sm"
              onclick="xoaNV('${nv.taiKhoan}')">
              xóa
            </button>
          </td>
        </tr>
      `;
    }
    document.getElementById("tableDanhSach").innerHTML = content;
  }


  function layThongTinForm() {
    let nv = new NhanVien(
      tknv.value,
      name.value,
      email.value,
      password.value,
      datepicker.value,
      Number(luongCB.value),
      chucvu.value,
      Number(gioLam.value)
    );
    nv.tinhTongLuong();
    nv.xepLoai();
    return nv;
  }

  //  thêm nhân viên 
  document.getElementById("btnThemNV").onclick = function (event) {
    event.preventDefault();

    let isValid = true;

    isValid = isValid &&
      validation.checkEmpty(tknv.value, "tbTKNV", "không để trống") &&
      validation.checkNumber(tknv.value, "tbTKNV", "phải là số") &&
      validation.checkLengthCharater(tknv.value, "tbTKNV", "4–6 ký số", 4, 6) &&
      validation.checkExistAccount(
        tknv.value,
        "tbTKNV",
        "tài khoản đã tồn tại",
        qlnv.danhSach
      );

    isValid = isValid &&
      validation.checkEmpty(name.value, "tbTen", "không để trống") &&
      validation.checkCharater(name.value, "tbTen", "phải là chữ");

    isValid = isValid &&
      validation.checkEmpty(email.value, "tbEmail", "không để trống");

    isValid = isValid &&
      validation.checkLengthCharater(
        password.value,
        "tbMatKhau",
        "6–10 ký tự",
        6,
        10
      );

    isValid = isValid &&
      validation.checkSelectOption(
        "chucvu",
        "tbChucVu",
        "phải chọn chức vụ"
      );

    isValid = isValid &&
      validation.checkNumber(gioLam.value, "tbGiolam", "phải là số");

    if (!isValid) return;

    let nv = layThongTinForm();
    qlnv.themNV(nv);
    hienThi(qlnv.danhSach);

    
    document.getElementById("formQLNV").reset();
    tknv.disabled = false;
    document.getElementById("btnCapNhat").style.display = "none";
    document.getElementById("btnThemNV").style.display = "inline-block";
  };

  //  sửa 
  window.suaNV = function (tk) {
    let nv = qlnv.timTheoTK(tk);
    if (!nv) return;

    tknv.value = nv.taiKhoan;
    tknv.disabled = true;

    name.value = nv.hoTen;
    email.value = nv.email;
    password.value = nv.matKhau;
    datepicker.value = nv.ngayLam;
    luongCB.value = nv.luongCB;
    chucvu.value = nv.chucVu;
    gioLam.value = nv.gioLam;

    document.getElementById("btnThemNV").style.display = "none";
    document.getElementById("btnCapNhat").style.display = "inline-block";

    // mở modal
    document.getElementById("btnThem").click();
  };

  //  cập nhật nhân viên 
  document.getElementById("btnCapNhat").onclick = function (event) {
    event.preventDefault();

    let isValid = true;

    isValid = isValid &&
      validation.checkEmpty(name.value, "tbTen", "không để trống") &&
      validation.checkCharater(name.value, "tbTen", "phải là chữ");

    isValid = isValid &&
      validation.checkEmpty(email.value, "tbEmail", "không để trống");

    isValid = isValid &&
      validation.checkLengthCharater(
        password.value,
        "tbMatKhau",
        "6–10 ký tự",
        6,
        10
      );

    isValid = isValid &&
      validation.checkSelectOption(
        "chucvu",
        "tbChucVu",
        "phải chọn chức vụ"
      );

    isValid = isValid &&
      validation.checkNumber(gioLam.value, "tbGiolam", "phải là số");

    if (!isValid) return;

    let nv = qlnv.timTheoTK(tknv.value);
    if (!nv) return;

    nv.hoTen = name.value;
    nv.email = email.value;
    nv.matKhau = password.value;
    nv.ngayLam = datepicker.value;
    nv.luongCB = Number(luongCB.value);
    nv.chucVu = chucvu.value;
    nv.gioLam = Number(gioLam.value);

    nv.tinhTongLuong();
    nv.xepLoai();

    hienThi(qlnv.danhSach);

   
    document.getElementById("formQLNV").reset();
    tknv.disabled = false;
    document.getElementById("btnCapNhat").style.display = "none";
    document.getElementById("btnThemNV").style.display = "inline-block";
  };

  //  xóa nhân viên 
  window.xoaNV = function (tk) {
    qlnv.xoaNV(tk);
    hienThi(qlnv.danhSach);
  };

  //  tìm theo loại
  document.getElementById("btnTimNV").onclick = function () {
    let loai = document.getElementById("searchName").value;
    let ds = qlnv.timTheoLoai(loai);
    hienThi(ds);
  };

  
document.getElementById("btnDong").onclick = function () {
  document.getElementById("formQLNV").reset();

  tknv.disabled = false;

  document.getElementById("btnCapNhat").style.display = "none";
  document.getElementById("btnThemNV").style.display = "inline-block";

  
  document.querySelectorAll(".sp-thongbao").forEach(span => {
    span.innerHTML = "";
    span.style.display = "none";
  });
};
}
 
);
