const validateField = (name, value, formData) => {
    switch (name) {
      //Display error message if the name textbox is empty or contains less than 3 charcters
      case "name":
        if (value.length === 0) {
          return "Name is required";
        }
        if (value.length < 3) {
          return "Name Should be Atleast 3 characters Long";
        }
        //if not empty and more that 3 charcters,then entered data is updated in formData
        return "";
      case "email":
        //Display error message if the email is empty or not in correct format, using regular expression.
        if (!value) {
          return "Email is required";
        }
        if (!/\S+@\S+\.\S+/.test(value)) {
          return "Email is invalid";
        }
        //if not empty and correct email format, then entered data is updated in formData
        return "";
      case "password":
        if (!value) {
          return "Password is required";
        }
        if (value.length < 8) {
          return "Password must be at least 8 characters";
        }
        return "";
      case "confirmPassword":
        if (!value) {
          return "Confirm Password is required";
        }
        if (value !== formData.password) {
          return "Passwords do not match";
        }
        return "";
      case "gender":
        if (!value) {
          return "Gender is required";
        }
        return "";
      case "hobbies":
        if (!value.length) {
          return "Hobbies are required";
        }
        return "";
      case "country":
        if (!value) {
          return "Country is required";
        }
        return "";
      default:
        return "";
    }
  };
  export default validateField;
  