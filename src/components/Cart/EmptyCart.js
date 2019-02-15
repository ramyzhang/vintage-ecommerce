import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';

export default function EmptyCart() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title">
          <h1>your cart is currently empty</h1>
        </div>
      </div>
    </div>
  )
}
