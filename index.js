const CACKE_ORDERED = "CACKE_ORDERED"

//action creator is function that creates actions
function orderCacke(){
return {
    type: CACKE_ORDERED,
    quantity: 1 
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
        default:
            return state
    }
}