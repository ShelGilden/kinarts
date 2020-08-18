import React from 'react';

class ProductContent extends React.Component {
  render(){
    return <div className="ProductContent">
        {this.props.content}
    </div>;
  }

}

export default ProductContent;
