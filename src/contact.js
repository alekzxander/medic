import React, { Component } from 'react'
import user from './user.png'
export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="row">
            <div className="col-md-12">
                <div className="bordure">
                <h1 className="text-center">Mes patients</h1>
                </div>
                <div className="user">
                    <div className="row">
                        <br/>
                        <div className="col-md-4">
                            <img src={user} alt=""/>
                        </div>
                        <div className="col-md-8">
                            <h3>M.Wharro</h3>
                            <br/>
                        </div>
                                               
                    </div> 
                    <div className="row">
                        <br/>
                        <div className="col-md-4">
                            <img src={user} alt=""/>
                        </div>
                        <div className="col-md-8">
                            <h3>Mr.LeDoux</h3>
                            <br/>
                        </div>
                                               
                    </div>
                    <div className="row">
                        <br/>
                        <div className="col-md-4">
                            <img src={user} alt=""/>
                        </div>
                        <div className="col-md-8">
                            <h3>M.Moulin</h3>
                            <br/>
                        </div>
                                               
                    </div> <div className="row">
                        <br/>
                        <div className="col-md-4">
                            <img src={user} alt=""/>
                        </div>
                        <div className="col-md-8">
                            <h3>Mr.Pignon</h3>
                            <br/>
                        </div>
                                               
                    </div> <div className="row">
                        <br/>
                        <div className="col-md-4">
                            <img src={user} alt=""/>
                        </div>
                        <div className="col-md-8">
                            <h3>Mr.Brochan</h3>
                            <br/>
                        </div>
                                               
                    </div> <div className="row">
                        <br/>
                        <div className="col-md-4">
                            <img src={user} alt=""/>
                        </div>
                        <div className="col-md-8">
                            <h3>Mr.LeDoux</h3>
                            <br/>
                        </div>
                                               
                    </div> <div className="row">
                        <br/>
                        <div className="col-md-4">
                            <img src={user} alt=""/>
                        </div>
                        <div className="col-md-8">
                            <h3>Mr.Leblanc</h3>
                            <br/>
                        </div>
                                               
                    </div>
                    
                </div>
            
            </div>
        </div>
      </div>
    )
  }
}
