import React, { Component } from 'react';
import '../styles/header.css';
import JobList from './JobList';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions/index';

class Search extends Component {
  constructor(){
    super()
    this.state ={
      searchValue: '',
    }
  }

  searchJobsKeyDown(event){
    if (event.key === 'Enter') {
      console.log("searchJobs: "+this.state.searchValue);
      event.target.value = '';
      this.props.fetchData(`http://api.dataatwork.org/v1/jobs/autocomplete?contains=${this.state.searchValue}`);
    }
  }

  updateSearch(event){
    console.log("updateSearch: "+event.target.value)
// will change to redux.
    this.setState({
      searchValue: event.target.value
    })
  }

  render() {
    return (
        <div>
          <input onKeyDown={this.searchJobsKeyDown.bind(this)}
                onChange={this.updateSearch.bind(this)}
                type="text" className="search-bar"
                placeholder="&#xf002;  Search"/>
          <JobList />
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        jobs: state.jobs
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(fetchJobs(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);


