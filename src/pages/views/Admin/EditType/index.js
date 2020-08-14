import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {useParams, useHistory} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import typeApi from '../../../../api/typeApi'

const EditType = ({types, onUpdate}) => {
    const {handleSubmit, register, errors} = useForm();
    let history = useHistory();
    let {id} = useParams();

    const [type, setType] = useState({})

    const loadType = async () => {
        const {data} = await typeApi.get(id);
        setType(data);
    }

    useEffect(() => {
        loadType();
    }, []);

    const onHandleChange = e => {
        setType({...type, [e.target.name]: e.target.value});
    }

    const onHandleSubmit = (data) => {
        onUpdate(id, data);
        history.push('/admin/types');
    }

    return (
        <div>
            <h1 class="h3 mb-0 text-gray-800">Edit Type</h1>
            <form onSubmit={handleSubmit(onHandleSubmit)} className="w-50">
                <div className="form-group">
                    <label>Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="name" 
                        value={type.name} 
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
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

EditType.propTypes = {
    products: PropTypes.array
}

export default EditType
