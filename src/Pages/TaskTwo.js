import React from 'react';
import { useForm } from "react-hook-form";


const TaskTwo = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        // console.log(data);

        fetch('http://localhost:4040/storeUserInfo',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(data)

        }).then(data => console.log(data))

    };


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <h1>Store User Information</h1>
                <label htmlFor="name">Name</label> <br />
                <input type='text'  placeholder='Name' {...register("name", { required: true })} /> <br />
                {errors.name && <span>This field is required</span>} <br />
                
                <label htmlFor="email">Email</label> <br />
                <input type='email'  placeholder='Email' {...register("email", { required: true })} /> <br />
                {errors.email && <span>This field is required</span>} <br />

                <label htmlFor="address">Address</label> <br />
                <input type='text'  placeholder='address' {...register("address", { required: true })} /> <br />
                {errors.address && <span>This field is required</span>} <br />

                <label htmlFor="income">Income</label> <br />
                <input type='number'  placeholder='Income' {...register("income", { required: true })} /> <br />
                {errors.income && <span>This field is required</span>} <br />

                <label htmlFor="maritalStatus">Marital Status</label> <br />
                <input type='text'  placeholder='Marital Status' {...register("maritalStatus", { required: true })} /> <br />
                {errors.maritalStatus && <span>This field is required</span>} <br />
                
                <label htmlFor="registrationNumber">Registration Number</label> <br />
                <input type='number'  placeholder='Registration Number' {...register("registrationNumber", { required: true })} /> <br />
                {errors.registrationNumber && <span>This field is required</span>} <br />

                <label htmlFor="date">Date</label> <br />
                <input type='date' placeholder='Date' {...register("date", { required: true })} /> <br />
                {errors.date && <span>This field is required</span>} <br />
                
                <input type="submit" />
            </form>
        </div>
    );
};

export default TaskTwo;



// Create a database and store some information about the user like name, age, email, address, income,Marital Status, 
// registration number and registration date etc. Now create an API which will show the only user name, age and email.
// Note: API http://localhost:3000/api/upcloud/users/