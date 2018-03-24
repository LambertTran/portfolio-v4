/** Packages */
import React from 'react';
import ReactDOM from 'react-dom';

/** Components */
import Navbar from './pages/navbar/Navbar';
import Home from './pages/home/Home';
import Techs from './pages/techs/Techs';
import Works from './pages/works/Works';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';


/** Styles */
import './shares/Loader.scss';
import './shares/wrapper.scss';


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
      <div className="wrapper">
        <Navbar />
        <Home />
        <Techs />
        <Works />
        <Projects />
        <Contact />
      </div>
    )
  }
}

ReactDOM.render(<Wrapper />, document.getElementById('root'));
