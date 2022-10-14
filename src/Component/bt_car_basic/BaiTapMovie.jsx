import React, { Component } from "react";
import dataFlim from "./DataFilms.json";

export default class BaiTapMovie extends Component {
  state = {
    movieDetail: {
      maPhim: 1283,
      tenPhim: "Trainwreck",
      biDanh: "trainwreck",
      trailer: "https://www.youtube.com/embed/2MxnhBPoIx4",
      hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/trainwreck.jpg",
      moTa: "Having thought that monogamy was never possible, a commitment-phobic career woman may have to face her fears when she meets a good guy.",
      maNhom: "GP00",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5,
    },
  };

  render() {
    let { movieDetail } = this.state;

    return (
      <div className="container row">
        <div className="m-4 col-md-12 row" style={{ width: 400 }}>
          <div className="col-md-6 ">
            <img
              className="img-fluid"
              src={movieDetail.hinhAnh}
              alt="Card image"
            />
          </div>
          <div className="col-md-6">
            <h4 className="card-title">{movieDetail.tenPhim}</h4>
            <p className="card-text">{movieDetail.moTa}</p>
            <p>Ngày khởi chiếu:{movieDetail.ngayKhoiChieu} </p>
            <p>Đánh giá:{movieDetail.danhGia} </p>
            <iframe width={420} height={315} src={movieDetail.trailer}></iframe>
          </div>
        </div>

        {dataFlim.map((movie, index) => {
          return (
            <div
              key={index}
              className="m-4 col-md-3 card"
              style={{ width: 400 }}
            >
              <img
                className="card-img-top"
                src={movie.hinhAnh}
                alt="Card image"
              />
              <div className="card-body">
                <h4 className="card-title">{movie.tenPhim}</h4>
                <p className="card-text">{movie.moTa}</p>
              </div>
              <button
                onClick={() => {
                  this.setState({
                    movieDetail: movie,
                  });
                }}
                className="btn btn-success"
              >
                Detail
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
