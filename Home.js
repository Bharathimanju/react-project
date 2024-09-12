import './home.css'
import c1 from './images/c1.jpeg'
import c2 from './images/c2.jpeg'
import c3 from './images/c3.jpeg'
import c4 from './images/c4.jpeg'
import a1 from './images/a1.png'
import a2 from './images/a2.jpg'
import a3 from './images/a3.png'
import a4 from './images/a4.png'
import d1 from './images/d1.jpeg'
import e1 from './images/e1.jpeg'
import e2 from './images/e2.jpeg'
import f1 from './images/f1.jpeg'
import f2 from './images/f2.jpeg'
import f3 from './images/f3.jpeg'
import f4 from './images/f4.jpeg'
import f5 from './images/f5.jpeg'
import f6 from './images/f6.jpeg'
import f7 from './images/f7.jpeg'
import g1 from './images/g1.jpeg'
import g2 from './images/g2.jpeg'
import g3 from './images/g3.jpeg'
import g4 from './images/g4.jpeg'
import g5 from './images/g5.jpeg'
import g6 from './images/g6.jpeg'
import app1 from './images/app1.jpeg'
import app2 from './images/app2.jpeg'
import photo1 from './images/photo1.png'
import photo2 from './images/photo2.png'
import h1 from './images/h1.png'
import h2 from './images/h2.png'
import h3 from './images/h3.png'
import cc1 from './images/cc1.png'
import cc2 from './images/cc2.png'
import cc3 from './images/cc3.png'
import I1 from './images/I1.png'
import I2 from './images/I2.png'
import I3 from './images/I3.png'





