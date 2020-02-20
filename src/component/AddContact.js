import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addContact} from '../actions/actions'

class AddContact extends Component {
    constructor(props){
        super(props)
        this.state={
            infos:{
                Firstname:'',
                Lastname:'',
                Email:''
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
                <input type="text" onChange={this.handleFirstname} />
                <h2>Last Name:</h2>
                <input type='text' onChange={this.handleLastname}/>
                <h2>Adress:</h2>
                <input type='text' onChange={this.handleAdress}/>
                <button onClick={()=>this.props.addContact(this.state.infos)}>Add</button>
                
            </div>
        )
    }
}
export default connect(null,{addContact})(AddContact)