import './menu.css'
import abg1 from './images/abg1.png'
import ma1 from './images/ma1.png'
import ma2 from './images/ma2.png'
import ma3 from './images/ma3.png'
import ma4 from './images/ma4.png'
import ma5 from './images/ma5.png'
import ma6 from './images/ma6.png'
import ma7 from './images/ma7.png'
import ma8 from './images/ma8.png'
import I1 from './images/I1.png'
import I2 from './images/I2.png'
import g1 from './images/g1.jpeg'
import g4 from './images/g4.jpeg'
import g6 from './images/g6.jpeg'
import g3 from './images/g3.jpeg'



const Menu = () => {
    return (
        <div className="body">
            <div className="container-fluid d-flex justify-content-center" id="imgs">
                <div className='row ' id="poo">
                    <div className='col col-sm-12 col-md-12 col-lg-12 position-relative'>
                        <img src={abg1} className="card-img-top " alt="..." />
                        <h1 className='centered-text'>Menu Page</h1>
                    </div>
                </div>
            </div><br /><br /><br />

            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col col-sm-12 col-md-12 text-center " >
                        <h5 className='five'>Special Menu</h5>
                        <h2 className="te">Our Specials Menu</h2>
                    </div>

                    <div className="row ros ">
                        <div className="col  ">
                            <h5>All Categories</h5>
                        </div>
                        <div className="col  ">
                            <h5>Prech Fish</h5>
                        </div>
                        <div className="col ">
                            <h5>Shrimps</h5>
                        </div>
                        <div className="col  ">
                            <h5>Lobster</h5>
                        </div>
                        <div className="col ">
                            <h5>Red Crab</h5>
                        </div>
                    </div>
                </div>
            </div><br /><br /><br />

            {/* part 2  */}

            <div className="container-fluid d-flex justify-content-center">
                <div className="row g-4">
                    <div className="col col-sm-12 col-md-3 col-lg-3 ">
                        <div class="card cardss" style={{ width: "16rem" }}>
                            <img src={ma1} class="card-imgs-top" alt="..." />
                            <div class="card-body bow text-center">
                                <h5 className='fi'>Grilled Fish</h5>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <p>$13.49 - $10.99</p>
                                <div>
                                    <button className='box'><i class='bx bxs-heart' ></i></button>
                                    <button className='box'><i class='bx bxs-cart'></i></button>
                                    <button className='box'><i class='bx bx-happy-heart-eyes'></i></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col col-sm-12 col-md-3 col-lg-3 ">
                        <div class="card cardss" style={{ width: "16rem" }}>
                            <img src={ma2} class="card-imgs-top" alt="..." />
                            <div class="card-body bow text-center">
                                <h5 className='fi'>Grilled Fish</h5>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <p>$13.49 - $10.99</p>
                                <div>
                                    <button className='box'><i class='bx bxs-heart' ></i></button>
                                    <button className='box'><i class='bx bxs-cart'></i></button>
                                    <button className='box'><i class='bx bx-happy-heart-eyes'></i></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col col-sm-12 col-md-3 col-lg-3 text-center">
                        <div class="card cardss" style={{ width: "16rem" }}>
                            <img src={ma3} class="card-imgs-top" alt="..." />
                            <div class="card-body bow text-center">
                                <h5 className='fi'>Grilled Fish</h5>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <p>$13.49 - $10.99</p>
                                <div>
                                    <button className='box'><i class='bx bxs-heart' ></i></button>
                                    <button className='box'><i class='bx bxs-cart'></i></button>
                                    <button className='box'><i class='bx bx-happy-heart-eyes'></i></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col col-sm-12 col-md-3 col-lg-3 text-center">
                        <div class="card cardss" style={{ width: "16rem" }}>
                            <img src={ma4} class="card-imgs-top" alt="..." />
                            <div class="card-body bow text-center">
                                <h5 className='fi'>Grilled Fish</h5>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <p>$13.49 - $10.99</p>
                                <div>
                                    <button className='box'><i class='bx bxs-heart' ></i></button>
                                    <button className='box'><i class='bx bxs-cart'></i></button>
                                    <button className='box'><i class='bx bx-happy-heart-eyes'></i></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col col-sm-12 col-md-3 col-lg-3">
                        <div class="card cardss" style={{ width: "16rem" }}>
                            <img src={ma5} class="card-imgs-top" alt="..." />
                            <div class="card-body bow text-center">
                                <h5 className='fi'>Grilled Fish</h5>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <p>$13.49 - $10.99</p>
                                <div>
                                    <button className='box'><i class='bx bxs-heart' ></i></button>
                                    <button className='box'><i class='bx bxs-cart'></i></button>
                                    <button className='box'><i class='bx bx-happy-heart-eyes'></i></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col col-sm-12 col-md-3 col-lg-3">
                        <div class="card cardss" style={{ width: "16rem" }}>
                            <img src={ma6} class="card-imgs-top" alt="..." />
                            <div class="card-body bow text-center">
                                <h5 className='fi'>Grilled Fish</h5>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <p>$13.49 - $10.99</p>
                                <div>
                                    <button className='box'><i class='bx bxs-heart' ></i></button>
                                    <button className='box'><i class='bx bxs-cart'></i></button>
                                    <button className='box'><i class='bx bx-happy-heart-eyes'></i></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col col-sm-12 col-md-3 col-lg-3 ">
                        <div class="card cardss " style={{ width: "16rem" }}>
                            <img src={ma7} class="card-imgs-top" alt="..." />
                            <div class="card-body bow text-center">
                                <h5 className='fi'>Grilled Fish</h5>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <p>$13.49 - $10.99</p>
                                <div>
                                    <button className='box'><i class='bx bxs-heart' ></i></button>
                                    <button className='box'><i class='bx bxs-cart'></i></button>
                                    <button className='box'><i class='bx bx-happy-heart-eyes'></i></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col col-sm-12 col-md-3 col-lg-3">
                        <div class="card cardss" style={{ width: "16rem" }}>
                            <img src={ma8} class="card-imgs-top" alt="..." />
                            <div class="card-body bow text-center">
                                <h5 className='fi'>Grilled Fish</h5>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <span className="star" style={{ fontSize: "23px" }}>&#9733;</span>
                                <p>$13.49 - $10.99</p>
                                <div>
                                    <button className='box'><i class='bx bxs-heart' ></i></button>
                                    <button className='box'><i class='bx bxs-cart'></i></button>
                                    <button className='box'><i class='bx bx-happy-heart-eyes'></i></button>
                                </div>
                            </div>
                        </div>
                    </div><br /><br /><br />

                    <div className="container-fluid d-flex justify-content-center ">
                        <div className="row">
                            <div className='col col-sm-12 col-md-12 col-lg-12'>
                                <button className='butts'>Show More</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div><br/><br/><br/><br/>

            {/* footer */}


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
                        <br/>
                        <h6>© Copyright Cafeu. 2024 All Right Reserved</h6>

                    </div>

                </div>

            </div>
















        </div>
    )
}
export default Menu;