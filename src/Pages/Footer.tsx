import { Link } from "react-router-dom";
import '../Style/Footer.css'

const Footer = () => {
    const footerLinks = [
        { path: '/', text: 'Home' },
        { path: '/About', text: 'About' },
        { path: '/Blog', text: 'Blog' },
        { path: '/Testimonials', text: 'Testimonials' },
        { path: '/Services', text: 'Services' },
        { path: '/Contact', text: 'Contact' }
    ];

    const socialIcons = [
        { url: 'http://google.com/+', className: 'btn-google', icon: 'google-plus' },
        { url: 'http://www.facebook.com/profile.php?id=', className: 'btn-facebook', icon: 'facebook' },
        { url: 'http://www.linkedin.com/in/', className: 'btn-linkedin', icon: 'linkedin' },
        { url: 'http://twitter.com/', className: 'btn-twitter', icon: 'twitter' },
        { url: 'http://youtube.com/', className: 'btn-google', icon: 'youtube' },
        { url: 'mailto:', className: '', icon: 'envelope-o' }
    ];

    return (
        <div className="footer">
            <div className="opaci">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-4 offset-1 col-sm-2 onne">
                            <h5>Links</h5>
                            <ul className="list-unstyled ul-list">
                                {footerLinks.map((link, index) => (
                                    <li key={index} className="list-item">
                                        <Link to={link.path}>{link.text}</Link>
                                    </li>
                                ))}
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
                                {socialIcons.map((social, index) => (
                                    <a 
                                        key={index}
                                        className={`btn btn-social-icon ${social.className}`} 
                                        href={social.url}
                                    >
                                        <i className={`fa fa-${social.icon}`}></i>
                                    </a>
                                ))}
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

export default Footer;