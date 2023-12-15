const redux = require('redux')
const createStore = redux.createStore
const produce = require('immer').produce

const initialState = {
    name:"oussama",
    age:20,
    adress:{
        city:"thala",
        rue:"sidi shil"
    }
}

const STREET_RUE = "STREET_RUE"

function updateRue (rue){
    return{
        type:STREET_RUE,
        payload:rue
    }
}

function reducer (state = initialState, action){
    switch(action.type){
        case STREET_RUE :
            // return{
            //     ...state,
            //     adress:{
            //         ...state.adress,
            //         rue:action.payload
            //     },
            // }
            return produce(state, (draft)=>{
                draft.adress.rue = action.payload
            })
        default:{
            return state 
    }}
}

const store = createStore(reducer)
console.log('initial state ', store.getState())

const unsubscribe = store.subscribe(()=>{
    console.log('updated state ', store.getState())
})

store.dispatch(updateRue("none"))

unsubscribe()
