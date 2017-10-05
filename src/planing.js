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
                            <p><button className='btn btn-warning uno'>Mr.Delatre</button></p>
                            
                            <p><button className='btn btn-warning dos'>Mr.Ledoux</button></p>
                        </div>
                        <div className="col-md-3">
                            <h3>9h00</h3>
                           <p> <button className='btn btn-warning tre'>Mr.Moulin</button></p>
                          
                           <p> <button className='btn btn-warning for'>Mr.Pignon</button></p>
                           <p> <button className='btn btn-warning cin'>Mr.Bronch</button></p>
                        </div>
                        <div className="col-md-3">
                            <h3>10h00</h3>
                           <p> <button className='btn btn-warning six'>Mr.Leblanc</button></p>
                           <p> <button className='btn btn-warning sev'>Mr.Wharro</button></p>
                            
                        </div>
                        <div className="col-md-3">
                           <h3> 11h00</h3>
                           <p> <button className='btn btn-warning tre'>M.Grimal</button></p>
                           <p> <button className='btn btn-warning tre'>Mr.Lefut</button></p>
                           <p> <button className='btn btn-warning tre'>M.Brodur</button></p>
                           <p> <button className='btn btn-warning tre'>Mr.McFly</button></p>
                     
                           
                        </div>
                     </div>
                 </div>
             </div>
          </div>
                
      </div>
    )
  }
}
