import React, { Component } from "react";
import { connect } from "react-redux";

class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      // trạng thái ghế đã đặt
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
      }
      //trạng thái ghế đang đặt
      let cssGheDangDat = "";
      let indexGheDangDat = this.props.danhSachDatGhe.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
      );
      if (indexGheDangDat !== -1) {
        cssGheDangDat = "gheDangChon";
      }
      return (
        <button
          onClick={() => {
            this.props.datGhe(ghe);
          }}
          className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
          key={index}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };

  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return <button className="rowNumber">{hang.soGhe}</button>;
    });
  };

  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <div className="ml-3">
          {this.props.hangGhe.hang} {this.renderSoHang()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.hangGhe.hang} {this.renderGhe()}
        </div>
      );
    }
  };
  render() {
    return (
      <div className="text-light text-left ml-5" style={{ fontSize: 15 }}>
        {this.renderHangGhe()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachDatGhe: state.BookingTicketReducer.danhSachDatGhe,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch({
        type: "DAT_GHE",
        ghe,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
