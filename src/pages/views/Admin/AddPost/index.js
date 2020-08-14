import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {useHistory} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import {storage} from '../../../../firebase'

const AddPost = ({types, onAdd}) => {
    const {handleSubmit, register, errors} = useForm();
    let history = useHistory();

    const [valueEditor, setValueEditor] = useState('');
    const [valueImage, setValueImage] = useState('');
    const [valueDate, setValueDate] = useState('');

    const onHandleImageChange = (e) => {
        if (e.target.files[0]) {
            setValueImage(e.target.files[0]);
        }
    }

    const onHandleEditorChange = (event, editor) => {
        const data = editor.getData();
        setValueEditor(data);
    }

    useEffect(() => {
        let today = new Date();
        let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        setValueDate(date);
    })
    
    const onHandleSubmit = (data) => {
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
                    onAdd(newData);
                    history.push("/admin/posts");
                });
            }
        )
    }
    return (
        <div>
            <h1 class="h3 mb-0 text-gray-800">Add Post</h1>
            <form onSubmit={handleSubmit(onHandleSubmit)} className="w-50">
                <div className="form-group">
                    <label>Type</label>
                    <select className="form-control" name="type_id" ref={register({required: true})}>
                        {types.map(({ id, name }) => (
                            <option value={id}>{name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="name"
                        ref={register({
                            required: true,
                            minLength: 6,
                            maxLength: 50,
                            pattern: {
                                value: /^\S/
                            }
                        })}
                    />
                    <small id="nameHelp" className="form-text text-danger">
                        {errors.name && errors.name.type === "required" && <span>This field is required</span>}
                        {errors.name && errors.name.type === "minLength" && <span>Min Length 6</span>}
                        {errors.name && errors.name.type === "maxLength" && <span>Max Length 50</span>}
                        {errors.name && errors.name.type === "pattern" && <span>Invalid space</span>}
                    </small>
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <div className="custom-file">
                        <label className="custom-file-label">Choose file...</label>
                        <input 
                            type="file"
                            name="image"
                            className="custom-file-input" 
                            onChange={onHandleImageChange}
                            ref={register({
                                required: true,
                                pattern: {
                                    value: /\.(gif|jpg|jpeg|tiff|png|webp|bmp)$/i
                                }
                            })}
                        />
                        <small id="imageHelp" className="form-text text-danger">
                            {errors.image && errors.image.type === "required" && <span>This field is required</span>}
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
                        ref={register({
                            required: true,
                            minLength: 6,
                            maxLength: 100,
                            pattern: {
                                value: /^\S/
                            }
                        })}
                    />
                    <small id="nameHelp" className="form-text text-danger">
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
                        data=""
                        onInit={ editor => {
                            // You can store the "editor" and use when it is needed.
                            // console.log( 'Editor is ready to use!', editor );
                        }}
                        onChange={onHandleEditorChange}
                        // onBlur={ ( event, editor ) => {
                        //     console.log( 'Blur.', editor );
                        // } }
                        // onFocus={ ( event, editor ) => {
                        //     console.log( 'Focus.', editor );
                        // } }
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

AddPost.propTypes = {
    onAdd: PropTypes.func
}

export default AddPost
