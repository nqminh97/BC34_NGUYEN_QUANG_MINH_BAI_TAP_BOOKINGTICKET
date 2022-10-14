import React, { Component } from "react";
import { connect } from "react-redux";

class DemoComponent extends Component {
  // getTitle = (title) => {
  //   alert(title);
  // };

  // Title = (value) => {
  //   console.log(value);
  // };

  // Cách 2: binding dữ liệu bằng hàm
  hienThiThongTin = () => {
    const arrayDS = [
      {
        id: 1,
        hoTen: "Quang Minh",
      },
      {
        id: 2,
        hoTen: "Quang Lac",
      },
    ];

    return arrayDS.map((item) => {
      const title = "Hello";

      return <h1> {title + item.hoTen} </h1>;
      // return <h1>{`${title} ${item.hoTen}`}</h1>;
    });
  };

  render() {
    const name = "hello minh";

    // const arrayDS = [
    //   {
    //     id: 1,
    //     hoTen: "Quang Minh",
    //   },
    //   {
    //     id: 2,
    //     hoTen: "Quang Lac",
    //   },
    // ];

    return (
      <div>
        <h1>{this.props.dataRedux.hoTen}</h1>

        {/* {name}
        
        <button onClick={() => this.getTitle()}>Click</button>

        <input onChange={(event) => {this.Title(event.target.value)} } /> */}

        {/* Cách 1: binding trực tiếp tại code html */}
        {/* {arrayDS.map((item) => {
          const title = "Hello";

          return <h1> {title + item.hoTen} </h1>;
          // return <h1>{`${title} ${item.hoTen}`}</h1>;
        })} */}

        {this.hienThiThongTin()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataRedux: state.DemoReducer,
  };
};

export default connect(mapStateToProps, null)(DemoComponent);
