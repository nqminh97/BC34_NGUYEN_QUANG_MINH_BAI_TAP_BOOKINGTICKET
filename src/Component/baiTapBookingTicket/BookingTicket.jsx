import React, { Component } from "react";
import "./bookingTicket.css";
import ThongTinDatGhe from "./ThongTinDatGhe";
import danhSachGheData from "./danhSachGhe.json";
import HangGhe from "./HangGhe";

export default class BookingTicket extends Component {
  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };

  render() {
    return (
      <div
        style={{
          position: "fixed",
          backgroundImage: "url(./ImgBookingTicket/bgmovie.jpg)",
          width: "100%",
          height: "100%",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            backgroundColor: "rgba(0,0,0,0.7)",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div className="text-warning" style={{ fontSize: 30 }}>
                  ĐẶT VÉ XEM PHIM CYBERLEARN.VN
                </div>
                <div className="mt-1 text-light" style={{ fontSize: "15px" }}>
                  Màn Hình
                </div>
                <div
                  className="mt-2"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div className="screen"></div>
                  {this.renderHangGhe()}
                </div>
              </div>
              <div className="col-4 ">
                <div style={{ fontSize: "35px" }} className="text-light mt-2 ">
                  DANH SÁCH GHẾ BẠN CHỌN
                </div>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
