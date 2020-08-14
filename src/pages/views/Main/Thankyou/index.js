import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Thankyou = ({}) => {
    return (
        <div>
            <div className="bg-light py-3">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12 mb-0"><Link to="/">Home</Link> <span className="mx-2 mb-0">/</span> <strong className="text-black">Thank You</strong></div>
                    </div>
                </div>
                </div>  
                <div className="site-section">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12 text-center">
                        <span className="icon-check_circle display-3 text-success" />
                        <h2 className="display-3 text-black">Thank you!</h2>
                        <p className="lead mb-5">You order was successfuly completed.</p>
                        <p><Link to="/shop" className="btn btn-sm height-auto px-4 py-3 btn-primary">Back to shop</Link></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Thankyou.propTypes = {

}

export default Thankyou
