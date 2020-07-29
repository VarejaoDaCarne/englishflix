import React from 'react'

function FormField({ label, type, name, value, onChange }) {
    return (
        <>
            <label>
                {label}: 
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </label>
        </>
    )
}

export default FormField