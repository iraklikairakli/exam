
import '../styles/joblist.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions/index';
import JobPost from './JobPost';


class JobList extends Component {
// when page loads show default "/jobs" data
    componentDidMount() {
        this.props.fetchData(`http://api.dataatwork.org/v1/jobs?offset=0&limit=50`)
    }

    render() {
        return (
            <div className="joblist-container">
            {this.props.jobs.map((job) => (
                <JobPost job={job}/>
                ))}
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


export default connect(mapStateToProps, mapDispatchToProps)(JobList);