import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {useParams, useHistory, Link} from 'react-router-dom'
import productApi from '../../../../api/productApi'

const Product = ({onAddCart}) => {
    let {id} = useParams();
    let history = useHistory();
    const [product, setProduct] = useState({})

    const loadProduct = async () => {
        const {data} = await productApi.get(id);
        setProduct(data);
    }

    useEffect(() => {
        loadProduct();
        window.scrollTo(0, 0)
    }, []);

    const addCart = () => {
        const data = {
            pro_id: product.id,
            quantity: document.querySelector("#quantity").value
        }
        onAddCart(data);
        history.push("/cart");
    }
    return (
        <div>
            <div className="bg-light py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-0"><Link to="/">Home</Link> <span className="mx-2 mb-0">/</span> <Link to="/shop">Shop</Link> <span className="mx-2 mb-0">/</span> <strong className="text-black">{product.name}</strong></div>
                    </div>
                </div>
            </div>  
            <div className="site-section">
                <div className="container">
                    <div className="row">
                    <div className="col-md-6">
                        <div className="item-entry">
                        <a href="#" className="product-item md-height bg-gray d-block">
                            <img src={product.image} alt="Image" className="img-fluid" />
                        </a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2 className="text-black">{product.name}</h2>
                        <p>{product.content}</p>
                        <p><strong className="text-primary h4">${product.price}</strong></p>
                        <div><label>Quantity: </label><input type="number" id="quantity" defaultValue="1" min="1" max="10"></input></div>
                        <button onClick={addCart} className="buy-now btn btn-sm height-auto px-4 py-3 btn-primary">Add To Cart</button>
                    </div>
                    </div>
                </div>
            </div>
            {/* <div className="site-section block-3 site-blocks-2">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-md-7 site-section-heading text-center pt-4">
                        <h2>Featured Products</h2>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12 block-3">
                        <div className="nonloop-block-3 owl-carousel">
                        <div className="item">
                            <div className="item-entry">
                            <a href="#" className="product-item md-height bg-gray d-block">
                                <img src="images/model_1.png" alt="Image" className="img-fluid" />
                            </a>
                            <h2 className="item-title"><a href="#">Smooth Cloth</a></h2>
                            <strong className="item-price"><del>$46.00</del> $28.00</strong>
                            <div className="star-rating">
                                <span className="icon-star2 text-warning" />
                                <span className="icon-star2 text-warning" />
                                <span className="icon-star2 text-warning" />
                                <span className="icon-star2 text-warning" />
                                <span className="icon-star2 text-warning" />
                            </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-entry">
                            <a href="#" className="product-item md-height bg-gray d-block">
                                <img src="images/prod_3.png" alt="Image" className="img-fluid" />
                            </a>
                            <h2 className="item-title"><a href="#">Blue Shoe High Heels</a></h2>
                            <strong className="item-price"><del>$46.00</del> $28.00</strong>
                            <div className="star-rating">
                                <span className="icon-star2 text-warning" />
                                <span className="icon-star2 text-warning" />
                                <span className="icon-star2 text-warning" />
                                <span className="icon-star2 text-warning" />
                                <span className="icon-star2 text-warning" />
                            </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-entry">
                            <a href="#" className="product-item md-height bg-gray d-block">
                                <img src="images/model_5.png" alt="Image" className="img-fluid" />
                            </a>
                            <h2 className="item-title"><a href="#">Denim Jacket</a></h2>
                            <strong className="item-price"><del>$46.00</del> $28.00</strong>
                            <div className="star-rating">
                                <span className="icon-star2 text-warning" />
                                <span className="icon-star2 text-warning" />
                                <span className="icon-star2 text-warning" />
                                <span className="icon-star2 text-warning" />
                                <span className="icon-star2 text-warning" />
                            </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-entry">
                            <a href="#" className="product-item md-height bg-gray d-block">
                                <img src="images/prod_1.png" alt="Image" className="img-fluid" />
                            </a>
                            <h2 className="item-title"><a href="#">Leather Green Bag</a></h2>
                            <strong className="item-price"><del>$46.00</del> $28.00</strong>
                            <div className="star-rating">
                                <span className="icon-star2 text-warning" />
                                <span className="icon-star2 text-warning" />
                                <span className="icon-star2 text-warning" />
                                <span className="icon-star2 text-warning" />
                                <span className="icon-star2 text-warning" />
                            </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-entry">
                            <a href="#" className="product-item md-height bg-gray d-block">
                                <img src="images/model_7.png" alt="Image" className="img-fluid" />
                            </a>
                            <h2 className="item-title"><a href="#">Yellow Jacket</a></h2>
                            <strong className="item-price">$58.00</strong>
                            <div className="star-rating">
                                <span className="icon-star2 text-warning" />
                                <span className="icon-star2 text-warning" />
                                <span className="icon-star2 text-warning" />
                                <span className="icon-star2 text-warning" />
                                <span className="icon-star2 text-warning" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

Product.propTypes = {

}

export default Product
