import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {useParams, useHistory} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import {storage} from '../../../../firebase'
import productApi from '../../../../api/productApi'

const EditProduct = ({categories, onUpdate}) => {
    let { id } = useParams();
    let history = useHistory();
    const {handleSubmit, register, errors} = useForm();

    const [product, setProduct] = useState({});
    const [valueEditor, setValueEditor] = useState('');
    const [valueImage, setValueImage] = useState('');

    const loadProduct = async () => {
        const {data} = await productApi.get(id);
        setProduct(data);
    }

    useEffect(() => {
        loadProduct();
    }, []);

    const onHandleChange = e => {
        setProduct({...product, [e.target.name]: e.target.value});
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
                        const newData = Object.assign(data, {'image': url}, {'content': valueEditor});
                        onUpdate(id, newData);
                        history.push("/admin/products");
                    });
                }
            ) 
        } else {
            const newData = Object.assign(data, {'image': product.image}, {'content': valueEditor});
            onUpdate(id, newData);
            history.push("/admin/products");
        }
    }

    return (
        <div>
            <h1 class="h3 mb-0 text-gray-800">Edit Product</h1>
            <form onSubmit={handleSubmit(onHandleSubmit)} className="w-50">
                <div className="form-group">
                    <label>Category</label>
                    <select className="form-control" name="cate_id" ref={register({required: true})}>
                        {categories.map(({ id, name }) => (
                            <option value={id} selected={id == product.cate_id}>{name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="name" 
                        value={product.name}
                        onChange={onHandleChange}
                        ref={register({
                            required: true,
                            minLength: 3,
                            maxLength: 30,
                            pattern: {
                                value: /^\S/
                            }
                        })}
                    />
                    <small id="nameHelp" className="form-text text-danger">
                        {errors.name && errors.name.type === "required" && <span>This field is required</span>}
                        {errors.name && errors.name.type === "minLength" && <span>Min Length 3</span>}
                        {errors.name && errors.name.type === "maxLength" && <span>Max Length 30</span>}
                        {errors.name && errors.name.type === "pattern" && <span>Invalid space</span>}
                    </small>
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <img src={product.image} width="120px" />
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
                    <label>Content</label>
                    <CKEditor
                        editor={ ClassicEditor }
                        data={product.content}
                        onInit={ editor => {} }
                        onChange={onHandleEditorChange}
                    />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="price" 
                        value={product.price}
                        onChange={onHandleChange}
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

EditProduct.propTypes = {
    products: PropTypes.array
}

export default EditProduct
