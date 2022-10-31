import React from "react";
import PropTypes from "prop-types";
import TextField from "./TextField";
import RadioButtonField from "./RadioButtonField";

const fieldMap = {
  text: TextField,
  radio: RadioButtonField,
};

function Field({ fields, formikProps }) {
  const {
    errors,
    touched,
    values,
    handleBlur,
    handleChange,
    setFieldValue,
  } = formikProps;
  return fields.map((item, index) => {
    const Component = fieldMap[item.type];
    let error = errors.hasOwnProperty(item.code) && errors[item.code];
    if (!item.type) {
      return null;
    }
    return (
      <Component
        key={index}
        label={item.label}
        name={item.code}
        placeholder={item.placeholder}
        value={values[item.code]}
        options={item.options}
        touched={touched}
        error={error}
        handleBlur={handleBlur}
        onChange={handleChange}
        setFieldValue={setFieldValue}
      />
    );
  });
}

Field.propTypes = {
  fields: PropTypes.array.isRequired,
  formikProps: PropTypes.object.isRequired,
};

export default Field;
