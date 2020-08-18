import React from 'react';
import ProductContent from './ProductContent.js';

const text = ["Jiggling, like flying through the cafeteria...",
              "Hoot, Hoot and Hollar",
              "Nodding, talking, and saying nothing",
              "This is the man in his demo...",
              "Simply carrying on the meaningless conversation",
              "Shimming and Shaking..."];

const pictures = ["images/BirdAtBrandeis.gif",
                  "images/Owl.gif",
                  "images/Head002Silver.gif",
                  "images/ShelDemo001.gif",
                  "images/Head003Silver.gif",
                  "images/Head001Silver.gif"];

class ProductPicture extends React.Component {
  constructor(props) {
    super(props)
    this.state = { productNumber: 0 }
  }

  triggerFirstEnter = () => {
      if(this.state.productNumber > text.length - 2)
        this.setState({
          productNumber: 0
        });
      else
      this.setState({
        productNumber: this.state.productNumber + 1
      });
  }

  render(){
    return <div className="ProductPicture">
              <img  className="Picture" src={pictures[this.state.productNumber]} />
              <button className="ProductButton" onClick={this.triggerFirstEnter}>More</button>
              <ProductContent content={text[this.state.productNumber]}/>
    </div>;
  }

}

export default ProductPicture;
