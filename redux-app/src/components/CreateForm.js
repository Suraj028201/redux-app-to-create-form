import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    createForm,
  } from "../actions";

const CreateForm = (props) => {

    const [formName, setFormName] = useState("");
    const [formEmail, setFormEmail] = useState("");
    const [formUID, setFormUID] = useState("");
    const [formPhoneNumber, setFormPhoneNumber] = useState("");
    const [formDescription, setFormDescription] = useState("");
    const [selectedCategoryId, setSelectedCategoryId] = useState("");

    const {
        editFormValue,
        filterCategory,
        validateEmail, 
        validateNumber,
        emailCheck,
        numberCheck
    } = props;

    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories);
    const forms = useSelector((state) =>
    state.forms.filter((form) =>
      filterCategory ? form.categoryId === filterCategory : true
    )
  );

    const handleCreateForm = () => {
        const form = {
          id: forms.length + 1,
          name: formName,
          email: formEmail,
          uid: formUID,
          phoneNumber: formPhoneNumber,
          description: formDescription,
          categoryId: selectedCategoryId
        };
        dispatch(createForm(form));
        setFormName("");
        setFormEmail("");
        setFormUID("");
        setFormPhoneNumber("");
        setFormDescription("");
        setSelectedCategoryId("");
      };


  return (
    <>
    <h2>Create Form</h2>
      {editFormValue? <></>:
      <div className="create-category">
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
          onInput={(e)=>validateEmail(e.target.value)}
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
          onInput={(e)=>validateNumber(e.target.value)}
          onChange={(e) => setFormPhoneNumber(e.target.value)}
          maxLength={10}
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
        {formName &&
        formEmail &&
        formUID &&
        formPhoneNumber &&
        emailCheck &&
        numberCheck &&
        formDescription ? (
          <button onClick={handleCreateForm}>Create</button>
        ) : (
          <p>All fields are mandatory.</p>
        )}
      </div>
      }
    </>
  )
}

export default CreateForm