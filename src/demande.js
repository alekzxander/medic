import React, { Component } from 'react'
import bell from './bell.png'
export default class Demande extends Component {
  render() {
    return (
      <div>
        <div className="bordure">
            <h1>Demandes</h1>
        </div>
        <div className="mesDemandes">
            <div className="row">
                <div className="col-md-6">
                    <img src={bell} alt="" />
                </div>
                <div className="col-md-6">
                    <p>3 Notifications </p>
                </div>
            </div>

        </div>
        </div>
    )
  }
}
