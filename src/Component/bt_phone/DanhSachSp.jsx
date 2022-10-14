import React, { Component } from "react";

export default class DanhSachSp extends Component {
  render() {
    let { dataPhoneProps, handleChitiet, themGioHang } = this.props;

    return (
      <div className="row">
        {dataPhoneProps.map((item, index) => {
          return (
            <div key={index} className="col-4 ">
              <img
                style={{ height: "300px" }}
                className="img-fluid"
                src={item.hinhAnh}
              />
              <h3>{item.tenSP}</h3>
              <button
                onClick={() => handleChitiet(item)}
                className="btn btn-success"
              >
                xem chi tiet
              </button>
              <button
                onClick={() => themGioHang(item)}
                className="btn btn-danger ml-2"
              >
                Thêm giỏ hàng
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
