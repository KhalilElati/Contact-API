import React from 'react'
import {removeContact,editContact} from '../actions/actions'
import {connect} from 'react-redux'
import { Component } from 'react'
import { Route, BrowserRouter, Switch,Link } from 'react-router-dom'
import AddContact from './AddContact'
import EditContact from './EditContact'

 class Contacts extends Component {
     constructor(props){
         super(props)
         this.state={
             new:{
                 Firstname:this.props.contact.Firstname,
                 Lastname:this.props.contact.Lastname,
                 Email:this.props.contact.Email
             }

         }
         
     }
     getMessage=(id)=>{
         let message="/modify_contact/"+id
         return message
     } 
     
     render(){
    return (
        <div>
            <h2>Last Name: {this.props.contact.Lastname}</h2>
            <h2>First Name: {this.props.contact.Firstname}</h2>
            <h2>Email: {this.props.contact.Email}</h2>
            <Link to={()=>this.getMessage(this.props.contact._id)}  > <button onClick={()=>this.props.GetContact(this.state.new)} >Modifier</button></Link>
            {/* <Route  path={"/modify_contact/"+this.props.contact._id} render={()=><EditContact contacts={this.props.contact}/>}></Route> */}
            <button onClick={()=>this.props.removeContact(this.props.contact._id)}>Suprimer</button>
            
        </div>
    )
    }    
}
export default connect(null,{removeContact,editContact})(Contacts)

