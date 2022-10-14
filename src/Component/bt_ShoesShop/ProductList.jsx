import React, { Component } from "react";

export default class ProductList extends Component {
  render() {
    let { dataShoes, stateModal, handleDetail } = this.props;

    return (
      <div>
        <h1>Shoes Shop</h1>
        <div className="row">
          {dataShoes.map((item, index) => {
            return (
              <div key={index} className="card col-3 m-4">
                <img className="card-img-top" src={item.image} />
                <div className="card-body text-left">
                  <h4 className="card-title">{item.name}</h4>
                  <p className="card-text">{item.price}$</p>

                  <div>
                    <button
                      onClick={() => handleDetail(item)}
                      type="button"
                      className="btn btn-dark"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Detail
                    </button>
                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex={-1}
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              Shoe details
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
                            <img
                              className="img-fluid"
                              style={{ height: "300px" }}
                              src={stateModal.image}
                            />
                            <p>
                              <b>Name:</b> {stateModal.name}
                            </p>
                            <p>
                              <b>Price:</b> {stateModal.price}
                            </p>
                            <p>
                              <b> Description:</b> {stateModal.description}
                            </p>
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
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
