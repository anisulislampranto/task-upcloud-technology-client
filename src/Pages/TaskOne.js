import React from 'react';
import { useForm } from "react-hook-form";


const TaskOne = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:4040/resgisterUser', {
            method:'POST',
            headers:{"Content-type":'application/json'},
            body: JSON.stringify(data)
        }).then(data => {
            if (data) {
                alert('User Registration Success.')
            }
        })
    };

    return (
        <div>
            <h1>Task One: Register User</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name</label> <br />
                <input type='name' placeholder='Name' {...register("name", { required: true })} /> <br />
                <label htmlFor="email">Email</label> <br />
                <input type='email' placeholder='Email' {...register("email", { required: true })} /> <br />
                {errors.email && <span>This field is required</span>} <br />
                <label htmlFor="password">Password</label> <br />
                <input type='password' placeholder='Password' {...register("password", { required: true })} /> <br />
                {errors.password && <span>This field is required</span>} <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default TaskOne;