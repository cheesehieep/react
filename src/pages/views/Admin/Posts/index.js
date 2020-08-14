import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import SweetAlert from 'sweetalert'
import swal from 'sweetalert'

const Posts = ({types, posts, onRemove}) => {
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

    const type = posts.map(post => {
        return types.find(type => type.id == post.type_id)
    })

    return (
        <div>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-2 text-gray-800">List Posts</h1>
                <Link to="add-post" className="btn btn-primary">Add Post</Link>
            </div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Posts</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Type</th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.map((post, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{type[index].name}</td>
                                        <td width="250px">{post.name}</td>
                                        <td><img src={post.image} width="50"/></td>
                                        <td width="500px">{post.description}</td>
                                        <td>
                                            <Link to={`edit-post/${post.id}`} className="btn btn-primary">Edit</Link>
                                            <button className="btn btn-danger ml-2" onClick={() => removeHandle(post.id)}>Delete</button>
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

Posts.propTypes = {

}

export default Posts
