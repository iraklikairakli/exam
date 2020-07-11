import React, { Component } from 'react';
import '../styles/joblist.css';
import Skills from './Skills';
import Modal from 'react-modal';


class JobPost extends Component {
  // when individual Job title is clicked - render pop-up with skill info
  constructor() {
  super();

  this.state = {
    modalIsOpen: false
  };
  }

  openModal() {
    this.setState({
      modalIsOpen: true
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }

  render() {
      return (
          <div>
              <div className="job-post" key={this.props.job.uuid} onClick={this.openModal.bind(this)}>
                  {this.props.job.title}
                  {this.props.job.suggestion}
                  <Modal isOpen={this.state.modalIsOpen}
                        onRequestClose={this.closeModal}
                        className="modal"
                        contentLabel="Example Modal"
                        key={this.props.job.uuid}>
                    <button className="closeButton" onClick={this.closeModal.bind(this)}>
                     <i className="fa fa-2x fa-times-circle" aria-hidden="true"></i>
                    </button>
                    <Skills id={this.props.job.uuid}/>
                  </Modal>
              </div>
          </div>
      );
    }
  }

export default JobPost;
