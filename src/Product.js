import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Product extends Component {

  render() {
    return (
      <Link to={"/product/" + this.props.product._id}>
        <div className="product-preview">
          <img src={this.props.product.imgURL} className="image-preview"></img>
          <p className="product-name">{this.props.product.name}</p>
          <p className="product-price">${this.props.product.price}</p>
        </div>
      </Link>
    )
  }
}
