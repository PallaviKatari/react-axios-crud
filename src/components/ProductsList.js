// ProductsList.js

import React, { Component } from 'react';
import { Products } from './Products';

export class ProductsList extends Component {

  constructor() {
    super();
    this.state = {
      products: [1]
    }
  }

  renderproducts() {
    return this.state.products.map((_products, i) => (
      <Products key={i} />
    ));
  }

//   addproducts() {
//     const products = this.state.products;
//     products.push(1);
//     this.setState({
//         products
//     });
//   }

  render() {
    return (
      <section>
        <div className="row">
          <div className="col-md-3">
            {/* <h2 className='page-title'>Products</h2> */}
          </div>
          {/* <div className="col-md-6">
            <button onClick={() => { this.addproducts() }} className="btn btn-dark">Add Product</button>
          </div> */}
        </div>
        <div className='row'>
          {this.renderproducts()}
        </div>
      </section>
    )
  }
}