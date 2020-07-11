import React, { Component } from 'react';
import '../styles/joblist.css';

class Links extends Component {
  render () {
      return (
        <div>
          <div className="pagination-links">
              <a onClick={this.props.firstLink}><i className="fa fa-angle-double-left"></i></a>
              <a onClick={this.props.prevLink}><i className="fa fa-angle-left"></i></a>
              <a onClick={this.props.nextLink}><i className="fa fa-angle-right"></i></a>
              <a onClick={this.props.lastLink}><i className="fa fa-angle-double-right"></i></a>
          </div>
        </div>
      )
   }
}

export default Links;