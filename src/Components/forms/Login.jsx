import React from 'react';
import { useForm } from 'react-hook-form';
import { HandleLogin } from '../../events/axiosGlobal';
export default function Login() {

    const {
        register,
        handleSubmit,
        // formState: { errors }
    } = useForm();

    const onSubmit = async (data = {}) => {
        console.log(data, 'data')
        HandleLogin(data)
    }


    

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email
                <input type="email" required name="email" {...register("email")} />
            </label>
            <label htmlFor="password"> Password
                <input type="Password" required name="password" {...register("password")} />
            </label>
            <input type="Submit" name="Submit" defaultValue="Sign in" />
        </form>
    )
}
