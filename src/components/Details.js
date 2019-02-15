import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import { DarkButtonContainer } from './DarkButton';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {id, company, img, info, price, title, inCart} = value.detailProduct;
          return (
            <div className="container py-5 ">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-cayenne my-3">
                  <h1 className="text-title">{title}</h1>
                </div>
              </div>
              {/* end title */}
              {/* product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 pl-4 text-capitalize">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                {/* product text */}
                <div className="col-10 mx-auto col-md-6 my-3">
                  <h2>{company}</h2>
                  <h4 className="text-cayenne">
                    <strong>
                      Price: <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <h5 className="font-weight-bold mt-3 mb-0">
                    Product Info:
                  </h5>
                  <p className="text-muted pt-2">{info}</p>
                  {/* buttons */}
                  <div>
                    <Link to="/">
                      <DarkButtonContainer>back to products</DarkButtonContainer>
                    </Link>
                    <DarkButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}>
                      {inCart ? "inCart" : "add to cart"}
                    </DarkButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
