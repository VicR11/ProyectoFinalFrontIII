export const validationForm =(formData)=>{
   
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const regexPhone = /^[0-9]{10,14}$/;

    let errors = {
        name: formData.name.trim().length <=3,
        email: !regexEmail.test(formData.email),
        phone:!regexPhone.test(formData.phone),
        message:  formData.message.trim().length <=3,
    }

    return errors;

}