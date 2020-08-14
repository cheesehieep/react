import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {useHistory} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import {storage} from '../../../../firebase'

const AddProduct = ({categories, onAdd}) => {
    const {handleSubmit, register, errors} = useForm();
    let history = useHistory();

    const [valueEditor, setValueEditor] = useState('');
    const [valueImage, setValueImage] = useState('');

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
                    const newData = Object.assign(data, {'image': url}, {'content': valueEditor});
                    onAdd(newData);
                    history.push("/admin/products");
                });
            }
        )
    }
    return (
        <div>
            <h1 class="h3 mb-0 text-gray-800">Add Product</h1>
            <form onSubmit={handleSubmit(onHandleSubmit)} className="w-50">
                <div className="form-group">
                    <label>Category</label>
                    <select className="form-control" name="cate_id" ref={register({required: true})}>
                        {categories.map(({ id, name }) => (
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
                            maxLength: 30,
                            pattern: {
                                value: /^\S/
                            }
                        })}
                    />
                    <small id="nameHelp" className="form-text text-danger">
                        {errors.name && errors.name.type === "required" && <span>This field is required</span>}
                        {errors.name && errors.name.type === "minLength" && <span>Min Length 6</span>}
                        {errors.name && errors.name.type === "maxLength" && <span>Max Length 30</span>}
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
                <div className="form-group">
                    <label>Price</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="price"
                        ref={register({
                            required: true,
                            pattern: {
                                value: /^\d/
                            }
                        })}
                    />
                    <small id="priceHelp" className="form-text text-danger">
                        {errors.price && errors.price.type === "required" && <span>This field is required</span>}
                        {errors.price && errors.price.type === "pattern" && <span>Invalid number</span>}
                    </small>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

AddProduct.propTypes = {
    onAdd: PropTypes.func
}

export default AddProduct
