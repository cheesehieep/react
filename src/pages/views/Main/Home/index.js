import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/scrollbar/scrollbar.scss';
import {Link} from 'react-router-dom'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Home = ({products, posts}) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
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
            </Swiper>
            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="title-section mb-5 col-12">
                            <h2 className="text-uppercase">Popular Products</h2>
                        </div>
                    </div>
                    <div className="row">
                        {products.map(({ id, name, image, price }) => (
                            <div className="col-lg-4 col-md-6 item-entry mb-4">
                                <Link to={`/product/${id}`} className="product-item md-height bg-gray d-block">
                                    <img src={image} alt="Image" className="img-fluid" />
                                </Link>
                                <h2 className="item-title"><Link to={`/product/${id}`}>{name}</Link></h2>
                                <strong className="item-price">${price}</strong>
                                <div className="star-rating">
                                    <span className="icon-star2 text-warning" />
                                    <span className="icon-star2 text-warning" />
                                    <span className="icon-star2 text-warning" />
                                    <span className="icon-star2 text-warning" />
                                    <span className="icon-star2 text-warning" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="site-section">
                <div className="container">
                    <div className="row">
                    <div className="title-section text-center mb-5 col-12">
                        <h2 className="text-uppercase">Most Post</h2>
                    </div>
                    </div>
                    <div className="row">
                        {posts.map(({ id, name, image, description, content, date }) => (
                            <div className="col-md-4 block-3">
                                <div className="nonloop-block-3">
                                    <div className="item">
                                        <div className="item-entry">
                                        <Link to={`/post/${id}`} className="product-item md-height bg-gray d-block">
                                            <img src={image} alt="Image" className="img-fluid" />
                                        </Link>
                                        <h2 className="item-title-blog"><Link to={`/post/${id}`}><strong>{name}</strong></Link></h2>
                                        <small><i class="far fa-clock"></i> {date}</small><br />
                                        <p className="item-title-description">{description}</p>
                                        </div>
                                    </div>   
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

Home.propTypes = {

}

export default Home
