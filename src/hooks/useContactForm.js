import { useState, useEffect } from "react";
import { validationForm } from "../utils/validationForm";

const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let errorsCustomer = validationForm(formData);

    setErrors(errorsCustomer);

    if (Object.values(errorsCustomer).some((error) => error)) {
      return;
    }

    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

      const timer = setTimeout(() => setSubmitted(false), 3000);

      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return {
    formData,
    submitted,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useContactForm;
