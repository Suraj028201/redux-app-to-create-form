import React from 'react'
import { useSelector } from 'react-redux';

const FormsList = (props) => {

    const {handleEditForm, handleChangeFormCategory, filterCategory} = props;

    const forms = useSelector((state) =>
    state.forms.filter((form) =>
      filterCategory ? form.categoryId === filterCategory : true
    )
  );

  console.log(forms);

  const categories = useSelector((state) => state.categories);

  return (
    <>
    <ul>
        {forms.map((form) => (
          <li key={form.id}>
            {form.name} - {form.email} - {form.uid} - {form.phoneNumber} -{" "}
            {form.description}
            <button onClick={() => handleEditForm(form)}>Edit</button>
            <select
              value={form.categoryId}
              onChange={(e) =>
                handleChangeFormCategory(form.id, e.target.value)
              }
            >
              <option value="">Change Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </li>
        ))}
      </ul>
    </>
  )
}

export default FormsList