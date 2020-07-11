
export function jobs(state = [], action) {
    switch (action.type) {
        case 'FETCH_JOBS':
            return action.jobs;

        case 'FETCH_SKILL_SEARCH_DATA':
            return action.jobs;

        default:
            return state;
    }
}

