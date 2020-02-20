import React, { Component } from 'react'
import {connect} from 'react-redux'
import {editContact,getContact} from '../actions/actions'


class EditContact extends Component {
    constructor(props){
        super(props)
        this.state={
            infos:{
                Firstname:this.props.contact.Firstname,
                Lastname:this.props.contact.Lastname,
                Email:this.props.contact.Email
            }

        }
    }
    

    handleFirstname=(event)=>{
        this.setState({
            infos:{...this.state.infos,Firstname:event.target.value}
        })
    }
    handleLastname=(event)=>{
        this.setState({
            infos:{...this.state.infos,Lastname:event.target.value}
        })
    }
    handleAdress=(event)=>{
        this.setState({
            infos:{...this.state.infos,Email:event.target.value}
        })
    }

    render() {
        return (
            <div>

                <h2>First Name:</h2>
                <input type="text" onChange={this.handleFirstname} value={this.state.infos.Firstname} />
                <h2>Last Name:</h2>
                <input type='text' onChange={this.handleLastname} value={this.state.infos.Lastname}/>
                <h2>Adress:</h2>
                <input type='text' onChange={this.handleAdress} value={this.state.infos.Email} />
                <button onClick={()=>this.props.editContact(this.props.contact._id,{Firstname:this.props.contact.Firstname,Lastname:this.props.contact.Lastname,Email:this.props.contact.Email})}>edit</button>
                
            </div>
        )
    }
}
const mapStateToProps=state=>({
    contacts:state.contacts
})
export default connect(mapStateToProps,{editContact})(EditContact)
