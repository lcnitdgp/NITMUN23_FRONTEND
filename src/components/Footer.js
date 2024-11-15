import './Footer.css';

function Footer() {
    return ( <>
    
    <section className="contact-area" id="contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="contact-content text-center">
                        <div>
                        <a href="#"><img className='footer-image' src="./assets/lclogo.png" alt="logo" /></a>
                        </div>

                        <div className="hr"></div>
                        <div>
                        <h6> NATIONAL INSTITUTE OF TECHNOLOGY, DURGAPUR. 713209, WEST BENGAL</h6>
                        <h6>+91 96795 74264 -Poorab Kumar <span>|</span> lc.nitdgp@gmail.com </h6>
                        <h6>NITMUN XII  &copy;  2024</h6>
                        
                        <div className="contact-social">
                            <ul className='footer-ul'>
                                <li><a className="hover-target" href="https://www.facebook.com/lcnitdgp/"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a className="hover-target" href="https://www.instagram.com/lcnitd/"><i className="fab fa-instagram"></i></a></li>
                                <li><a className="hover-target" href="https://www.youtube.com/channel/UCnnXqep517pke6rywOC61Cg"><i className="fab fa-youtube"></i></a></li>
                                <li><a className="hover-target" href="https://lcnitd.co.in/"><i className="fa fa-globe"></i></a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </> )}

    export default Footer;
