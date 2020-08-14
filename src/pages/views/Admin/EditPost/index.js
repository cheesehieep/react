import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {useParams, useHistory} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import {storage} from '../../../../firebase'
import postApi from '../../../../api/postApi'

const EditPost = ({types, onUpdate}) => {
    let { id } = useParams();
    let history = useHistory();
    const {handleSubmit, register, errors} = useForm();

    const [post, setPost] = useState({});
    const [valueEditor, setValueEditor] = useState('');
    const [valueImage, setValueImage] = useState('');
    const [valueDate, setValueDate] = useState('');

    const loadPost = async () => {
        const {data} = await postApi.get(id);
        setPost(data);
    }

    useEffect(() => {
        loadPost();
        let today = new Date();
        let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        setValueDate(date);
    }, []);

    const onHandleChange = e => {
        setPost({...post, [e.target.name]: e.target.value});
    }

    const onHandleImageChange = (e) => {
        if (e.target.files[0]) {
            setValueImage(e.target.files[0]);
        }
    }

    const onHandleEditorChange = (event, editor) => {
        const data = editor.getData();
        setValueEditor(data);
    }

    const onHandleSubmit = (data) => {
        if (valueImage.name != null) {
            const uploadTask = storage.ref(`images/${valueImage.name}`).put(valueImage);
            uploadTask.on(
                "state_changed",
                snapshot => {},
                error => {console.log(error)},
                () => {storage
                    .ref("images")
                    .child(valueImage.name)
                    .getDownloadURL()
                    .then(url => {
                        const newData = Object.assign(data, {'image': url}, {'content': valueEditor}, {'date': valueDate});
                        onUpdate(id, newData);
                        history.push("/admin/posts");
                    });
                }
            ) 
        } else {
            const newData = Object.assign(data, {'image': post.image}, {'content': valueEditor}, {'date': valueDate});
            onUpdate(id, newData);
            history.push("/admin/posts");
        }
    }

    return (
        <div>
            <h1 class="h3 mb-0 text-gray-800">Edit Post</h1>
            <form onSubmit={handleSubmit(onHandleSubmit)} className="w-50">
                <div className="form-group">
                    <label>Type</label>
                    <select className="form-control" name="type_id" ref={register({required: true})}>
                        {types.map(({ id, name }) => (
                            <option value={id} selected={id == post.type_id}>{name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="name" 
                        value={post.name}
                        onChange={onHandleChange}
                        ref={register({
                            required: true,
                            minLength: 3,
                            maxLength: 50,
                            pattern: {
                                value: /^\S/
                            }
                        })}
                    />
                    <small id="nameHelp" className="form-text text-danger">
                        {errors.name && errors.name.type === "required" && <span>This field is required</span>}
                        {errors.name && errors.name.type === "minLength" && <span>Min Length 3</span>}
                        {errors.name && errors.name.type === "maxLength" && <span>Max Length 50</span>}
                        {errors.name && errors.name.type === "pattern" && <span>Invalid space</span>}
                    </small>
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <img src={post.image} width="120px" />
                    <div className="custom-file">
                        <label className="custom-file-label">Choose file...</label>
                        <input 
                            type="file" 
                            className="custom-file-input" 
                            name="image" 
                            onChange={onHandleImageChange}
                            ref={register({
                                pattern: {
                                    value: /\.(gif|jpg|jpeg|tiff|png|webp|bmp)$/i
                                }
                            })}
                        />
                        <small id="imageHelp" className="form-text text-danger">
                            {errors.image && errors.image.type === "pattern" && <span>Invalid image</span>}
                        </small>
                    </div>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="description" 
                        value={post.description}
                        onChange={onHandleChange}
                        ref={register({
                            required: true,
                            minLength: 6,
                            maxLength: 100,
                            pattern: {
                                value: /^\S/
                            }
                        })}
                    />
                    <small id="descriptionHelp" className="form-text text-danger">
                        {errors.description && errors.description.type === "required" && <span>This field is required</span>}
                        {errors.description && errors.description.type === "minLength" && <span>Min Length 6</span>}
                        {errors.description && errors.description.type === "maxLength" && <span>Max Length 100</span>}
                        {errors.description && errors.description.type === "pattern" && <span>Invalid space</span>}
                    </small>
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <CKEditor
                        editor={ ClassicEditor }
                        data={post.content}
                        onInit={ editor => {} }
                        onChange={onHandleEditorChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

EditPost.propTypes = {
    products: PropTypes.array
}

export default EditPost
