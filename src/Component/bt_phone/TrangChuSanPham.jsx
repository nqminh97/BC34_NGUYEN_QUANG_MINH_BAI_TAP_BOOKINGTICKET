import React, { Component } from "react";
import DanhSachSp from "./DanhSachSp";
import dataPhone from "./dataPhone.json";
import GioHang from "./GioHang";
import SanPham from "./SanPham";

export default class TrangChuSanPham extends Component {
  state = {
    statePhone: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./ImagePhone/vsphone.jpg",
    },
    gioHang: [],
  };

  handleChitiet = (item) => {
    this.setState({
      statePhone: item,
    });
  };
  thongTinGioHang = () => {
    let { gioHang } = this.state;
    let soLuongSP = gioHang.length;
    let tongTien = 0;

    gioHang.map((sanPham) => {
      tongTien += sanPham.soLuong * sanPham.giaBan;
    });

    // tongTien = gioHang.reduce((tong, sanPham) => {
    //   return (tong = sanPham.soLuong * sanPham.giaBan);
    // }, 0);

    return `(${soLuongSP} sp - ${tongTien.toLocaleString()} VNĐ)`;
  };

  themGioHang = (sanPham) => {
    let { gioHang } = this.state;

    let gioHangNew = [...gioHang];

    let sanPhamGH = gioHangNew.find((item) => item.maSP == sanPham.maSP);
    // 1: đã có trong giỏ hàng
    if (sanPhamGH) {
    } else {
      // 2: chưa có trong giỏ hàng
      let sanPhamThem = { ...sanPham, soLuong: 1 };

      gioHangNew.push(sanPhamThem);
      // gioHangNew = [...gioHangNew, sanpham]; ES6
    }

    this.setState({
      gioHang: gioHangNew,
    });
  };

  xoaGioHang = (sanPham) => {
    let { gioHang } = this.state;

    let gioHangNew = [...gioHang];

    // Cách 1 : thao tác xóa
    gioHangNew = gioHangNew.filter((item) => item.maSP != sanPham.maSP);

    // Cách 2 : thao tác xóa
    // let index = gioHangNew.findIndex((item) => item.maSP == sanPham.maSP);
    // if (index != -1) {
    //   gioHangNew.splice(index, 1);
    // }

    this.setState({
      gioHang: gioHangNew,
    });
  };

  thayDoiSoLuong = (sanPham, slThayDoi) => {
    let { gioHang } = this.state;
    let gioHangNew = [...gioHang];

    let sanPhamGH = gioHangNew.find((item) => item.maSP == sanPham.maSP);

    sanPhamGH.soLuong += slThayDoi;

    if (sanPhamGH.soLuong == 0) {
      gioHangNew = gioHangNew.filter((item) => item.maSP != sanPham.maSP);
    }

    this.setState({
      gioHang: gioHangNew,
    });
  };

  render() {
    let { statePhone, gioHang } = this.state;
    return (
      <div className="container">
        <GioHang
          thongTinGioHang={this.thongTinGioHang()}
          gioHang={gioHang}
          thayDoiSoLuong={this.thayDoiSoLuong}
          xoaGioHang={this.xoaGioHang}
        />

        <DanhSachSp
          dataPhoneProps={dataPhone}
          handleChitiet={this.handleChitiet}
          themGioHang={this.themGioHang}
        />

        <SanPham statePhone={statePhone} />
      </div>
    );
  }
}
