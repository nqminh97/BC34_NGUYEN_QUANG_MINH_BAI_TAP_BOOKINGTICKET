import React, { Component } from "react";

export default class BaiTapCar extends Component {
  state = {
    urlHinhAnh: "./CarBasic/products/black-car.jpg",
  };

  render() {
    return (
      <div className="container row">
        <div className="col-9">
          <img className="img-fluid" src={this.state.urlHinhAnh} />
        </div>
        <div className="col-3">
          <img
            onClick={() => {
              this.setState({
                urlHinhAnh: "./CarBasic/products/black-car.jpg",
              });
            }}
            className="img-fluid"
            src="./CarBasic/icons/icon-black.jpg"
          />
          <img
            onClick={() => {
              this.setState({
                urlHinhAnh: "./CarBasic/products/red-car.jpg",
              });
            }}
            className="img-fluid"
            src="./CarBasic/icons/icon-red.jpg"
          />
          <img
            onClick={() => {
              this.setState({
                urlHinhAnh: "./CarBasic/products/silver-car.jpg",
              });
            }}
            className="img-fluid"
            src="./CarBasic/icons/icon-silver.jpg"
          />
          <img
            onClick={() => {
              this.setState({
                urlHinhAnh: "./CarBasic/products/steel-car.jpg",
              });
            }}
            className="img-fluid"
            src="./CarBasic/icons/icon-steel.jpg"
          />
        </div>
      </div>
    );
  }
}
