import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import {Link, useParams} from 'react-router-dom'
import productApi from '../../../../api/productApi'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ShopByCate = ({categories, products}) => {
    let { id } = useParams();
    const productsByCate = products.filter(product => product.cate_id === id);
    const [filter, setFilter] = useState([]);

    const onHandleChange = (e) => {
        const data = e.target.value;
        setFilter(data);
    }

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
            <div className="custom-border-bottom py-3">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12 mb-0"><Link to="/">Home</Link> <span className="mx-2 mb-0">/</span> <strong className="text-black">Shop</strong></div>
                    </div>
                </div>
            </div>
            <div className="site-section">
                <div className="container">
                    <div className="row mb-5">
                    <div className="col-md-9 order-1">
                        <div className="row align">
                        <div className="col-md-12 mb-5">
                            <div className="float-md-left"><h2 className="text-black h5">Shop All</h2></div>
                            <div className="d-flex flex-row-reverse">
                                <input value={filter} onChange={onHandleChange} placeholder="Search something..." className="input-filter"/>
                            </div>
                        </div>
                        </div>
                        <div className="row mb-5">
                            {productsByCate.map(({ id, cate_id, name, image, price }) => {
                                if(filter.length !== 0) {
                                    const newName = name.toLocaleLowerCase();
                                    if(newName.startsWith(filter)) {
                                        return <div className="col-lg-6 col-md-6 item-entry mb-4">
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
                                    }else {
                                        return null
                                    }
                                }
                                return <div className="col-lg-6 col-md-6 item-entry mb-4">
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
                            })}
                        </div>
                        {/* <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="site-block-27">
                            <ul>
                                <li><a href="#">&lt;</a></li>
                                <li className="active"><span>1</span></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li><a href="#">&gt;</a></li>
                            </ul>
                            </div>
                            
                        </div>
                        </div> */}
                    </div>
                    <div className="col-md-3 order-2 mb-5 mb-md-0">
                        <div className="border p-4 rounded mb-4">
                        <h3 className="mb-3 h6 text-uppercase text-black d-block">Categories</h3>
                        <ul className="list-unstyled mb-0">
                            {categories.map(({ id, name }) => {
                                const total = products.filter(product => product.cate_id == id);
                                return <li className="mb-1">
                                    <Link to={`/shop/${id}`} className="d-flex">
                                        <span>{name}</span> 
                                        <span className="text-black ml-auto">({total.length})</span>
                                    </Link>
                                </li>
                            })}
                        </ul>
                        </div>
                        <div className="border p-4 rounded mb-4">
                        {/* <div className="mb-4">
                            <h3 className="mb-3 h6 text-uppercase text-black d-block">Filter by Price</h3>
                            <div id="slider-range" className="border-primary" />
                            <input type="text" name="text" id="amount" className="form-control border-0 pl-0 bg-white" disabled />
                        </div> */}
                        <div className="mb-4">
                            <h3 className="mb-3 h6 text-uppercase text-black d-block">Size</h3>
                            <label htmlFor="s_sm" className="d-flex">
                            <input type="checkbox" id="s_sm" className="mr-2 mt-1" /> <span className="text-black">Small (2,319)</span>
                            </label>
                            <label htmlFor="s_md" className="d-flex">
                            <input type="checkbox" id="s_md" className="mr-2 mt-1" /> <span className="text-black">Medium (1,282)</span>
                            </label>
                            <label htmlFor="s_lg" className="d-flex">
                            <input type="checkbox" id="s_lg" className="mr-2 mt-1" /> <span className="text-black">Large (1,392)</span>
                            </label>
                        </div>
                        <div className="mb-4">
                            <h3 className="mb-3 h6 text-uppercase text-black d-block">Color</h3>
                            <a href="#" className="d-flex color-item align-items-center">
                            <span className="bg-danger color d-inline-block rounded-circle mr-2" /> <span className="text-black">Red (2,429)</span>
                            </a>
                            <a href="#" className="d-flex color-item align-items-center">
                            <span className="bg-success color d-inline-block rounded-circle mr-2" /> <span className="text-black">Green (2,298)</span>
                            </a>
                            <a href="#" className="d-flex color-item align-items-center">
                            <span className="bg-info color d-inline-block rounded-circle mr-2" /> <span className="text-black">Blue (1,075)</span>
                            </a>
                            <a href="#" className="d-flex color-item align-items-center">
                            <span className="bg-primary color d-inline-block rounded-circle mr-2" /> <span className="text-black">Purple (1,075)</span>
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="site-section">
                <div className="container">
                    <div className="title-section mb-5">
                    <h2 className="text-uppercase"><span className="d-block">Discover</span> The Collections</h2>
                    </div>
                    <div className="row align-items-stretch">
                    <div className="col-lg-8">
                        <div className="product-item sm-height full-height bg-gray">
                        <a href="#" className="product-category">Women <span>25 items</span></a>
                        <img src="images/model_4.png" alt="Image" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="product-item sm-height bg-gray mb-4">
                        <a href="#" className="product-category">Men <span>25 items</span></a>
                        <img src="images/model_5.png" alt="Image" className="img-fluid" />
                        </div>
                        <div className="product-item sm-height bg-gray">
                        <a href="#" className="product-category">Shoes <span>25 items</span></a>
                        <img src="images/model_6.png" alt="Image" className="img-fluid" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ShopByCate.propTypes = {

}

export default ShopByCate
