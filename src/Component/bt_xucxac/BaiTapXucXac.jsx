import React, { Component } from "react";
import { connect } from "react-redux";

class BaiTapXucXac extends Component {
  state = {
    // isTai: true,
    // arrHinh: [
    //   "./ImgXucXac/1.png",
    //   "./ImgXucXac/2.png",
    //   "./ImgXucXac/3.png",
    //   "./ImgXucXac/4.png",
    //   "./ImgXucXac/5.png",
    //   "./ImgXucXac/6.png",
    // ],
    // arrKetQua: ["./ImgXucXac/1.png", "./ImgXucXac/2.png", "./ImgXucXac/3.png"],
    // ketQua: 0,
    // soBanThang: 0,
    // tongBanChoi: 0,
    rolling: "",
  };

  thayDoiCuoc = (giaTri) => {
    this.props.dispatch({
      type: "THAY_DOI_CUOC",
      payload: giaTri,
    });
  };

  ketQua = () => {
    this.props.dispatch({
      type: "KET_QUA",
    });

    this.setState({
      rolling: "rollss",
    });
    setTimeout(() => {
      this.setState({
        rolling: "",
      });
    }, 1000);
  };

  render() {
    let { rolling } = this.state;
    let { isTai, arrKetQua, ketQua, soBanThang, tongBanChoi } =
      this.props.xucXacReducer;
    return (
      <div className="w-full h-screen">
        <h1 className="font-bold ">
          Game đỗ xúc xắc <br />
          Chẵn: tài, Lẻ: xỉu
        </h1>

        <div className="container flex justify-between">
          <button
            onClick={() => this.thayDoiCuoc(true)}
            className={`${
              isTai ? "bg-red-500" : "bg-blue-500"
            }  w-[200px] text-white text-[60px]`}
          >
            Tài
          </button>
          <div className="flex">
            <img className={rolling} src={arrKetQua[0]} />
            <img className={rolling} src={arrKetQua[1]} />
            <img className={rolling} src={arrKetQua[2]} />
          </div>
          <button
            onClick={() => this.thayDoiCuoc(false)}
            className={`${
              !isTai ? "bg-red-500" : "bg-blue-500"
            } w-[200px] text-white text-[60px]`}
          >
            Xỉu
          </button>
        </div>
        <div>
          <h1 className="font-bold">Kết quả nút: {ketQua}</h1>
          <h1 className="font-bold">Bạn chọn: {isTai ? "Tài" : "Xỉu"}</h1>
          <h1 className="font-bold">Số bàn thắng: {soBanThang}</h1>
          <h1 className="font-bold">Tổng số bàn chơi: {tongBanChoi}</h1>
          <button
            onClick={() => this.ketQua()}
            className=" bg-blue-500 w-20 h-20  text-white text-[15px]"
          >
            Play Game
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    xucXacReducer: state.XucXacReducer,
  };
};

export default connect(mapStateToProps, null)(BaiTapXucXac);