const Home = () => {
    return (
        <div><br />
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">

                        <img src={c1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={c2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={c3} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={c4} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div><br /><br />

            <div className='container-fluid d-flex justify-content-center'  >
                <div className="row g-3 ">
                    <div className=" col-sm-12 col-md-3 col-lg-3 d-flex justify-content-center">
                        <div class="card" style={{ width: "16rem" }} id="box1">
                            <img src={a1} class="cards-img-top" alt="..." style={{ height: "100px", width: "100px", alignItems: "center" }} />
                            <div class="card-body" id="one">
                                <h4>100% Swiss Quality</h4>
                                <p>lorem ipsum dol consectetur adipising elit, sed eiumdes temor incidenuts ut labr dole
                                    manaa aliqua
                                </p>
                                <strong>Discover More</strong>
                            </div>
                        </div>
                    </div>

                    <div className=" col-sm-12 col-md-3 col-lg-3 d-flex justify-content-center">
                        <div class="card" style={{ width: "16rem" }} id="box1">
                            <img src={a2} class="cards-img-top" alt="..." style={{ height: "100px", width: "100px", alignItems: "center" }} />
                            <div class="card-body" id="one">
                                <h4>Organic Production</h4>
                                <p>lorem ipsum dol consectetur adipising elit, sed eiumdes temor incidenuts ut labr dole
                                    manaa aliqua
                                </p>
                                <strong>Discover More</strong>
                            </div>
                        </div>
                    </div>

                    <div className=" col-sm-12 col-md-3 col-lg-3 d-flex justify-content-center">
                        <div class="card" style={{ width: "16rem" }} id="box1">
                            <img src={a3} class="cards-img-top" alt="..." style={{ height: "100px", width: "100px", alignItems: "center" }} />
                            <div class="card-body" id="one">
                                <h4>Food Law Certified</h4>
                                <p>lorem ipsum dol consectetur adipising elit, sed eiumdes temor incidenuts ut labr dole
                                    manaa aliqua
                                </p>
                                <strong>Discover More</strong>
                            </div>
                        </div>
                    </div>

                    <div className=" col-sm-12 col-md-3 col-lg-3 d-flex justify-content-center">
                        <div class="card " style={{ width: "16rem" }} id="box1" >
                            <img src={a4} class="cards-img-top" alt="..." style={{ height: "100px", width: "100px", alignItems: "center" }} />
                            <div class="card-body" id="one">
                                <h4>Food Porduction</h4>
                                <p>lorem ipsum dol consectetur adipising elit, sed eiumdes temor incidenuts ut labr dole
                                    manaa aliqua
                                </p>
                                <strong>Discover More</strong>
                            </div>
                        </div>
                    </div>


                </div>
            </div> <br /><br /><br />

            {/* pard 3 */}
            <div className="container-fluid d-flex justify-content-center" id="back">
                <div className="row g-4" style={{ marginTop: '25px', marginBottom: '45px' }}>
                    <div className="col col-sm-12 col-md-6 col-lg-6">
                        <h4>Stay Informed About Special Offers</h4>
                        <p>For Exclusive Deals, Coupons, News and More!!</p>
                    </div>

                    <div className="col col-sm-12 col-md-6 col-lg-6 ">
                        <form>
                            <input type="text" placeholder="Enter your Email" className="input"></input>
                            <button className="bt" type="submit">submit</button>
                        </form>
                    </div>
                </div>
            </div><br /><br /><br />

            {/* pard 4 */}

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
            </div><br /><br /><br /><br />

            {/* .......................................................................................... */}

            {/* part 5 */}

            <div className="container-fluid d-flex justify-content-center" id="white">
                <div className="row g-4">

                    <div className="col-12 text-center">
                        <h5>Special Menu</h5>
                        <h3>Our Special Menu</h3>
                    </div>


                    <div className="row g-3 counts d-flex justify-content-center" id="two">
                        <div className=" col col-sm-4 col-md-3 col-lg-2">
                            <div className="cou text-center">
                                <img src={f1} className="cardsse-img-top" alt="..." />
                                <h4>All</h4>
                            </div>
                        </div>
                        <div className="col col-sm-4 col-md-3 col-lg-2">
                            <div className="cou text-center">
                                <img src={f2} className="cardsse-img-top" alt="..." />
                                <h4>Pizza</h4>
                            </div>
                        </div>
                        <div className=" col col-sm-4 col-md-5 col-lg-2">
                            <div className="cou text-center">
                                <img src={f3} className="cardsse-img-top" alt="..." />
                                <h4>Asian</h4>
                            </div>
                        </div>
                        <div className="col col-sm-4 col-md-5 col-lg-2">
                            <div className="cou text-center ">
                                <img src={f4} className="cardsse-img-top" alt="..." />
                                <h4>Burger</h4>
                            </div>
                        </div>
                        <div className="col col-sm-4 col-md-3 col-lg-2">
                            <div className="cou text-center">
                                <img src={f5} className="cardsse-img-top" alt="..." />
                                <h4>Salad</h4>
                            </div>
                        </div>
                        <div className=" col col-sm-4 col-md-3 col-lg-2">
                            <div className="cou text-center">
                                <img src={f6} className="cardsse-img-top" alt="..." />
                                <h4>Bakery</h4>
                            </div>
                        </div>
                        <div className=" col col-sm-4 col-md-3 col-lg-2">
                            <div className="cou text-center">
                                <img src={f7} className="cardsse-img-top" alt="..." />
                                <h4>Drink</h4>
                            </div>
                        </div>
                    </div>
                    <div></div>



                    <div className="container-fluid">
                        <div className="row d-flex justify-content-center g-3">

                            <div className="col col-sm-12 col-md-3 col-lg-4 d-flex justify-content-center" id="style"><br />
                                <div class="card car" style={{ width: "20rem" }}>
                                    <div className="ims">
                                        <img src={g1} class="card1-img-top" alt="..." />
                                        <p className="p1">$9.99</p>

                                    </div>

                                    <div class="card-body">
                                        <h4>Margherita Pizza</h4>
                                        <p>Lorem ipsum dolor sit amet, cnsecttert adipiscing elit. numc tellus trupis</p>
                                        <div className='d-flex justify-content-between'>
                                            <div className='of'><p>Delivery Fee :$10</p></div>
                                            <div className='off'><button>+</button><button>cr</button></div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col col-sm-12 col-md-3 col-lg-4 d-flex justify-content-center " id="style"><br />
                                <div class="card car" style={{ width: "20rem" }}>
                                    <div className="ims">
                                        <img src={g2} class="card1-img-top" alt="..." />
                                        <p className="p1">$11.99</p>

                                    </div>

                                    <div class="card-body">
                                        <h4>Chicken Alfredo</h4>
                                        <p>Lorem ipsum dolor sit amet, cnsecttert adipiscing elit. numc tellus trupis</p>
                                        <div className='d-flex justify-content-between'>
                                            <div className='of'><p>Delivery Fee :$10</p></div>
                                            <div className='off'><button>+</button><button>cr</button></div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col col-sm-12 col-md-3 col-lg-4 d-flex justify-content-center" id="style"><br />
                                <div class="card cars" style={{ width: "20rem" }}>
                                    <div className="ims">
                                        <img src={g3} class="card1-img-top" alt="..." />
                                        <p className="p1">$10.99</p>
                                    </div>

                                    <div class="card-body">
                                        <h4>Caesar Salad</h4>
                                        <p>Lorem ipsum dolor sit amet, cnsecttert adipiscing elit. numc tellus trupis</p>
                                        <div className='d-flex justify-content-between'>
                                            <div className='of'><p>Delivery Fee :$10</p></div>
                                            <div className='off'><button>+</button><button>cr</button></div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col col-sm-12 col-md-3 col-lg-4 d-flex justify-content-center" id="style"><br />
                                <div class="card car" style={{ width: "20rem" }}>
                                    <div className="ims">
                                        <img src={g4} class="card1-img-top" alt="..." />
                                        <p className="p1">$10.99</p>

                                    </div>

                                    <div class="card-body">
                                        <h4>Coleslaw</h4>
                                        <p>Lorem ipsum dolor sit amet, cnsecttert adipiscing elit. numc tellus trupis</p>
                                        <div className='d-flex justify-content-between'>
                                            <div className='of'><p>Delivery Fee :$10</p></div>
                                            <div className='off'><button>+</button><button>cr</button></div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col col-sm-12 col-md-3 col-lg-4 d-flex justify-content-center" id="style"><br />
                                <div class="card car" style={{ width: "20rem" }}>
                                    <div className="ims">
                                        <img src={g5} class="card1-img-top" alt="..." />
                                        <p className="p1">$10.99</p>

                                    </div>

                                    <div class="card-body">
                                        <h4>Chocolate Brownie</h4>
                                        <p>Lorem ipsum dolor sit amet, cnsecttert adipiscing elit. numc tellus trupis</p>
                                        <div className='d-flex justify-content-between'>
                                            <div className='of'><p>Delivery Fee :$10</p></div>
                                            <div className='off'><button>+</button><button>cr</button></div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col col-sm-12 col-md-3 col-lg-4 d-flex justify-content-center" id="style"><br />
                                <div class="card car" style={{ width: "20rem" }}>
                                    <div className="ims">
                                        <img src={g6} class="card1-img-top" alt="..." />
                                        <p className="p1">$10.99</p>

                                    </div>

                                    <div class="card-body">
                                        <h4>Vegetable Stir-Fry</h4>
                                        <p>Lorem ipsum dolor sit amet, cnsecttert adipiscing elit. numc tellus trupis</p>
                                        <div className='d-flex justify-content-between'>
                                            <div className='of'><p>Delivery Fee :$10</p></div>
                                            <div className='off'><button>+</button><button>cr</button></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br /><br /><br /><br />

            {/* .................................................................................. */}

            {/* part 6 */}

            <div className=" container d-flex justify-content-center" id="rose">
                <div className="row d-flex justify-content-center g-2" id="flower">
                    <div className=" col col-sm-12 col-md-6 col-lg-6 ">
                        <h1>Simple Way to Order Your Food Faster</h1><br />
                        <p>Nowadays more and more people are choosing to have a meal out in a restaurant.
                            There a re several reasons for this. One of them is a desire to spend better time in a comfortable atmosphere rather
                            than prepare food at home. But it’s highly important for restaurant lovers not to forget about table manners speaking
                            nothing about the right way to order food.
                        </p><br />
                        <div className="row g-2 d-flex justify-content-center">
                            <div className="col col-sm-12 col-md-6 cl-lg-6">
                                <img src={app1} class="card2-img-top" alt="..." />
                            </div>

                            <div className="col col-sm-6 col-md-6 cl-lg-6">
                                <img src={app2} class="card2-img-top" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-6 col-md-3 col-lg-3">
                        <img src={photo1} class="card3-img-top" alt="..." />
                    </div>

                    <div className="col col-sm-6 col-md-3 col-lg-3">
                        <img src={photo2} class="card4-img-top" alt="..." />
                    </div>

                </div>
            </div><br /><br /><br /><br /><br /><br />

            {/* part7 */}

            <div className="container-fluid d-flex justify-content-center" id="green">
                <div class="row g-3" id="tree">
                    <div className="col col-sm-12 col-md-6 col-lg-6">
                        <h1>We Have Excellent Of Quality
                            Japanese Food</h1><br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore </p>

                    </div>
                    <div className="col col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center" id="o">
                        <div className="t">
                            <h5>Opening Times</h5>
                            <h2>Check Availability</h2><br />

                            <div className="between">
                                <p>Sunday to Tuesday</p>
                                <p>09:00 - 06:00</p>
                            </div>
                            <div className="between">
                                <p>Friday to Sunday</p>
                                <p>06:00 - 09:00</p>
                            </div>
                            <div className="between">
                                <p>Sunday to Tuesday</p>
                                <p>09:00 - 06:00</p>
                            </div>
                            <div className="between">
                                <p>Monday to Friday</p>
                                <p>06:00 - 09:00</p>
                            </div>
                            <div className="between">
                                <p>Monday to Saturday</p>
                                <p>09:00 - 06:00</p>
                            </div><br />

                            <div className="ce">
                                <h5>Call Us Now</h5>
                                <h5>+993240-765230</h5>
                            </div><br />

                        </div>
                    </div>
                </div>
            </div><br /><br /><br />

            {/* part 8 */}
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

            {/* part 9 */}
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

            {/* part 10 */}


            <div className="container-fluid d-flex justify-content-center" id="yellow">
                <div className="row g-3" id="color">
                    <div className="col col-sm-12 col-md-12 col-lg-12 text-center">
                        <h4 className="colorss">News &-Blog</h4>
                        <h2>Latest News</h2>
                    </div><br /><br /><br />

                    <div className="row g-3">
                        <div className="col col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center">
                            <div class="card cap" style={{ width: "22rem" }}>
                                <img src={I1} class="card7-img-top" alt="..." />
                                <div class="card-body ">
                                    <h4>New Restaurant Town Our Ple Award Contract</h4>
                                    <p className="carr">Drive your bisiness and manage risks with a global industry leader.</p>
                                    <hr />
                                    <div className="do d-flex justify-content-between">
                                        <p>Aug 1,2023-comments</p>
                                        <p id="pp">Read More</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center">
                            <div class="card cap" style={{ width: "22rem" }}>
                                <img src={I2} class="card7-img-top" alt="..." />
                                <div class="card-body ">
                                    <h4>Greek yogurt breakfast bowls ple Award contract</h4>
                                    <p className="carr">Drive your bisiness and manage risks with a global industry leader.</p>
                                    <hr />
                                    <div className="do d-flex justify-content-between">
                                        <p>Jun 14,2023-comments</p>
                                        <p id="pp">Read More</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center">
                            <div class="card cap" style={{ width: "22rem" }}>
                                <img src={I3} class="card7-img-top" alt="..." />
                                <div class="card-body ">
                                    <h4>Make Authentic Italian Margherita Pizza at Home</h4>
                                    <p className="carr">Drive your bisiness and manage risks with a global industry leader.</p>
                                    <hr />
                                    <div className="do d-flex justify-content-between">
                                        <p>Aug 1,2023-comments</p>
                                        <p id="pp">Read More</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br /><br /><br />

            {/* part 11 */}

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

export default Home