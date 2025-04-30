import React, { Component } from 'react'
import FullScreen5 from '../Servicesfiles/FullScreen5'
import List from '../Servicesfiles/List'
import Cart from '../Servicesfiles/Cart'

export class Services extends Component {
    render() {
        return (
            <div>
               <FullScreen5 /> 
               <List />
               <Cart />
            </div>
        )
    }
}

export default Services
