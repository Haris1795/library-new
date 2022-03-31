import React from 'react'

function Form() {
  return (
    <div>
    <form onSubmit={handleSubmit}>
        <label>Enter the title of the book:
            <input 
                type="text" 
                name="username" 
                value={inputs.username || ""} 
                onChange={handleChange}
            />
        </label>
        <label>Enter your age:
            <input 
            type="number" 
            name="age" 
            value={inputs.age || ""} 
            onChange={handleChange}
            />
        </label>
        <input type="submit" />
    </form>
    </div>
  )
}

export default Form