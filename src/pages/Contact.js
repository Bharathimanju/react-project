
import './contact.css'
import abg1 from './images/abg1.png'
import con1 from './images/con1.png'
import con2 from './images/con2.png'
import con3 from './images/con3.png'
import cc1 from './images/cc1.png'
import I1 from './images/I1.png'
import I2 from './images/I2.png'
import g1 from './images/g1.jpeg'
import g4 from './images/g4.jpeg'
import g6 from './images/g6.jpeg'
import g3 from './images/g3.jpeg'


const Contact = () => {
    return (
        <div>
            <div className="container-fluid d-flex justify-content-center" id="img">
                <div className='row ' id="po">
                    <div className='col col-sm-12 col-md-12 col-lg-12 position-relative'>
                        <img src={abg1} className="card-img-top w-100" alt="..." />
                        <h1 className='centered-text'>Contact Us</h1>
                    </div>
                </div>
            </div><br /><br /><br />

            <div className="container-fluid d-flex justify-content-center">
                <div className="row g-3">
                    <div className=" col-12 col-md-4 cat ">
                        <img src={con1} className="card-img-topss" alt="..." />
                        <div className="textbody">
                            <p className="office"> OFFICE IN NEW WORK</p>
                            <h6>Location</h6>
                            <p className="ppp">27, Division Street, New York<br />
                                NY 10002, USA</p>
                            <h6>Phone</h6>
                            <p className="ppp">+1 800 123 456 789</p>
                            <h6>Email</h6>
                            <p className="ppp">nibula_gb@mail.com</p>
                        </div>

                    </div>

                    <div className="col-12 col-md-4 cat">
                        <img src={con2} className="card-img-topss" alt="..." />
                        <div className="textbody">
                            <p className="office"> NEW YORK OUTLET</p>
                            <h6>Location</h6>
                            <p className="ppp">27, Division Street, New York<br />
                                NY 10002, USA</p>
                            <h6>Phone</h6>
                            <p className="ppp">+1 800 123 456 789</p>
                            <h6>Email</h6>
                            <p className="ppp">nibula_gb@mail.com</p>
                        </div>

                    </div>

                    <div className="col-12 col-md-4    cat ">
                        <img src={con3} className="card-img-topss" alt="..." />
                        <div className="textbody">
                            <p className="office">SUB OFFICE COMMERCIAL </p>
                            <h6>Location</h6>
                            <p className="ppp">27, Division Street, New York<br />
                                NY 10002, USA</p>
                            <h6>Phone</h6>
                            <p className="ppp">+1 800 123 456 789</p>
                            <h6>Email</h6>
                            <p className="ppp">nibula_gb@mail.com</p>
                        </div>

                    </div>

                </div>

            </div><br /><br /><br /><br /><br />

            <div className="container-fluid d-flex justify-content-center">
                <div className="row g-3 ">

                    <div className="col col-sm-12 col-md-7 col-lg-7" id="stop">

                        <h5 className="text-center" id="to">Contact Us</h5>
                        <h2 className=" text-center" id="name">Please Get In Touch With Us</h2><br /><br />
                        <div className="containerfluid d-flex justify-content-between">
                            <div className="row g-3">
                                <div className="col col-sm-12 col-md-6 col-lg-6 text-center ">
                                    <form>
                                        <input type="text" placeholder="Enter your Email" className="inputss"></input>
                                    </form>
                                </div>
                                <div className="col col-sm-12 col-md-6 col-lg-6 text-center ">
                                    <form>
                                        <input type="text" placeholder="Enter your Email" className="inputss"></input>
                                    </form>
                                </div>

                                <div className="row g-3">
                                    <div className="col col-sm-12 col-md-6 col-lg-6 text-center ">
                                        <form>
                                            <input type="text" placeholder="Enter your Email" className="inputss"></input>
                                        </form>
                                    </div>

                                    <div className="col col-sm-12 col-md-6 col-lg-6 text-center ">
                                        <form>
                                            <input type="text" placeholder="Enter your Email" className="inputss"></input>
                                        </form>
                                    </div>
                                </div>


                                <div className="row g-3 text-center">
                                    <div className="col col-sm-12 col-md-12 col-lg-12 ">
                                        <form>

                                            <textarea id="message" name="message" rows="4" cols="80" placeholder="Comment..."></textarea>
                                        </form>
                                    </div>

                                </div>

                                <div className="text-center">
                                    <form>
                                        <button type=" submit" className="now" >Send Message</button>
                                    </form>
                                </div>
                            </div>
                        </div><br />
                    </div>

                    <div className="col col-sm-12 col-md-5 col-lg-5 " id="left">
                        <img src={cc1} className="card-img-topss" alt="..." />

                    </div>


                </div>
            </div><br /><br /><br /><br />

            <div className="container">
                <div className="row g-3">
                    <div className="col col-sm-12 col-md-12 col-lg-12 text-center"><br/>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31307.456456142958!2d78.1654617!3d11.2295936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1725539560835!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />

                    </div>

                </div>

            </div> <br/><br/><br/>



            {/* fotter */}

            <div className="container-fluid d-flex justify-content-center" id="blue">
                <div className="row g-3 " id="bird">
                    <div class="col col-sm-12 col-md-3 col-ld-3" id="ph">
                        <h4>Spice & Delight</h4>
                        <p>lorem ispeam dolar sit consectetur, ame adipiscing elit,sed do</p>
                        <h6>4920 Trails End Road Ft United State,FL 33311</h6>
                        <h6>nfo@ecample.com test@example.com</h6>
                        <h6>+123 456 678 123 +123 456 789</h6>

                    </div>

                    <div className="col col-sm-12 col-md-3 col-lg-3 " id="hh">
                        <h4>Quick Links</h4>
                        <ul>
                            <li>About us</li>
                            <li>Menu</li>
                            <li>Blogs</li>
                            <li>FAQ</li>
                            <li>Service</li>
                            <li>Gallery</li>
                            <li>Contact Us</li>
                        </ul>

                    </div>

                    <div className="col col-sm-12 col-md-3 col-lg-3">
                        <h4>Instagram</h4>
                        <div className="row g-2" style={{ marginTop: "18px" }}>
                            <img src={I1} class="card8-img-top" alt="..." style={{ width: "80px", height: "80px" }} />
                            <img src={g1} class="card8-img-top" alt="..." style={{ width: "80px", height: "80px" }} />
                            <img src={g4} class="card8-img-top" alt="..." style={{ width: "80px", height: "80px" }} />
                            <img src={g6} class="card8-img-top" alt="..." style={{ width: "80px", height: "80px" }} />
                            <img src={g3} class="card8-img-top" alt="..." style={{ width: "80px", height: "80px" }} />
                            <img src={I2} class="card8-img-top" alt="..." style={{ width: "80px", height: "80px" }} />
                        </div>
                    </div>

                    <div className="col col-sm-12 col-md-3 col-lg-3" id="ph">
                        <h4>Subscribe</h4>
                        <p>lorem ispeam dolosr of connections adding left, to the send characters
                            including at laburs costs
                        </p>
                        <div>
                            <form>
                                <input type="text" placeholder="Enter your Email" className="inputs"></input>
                                <button className="bts" type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>

                    <br /><br /><br />

                    <div className='col col-sm-12 col-md-12 col-lg-12 text-center'>
                        <br />
                        <h6>© Copyright Cafeu. 2024 All Right Reserved</h6>

                    </div>

                </div>

            </div>










        </div>

    )
}
export default Contact;