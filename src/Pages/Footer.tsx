import React, { Component } from 'react'
import {Link} from "react-router-dom";
import '../Style/Footer.css'


export class Footer extends Component {
    render() {
        return (

    <div className="footer">
        <div className="opaci">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2 onne">
                    <h5>Links</h5>
                    <ul className="list-unstyled ul-list">
                        <li className="list-item"><Link to='/'>Home</Link></li>
                        <li className="list-item"><Link to='/About'>About</Link></li>
                        <li className="list-item"><Link to='/Blog'>Blog</Link></li>
                        <li className="list-item"><Link to='/Testimonials'>Testimonials</Link></li>
                        <li className="list-item"><Link to='/Services'>Services</Link></li>
                        <li className="list-item"><Link to='/Contact'>Contact</Link></li>

                    </ul>
                </div>
                <div className="col-7 col-sm-5 twwo">
                    <h5>Our Address</h5>
                    <address>
		              <p>121, Clear Water Bay Road</p>
		              <p>Clear Water Bay, Kowloon </p>
		              <p>HONG KONG</p><br />

		              <p><i className="fa fa-phone fa-lg"></i>: +852 1234 5678</p>
		              <p><i className="fa fa-fax fa-lg"></i>: +852 8765 4321</p>
		             
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center thhree">

                    <h5>About Us</h5>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>


                    <div className="llinks">
                    <a className="btn btn-social-icon btn-google" href="http://google.com/+">
                        <i className="fa fa-google-plus"></i>
                    </a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id=">
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/">
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/">
                            <i className="fa fa-youtube"></i>
                        </a>
                        <a className="btn btn-social-icon" href="mailto:">
                            <i className="fa fa-envelope-o"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p className="copy">Copyright ©2020 All rights reserved</p>
                </div>
            </div>
        </div>
        </div>
    </div>
    )
}

}
export default Footer