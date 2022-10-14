import React, { Component } from "react";
import { connect } from "react-redux";
class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className="mt-3 text-left">
          <button className="gheDuocChon"></button>
          <span className="text-light" style={{ fontSize: "15px" }}>
            Ghế đã đặt
          </span>
          <br />
          <button className="gheDangChon"></button>
          <span className="text-light" style={{ fontSize: "15px" }}>
            Ghế đang đặt
          </span>
          <br />
          <button className="ghe" style={{ marginLeft: 0 }}></button>
          <span className="text-light" style={{ fontSize: "15px" }}>
            Ghế chưa đặt
          </span>
        </div>

        <div className="mt-3 ">
          <table className="table table-bordered">
            <thead>
              <tr className="text-light" style={{ fontSize: 15 }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-warning">
              {this.props.danhSachDatGhe.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia.toLocaleString()}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.props.dispatch({
                            type: "HUY",
                            soGhe: gheDangDat.soGhe,
                          });
                        }}
                        className="btn btn-danger"
                      >
                        Hủy
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="text-warning">
                <td></td>
                <td>Tổng Tiền</td>
                <td>
                  {this.props.danhSachDatGhe.reduce(
                    (tongTien, gheDangDat, index) => {
                      return (tongTien += gheDangDat.gia);
                    },
                    0
                  )}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachDatGhe: state.BookingTicketReducer.danhSachDatGhe,
  };
};

export default connect(mapStateToProps, null)(ThongTinDatGhe);
