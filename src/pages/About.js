import './about.css'
import abg1 from './images/abg1.png'
import d1 from './images/d1.jpeg'
import e1 from './images/e1.jpeg'
import e2 from './images/e2.jpeg'
import h1 from './images/h1.png'
import h2 from './images/h2.png'
import h3 from './images/h3.png'
import cc1 from './images/cc1.png'
import cc2 from './images/cc2.png'
import cc3 from './images/cc3.png'
import I1 from './images/I1.png'
import I2 from './images/I2.png'
import g1 from './images/g1.jpeg'
import g4 from './images/g4.jpeg'
import g6 from './images/g6.jpeg'
import g3 from './images/g3.jpeg'




const About = () => {
    return (
        <div>
            <div className="container-fluid d-flex justify-content-center" id="img">
                <div className='row ' id="po">
                    <div className='col col-sm-12 col-md-12 col-lg-12 position-relative'>
                        <img src={abg1} className="card-img-top w-100" alt="..." />
                        <h1 className='centered-text'>About Us</h1>
                    </div>
                </div>
            </div><br /><br /><br />

            <div className="container-fluid d-flex justify-content-between align-items-center">
                <div className="row w-100 g-4">
                    <div className="col-12 col-md-6 d-flex justify-content-center">
                        <div className="card" style={{ width: "100%", maxWidth: "25rem" }}>
                            <img src={d1} className="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column " id="center">
                        <p className="p">About Us</p>
                        <h1>Why We Are The Best</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            For Exclusive Deals, Coupons, News and More,For Exclusive Deals, Coupons, News
                            and More.Stay Informed About Special Offers
                            For Exclusive Deals, Coupons, News and More.Stay Informed About Special Offers
                            For Exclusive Deals, Coupons, News and More,For Exclusive Deals, Coupons,
                            News and More
                        </p>
                        <div className="container-fluid d-flex justify-content-between align-items-center " style={{ padding: "20px" }}>

                            <div className="hi " >
                                <img src={e1} className="cardss-img-top" alt="..." />
                            </div>
                            <div className="hi">
                                <h4>Buffet Service</h4>
                                <p>Qariatureaque ipsa quae a ill inventore vertitaist et quasi artichitecto</p>
                            </div>

                            <div className="hi ">
                                <img src={e2} className="cardss-img-top" alt="..." />
                            </div>
                            <div className="hi ">
                                <h4>Online Booking</h4>
                                <p>Qariatureaque ipsa quae a ill inventore vertitaist et quasi artichitecto</p>
                            </div>
                        </div>
                        <div className="btns"><button type="submit">About Us</button></div>
                    </div>
                </div>
            </div><br /><br /><br />

            {/* part 2 */}



            <div className="container-fluid d-flex justify-content-center" id="pink">
                <div className="row" id="out">
                    <div className="col col-sm-12 col-md-12 col-lg-12 text-center">
                        <p className="cta-text">Call To Action</p>
                        <h1 className="cta-heading">Hire Your Next Candidate On Discate</h1>
                        <h6 className="cta-contact">Call Us: +99 698 569 565</h6>
                        <div>
                            <button className="b">Discover More</button>
                        </div>
                    </div>
                </div>
            </div><br /><br /><br />

            {/* part 3 */}

            <div className="container-fluid d-flex justify-content-center" >
                <div className="row g-3">
                    <div class="col col-sm-12 col-md-12 col-lg-12 text-center " id="team">
                        <h4>Our Team</h4>
                        <h2>Meet Our Team</h2>
                    </div><br />
                    <div className="row g-3 ">
                        <div className="col col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center">
                            <div class="card card-bottom-underline" style={{ width: "22rem" }}>
                                <img src={h1} class="card5-img-top" alt="..." />
                                <div class="card-body card-one text-center">
                                    <h3>Cathy Aenderson</h3>
                                    <p>Chief Executive</p>
                                </div>
                            </div>
                        </div>

                        <div className="col col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center">
                            <div class="card card-bottom-underline" style={{ width: "22rem" }}>
                                <img src={h2} class="card5-img-top" alt="..." />
                                <div class="card-body card-one text-center">
                                    <h3>Mike Dooly</h3>
                                    <p>Executive</p>
                                </div>

                            </div>
                        </div>

                        <div className="col col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center">
                            <div class="card card-bottom-underline" style={{ width: "22rem" }}>
                                <img src={h3} class="card5-img-top" alt="..." />
                                <div class="card-body card-one text-center">
                                    <h3>Alextina Jimiey</h3>
                                    <p>Food Inspector</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div><br /><br /><br />

            {/* part 3 /8 */}

            {/* part 4/9 */}

            <div className='container d-flex justify-content-center' id="part">
                <div className='row'>
                    <div className='col col-sm-12 col-md-12 col-lg-12 text-center'>
                        <h4>Happy Customers</h4>
                        <h2>Our Guestbook</h2>
                    </div>
                </div>
            </div><br /><br />


            <div id="carouselWithFlexItems" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-5">
                                    <div class="card card1 " style={{ width: "28rem", height: "500px", position: "relative" }}>
                                        <div class="card-body" style={{ borderLeft: "2px solid red", height: "100%", }}><br /><br />
                                            <h1>James Smith list Specifications 2023</h1><br />
                                            <p>Organizatin throughout the World t manage heire it with our unique approach to
                                                technology solution. Provide users with priate view and access permissions.
                                            </p><br />
                                            <h3>Reson Roy</h3>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-5">
                                    <div class="card cc" style={{ width: "28rem", height: "500px" }}>
                                        <img src={cc1} class="card6-img-top" alt="..." />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-5">
                                    <div class="card card1 " style={{ width: "28rem", height: "500px", position: "relative" }}>
                                        <div class="card-body" style={{ borderLeft: "2px solid red", height: "100%", }}><br /><br />
                                            <h1>James Smith list Specifications 2023</h1><br />
                                            <p>Organizatin throughout the World t manage heire it with our unique approach to
                                                technology solution. Provide users with priate view and access permissions.
                                            </p><br />
                                            <h3>Jason Samoa</h3>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-5">
                                    <div class="card cc" style={{ width: "28rem", height: "500px" }}>
                                        <img src={cc2} class="card6-img-top" alt="..." />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-5">
                                    <div class="card card1 " style={{ width: "28rem", height: "500px", position: "relative" }}>
                                        <div class="card-body" style={{ borderLeft: "2px solid red", height: "100%", }}><br /><br />
                                            <h1>James Smith list Specifications 2023</h1><br />
                                            <p>Organizatin throughout the World t manage heire it with our unique approach to
                                                technology solution. Provide users with priate view and access permissions.
                                            </p><br />
                                            <h3>Clifford Main</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div class="card cc" style={{ width: "28rem", height: "500px" }}>
                                        <img src={cc3} class="card6-img-top" alt="..." />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Carousel Controls */}
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselWithFlexItems" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselWithFlexItems" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div><br /><br /><br /><br /><br /><br />

            {/* part 5/11 */}

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

                    <br/><br/><br/><br/><br/>

                    <div className='col col-sm-12 col-md-12 col-lg-12 text-center'>
                        <hr/>
                        <h6>© Copyright Cafeu. 2024 All Right Reserved</h6>

                    </div>
                </div>
            </div>







        </div>
    )
}
export default About