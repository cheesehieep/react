import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {Link, useHistory} from 'react-router-dom'
import {useForm} from 'react-hook-form'

const Checkout = ({onAdd}) => {
    const {handleSubmit, register, errors} = useForm();
    const [valueDate, setValueDate] = useState('');
    let history = useHistory();
    const carts = JSON.parse(localStorage.getItem('carts'));

    let total = 0;
    for (let i = 0; i < carts.length; i++) {
        total += (carts[i].price * carts[i].quantity)
    }

    useEffect(() => {
        let today = new Date();
        let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        setValueDate(date);
    })

    const onHandleSubmit = (data) => {
        const newData = Object.assign(data, {'date': valueDate});
        onAdd(newData);
        history.push("/thankyou");
    }

    return (
        <div>
            <div className="bg-light py-3">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12 mb-0"><Link to="/">Home</Link> <span className="mx-2 mb-0">/</span> <Link to="/cart">Cart</Link> <span className="mx-2 mb-0">/</span> <strong className="text-black">Checkout</strong></div>
                    </div>
                </div>
                </div>
                <div className="site-section">
                <div className="container">
                    <form onSubmit={handleSubmit(onHandleSubmit)}>
                    <div className="row">
                    <div className="col-md-6 mb-5 mb-md-0">
                        <h2 className="h3 mb-3 text-black">Billing Details</h2>
                        <div className="p-3 p-lg-5 border">
                            <div className="form-group row">
                                <div className="col-md-12">
                                <label htmlFor="c_fname" className="text-black">Name <span className="text-danger">*</span></label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="c_fname" 
                                    name="name" 
                                    ref={register({
                                        required: true
                                    })}
                                />
                                <small id="nameHelp" className="form-text text-danger">
                                    {errors.name && errors.name.type === "required" && <span>This field is required</span>}
                                </small>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-12">
                                <label htmlFor="c_address" className="text-black">Address <span className="text-danger">*</span></label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="c_address" 
                                    name="address" 
                                    placeholder="Street address" 
                                    ref={register({
                                        required: true
                                    })}
                                />
                                <small id="addressHelp" className="form-text text-danger">
                                    {errors.address && errors.address.type === "required" && <span>This field is required</span>}
                                </small>
                                </div>
                            </div>
                            <div className="form-group row mb-5">
                                <div className="col-md-6">
                                <label htmlFor="c_email_address" className="text-black">Email <span className="text-danger">*</span></label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="c_email_address" 
                                    name="email" 
                                    ref={register({
                                        required: true
                                    })}
                                />
                                <small id="emailHelp" className="form-text text-danger">
                                    {errors.email && errors.email.type === "required" && <span>This field is required</span>}
                                </small>
                                </div>
                                <div className="col-md-6">
                                <label htmlFor="c_phone" className="text-black">Phone <span className="text-danger">*</span></label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="c_phone" 
                                    name="phone" 
                                    placeholder="Phone Number" 
                                    ref={register({
                                        required: true
                                    })}
                                />
                                <small id="phoneHelp" className="form-text text-danger">
                                    {errors.email && errors.email.type === "required" && <span>This field is required</span>}
                                </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row mb-5">
                        <div className="col-md-12">
                            <h2 className="h3 mb-3 text-black">Your Order</h2>
                            <div className="p-3 p-lg-5 border">
                            <table className="table site-block-order-table mb-5">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {carts.map((product) => (
                                        <tr>
                                            <td>{product.name}<strong className="mx-2">x</strong> {product.quantity}</td>
                                            <td>${product.price * product.quantity}</td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td className="text-black font-weight-bold"><strong>Cart Subtotal</strong></td>
                                        <td className="text-black">${total}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-black font-weight-bold"><strong>Order Total</strong></td>
                                        <td className="text-black font-weight-bold"><strong>${total}</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="form-group">
                                <button className="btn btn-primary btn-lg btn-block">Place Order</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

Checkout.propTypes = {

}

export default Checkout
