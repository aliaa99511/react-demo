import React, { Component } from 'react'
import '../Style/FullScreen.css'
import { Button } from 'reactstrap';

export class FullScreen extends Component {
    render() {
        return (
            <div>
               <div className="fullscreen">
                   <div className="cen">
                       <h1>Highest Quality Care For Pets You'll Love</h1>
                       <Button color="info" size="3x">LEARN MORE</Button>{' '}

                   </div>
               </div>
            </div>
        )
    }
}

export default FullScreen
