import React from 'react'

function FormField({ label, type, name, placeholder, value, onChange }) {
    return (
        <>
            <label>
                {label}: 
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </label>
        </>
    )
}

export default FormField