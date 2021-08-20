import React , { Component } from 'react';
import Counters from './counters.component';
import Navbar from './navbar.component';

class App extends Component{
state ={}

render(){
    return (

     <>
     
     <Navbar/>

     <Counters/>
     
     
     </>

    );
}


}

export default App;