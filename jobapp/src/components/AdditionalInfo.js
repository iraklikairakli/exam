import React, { Component } from 'react';
import '../styles/additionalInfo.css';
import { connect } from 'react-redux';
import { fetchSkillsSearchData } from '../actions/index';


// component not included in app at the moment
class AdditionalInfo extends Component {
  constructor(){
    super()
    this.state ={
      searchValue: '',
    }
  }

  searchSkillsKeyDown(event){
    if (event.key === 'Enter') {
      console.log("searchJobs: "+this.state.searchValue);
      event.target.value = '';
      this.props.fetchData(`http://api.dataatwork.org/v1/skills/autocomplete?contains=${this.state.searchValue}`);
    }
  }

  updateSkillSearch(event){
    console.log("updateSearch: "+event.target.value)
    this.setState({
      searchValue: event.target.value
    })
  }


// hard-coded for now, will make dynamic based on search results.
  teacherLink(){
   this.props.fetchData(`http://api.dataatwork.org/v1/jobs/autocomplete?contains=teacher`);
  }
  developerLink(){
   this.props.fetchData(`http://api.dataatwork.org/v1/jobs/autocomplete?contains=developer`);
  }
  engineerLink(){
   this.props.fetchData(`http://api.dataatwork.org/v1/jobs/autocomplete?contains=engineer`);
  }
  artistLink(){
   this.props.fetchData(`http://api.dataatwork.org/v1/jobs/autocomplete?contains=artist`);
  }
  bakerLink(){
   this.props.fetchData(`http://api.dataatwork.org/v1/jobs/autocomplete?contains=baker`);
  }

  // top 10 employable skills
  verbalLink(){
   this.props.fetchData(`http://api.dataatwork.org/v1/skills/autocomplete?contains=verbal`);
  }
  teamworkLink(){
   this.props.fetchData(`http://api.dataatwork.org/v1/skills/autocomplete?contains=teamwork`);
  }
  writingLink(){
   this.props.fetchData(`http://api.dataatwork.org/v1/skills/autocomplete?contains=writing`);
  }
  planningLink(){
   this.props.fetchData(`http://api.dataatwork.org/v1/skills/autocomplete?contains=planning`);
  }
  flexibilityLink(){
   this.props.fetchData(`http://api.dataatwork.org/v1/skills/autocomplete?contains=flexibility`);
  }
  timeLink(){
   this.props.fetchData(`http://api.dataatwork.org/v1/skills/autocomplete?contains=management`);
  }
  jsLink(){
   this.props.fetchData(`http://api.dataatwork.org/v1/skills/autocomplete?contains=javascript`);
  }
  computingLink(){
   this.props.fetchData(`http://api.dataatwork.org/v1/skills/autocomplete?contains=computing`);
  }
  htmlLink(){
   this.props.fetchData(`http://api.dataatwork.org/v1/skills/autocomplete?contains=html`);
  }
  cssLink(){
   this.props.fetchData(`http://api.dataatwork.org/v1/skills/autocomplete?contains=css`);
  }

  render() {
    return (
        <div className="additional-info">
          <input onKeyDown={this.searchSkillsKeyDown.bind(this)}
                onChange={this.updateSkillSearch.bind(this)}
                type="text" className="skill-search-bar"
                placeholder="&#xf002;  Search by Skill and hit ENTER"/>
            <div>
              <h3>Popular Job Searches</h3>
              <p onClick={this.teacherLink.bind(this)}>Teacher | </p>
              <p onClick={this.developerLink.bind(this)}>Developer | </p>
              <p onClick={this.engineerLink.bind(this)}>Engineer | </p>
              <p onClick={this.artistLink.bind(this)}>Artist | </p>
              <p onClick={this.bakerLink.bind(this)}>Baker</p>
              <h3>Highly Sought after skills</h3>
              <p onClick={this.htmlLink.bind(this)}>HTML | </p>
              <p onClick={this.cssLink.bind(this)}>CSS | </p>
              <p onClick={this.verbalLink.bind(this)}>Verbal Communication | </p>
              <p onClick={this.teamworkLink.bind(this)}>Teamwork | </p>
              <p onClick={this.writingLink.bind(this)}>Written Communication | </p>
              <p onClick={this.planningLink.bind(this)}>Planning | </p>
              <p onClick={this.timeLink.bind(this)}>Management | </p>
              <p onClick={this.jsLink.bind(this)}>JavaScript | </p>
              <p onClick={this.computingLink.bind(this)}>Computing | </p>
              <p onClick={this.flexibilityLink.bind(this)}>Flexibility</p>
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        jobs: state.jobs
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(fetchSkillsSearchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalInfo);

