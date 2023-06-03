import React from 'react';
import { useSelector } from 'react-redux';

const EditForm = (props) => {

    const {
        editFormValue,
        setEditFromValue,
        formName, 
        setFormName, 
        formEmail, 
        setFormEmail, 
        formUID, 
        setFormUID,
        formPhoneNumber,
        setFormPhoneNumber,
        formDescription,
        setFormDescription,
        selectedCategoryId,
        setSelectedCategoryId,
        handleSaveEditedForm
    } = props;

    const categories = useSelector((state) => state.categories);


  return (
    <>
    {formName &&
        formEmail &&
        formUID &&
        formPhoneNumber &&
        formDescription &&
        editFormValue && (
          <div>
            <h2>Edit Form</h2>
            <div>
              <label>Name:</label>
              <input
                type="text"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
              />
              <label>Email:</label>
              <input
                type="text"
                value={formEmail}
                onChange={(e) => setFormEmail(e.target.value)}
              />
              <label>UID:</label>
              <input
                type="text"
                value={formUID}
                onChange={(e) => setFormUID(e.target.value)}
              />
              <label>Phone Number:</label>
              <input
                type="text"
                value={formPhoneNumber}
                onChange={(e) => setFormPhoneNumber(e.target.value)}
              />
              <label>Description:</label>
              <input
                type="text"
                value={formDescription}
                onChange={(e) => setFormDescription(e.target.value)}
              />
              <label>Category:</label>
              <select
                value={selectedCategoryId}
                onChange={(e) => setSelectedCategoryId(e.target.value)}
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <button onClick={(form) => handleSaveEditedForm(form)}>
                Save
              </button>
            </div>
          </div>
        )}
    </>
  )
}

export default EditForm