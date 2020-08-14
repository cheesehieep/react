import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const About = props => {
    return (
        <div>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                <SwiperSlide>
                    <div className="site-blocks-cover">
                        <div className="container">
                            <div className="row">
                            <div className="col-md-6 ml-auto order-md-2 align-self-start">
                                <div className="site-block-cover-content">
                                <h2 className="sub-title">#New Summer Collection 2019</h2>
                                <h1>Arrivals Sales</h1>
                                <p><a href="#" className="btn btn-black rounded-0">Shop Now</a></p>
                                </div>
                            </div>
                            <div className="col-md-6 order-1 align-self-end">
                                <img src="/images/model_3.png" alt="Image" className="img-fluid" />
                            </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="site-blocks-cover">
                        <div className="container">
                            <div className="row">
                            <div className="col-md-6 ml-auto order-md-2 align-self-start">
                                <div className="site-block-cover-content">
                                <h2 className="sub-title">#New Summer Collection 2019</h2>
                                <h1>Arrivals Sales</h1>
                                <p><a href="#" className="btn btn-black rounded-0">Shop Now</a></p>
                                </div>
                            </div>
                            <div className="col-md-6 order-1 align-self-end">
                                <img src="/images/model_1.png" alt="Image" className="img-fluid" />
                            </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="site-blocks-cover">
                        <div className="container">
                            <div className="row">
                            <div className="col-md-6 ml-auto order-md-2 align-self-start">
                                <div className="site-block-cover-content">
                                <h2 className="sub-title">#New Summer Collection 2019</h2>
                                <h1>Arrivals Sales</h1>
                                <p><a href="#" className="btn btn-black rounded-0">Shop Now</a></p>
                                </div>
                            </div>
                            <div className="col-md-6 order-1 align-self-end">
                                <img src="/images/model_2.png" alt="Image" className="img-fluid" />
                            </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="custom-border-bottom py-3">
                <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-0"><Link to="/">Home</Link> <span className="mx-2 mb-0">/</span> <strong className="text-black">About</strong></div>
                </div>
                </div>
            </div>
            <div className="site-section site-section-sm site-blocks-1 border-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4">
                            <div className="icon mr-4 align-self-start">
                            <span className="icon-truck" />
                            </div>
                            <div className="text">
                            <h2 className="text-uppercase">Free Shipping</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4">
                            <div className="icon mr-4 align-self-start">
                            <span className="icon-refresh2" />
                            </div>
                            <div className="text">
                            <h2 className="text-uppercase">Free Returns</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4">
                            <div className="icon mr-4 align-self-start">
                            <span className="icon-help" />
                            </div>
                            <div className="text">
                            <h2 className="text-uppercase">Customer Support</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section custom-border-bottom">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-6">
                            <div className="block-16">
                            <figure>
                                <img src="images/blog_1.jpg" alt="Image placeholder" className="img-fluid rounded" />
                                <a href="#" className="play-button popup-vimeo"><span className="icon-play" /></a>
                            </figure>
                            </div>
                        </div>
                        <div className="col-md-1" />
                        <div className="col-md-5">
                            <div className="site-section-heading pt-3 mb-4">
                                <h2 className="text-black">How We Started</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius repellat, dicta at laboriosam, nemo exercitationem itaque eveniet architecto cumque, deleniti commodi molestias repellendus quos sequi hic fugiat asperiores illum. Atque, in, fuga excepturi corrupti error corporis aliquam unde nostrum quas.</p>
                            <p>Accusantium dolor ratione maiores est deleniti nihil? Dignissimos est, sunt nulla illum autem in, quibusdam cumque recusandae, laudantium minima repellendus.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section custom-border-bottom">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-7 site-section-heading text-center pt-4">
                            <h2>The Team</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="block-38 text-center">
                            <div className="block-38-img">
                                <div className="block-38-header">
                                <img src="/images/person_1.jpg" alt="Image placeholder" className="mb-4" />
                                <h3 className="block-38-heading h4">Elizabeth Graham</h3>
                                <p className="block-38-subheading">CEO/Co-Founder</p>
                                </div>
                                <div className="block-38-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="block-38 text-center">
                            <div className="block-38-img">
                                <div className="block-38-header">
                                <img src="/images/person_2.jpg" alt="Image placeholder" className="mb-4" />
                                <h3 className="block-38-heading h4">Jennifer Greive</h3>
                                <p className="block-38-subheading">Co-Founder</p>
                                </div>
                                <div className="block-38-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="block-38 text-center">
                            <div className="block-38-img">
                                <div className="block-38-header">
                                <img src="/images/person_3.jpg" alt="Image placeholder" className="mb-4" />
                                <h3 className="block-38-heading h4">Patrick Marx</h3>
                                <p className="block-38-subheading">Marketing</p>
                                </div>
                                <div className="block-38-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="block-38 text-center">
                            <div className="block-38-img">
                                <div className="block-38-header">
                                <img src="/images/person_4.jpg" alt="Image placeholder" className="mb-4" />
                                <h3 className="block-38-heading h4">Mike Coolbert</h3>
                                <p className="block-38-subheading">Sales Manager</p>
                                </div>
                                <div className="block-38-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

About.propTypes = {

}

export default About
