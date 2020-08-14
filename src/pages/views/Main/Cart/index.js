import React, {useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import PropTypes from 'prop-types'
import swal from 'sweetalert'

const Cart = ({onRemove, onUpdate}) => {
    const carts = JSON.parse(localStorage.getItem('carts'));
    let history = useHistory();

    let total = 0;
    for (let i = 0; i < carts.length; i++) {
        total += (carts[i].price * carts[i].quantity)
    }
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const removeHandle = (id) => {
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                onRemove(id);
                swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                });
            } else {
                swal("Your imaginary file is safe!");
            }
        });
    }

    const onHandleSubmit = (id) => {
        const data = {
            quantity: document.querySelector("#quantity").value
        }
        onUpdate(id, data);
        swal("Update success", "You clicked the button!", "success");
        history.push("/cart");
    }

    return (
        <div>
            <div className="site-section">
                <div className="container">
                <div className="row mb-5">
                    <div className="col-md-12">
                        <div className="site-blocks-table">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Image</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {carts.map((cart, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{cart.name}</td>
                                            <td><img src={cart.image} width="80"/></td>
                                            <td>${cart.price}</td>
                                            <td>
                                                <div className="d-flex justify-content-around">
                                                    <input type="number" id="quantity" defaultValue={cart.quantity} min="1" max="10" style={{height: "42px"}}></input>
                                                    <button onClick={() => onHandleSubmit(cart.id)} className="btn btn-primary"><i className="fas fa-chevron-circle-up"></i></button>
                                                </div>
                                            </td>
                                            <td>${cart.price * cart.quantity}</td>
                                            <td><button onClick={() => removeHandle(cart.id)} className="btn btn-danger"><i className="fas fa-times-circle"></i></button></td>
                                        </tr>
                                    ))} 
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {carts.length !== 0 ? 
                    <div className="row">
                        <div className="col-md-6">
                        <div className="row mb-5">
                            <div className="col-md-6 mb-3 mb-md-0">
                            <button onClick={() => onHandleSubmit()} className="btn btn-primary btn-sm btn-block">Update Cart</button>
                            </div>
                            <div className="col-md-6">
                            <Link to="/shop"><button className="btn btn-outline-primary btn-sm btn-block">Continue Shopping</button></Link>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-6 pl-5">
                        <div className="row justify-content-end">
                            <div className="col-md-7">
                            <div className="row">
                                <div className="col-md-12 text-right border-bottom mb-5">
                                    <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <span className="text-black">Subtotal</span>
                                </div>
                                <div className="col-md-6 text-right">
                                    <strong className="text-black">${total}</strong>
                                </div>
                            </div><br />
                            <div className="row">
                                <div className="col-md-12">
                                    <Link to="/checkout" className="btn btn-primary">Proceed To Checkout</Link>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div> 
                : `No item`}
                </div>
            </div>
        </div>
    )
}

Cart.propTypes = {

}

export default Cart
