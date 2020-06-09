import React, { Component } from 'react'
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

  sort = (e) => {
    let value = e.target.value
    let data = this.state.data

    if (value === "z-a") {
      data.sort(function (a, b) {
        if (a.name < b.name) {
          return 1
        }
        else if (a.name > b.name) {
          return -1
        }
        else {
          return 0
        }
      })
      this.setState({
        data: data
      })
    }
    else if (value === "a-z") {
      data.sort(function (a, b) {
        if (a.name < b.name) {
          return -1
        }
        else if (a.name > b.name) {
          return 1
        }
        else {
          return 0
        }
      })
      this.setState({
        data: data
      })
    }
    else if (value === "low-high") {
      data.sort(function (a, b) {
        if (a.price < b.price) {
          return -1
        }
        else if (a.price > b.price) {
          return 1
        }
        else {
          return 0
        }
      })
      this.setState({
        data: data
      })
    }
    else {
      data.sort(function (a, b) {
        if (a.price < b.price) {
          return 1
        }
        else if (a.price > b.price) {
          return -1
        }
        else {
          return 0
        }
      })
      this.setState({
        data: data
      })
    }
  }


  render() {
    let data = this.state.data
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
        <form className="sort-form">
          <label id="sort-label">SORT BY: </label>
          <select name="sort" id="sort" onChange={this.sort}>
            <option value="a-z">Alphabetically, A-Z</option>
            <option value="z-a">Alphabetically, Z-A</option>
            <option value="low-high">Price, low to high</option>
            <option value="high-low">Price, high to low</option>
          </select>

        </form>

        <div className="all-products">
          {this.state.query ? matchedProducts : allProducts}
        </div>

      </div>

    )
  }
}
