import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './component/List'
import { Route, BrowserRouter, Switch,Link } from 'react-router-dom'
import AddContact from './component/AddContact'
import EditContact from './component/EditContact'
import  { Component } from 'react'



class App extends Component {
  constructor(props){
    super(props)
    this.state={
      Firstname:'',
      Lastname:'',
      Email:''

    }
  }
  GetContact=(newContact)=>{
    this.setState({
      Firstname:newContact.Firstname,
      Lastname:newContact.Lastname,
      Email:newContact.Email
    })
  }







  render(){
  return (


    
    <div>
      <BrowserRouter>
      
      {/* <Route exact path='/add_contact' component={AddContact}><button>Add contact</button></Route> */}
    <Link to="/add_contact"><button>add_contact</button></Link>
    <Link to="/"><button>contact list</button></Link>
        <Switch>
          <Route exact path='/'>
            <List GetContact={this.GetContact}/>
          </Route>
          <Route exact path="/add_contact" component={()=><AddContact/>}></Route>
  <Route exact path={"/modify_contact/:id"} render={()=><EditContact getContact={this.getContact} contact={this.state}/>}></Route>

        </Switch>
      </BrowserRouter>
    </div>



  );
}}

export default App;
