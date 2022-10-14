import React, { Component } from "react";
import dataShoes from "./data.json";
import ProductList from "./ProductList";
export default class ShoesStory extends Component {
  state = {
    stateModal: {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
  };

  handleDetail = (item) => {
    this.setState({
      stateModal: item,
    });
  };

  render() {
    let { stateModal } = this.state;
    return (
      <div className="container">
        <ProductList
          dataShoes={dataShoes}
          stateModal={stateModal}
          handleDetail={this.handleDetail}
        />
      </div>
    );
  }
}
