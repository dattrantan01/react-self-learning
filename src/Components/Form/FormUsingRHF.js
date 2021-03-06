import React from 'react';
import { useForm } from 'react-hook-form';

const FormUsingRHF = () => {
    const { register, handleSubmit, formState } = useForm();
    const submit = (values) => {
        console.log(values);
    }
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
                    {...register('firstName', {
                        required: true,
                        maxLength: 20,
                    })}
                />
                {/* {formState.errors?.firstName?.type === 'required' && (<div className="text-sm text-red-500">required</div>)} */}
                {formState.errors.firstName && (<div className="text-sm text-red-500">required</div>)}
            </div>
            <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="firstName">Lastname</label>
                <input 
                    type="text" 
                    id="lastName" 
                    placeholder="Enter your last name"
                    className="border border-violet-400 p-4"
                    name="lastName"
                    {...register('lastName', {
                        required: true,
                        maxLength: 20,
                    })}
                />
                 {formState.errors.lastName && (<div className="text-sm text-red-500">required</div>)}
            </div>
            <div className="flex flex-col gap-2 mb-5">
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="p-4 rounded-md border border-gray-100"
                        {...register('email', {
                        required: true,
                        maxLength: 20,
                    })}
                    />
                     {formState.errors.email && (<div className="text-sm text-red-500">required</div>)}
                    <div className="text-sm text-red-500">
     
                    </div>
                </div>
                <div className="flex flex-col gap-2 mb-5">
                    <label htmlFor="introduce">Introduce Yourself</label>
                    <textarea
                        name="introduce"
                        type="textarea"
                        placeholder="Put text here"
                        className="p-4 rounded-md border border-gray-100 h-[200px] resize-none"
                        {...register('introduce', {
                        required: true,
                        maxLength: 20,
                    })}
                    ></textarea>
                     {formState.errors.introduce && (<div className="text-sm text-red-500">required</div>)}
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
       
            <button type="submit" className="border border-violet-500 bg-violet-400 p-3 rounded-lg w-full"
               
            >Submit</button>
        </form>
    );
};

export default FormUsingRHF;