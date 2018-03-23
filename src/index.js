/** Packages */
import React from 'react';
import ReactDOM from 'react-dom';

/** Components */
import Navbar from './containers/navbar/Navbar';
import Home from './containers/home/Home';


/** Styles */
import './Loader.scss';

/** Class */
class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      loading: true,
    };
  }

  // Add loader before page rendering
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
      console.log("I could have minified this, but I knew you were coming. Welcome, and please peek about!")
    },1000);
  }

  handleLoading() {
    return (
      <div className="loader-container">
        <div className="loader">
          <span className="loader-inner" />
        </div>
      </div>
    );  
  }

  render() {
    // render loader before page completes loading data
    if (this.state.loading) {
      return this.handleLoading();
    }
    
    return (
      <div>
        <Navbar />
        <Home />
      </div>
    )
  }
}

ReactDOM.render(<Wrapper />, document.getElementById('root'));
