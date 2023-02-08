import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Registration() {

    const {
        register,
        handleSubmit,
        // formState: { errors }
    } = useForm();

console.log(register.password)

    const onSubmit = async (data = {}) => {
        console.log(data, 'data')
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{display: 'flex', flexDirection: "column"}}>
            <label htmlFor="username">Username
                <input type="text" required name="username" {...register("username")} />
            </label>
            <label htmlFor="firstName"> First Name
                <input type="firstName" required name="firstName" {...register("firstName")} />
            </label>
            <label htmlFor="secondName"> Second Name
                <input type="secondName" required name="secondName" {...register("secondName")} />
            </label>
            <label htmlFor="email"> Email
                <input type="email" required name="email" {...register("email")} />
            </label>
            <label htmlFor="password">Password
                <input type="password" required name="password" {...register("password")} />
            </label>
            <label htmlFor="confirmPassword"> Confirm Password
                <input type="confirmPassword" required name="confirmPassword" {...register("confirmPassword")} />
            </label>
            <input type="Submit" name="Submit" defaultValue="Sign in" />
        </form>
    )
}

