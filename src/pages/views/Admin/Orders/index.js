import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Orders = ({orders}) => {
    return (
        <div>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-2 text-gray-800">List Orders</h1>
            </div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Orders</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{order.name}</td>
                                        <td>{order.address}</td>
                                        <td>{order.email}</td>
                                        <td>{order.phone}</td>
                                        <td>{order.date}</td>
                                        <td><Link to={`order-details/${order.id}`} className="btn btn-primary">Detail</Link></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

Orders.propTypes = {

}

export default Orders
