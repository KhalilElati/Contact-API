import {GET_CONTACT} from '../actions/actionTypes'
import axios from 'axios'

export const getContact=()=>dispatch=>{
    axios.get('/contacts')
    .then(res=>{
        dispatch({
            type:GET_CONTACT,
            payload:res.data
        })
    })
}

export const addContact=(newContact)=>dispatch=>{
    axios.post('/add_contact',newContact)
    .then(res=>{
        dispatch(getContact()      
        )
    })
}
export const removeContact=(id)=>dispatch=>{
    console.log("aaa")
    axios.delete(`/delete_product/${id}`)
    .then(res=>{
        dispatch(getContact()      
        )
    })
}
export const editContact=(id,newContact)=>dispatch=>{
    axios.put(`/modify_contact/${id}`,newContact)
    .then(res=>{
        dispatch(getContact())
    })
}