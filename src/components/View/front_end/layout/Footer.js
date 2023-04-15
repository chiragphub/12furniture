import logo from '../../../../asset/frontend/img/logo.png'
import { getSettingValuebyName } from '../../../Common/Helper';

const Footer = () => {
    return (
        <footer className="footer spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer__about">
                            <div className="footer__about__logo">
                                <a href="./index.html"><img src={logo} alt="" /></a>
                            </div>
                            <ul>
                                <li>Address: {getSettingValuebyName("infoAddress") != '' ? getSettingValuebyName("infoAddress") : '60-49 Road 11378 New York'}</li>
                                <li>Phone: {getSettingValuebyName("infoContactNumber") != '' ? getSettingValuebyName("infoContactNumber") : '+65 11.188.888'} </li>
                                <li>Email: {getSettingValuebyName("infoEmail") != '' ? getSettingValuebyName("infoEmail") : 'hello@colorlib.com'} </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                        <div className="footer__widget">
                            <h6>Useful Links</h6>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">About Our Shop</a></li>
                                <li><a href="#">Secure Shopping</a></li>
                                <li><a href="#">Delivery infomation</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Our Sitemap</a></li>
                            </ul>
                            <ul>
                                <li><a href="#">Who We Are</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><Link to="/admin">Staff Login</Link></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Innovation</a></li>
                                <li><a href="#">Testimonials</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="footer__widget">
                            <h6>Join Our Newsletter Now</h6>
                            <p>Get E-mail updates about our latest shop and special offers.</p>
                            <form action="#">
                                <input type="text" placeholder="Enter your mail" />
                                <button type="submit" className="site-btn">Subscribe</button>
                            </form>
                            <div className="footer__widget__social">
                                <a href={getSettingValuebyName("Facebook") != '' ? getSettingValuebyName("Facebook") : '#'}><i className="fa fa-facebook"></i></a>
                                <a href={getSettingValuebyName("Instagram") != '' ? getSettingValuebyName("Instagram") : '#'}><i className="fa fa-instagram"></i></a>
                                <a href={getSettingValuebyName("Twitter") != '' ? getSettingValuebyName("Twitter") : '#'}><i className="fa fa-twitter"></i></a>
                                <a href={getSettingValuebyName("Pinterest") != '' ? getSettingValuebyName("Pinterest") : '#'}><i className="fa fa-pinterest"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer__copyright">
                            <div className="footer__copyright__text"><p>
                                Copyright &copy; 2023 All rights reserved.
                            </p></div>
                            <div className="footer__copyright__payment"><img src="img/payment-item.png" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )

}
export default Footer;