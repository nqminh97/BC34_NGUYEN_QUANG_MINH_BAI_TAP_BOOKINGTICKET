import React, { Component } from "react";
import { connect } from "react-redux";

class DanhSachSp extends Component {
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
                className="btn btn-danger ml-2"
                onClick={() =>
                  this.props.dispatch({
                    type: "THEM_GIO_HANG",
                    payload: item,
                  })
                }
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

export default connect(null, null)(DanhSachSp);
