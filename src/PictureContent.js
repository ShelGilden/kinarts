import React from 'react';

class PictureContent extends React.Component {
  render(){
    return <div className="PictureContent">
        {this.props.content}
    </div>;
  }

}

export default PictureContent;
