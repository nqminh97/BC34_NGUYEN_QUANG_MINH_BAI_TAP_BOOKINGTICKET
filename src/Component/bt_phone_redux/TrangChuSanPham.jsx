import React, { Component } from "react";
import DanhSachSp from "./DanhSachSp";
import dataPhone from "./dataPhone.json";
import GioHang from "./GioHang";
import SanPham from "./SanPham";
import { connect } from "react-redux";

class TrangChuSanPham extends Component {
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
  };

  handleChitiet = (item) => {
    this.setState({
      statePhone: item,
    });
  };
  thongTinGioHang = () => {
    let { gioHang } = this.props;
    let soLuongSP = gioHang && gioHang.length > 0 ? gioHang.length : 0;
    let tongTien = 0;

    // gioHang.map((sanPham) => {
    //   tongTien += sanPham.soLuong * sanPham.giaBan;
    // });

    if (gioHang.length > 0) {
      tongTien = gioHang.reduce((tong, sanPham) => {
        return tong + sanPham.giaBan * sanPham.soLuong;
      }, 0);
    }

    return `(${soLuongSP} sp - ${tongTien.toLocaleString()} VNĐ)`;
  };

  render() {
    let { gioHang } = this.props;
    let { statePhone } = this.state;
    return (
      <div className="container">
        <GioHang thongTinGioHang={this.thongTinGioHang()} />

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

const mapStateToProps = (state) => {
  return {
    gioHang: state.GioHangReducer.gioHang,
  };
};

export default connect(mapStateToProps, null)(TrangChuSanPham);
