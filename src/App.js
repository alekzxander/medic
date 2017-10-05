import React, { Component } from 'react';
import Planing from './planing'
import './App.css';
import Contact from './contact'
import Notif from './notif'
import Demande from './demande'
class App extends Component {
  render() {
    return (
      <div className="App">
       <div className="container">
         <div className="row up">
           <div className="col-md-8">
             <Planing />
             <div className="row">
               <div className="col-md-12">
                 <div className="row">
                   <div className="col-md-6 stat">

                   </div>
                   <div className="col-md-6 horloge">

                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div className="col-md-4">
              <Contact />
           </div>
         </div>
         <div className="row">
           <div className="col-md-8">
              <Notif />
           </div>
           <div className="col-md-4">
             <Demande />
           </div>
         </div>
       </div>
      </div>
    );
  }
}

export default App;
