import React from 'react'
import PropTypes from 'prop-types'
import {useHistory} from 'react-router-dom'
import {useForm} from 'react-hook-form'

const AddType = ({onAdd}) => {
    const {handleSubmit, register, errors} = useForm();
    let history = useHistory();
    const onHandleSubmit = (data) => {
        onAdd(data);
        history.push("/admin/types");
    }
    return (
        <div>
            <h1 class="h3 mb-0 text-gray-800">Add Type</h1>
            <form onSubmit={handleSubmit(onHandleSubmit)} className="w-50">
                <div className="form-group">
                    <label>Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="name"
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

AddType.propTypes = {
    onAdd: PropTypes.func
}

export default AddType
