import React from 'react';
import { Head } from '@inertiajs/inertia-react';

export default function Welcome(props) {
    return (
        <>
            <Head>
                <link href="FrontTemplate/css/css_slider.css" rel="stylesheet" />
                <link href="FrontTemplate/css/bootstrap.css" rel="stylesheet" type="text/css" />
                <link href="FrontTemplate/css/style.css" rel="stylesheet" type="text/css" />
                <link href="FrontTemplate/css/font-awesome.min.css" rel="stylesheet" />
            </Head>
            <header>
                <div className="container">
                    <nav className="py-3 d-lg-flex">
                    <div id="logo">
                        <h1> <a href="index.html"><span className="fa fa-line-chart" /> ZYONEMANAGEMENT </a></h1>
                    </div>
                    {/* <label htmlFor="drop" className="toggle"><span className="fa fa-bars" /></label>
                    <input type="checkbox" id="drop" /> */}
                    <ul className="menu ml-auto mt-1">
                        {/* <li className="active"><a href="index.html">Home</a></li>
                        <li className><a href="about.html">About Us</a></li>
                        <li className><a href="services.html">Services</a></li>
                        <li className><a href="blog.html">Blog</a></li>
                        <li className><a href="contact.html">Contact</a></li> */}
                        <li className="last-grid"><a href="/login">Mon Espace</a></li>
                    </ul>
                    </nav>
                </div>
            </header>

            <div className="banner" id="home">
            <div className="layer">
                <div className="container">
                <div className="banner-text-w3pvt">
                    {/* banner slider*/}
                    <div className="csslider infinity" id="slider1">
                    <input type="radio" name="slides" defaultChecked="checked" id="slides_1" />
                    <input type="radio" name="slides" id="slides_2" />
                    <input type="radio" name="slides" id="slides_3" />
                    <ul className="banner_slide_bg">
                        <li>
                        <div className="w3ls_banner_txt">
                            <h2 className="b-w3ltxt text-capitalize mt-md-4">Corporate <span>Business</span> </h2>
                            <h4 className="b-w3ltxt text-capitalize">Best Technology Demand</h4>
                            <p className="w3ls_pvt-title my-3">onec consequat sapien ut leo cursus rhoncus. Nullam dui mi, vulputate ac metus semper Nullam dui mi.
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubiliacurae, Curabitur quis luctus lectus.
                            Morbi at dui nisl.</p>
                            <a href="/" className="btn btn-banner my-sm-3 mr-2">Read More</a>
                            <a href="/login" className="btn btn-banner1 my-sm-3">Mon Espace</a>
                        </div>
                        </li>
                        <li>
                        <div className="w3ls_banner_txt">
                            <h3 className="b-w3ltxt text-capitalize mt-md-4">Corporate <span>Business</span> </h3>
                            <h4 className="b-w3ltxt text-capitalize">Best Technology Demand</h4>
                            <p className="w3ls_pvt-title my-3">onec consequat sapien ut leo cursus rhoncus. Nullam dui mi, vulputate ac metus semper Nullam dui mi.
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubiliacurae, Curabitur quis luctus lectus.
                            Morbi at dui nisl.</p>
                            <a href="services.html" className="btn btn-banner my-sm-3 mr-2">Read More</a>
                            <a href="contact.html" className="btn btn-banner1 my-sm-3">Get Started</a>
                        </div>
                        </li>
                        <li>
                        <div className="w3ls_banner_txt">
                            <h3 className="b-w3ltxt text-capitalize mt-md-4">Corporate <span>Business</span> </h3>
                            <h4 className="b-w3ltxt text-capitalize">Best Technology Demand</h4>
                            <p className="w3ls_pvt-title my-3">onec consequat sapien ut leo cursus rhoncus. Nullam dui mi, vulputate ac metus semper Nullam dui mi.
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubiliacurae, Curabitur quis luctus lectus.
                            Morbi at dui nisl.</p>
                            <a href="services.html" className="btn btn-banner my-sm-3 mr-2">Read More</a>
                            <a href="contact.html" className="btn btn-banner1 my-sm-3">Get Started</a>
                        </div>
                        </li>
                    </ul>
                    <div className="navigation">
                        <div>
                        <label htmlFor="slides_1" />
                        <label htmlFor="slides_2" />
                        <label htmlFor="slides_3" />
                        </div>
                    </div>
                    </div>
                    {/* //banner slider*/}
                </div>
                </div>
            </div>
            </div>

            <section className="other_services pt-5">
            <div className="container py-lg-5 py-sm-3">
                <h3 className="heading mb-sm-5 mb-4">A wide range<strong> of our services </strong></h3>
                <div className="row">
                <div className="col-lg-4 col-md-6 mb-5">
                    <div className="bg-white grid">
                    <img src="FrontTemplate/images/s1.jpg" alt className="img-fluid" />
                    <div className="info p-4">
                        <h4 className>Personal Business</h4>
                        <p className="my-3">Onec consequat sapien ut amet leo cursus rhoncus. Nullam dui mi....</p>
                        <a href="#">Read More </a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-5">
                    <div className="bg-white grid">
                    <img src="FrontTemplate/images/s2.jpg" alt className="img-fluid" />
                    <div className="info p-4">
                        <h4 className>Trade Marketing</h4>
                        <p className="my-3">Onec consequat sapien ut amet leo cursus rhoncus. Nullam dui mi....</p>
                        <a href="#">Read More </a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-5">
                    <div className="bg-white grid">
                    <img src="FrontTemplate/images/s3.jpg" alt className="img-fluid" />
                    <div className="info p-4">
                        <h4 className>IT Management</h4>
                        <p className="my-3">Onec consequat sapien ut amet leo cursus rhoncus. Nullam dui mi....</p>
                        <a href="#">Read More </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>

            <section className="products py-5">
            <div className="container py-lg-5 py-3">
                <h3 className="heading mb-md-5 mb-4">Our Marketing <strong>Products</strong></h3>
                <div className="row products_grids text-center">
                <div className="col-md-3 col-6 grid4 mb-md-0 mb-4">
                    <div className="prodct1">
                    <a href="#">
                        <span className="fa fa-print" />
                        <h3 className="mt-2"> consulting</h3>
                        <span className="fas fa-long-arrow-alt-right" />
                    </a>
                    </div>
                </div>
                <div className="col-md-3 col-6 grid5 mb-md-0 mb-4">
                    <div className="prodct1">
                    <a href="#">
                        <span className="fa fa-newspaper-o" />
                        <h3 className="mt-2">Marketing</h3>
                        <span className="fas fa-long-arrow-alt-right" />
                    </a>
                    </div>
                </div>
                <div className="col-md-3 col-6 grid6">
                    <div className="prodct1">
                    <a href="#">
                        <span className="fa fa-unlock" />
                        <h3 className="mt-2">IT Software</h3>
                        <span className="fas fa-long-arrow-alt-right" />
                    </a>
                    </div>
                </div>
                <div className="col-md-3 col-6 grid7">
                    <div className="prodct1">
                    <a href="#">
                        <span className="fa fa-product-hunt" />
                        <h3 className="mt-2">Cloud Technology</h3>
                        <span className="fas fa-long-arrow-alt-right" />
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </section>

            <section className="middlesection-w3pvt">
            <div className="layer py-5">
                <div className="container py-lg-5 py-3">
                <h3 className="heading mb-md-5 mb-4">Our <strong>statistical growth</strong></h3>
                <div className="row">
                    <div className="col-lg-8 left-build-wthree aboutright-w3pvtwthree text-lg-left text-center">
                    <div className="row">
                        <div className="col-sm-3 col-6 w3layouts_stats_left w3_counter_grid">
                        <span className="fa fa-credit-card" />
                        <p className="counter">1568</p>
                        <p className="para-text-w3ls">Partners</p>
                        </div>
                        <div className="col-sm-3 col-6 w3layouts_stats_left w3_counter_grid2">	
                        <span className="fa fa-users" />
                        <p className="counter">1900</p>
                        <p className="para-text-w3ls">Customers</p>
                        </div>
                        <div className="col-sm-3 col-6 w3layouts_stats_left w3_counter_grid1 mt-md-0 mt-4">
                        <span className="fa fa-dollar" />
                        <p className="counter">1422</p>
                        <p className="para-text-w3ls">Projects</p>
                        </div>
                        <div className="col-sm-3 col-6 w3layouts_stats_left w3_counter_grid1 mt-md-0 mt-4">
                        <span className="fa fa-users" />
                        <p className="counter">400</p>
                        <p className="para-text-w3ls">Employees</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 text-lg-left text-stat text-center mt-lg-0 mt-4">
                    <h4 className> Vestibulum ante ipsum int primis faucibus orci luctus et ultrices posue elit</h4>
                    </div>
                </div>
                </div>
            </div>
            </section>

            <footer className="footer py-md-5 pt-4 pb-5">
            <div className="container pt-4">
                <div className="row">
                <div className="col-lg-3 col-sm-6 footer-top">
                    <h4 className="mb-sm-4 mb-3 w3f_title">Contact Info</h4>
                    <ul className="list-w3">
                    <li><span className="fa mr-1 fa-map-marker" />2130 Fulton Street, San Diego, CA 94117-1080 USA</li>
                    <li className="my-2"><span className="fa mr-1 fa-phone" />1-600-1234-567</li>
                    <li className="my-2"><span className="fa mr-1 fa-phone" />1-600-1234-567</li>
                    <li className><span className="fa mr-1 fa-envelope" /><a href="mailto:info@example.com">info@example.com</a></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-sm-6 footv3-left mt-sm-0 mt-4">
                    <h4 className="mb-sm-4 mb-3 w3f_title"> Our Platforms</h4>
                    <ul className="list-w3">
                    <li className="my-2">
                        <a href="about.html">
                        Digital Trade Marketing
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="features.html">
                        Software Development
                        </a>
                    </li>
                    <li className="my-2">
                        <a href="projects.html">
                        Cloud Marketing
                        </a>
                    </li>
                    <li className="my-2">
                        <a href="blogs.html">
                        Business Intelligence
                        </a>
                    </li>
                    <li>
                        <a href="contact.html">
                        Modern Technology
                        </a>
                    </li>
                    </ul>
                </div>
                <div className="col-lg-2 col-sm-4 mt-lg-0 mt-sm-5 mt-4">
                    <h4 className="mb-sm-4 mb-3 w3f_title">Media Center</h4>
                    <ul className="list-w3">
                    <li className="my-2">
                        <a href="#">
                        Press Release
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="features.html">
                        Vision &amp; Values
                        </a>
                    </li>
                    <li className="my-2">
                        <a href="security.html">
                        Winning Awards
                        </a>
                    </li>
                    <li className="my-2">
                        <a href="pricing.html">
                        Networking
                        </a>
                    </li>
                    </ul>
                </div>
                <div className="col-lg-2 col-sm-4 mt-lg-0 mt-sm-5 mt-4">
                    <h4 className="mb-sm-4 mb-3 w3f_title">Resources</h4>
                    <ul className="list-w3">
                    <li className="my-2">
                        <a href="#">
                        24/7 Help Line
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#">
                        Nearest Branch
                        </a>
                    </li>
                    <li className="my-2">
                        <a href="#">
                        Guidance
                        </a>
                    </li>
                    <li className="my-2">
                        <a href="#">
                        Download
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        Mobile App
                        </a>
                    </li>
                    </ul>
                </div>
                <div className="col-lg-2 col-sm-4 mt-lg-0 mt-sm-5 mt-4">
                    <h4 className="mb-4 w3f_title">Other Links</h4>
                    <ul className="list-w3">
                    <li className="my-2">
                        <a href="services.html">
                        Our Services
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="about.html">
                        About Us
                        </a>
                    </li>
                    <li className="my-2">
                        <a href="blog.html">
                        Company Blog
                        </a>
                    </li>
                    <li className="my-2">
                        <a href="contact.html">
                        Contact Us
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            {/* //footer bottom */}
            </footer>




        </>
    );
}
