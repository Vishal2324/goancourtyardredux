import {combineReducers} from 'redux';
import {LOCATION_CHANGE} from 'react-router-redux';

const initialRouteState = {location : null};

const initialHeadState = {head : null};

// const headReducer = (state = initialHeadState , action) => {
//     switch (action.type) {
//         case "@@INIT":
//             return {head : "Header"};

//         default : 
//             return state;
//     }
// }

const routeReducer = (state = initialRouteState , action) => {
    switch (action.type) {
        case LOCATION_CHANGE:
            return state.merge({location : action.payload});

        default : 
            return state;
    }
}


export default function createReducer(asyncReducers) {
    return combineReducers({
        route: routeReducer,
        ...asyncReducers,
    });
  }