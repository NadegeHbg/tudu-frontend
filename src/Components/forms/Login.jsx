import React,{useState} from 'react';
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


    //     const fetchData = async(req,res) =>{
    //       try{
    //           const response = axios.get(''+id,{data})
    
    //           console.log(response,'LoginConnectionResponse')
    //           setConnection(response)
    //       } catch(err){
    //           console.log(err,'LoginConnectionError')
    //       }
    //     }
    // fetchData()

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
