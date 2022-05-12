import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';


// const validate = (values) => {
//     const errors = {};
//     if(!values.firstName){
//         errors.firstName = "required";
//     }
//     else if(values.firstName.length > 20){
//         errors.firstName = "less than 20 characters";
//     }
    
//     if(!values.lastName){
//         errors.lastName = "required";
//     }
//     else if(values.lastName.length > 20){
//         errors.lastName = "less than 20 characters";
//     }
//     return errors;
// }
const FormSignUpSelf = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(20,"less than 20")
                .required("required"),
            lastName: Yup.string()
                .max(20,"less than 20")
                .required("required"),
            
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    });

    return (
        
        <form onSubmit={formik.handleSubmit} className="mx-auto w-full max-w-[500px]">
            <div className="flex flex-col gap-4">
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your first name"
                    className="border border-teal-400 p-3"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    onBlur={formik.handleBlur}
                />
                {   formik.touched.firstName &&
                    formik.errors.firstName ? <div className="text-red-500">{formik.errors.firstName}</div> : null}
                
            </div>
            <div className="flex flex-col gap-4">
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    className="border border-teal-400 p-3"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    onBlur={formik.handleBlur}
                />
                {   formik.touched.lastName &&
                     formik.errors.lastName ? <div className="text-red-500">{formik.errors.lastName}</div> : null}
            </div>
            <button type="submit" className="p-3 border border-teal-500 bg-teal-400 rounded-lg mt-5 w-full">Submit</button>
        </form>
        
    );
};

export default FormSignUpSelf;