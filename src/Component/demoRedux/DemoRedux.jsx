import React, { Component } from "react";
import { connect } from "react-redux";

class DemoRedux extends Component {
  render() {
    const { dataRedux, dispatch } = this.props;
    return (
      <div>
        {dataRedux.data.map((item) => (
          <h2>{item.id}</h2>
        ))}

        <button
          className="btn btn-primary"
          onClick={() =>
            dispatch({
              type: "CHANGE_DATA",
              payload: 3,
            })
          }
        >
          đổi data
        </button>
      </div>
    );
  }
}

// B1: import hàm connect từ thư viện react-redux
// B2: tạo hàm mapStateToProps để lấy dữ liệu về và 1 hàm để đưa dữ liệu lêm redux
// B3: kết nối redux = cứ pháp connect(mapStateToProps, hàm đưa dữ liệu lên redux)(tên component)
// B4: xóa export defaul trên class component và copy tên component xuống dưới hàm connect
// lấy dữ liệu từ redux về component
const mapStateToProps = (state) => {
  return {
    dataRedux: state.DemoReducer,
  };
};

// type: là dữ liệu để nhận biết thay đổi cái state trên redux
// payload: là dữ liệu bạn đưa lên redux để thay đổi state
// const mapDispacthToProps = (dispatch) => {
//   return {
//     changeHoTen: () =>
//       dispatch({
//         type: "CHANGE_HO_TEN", // data cứng không thay đổi
//         payload: "Trần Văn B", // bất kì kiểu dữ liệu nào
//       }),
//   };
// };

export default connect(mapStateToProps, null)(DemoRedux);
