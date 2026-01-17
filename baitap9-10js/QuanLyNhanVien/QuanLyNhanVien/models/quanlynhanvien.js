export function QuanLyNhanVien() {
  this.danhSach = [];

// Thêm nhân viên
  this.themNV = function (nv) {
    this.danhSach.push(nv);
  };

// Xóa nhân viên
  this.xoaNV = function (tk) {
    for (let i = 0; i < this.danhSach.length; i++) {
      if (this.danhSach[i].taiKhoan === tk) {
        this.danhSach.splice(i, 1);
        break;
      }
    }
  };

// Tìm theo tài khoản
  this.timTheoTK = function (tk) {
    for (let i = 0; i < this.danhSach.length; i++) {
      if (this.danhSach[i].taiKhoan === tk) {
        return this.danhSach[i];
      }
    }
    return null;
  };

// Tìm theo loại nhân viên
  this.timTheoLoai = function (loai) {
    let ketQua = [];
    for (let i = 0; i < this.danhSach.length; i++) {
      if (
        this.danhSach[i].loaiNV
          .toLowerCase()
          .includes(loai.toLowerCase())
      ) {
        ketQua.push(this.danhSach[i]);
      }
    }
    return ketQua;
  };
}
