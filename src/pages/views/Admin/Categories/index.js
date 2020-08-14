import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import SweetAlert from 'sweetalert'
import swal from 'sweetalert'

const Categories = ({categories, onRemove}) => {
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
    return (
        <div>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-2 text-gray-800">List Categories</h1>
                <Link to="add-category" className="btn btn-primary">Add Category</Link>
            </div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Categories</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map(({ id, name }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{id}</th>
                                        <td>{name}</td>
                                        <td>
                                            <Link to={`edit-category/${id}`} className="btn btn-primary">Edit</Link>
                                            <button className="btn btn-danger ml-2" onClick={() => removeHandle(id)}>Delete</button>
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

Categories.propTypes = {

}

export default Categories
