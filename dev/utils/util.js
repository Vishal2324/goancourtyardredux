// import isEmpty from 'lodash/isEmpty';
// import isFucntion from 'lodash/isFunction';
// import isObject from 'lodash/isObject';
// import invariant from 'invariant';
// import conformsTo from 'lodash/conformsTo';

// const checkStore = (store) =>{
//     const shape = {
//         dispatch : isFucntion,
//         subscribe : isFucntion,
//         getState : isFucntion,
//         replaceReducer : isFucntion,
//         runSaga : isFucntion,
//         asyncReducers : isObject
//     };
//     invariant(conformsTo(store, shape), "store incorrect");
// }

// // inject asyn saga
// const injectAsyncSaga = (store) =>{
//     return function injectedSaga(sagas){
//         invariant(conformsTo(sagas, shape), "store incorrect");
//     }
// }

// const getAsyncReducer = (store) =>{

// }

// const getAsyncInjector = (store) =>{
//     checkStore(store);
//     return {
//         injectReducer : getAsyncReducer(store),
//         injectSaga : injectAsyncSaga(store)
//     };
// }