import React, { useState } from "react";
import validateField from "./components/Validate";    
//Initialising the form fields with empty value.
const initialFormData = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  gender: "",
  hobbies: [],
  country: "",
};
const FormValidate = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialFormData);
  const handleChange = (event) => {
    var fieldValue;
    const { name, value, type } = event.target;
    
 //Checking the type of inputs is checkbox
    if (type === "checkbox") {
      if (formData.hobbies.includes(value)) {
 //Checking duplication of checkbox selection of hobby is not done using filter().
        fieldValue = formData.hobbies.filter((hobby) => hobby !== value);
      } else {
 //Updating the formData with the selected Hobbies.
        fieldValue = [...formData.hobbies, value];
      }
    } //Checking the type of inputs is radio.
    else if (type === "radio") {
      fieldValue = value;
    } else {
      fieldValue = value.trim();
    }
  //Updating the form data with new value from each input.
    setFormData({ ...formData, [name]: fieldValue });
    
  //Validates the field by calling the validateField function from the Validate.js file, and passing the field name, value, and current form data.
    const error = validateField(name, fieldValue, formData);
    
 //The resulting error message is then stored in the formErrors state variable.
    setFormErrors({ ...formErrors, [name]: error });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newFormErrors = {};
    //Validates all form fields by calling validateField for each field and storing the resulting error messages in a new object newFormErrors.
    Object.keys(formData).forEach((fieldName) => {
      newFormErrors[fieldName] = validateField(
        fieldName,
        formData[fieldName],
        formData
      );
    });
    setFormErrors(newFormErrors);
    //If any of the fields have errors, the form submission is aborted.
    if (Object.values(newFormErrors).some((error) => error)) {
      return;
    }
    const dataString = Object.keys(formData)
      .map((fieldName) => `${fieldName}: ${formData[fieldName]}`)
      .join("\n");
    // If there are no errors, an alert message is shown to the user with the form data and each data on newline.
    alert(`Form data:\n${dataString}`);
    // The formData and formErrors state variables are reset to their initial values using setFormData() and setFormErrors() .
    setFormData(initialFormData);
    setFormErrors({});
  };
  return (
    <form id="registration-form" onSubmit={handleSubmit}>
      <h2 className="title">Registration Form</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {/* Checking whether the  formError is set for name textbox, if set displaying the corresponding error message using conditional rendering*/}
        {formErrors.name && <span className="error">{formErrors.name}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {/* Checking whether the  formError is set for email field, if set displaying the corresponding error message using conditional rendering*/}
        {formErrors.email && <span className="error">{formErrors.email}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {/* Checking whether the  formError is set for password field, if set displaying the corresponding error message using conditional rendering*/}
        {formErrors.password && (
          <span className="error">{formErrors.password}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {/* Checking whether the  formError is set for confirmPassword field, if set displaying the corresponding error message using conditional rendering*/}
        {formErrors.confirmPassword && (
          <span className="error">{formErrors.confirmPassword}</span>
        )}
      </div>
      <div className="form-group">
        <label>Gender:</label>
        <div className="form-row">
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          <label htmlFor="other">Other</label>
          <input
            type="radio"
            id="other"
            name="gender"
            value="other"
            checked={formData.gender === "other"}
            onChange={handleChange}
          />
        </div>
        {/* Checking whether the  formError is set for gender field, if set displaying the corresponding error message using conditional rendering*/}
        {formErrors.gender && (
          <span className="error">{formErrors.gender}</span>
        )}
      </div>
      <div className="form-group">
        <label>Hobbies:</label>
        <div className="form-row">
          <label htmlFor="reading">Reading</label>
          <input
            type="checkbox"
            id="reading"
            name="hobbies"
            value="reading"
            checked={formData.hobbies.includes("reading")}
            onChange={handleChange}
          />
          <label htmlFor="traveling">Traveling</label>
          <input
            type="checkbox"
            id="traveling"
            name="hobbies"
            value="traveling"
            checked={formData.hobbies.includes("traveling")}
            onChange={handleChange}
          />
          <label htmlFor="sports">Sports</label>
          <input
            type="checkbox"
            id="sports"
            name="hobbies"
            value="sports"
            checked={formData.hobbies.includes("sports")}
            onChange={handleChange}
          />
        </div>
        {/* Checking whether the  formError is set for hobbies field, if set, displaying the corresponding error message using conditional rendering*/}
        {formErrors.hobbies && (
          <span className="error">{formErrors.hobbies}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="country">Country:</label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
        >
          <option value="">Select a country</option>
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="uk">UK</option>
        </select>
        {/* Checking whether the  formError is set for country field, if set, displaying the corresponding error message using conditional rendering*/}
        {formErrors.country && (
          <span className="error">{formErrors.country}</span>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default FormValidate;
