import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormSignUpYup = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(20, "less than 20 characters")
                .required("required"),
            lastName: Yup.string()
                .max(20, "less than 20 characters")
                .required("required"),
        }),
        onSubmit: (values) => {
            console.log(values);
            
        },
    })
    console.log("", formik);
    return (
        <form onSubmit={formik.handleSubmit} className="p-10 w-full max-w-[500px] mx-auto">
            <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="firstName">Firstname</label>
                <input 
                    type="text" 
                    id="firstName" 
                    placeholder="Enter your first name"
                    className="border border-violet-400 p-4"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange = {formik.handleChange}
                    onBlur = {formik.handleBlur}
                />
                {   formik.touched.firstName &&
                    formik.errors.firstName ? <div className="text-sm text-red-500">{formik.errors.firstName} </div>: null}
            </div>
            <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="firstName">Firstname</label>
                <input 
                    type="text" 
                    id="lastName" 
                    placeholder="Enter your last name"
                    className="border border-violet-400 p-4"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange = {formik.handleChange}
                    onBlur = {formik.handleBlur}
                />
                {  formik.touched.lastName &&
                    formik.errors.lastName ? <div className="text-sm text-red-500">{formik.errors.lastName} </div>: null}
            </div>
            <button type="submit" className="border border-violet-500 bg-violet-400 p-3 rounded-lg w-full">Submit</button>
        </form>
    );
};

export default FormSignUpYup;