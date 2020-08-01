import { useState } from 'react'

function useForm(initialsValues) {
    const [values, setValues] = useState(initialsValues)

    function setValue(key, value) {
      setValues({
        ...values,
        [key]: value,
      })
    }
  
    function handleChange(event) {
        setValue(
          event.target.getAttribute('name'),
          event.target.value,
        )
    }
  
    function clearForm() {
      setValues(initialsValues)
    }
  
    return {
      values,
      handleChange,
      clearForm,
    }
}

export default useForm