import React, { useState,useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaRegEyeSlash } from "react-icons/fa";
import {handleRegistration} from  "../../events/axiosGlobal"
export default function Registration() {
    const url =''
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const onSubmit = async (data = {}) => {
        console.log(data, 'data')
        handleRegistration(data)
    }
    
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: "column" }}>
            <label htmlFor="username">Username
                <input type="text" name="username" {...register("username", {
                    required: true, minLength: {
                        value: 4,
                        message: "Username must have at least 8 characters"
                    }
                })} />
            </label>
            {errors.username && <p style={{ color: "red" }}>{errors.username.message}</p>}
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
                <input type={passwordShown ? "text" : "password"} name="password" {...register("password", {
                    required: true,
                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                })} />
                <FaRegEyeSlash onClick={togglePassword}/>
            </label>
            {errors.password && <p style={{ color: "red" }}>Password should include capital letter, special symbol, number and at least to be 4 characters</p>}
            <label htmlFor="confirmPassword"> Confirm Password
                <input type="password" required name="confirmPassword" {...register("confirmPassword", {
                    required: true,
                    validate: (val) => {
                        if (watch('password') !== val) {
                            return "Your passwords do not match";
                        }
                    },
                })} />
            </label>
            {errors.confirmPassword && <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>}
            <input type="Submit" name="Submit" defaultValue="Sign in" />
        </form>
    )
}

