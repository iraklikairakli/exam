import { combineReducers } from 'redux';
import { jobs } from './jobReducer';
import { searchHasErrored, searchIsLoading } from './errorReducer';
import { skills } from './skillReducer';
import { routerReducer } from 'react-router-redux';


const rootReducer = combineReducers({
    skills,
    jobs,
    searchHasErrored,
    searchIsLoading,
    routing: routerReducer
});

export default rootReducer;