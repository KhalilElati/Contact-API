import React, { Component } from 'react'
import Contacts from './Contacts'
import {connect} from 'react-redux'
import {getContact} from '../actions/actions'
import {removeContact} from '../actions/actions'
import EditContact from './EditContact'
import {Route} from 'react-router-dom'
class List extends Component {
    componentDidMount=()=>{
        console.log("a")
        this.props.getContact()
        console.log("b")
    }
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <div className="Container">
                {this.props.contacts.map(el=>
                    <div className="card">
                    <Contacts contact={el}  GetContact={this.props.GetContact}
                     />
                    
                    
                    </div>
                )}
                </div>
                
            </div>
        )
    }
}
const mapStateToProps=state=>({
    contacts:state.contacts
})

export default connect(mapStateToProps,{getContact,removeContact})(List)