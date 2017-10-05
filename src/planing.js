import React, { Component } from 'react'

export default class Planing extends Component {
  render() {
    return (
      <div className='planing'>
         <div className="row">
             <div className="col-md-12">
                 <div className="bordure">
                     <h1 className='text-center'>Planing 05/10/2017</h1>
                 </div>
                 <div className="calendar">
                     <div className="row">
                        <div className="col-md-3">
                            <h3>8h00</h3>
                        </div>
                        <div className="col-md-3">
                            <h3>9h00</h3>
                        </div>
                        <div className="col-md-3">
                            <h3>10h00</h3>
                        </div>
                        <div className="col-md-3">
                           <h3> 11h00</h3>
                        </div>
                     </div>
                 </div>
             </div>
          </div>
                
      </div>
    )
  }
}
