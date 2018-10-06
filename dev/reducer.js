import {combineReducers} from 'redux';
import {formJS} from 'immutable';
import {lOCATION_CHANGE} from 'react-router-redux';
/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */
const initialRouteState = {location : null};
const routeReducer = (state = initialRouteState , action) => {
    switch (action.type) {
        case lOCATION_CHANGE:
            return state.merge({location : action.payload});

        default : 
            return state;
    }
}

export default function createReducer() {
    return combineReducers({
        route : routeReducer
    })
}
