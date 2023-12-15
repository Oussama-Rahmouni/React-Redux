//import redux and create objects from classes
const redux = require('redux')
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducer = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

//create actions
const CACKE_ORDERED = "CACKE_ORDERED"
const RESTOR_CACKE = "RESTOR_CACKE"
const ICE_CREAME = "ICE_CREAME"
const ICE_CREAME_RESTOK = "ICE_CREAME_RESTOK"

//create the action creator functions that creates actions
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

function iceCream(qty = 1){
    return{
        type:ICE_CREAME,
        payload: qty
    }
}

function resotreIce(qty = 1){
    return{
        type:ICE_CREAME_RESTOK,
        payload: qty
    }
}

//intial states
const initialCacke = {

    numOfCackes : 10
}

const initialIce = {
    numOfIce : 20
}

// creating reducer (previousState, action ) => newState
const iceReducer =  (state = initialIce, action) =>{
    switch(action.type){ 
        case ICE_CREAME:
            return{
                ...state,
                numOfIce :state.numOfIce - 1,
            }
        case ICE_CREAME_RESTOK:
            return{
                ...state,
                numOfIce :state.numOfIce + action.payload,
            }
        default:
            return state
    }
}

const cackeReducer =  (state = initialCacke, action) =>{
    switch(action.type){ 
        case CACKE_ORDERED:
            return {
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

//creating the store with the initial states, normaly the store only accept one reducer but we can use
//a function to combine multiple reducers

const rootReducer = combineReducer({
    cake: cackeReducer,
    ice: iceReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))
//each time the store subscribe it returns the state
const unsubscribe = store.subscribe(()=> {} )
//dispatching the functions
// store.dispatch(orderCacke())
// store.dispatch(orderCacke())
// store.dispatch(orderCacke())
// store.dispatch(restoreCacke(4))

//create a binding between actions functions and the dispatch
const actions = bindActionCreators({orderCacke, restoreCacke, iceCream, resotreIce}, store.dispatch)
actions.orderCacke()
actions.orderCacke()
actions.orderCacke()
actions.restoreCacke(5)
actions.iceCream()
actions.iceCream()
actions.resotreIce(5)

unsubscribe()