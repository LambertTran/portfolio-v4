/** Packages */
import React from 'react';

/** Styles */
import './Navbar.scss';

/** Logo */
import logo from '../../imgs/logo.png';

/** Class */
export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      bgColor: 'transparent',
      isBoxShadow: false,
      isMobile: window.innerWidth<600 ? true : false,
    };

    this.handleBgChange = this.handleBgChange.bind(this);
    this.handleWidthChange = this.handleWidthChange.bind(this);
  }

  componentDidMount() {
    this.handleBgChange();
    this.handScroll();
    this.handleWidthChange();
  }
  
  handScroll() {
    const navbar = document.querySelectorAll('#navbar-click');
    navbar.forEach(function(el){
      el.addEventListener('click', function() {
        const gotoEl = this.getAttribute('name');
        const pos = document.getElementById(gotoEl).getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({
          top:pos,
          left:0,
          behavior: 'smooth',
        })
      });
    })
  }

  handleBgChange(){
    const nav = document.querySelector('.navbar');
    const rectNav = nav.getBoundingClientRect();
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= rectNav.bottom) {
        this.setState({ 
          bgColor: '#303036',
          isBoxShadow: true,
        });
      } else {
        this.setState({
          bgColor: 'transparent',
          isBoxShadow: false,
        });
      }
    });
  }

  handleWidthChange() {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 600) {
        this.setState({ isMobile: true });
      } else {
        this.setState({ isMobile: false });
      }
    })
  }

  render() {
    const { bgColor } = this.state;
    let border = '';
    let hide = ''; 
    
    if (this.state.isBoxShadow) {
      border = "boxShadow";
    }

    if (this.state.isMobile) {
      hide = "hide";
    } 

    return (
      <nav className={`navbar ${border}`} style={{ backgroundColor: bgColor }} >
        <a href="/">
          <img src={logo} alt="logo"/>
        </a>
        <ul id="navbar">
          <li id='navbar-click' name="tech-page">
            <i className={`fa fa-wrench`} aria-hidden="true"></i>
            <span className={`${hide}`}>Skills</span>
          </li>
          <li id='navbar-click' name="work-page">
          <i className={`fa fa-handshake`} aria-hidden="true"></i>
            <span className={`${hide}`}>Works</span>
          </li>
          <li id='navbar-click' name="project-page">
            <i className={`fa fa-folder-open`}></i>
            <span className={`${hide}`}>Projects</span>
          </li>
          <li id='navbar-click' name="contact-page">
            <i className={`fa fa-phone`} aria-hidden="true"></i>
            <span className={`${hide}`}>Contact</span>
          </li>
        </ul>
      </nav>
    )
  }
}
