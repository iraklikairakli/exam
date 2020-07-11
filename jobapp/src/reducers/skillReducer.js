export function skills(state = [], action) {
    switch (action.type) {
        case 'FETCH_SKILLS_BY_ID':
            return action.skills;

        default:
            return state;
    }
}