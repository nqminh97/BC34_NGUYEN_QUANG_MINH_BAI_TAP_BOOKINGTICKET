import React, { Component } from "react";

export default class GioHang extends Component {
  render() {
    let { gioHang, thongTinGioHang, xoaGioHang, thayDoiSoLuong } = this.props;

    return (
      <div>
        <h3
          className="text-danger m-5"
          data-toggle="modal"
          data-target="#exampleModal"
          style={{ cursor: "pointer" }}
        >
          Giỏ hàng {thongTinGioHang}
        </h3>
        <div>
          {/* Modal */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Giỏ hàng
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  {/* Nội dung giỏ hàng */}
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Mã sản phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng đặt</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {gioHang.map((sanPham) => {
                        return (
                          <tr>
                            <td>{sanPham.maSP}</td>
                            <td>
                              <img
                                style={{ height: "50px" }}
                                className="img-fluid"
                                src={sanPham.hinhAnh}
                              />
                            </td>
                            <td>{sanPham.tenSP}</td>
                            <td>
                              <button
                                className="btn btn-primary btn-sm"
                                onClick={() => thayDoiSoLuong(sanPham, +1)}
                              >
                                +
                              </button>
                              {sanPham.soLuong}
                              <button
                                className="btn btn-primary btn-sm"
                                onClick={() => thayDoiSoLuong(sanPham, -1)}
                              >
                                -
                              </button>
                            </td>
                            <td>{sanPham.giaBan.toLocaleString()} VNĐ</td>
                            <td>
                              {(
                                sanPham.giaBan * sanPham.soLuong
                              ).toLocaleString()}{" "}
                              VNĐ
                            </td>
                            <td>
                              <button
                                className="btn btn-danger"
                                onClick={() => xoaGioHang(sanPham)}
                              >
                                Xóa
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
