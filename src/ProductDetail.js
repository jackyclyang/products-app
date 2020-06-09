import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class ProductDetail extends Component {
  render() {
    let id = this.props.match.params.id
    let allProducts = this.props.data

    let product = allProducts.find(product => product._id === id)

    return (
      <div className="detail">
        <div className='left'>
          <img src={product.imgURL} className="product-img"></img>
        </div>
        <div className="right">
          <h2 className="name">{product.name}</h2>
          <h3 className="price">${product.price}</h3>
          <p className="description">{product.description}</p>
        </div>

      </div>
    )
  }
}

export default withRouter(ProductDetail)