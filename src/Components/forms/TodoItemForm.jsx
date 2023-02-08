import React from 'react';
import { useForm } from 'react-hook-form';

export default function TodoItemForm() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data = {}) => {
        console.log(data, 'data')
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="todoItem">Write your todo
                <input type="text"  name="todoItem" {...register("todoItem", {
                    required: true, minLength: {
                        value: 2,
                        message: "Your todo is to short. Try to do more"
                    }
                })} />
            </label>
            {errors.todoItem && <p style={{ color: "red" }}>{errors.todoItem.message}</p>}
            <label htmlFor="addTodo"> Add Todo
            <input type="Submit" name="addTodo" defaultValue="Add Todo" />
            </label>
        </form>
    )
}