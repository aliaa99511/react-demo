import React, { Component } from 'react'
import FullScreen4 from '../Testimonialfiles/FullScreen4'
import Build from '../Testimonialfiles/Build'
import Agency from '../Testimonialfiles/Agency'
import Bublich from '../Testimonialfiles/Bublich'

export class Testimonials extends Component {
    render() {
        return (
            <div>
                <FullScreen4/>
                <Build/>
                <Agency />
                <Bublich />
            </div>
        )
    }
}

export default Testimonials
