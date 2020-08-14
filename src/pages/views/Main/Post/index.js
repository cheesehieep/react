import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {useParams, useHistory, Link} from 'react-router-dom'
import postApi from '../../../../api/postApi'

const Post = ({types, posts}) => {
    let {id} = useParams();
    let history = useHistory();
    const [post, setPost] = useState({})

    const loadPost = async () => {
        const {data} = await postApi.get(id);
        setPost(data);
    }

    useEffect(() => {
        loadPost();
        window.scrollTo(0, 0)
    }, []);
    return (
        <div>
            <div className="custom-border-bottom py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-0"><Link to="/">Home</Link> <span className="mx-2 mb-0">/</span> <Link to="/blog">Blog</Link> <span className="mx-2 mb-0">/</span> <strong className="text-black">{post.name}</strong></div>
                    </div>
                </div>
            </div>
            <div className="site-section">
                <div className="container">
                    <div className="row mb-5">
                    <div className="col-md-9 order-1">
                        <div className="row align">
                        <div className="col-md-12 mb-5">
                            <div className="float-md-left">
                                <h2 className="text-black h5">{post.name}</h2>
                                <small><i class="far fa-clock"></i> {post.date}</small>
                            </div>
                        </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-lg-12 col-md-12 item-entry mb-12">
                                <p>{post.description}</p>
                                <img src={post.image} alt="Image" className="img-fluid" /><br /><br />
                                <p>{post.content}</p>
                            </div>     
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

Post.propTypes = {

}

export default Post
