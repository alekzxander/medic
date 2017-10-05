import React, { Component } from 'react'
import cloche from './alarm.png'
export default class Notif extends Component {
  render() {
    return (
        <div>
            <div className="bordure">
                <h1>Notifications</h1>
            </div>
            <div className="rect">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className='big'>Envoyez des alerts</p>
                            <form method="post" action="traitement.php">
                                <p>
                                    <label for="pays">Quel alerts souhaitez vous envoyez ?</label><br />
                                    <select name="pays" id="pays">
                                        <option value="france">Grippe</option>
                                        <option value="espagne">Chikungunya</option>
                                        <option value="italie">Gastro</option>
                                        <option value="royaume-uni">Angine</option>
                                        

                                    </select>
                                </p>
                            </form>
                        </div>
                        <div className="col-md-6 butt">
                            <p><button className='btn btn-warning btn-lg'>Envoyez <img src={cloche} alt="" /></button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
