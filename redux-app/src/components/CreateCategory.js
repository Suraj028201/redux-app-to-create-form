import React from 'react'

const CreateCategory = (props) => {
    const {setCategoryName, setCategoryDescription, categoryName, categoryDescription, handleCreateCategory} = props;
  return (
    <>
    <div className="create-category">
      <h2>Create Category</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <label>Description:</label>
        <input
          type="text"
          value={categoryDescription}
          onChange={(e) => setCategoryDescription(e.target.value)}
        />
        <button onClick={handleCreateCategory}>Create</button>
      </div>
      </div>
    </>
  )
}

export default CreateCategory