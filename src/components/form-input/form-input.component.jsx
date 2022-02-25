// Import React Component
import React from 'react'

// Import SCSS
import './form-input.styles.scss'

const FormInput = ({ handlChange, label, ...otherProps }) => (
    <div className='group'>
        <input className='form-input' onChange={handlChange} {...otherProps}></input>
        {
            label ? (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>) : null
        }
    </div>
)

export default FormInput;