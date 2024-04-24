import { useState } from "react"

// eslint-disable-next-line react/prop-types
export const AddCategory = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (inputValue.trim().length <= 1) return;

    onSubmit(inputValue.trim());
    setInputValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="buscar gifs"
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  )
}
