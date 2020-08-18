import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import TopMenu from './TopMenu.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isFirstState: true, isSecondState:false }
  }

  triggerFirstEnter = () => {
      this.setState({
        isFirstState: false,
        isSecondState: true
      })
  }

  render(){
    return (
      <div>
        {this.state.isFirstState &&
        <div className="HomePage">This is all about Sheldon... and his
        <br/><i>Highly Kinetic Mobile Art</i>
        <br/><button className="StartButton" onClick={this.triggerFirstEnter}>Click to Enter</button></div>}
        {this.state.isSecondState && <TopMenu/>}
      </div>
    )
  }
}

ReactDOM.render(
  <HomePage />,
  document.getElementById('root')
);
