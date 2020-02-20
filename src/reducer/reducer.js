import {GET_CONTACT} from '../actions/actionTypes'

const initState={
    contacts:[]
}

 const reducerContact=(state=initState,action)=>{
    switch(action.type){
        case GET_CONTACT :
            
            return {...state, contacts:action.payload};
        default :
            return state;
    }   
}

export default reducerContact