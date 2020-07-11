import React, { Component } from 'react';
import '../styles/header.css';


class Header extends Component {
  constructor() {
    super();

    this.state = {
        pageTop: 0
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      this.setState({ isTop: window.scrollY < 510 })
    });
  }


  defaultHomeLink(event){
    let pageTop = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({
        pageTop: pageTop
      });
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.pageTop);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  render() {
    return (
      <div>
        <div className="header-content">
          <div className={this.state.isTop ? 'nav-header' : 'fixed-nav-header'}>
              <h1 className="header" onClick={this.defaultHomeLink.bind(this)}> Jobs.ge </h1>
            </div>
        </div>
      </div>
    );
  }
}

export default Header;
