import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import SweetAlert from 'sweetalert'
import swal from 'sweetalert'

const Products = ({categories, products, onRemove}) => {
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

    const category = products.map(product => {
        return categories.find(category => category.id == product.cate_id)
    })

    return (
        <div>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-2 text-gray-800">List Products</h1>
                <Link to="add-product" className="btn btn-primary">Add Product</Link>
            </div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Products</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Category</th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{category[index].name}</td>
                                        <td>{product.name}</td>
                                        <td><img src={product.image} width="50"/></td>
                                        <td>${product.price}</td>
                                        <td>
                                            <Link to={`edit-product/${product.id}`} className="btn btn-primary">Edit</Link>
                                            <button className="btn btn-danger ml-2" onClick={() => removeHandle(product.id)}>Delete</button>
                                        </td>
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

Products.propTypes = {

}

export default Products
