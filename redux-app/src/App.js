import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createCategory,
  createForm,
  editForm,
  changeFormCategory
} from "./actions";
import './App.css';
import { isEmailValid, isValidMobileNumber } from "./utils";
import Forms from "./components/Forms";
import FormsList from "./components/FormsList";
import CreateCategory from "./components/CreateCategory";
import CreateForm from "./components/CreateForm";
import EditForm from "./components/EditForm";

const App = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formUID, setFormUID] = useState("");
  const [formPhoneNumber, setFormPhoneNumber] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [editFormValue, setEditFromValue] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const [numberCheck, setNumberCheck] = useState(false);

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const forms = useSelector((state) =>
    state.forms.filter((form) =>
      filterCategory ? form.categoryId === filterCategory : true
    )
  );

  const handleCreateCategory = () => {
    const category = {
      id: categories.length + 1,
      name: categoryName,
      description: categoryDescription
    };
    dispatch(createCategory(category));
    setCategoryName("");
    setCategoryDescription("");
  };

  const handleEditForm = (form) => {
    // Open the form for editing with pre-filled data
    setEditFromValue(true);
    setFormName(form.name);
    setFormEmail(form.email);
    setFormUID(form.uid);
    setFormPhoneNumber(form.phoneNumber);
    setFormDescription(form.description);
    setSelectedCategoryId(form.categoryId);
  };

  const handleSaveEditedForm = (form) => {
    setEditFromValue(false);
    const editedForm = { ...form };
    editedForm.name = formName;
    editedForm.email = formEmail;
    editedForm.uid = formUID;
    editedForm.phoneNumber = formPhoneNumber;
    editedForm.description = formDescription;
    dispatch(editForm(editedForm));
    console.log(editedForm.name,'jhdgh', editedForm, form);
    // Clear the form after saving 
    setFormName("");
    setFormEmail("");
    setFormUID("");
    setFormPhoneNumber("");
    setFormDescription("");
    setSelectedCategoryId("");
  };

  const handleChangeFormCategory = (formId, categoryId) => {
    console.log("froiD: ", formId, categoryId);
    // const categoryId = prompt("Enter the new category ID for the form:");
    dispatch(changeFormCategory(formId, categoryId));
  };

  const handleFilterCategory = (categoryId) => {
    setFilterCategory(categoryId);
  };

  const validateEmail = (email) => {
   setEmailCheck(isEmailValid(email));
  }

  const validateNumber = (number) => {
   setNumberCheck(isValidMobileNumber(number));
  }

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {category.name} - {category.description}
          </li>
        ))}
      </ul>
      <Forms handleFilterCategory={handleFilterCategory} filterCategory={filterCategory}/>
      <FormsList handleEditForm={handleEditForm} handleChangeFormCategory={handleChangeFormCategory} filterCategory={filterCategory}/>
      <CreateCategory handleCreateCategory={handleCreateCategory} categoryName={categoryName} setCategoryName={setCategoryName} categoryDescription={categoryDescription} setCategoryDescription={setCategoryDescription} />

      <CreateForm
        editFormValue={editFormValue}
        filterCategory={filterCategory}
        validateEmail={validateEmail}
        validateNumber={validateNumber}
        emailCheck={emailCheck}
        numberCheck={numberCheck} 
      />
        <EditForm
        editFormValue={editFormValue}
        setEditFromValue={setEditFromValue}
        formName={formName}
        setFormName={setFormName}
        formEmail={formEmail}
        formUID={formUID}
        setFormUID={setFormUID}
        formPhoneNumber={formPhoneNumber}
        setFormPhoneNumber={setFormPhoneNumber}
        formDescription={formDescription}
        setFormDescription={setFormDescription}
        selectedCategoryId={selectedCategoryId}
        setSelectedCategoryId={setSelectedCategoryId}
        handleSaveEditedForm={handleSaveEditedForm}
        />
    </div>
  );
};

export default App;
