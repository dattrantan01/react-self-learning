import React from 'react';
import { useController, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";

const schemaValidation = Yup.object({
    firstName: Yup.string().required("required").max(20, "less than 20 characters"),
    lastName: Yup.string().required("required").max(20, "less than 20 characters"),
    email: Yup.string().email().required("required"),
    introduce: Yup.string().required("required"),
    ageNumber: Yup.number().min(18, "over 18 please!")
})
const FormUsingRHFYup = () => {
    const { register, handleSubmit, formState, watch, reset, control } = useForm({
        resolver: yupResolver(schemaValidation),
        mode: 'onChange'
    });

    const watchAge = watch("age");
    
    const submit = (values) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
                console.log(values);
                if(formState.isValid){
                    reset({
                        firstName: "",
                        lastName: "",
                        introduce: "",
                        email: "",
                        job: "frontend",
                        age: false,
                        ageNumber: ""
                    });
                }

            }, 4000)
        })
    }
    console.log("valid ", formState.isValid);
    return (
        <form onSubmit={handleSubmit(submit)} className="p-10 w-full max-w-[500px] mx-auto">
            <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="firstName">Firstname</label>
                <input 
                    type="text" 
                    id="firstName" 
                    placeholder="Enter your first name"
                    className="border border-violet-400 p-4"
                    name="firstName"
                    {...register('firstName')}
                />
                {/* {formState.errors?.firstName?.type === 'required' && (<div className="text-sm text-red-500">required</div>)} */}
                {formState.errors?.firstName && (<div className="text-sm text-red-500">{formState.errors.firstName.message}</div>)}
            </div>
            <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="firstName">Lastname</label>
                <input 
                    type="text" 
                    id="lastName" 
                    placeholder="Enter your last name"
                    className="border border-violet-400 p-4"
                    name="lastName"
                    {...register('lastName')}
                />
                 {/* {formState.errors.lastName && (<div className="text-sm text-red-500">required</div>)} */}
                 {formState.errors?.lastName && (<div className="text-sm text-red-500">{formState.errors.lastName.message}</div>)}
            </div>
            <div className="flex flex-col gap-2 mb-5">
                    <label htmlFor="email">Email</label>
                    <MyInput
                        name="email"
                        // type="email"
                        placeholder="Enter your email"
                        id="email"
                        control={control}
                    ></MyInput>
                     {/* {formState.errors.email && (<div className="text-sm text-red-500">required</div>)} */}
                     {formState.errors?.email && (<div className="text-sm text-red-500">{formState.errors.email.message}</div>)}
                    <div className="text-sm text-red-500">
     
                    </div>
            </div>
            {/* <div className="flex flex-col gap-2 mb-5">
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="p-4 rounded-md border border-gray-100"
                        {...register('email')}
                    />

                     {formState.errors?.email && (<div className="text-sm text-red-500">{formState.errors.email.message}</div>)}
                    <div className="text-sm text-red-500">
     
                    </div>
                </div> */}
                <div className="flex flex-col gap-2 mb-5">
                    <label htmlFor="introduce">Introduce Yourself</label>
                    <textarea
                        name="introduce"
                        type="textarea"
                        placeholder="Put text here"
                        className="p-4 rounded-md border border-gray-100 h-[200px] resize-none"
                        {...register('introduce')}
                    ></textarea>
                     {/* {formState.errors.introduce && (<div className="text-sm text-red-500">required</div>)} */}
                     {formState.errors?.introduce && (<div className="text-sm text-red-500">{formState.errors.introduce.message}</div>)}
                    <div className="text-sm text-red-500">
                    </div>
                </div>
                <div className="flex flex-col gap-2 mb-5">
                    <label htmlFor="job">Select your job</label>
                    <select
                        name="job"
                        type="select"
                        placeholder="Put text here"
                        className="p-4 rounded-md border border-gray-100"
                        {...register('job')}
                    >
                        <option value="frontend">Frontend Developer</option>
                        <option value="backend">Backend Developer</option>
                        <option value="fullstack">Fullstack Developer</option>
                    </select>
                    <div className="text-sm text-red-500">
                  
                    </div>
                </div>
                <div className="flex gap-2 mb-5 items-center">
                    
                    <input
                        name="age"
                        type="checkbox"
                        placeholder="Put text here"
                        className="form-checkbox h-8 w-8"
                        {...register('age')}
                    >
                    </input>
                    <span>Are you over 18?</span>
                   
                </div>
                {watchAge && 
                <input name="ageNumber" type="number" placeholder="Your age" 
                    className="p-4 rounded-md border border-gray-100 w-full" 
                    {...register('ageNumber')}
                />
                }
                {watchAge && formState.errors?.ageNumber && (<div className="text-sm text-red-500">{formState.errors.ageNumber.message}</div>)}  
       
            <button type="submit" className="border border-violet-500 bg-violet-400 p-3 rounded-lg w-full mt-5">
                
                {formState.isSubmitting ? <div className="w-6 h-6 border-[4px] border-yellow-50 border-t-transparent rounded-full animate-spin mx-auto"></div> : "Submit"}
            </button>
        </form>
    );
};

export default FormUsingRHFYup;

const MyInput = ({control, ...props}) => {
    const { field } = useController({
        control,
        name: props.name,
        defaultValue: "dattrantan01@gmail.com"
    })

    return (
        <input 
            className="p-4 rounded-md border border-gray-400"
            {...field}
            {...props}
        />
    )
}