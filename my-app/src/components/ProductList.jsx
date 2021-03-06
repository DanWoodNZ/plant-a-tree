import React, { Component } from "react";
import Product from "./Product";

class ProductList extends Component {
  render() {
    return (
      <div>
        {this.props.products.map((product, i) => {
          return (
            <Product
              product={product}
              handleAddItemClick={this.props.handleAddItemClick}
              key={i}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
