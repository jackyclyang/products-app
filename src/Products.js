import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Product from './Product'


export default class Products extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      query: '',
      results: []
    }
  }

  componentDidMount() {
    this.setState({
      data: this.props.data
    })
  }

  search = (e) => {
    let query = e.target.value

    console.log(query)

    if (query !== this.state.query) {
      let results = this.state.data.filter(product => product.name.toLowerCase().includes(query.toLowerCase()))

      this.setState({
        query: query,
        results: results
      })
    }

  }

  render() {
    let data = this.props.data
    let allProducts = data.map((product, i) => {
      return (
        <Product product={product} key={i} />
      )
    })
    let matchedProducts = this.state.results.map((product, i) => {
      return (
        <Product product={product} key={i} />
      )
    })

    return (
      <div>
        <form>
          <input type='text' placeholder='Search' className="search" onChange={this.search} />
        </form>

        <div className="all-products">
          {this.state.query ? matchedProducts : allProducts}
        </div>

      </div>

    )
  }
}
