const redux = require('redux')
const createStore = redux.createStore

const CACKE_ORDERED = "CACKE_ORDERED"
const RESTOR_CACKE = "RESTOR_CACKE"

//action creator is function that creates actions
function orderCacke(){
return {
    type: CACKE_ORDERED,
    payload: 1 
}
}

function restoreCacke(qty = 1){
    return{
       type:RESTOR_CACKE,
       payload : qty
    }
}
const initialState = {

    numOfCackes : 10,
    another : 0
}
//(previousState, action ) => newState
const reducer =  (state = initialState, action) =>{
    switch(action.type){ 
        case CACKE_ORDERED:
            return {
                //usualy we deal with objects with multiple property so in case we separate the object and only 
                //update the property that we want to update
                ...state,
                numOfCackes: state.numOfCackes - 1
            }
        case RESTOR_CACKE:
            return{
                ...state,
                numOfCackes :state.numOfCackes + action.payload,
            }
        default:
            return state
    }
}

const store = createStore(reducer)
    console.log('initial', store.getState())

const unsubscribe = store.subscribe(()=> console.log('update state ', store.getState()))
store.dispatch(orderCacke())
store.dispatch(orderCacke())
store.dispatch(orderCacke())

store.dispatch(restoreCacke(4))
unsubscribe()