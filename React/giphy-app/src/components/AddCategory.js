import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {
    
    const [value, setValue] = useState('')
    
    const handleInput = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setCategories( cats => [value, ...cats])
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>{value}</h1>
            <input
                type="text"
                value={value}
                onChange={handleInput}
            />
        </form>
    )
}

export default AddCategory

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}