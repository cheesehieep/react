import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import {Link} from 'react-router-dom'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Blog = ({types, posts}) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

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
                    <div className="col-md-12 mb-0"><Link to="/">Home</Link> <span className="mx-2 mb-0">/</span> <strong className="text-black">Blog</strong></div>
                    </div>
                </div>
            </div>
            <div className="site-section">
                <div className="container">
                    <div className="row mb-5">
                    <div className="col-md-9 order-1">
                        <div className="row align">
                        <div className="col-md-12 mb-5">
                            <div className="float-md-left"><h2 className="text-black h5">Blog All</h2></div>
                            <div className="d-flex flex-row-reverse">
                                <input value={filter} onChange={onHandleChange} placeholder="Search something..." className="input-filter"/>
                            </div>
                        </div>
                        </div>
                        <div className="row mb-5">
                            {posts.map(({ id, type_id, name, image, description, content, date }) => {
                                if(filter.length !== 0) {
                                    const newName = name.toLocaleLowerCase();
                                    if(newName.startsWith(filter)) {
                                        return <div className="col-lg-6 col-md-6 item-entry mb-6">
                                            <Link to={`/post/${id}`} className="product-item md-height bg-gray d-block">
                                                <img src={image} alt="Image" className="img-fluid" />
                                            </Link>
                                            <h2 className="item-title-blog"><Link to={`/post/${id}`}>{name}</Link></h2>
                                            <small><i class="far fa-clock"></i> {date}</small><br />
                                            <p className="item-description-blog">{description}</p>
                                        </div>
                                    }else {
                                        return null
                                    }
                                }
                                return <div className="col-lg-6 col-md-6 item-entry mb-6">
                                    <Link to={`/post/${id}`} className="product-item md-height bg-gray d-block">
                                        <img src={image} alt="Image" className="img-fluid" />
                                    </Link>
                                    <h2 className="item-title-blog"><Link to={`/post/${id}`}>{name}</Link></h2>
                                    <small><i class="far fa-clock"></i> {date}</small><br />
                                    <p className="item-description-blog">{description}</p>
                                </div>    
                            })}
                        </div>
                    </div>
                    <div className="col-md-3 order-2 mb-5 mb-md-0">
                        <div className="border p-4 rounded mb-4">
                        <h3 className="mb-3 h6 text-uppercase text-black d-block">Categories</h3>
                        <ul className="list-unstyled mb-0">
                            {types.map(({ id, name }) => {
                                const total = posts.filter(post => post.type_id == id);
                                return <li className="mb-1">
                                    <Link to={`/blog/${id}`} className="d-flex">
                                        <span>{name}</span> 
                                        <span className="text-black ml-auto">({total.length})</span>
                                    </Link>
                                </li>
                            })}
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Blog.propTypes = {

}

export default Blog
