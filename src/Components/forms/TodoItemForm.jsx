import React from "react";
import { useForm } from "react-hook-form";

export default function TodoItemForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data = {}) => {
    console.log(data, "data");
  };

  return (
    <div className="flex flex-col">
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <label htmlFor="todoItem">
        Write your todo
        <input
          type="text"
          name="todoItem"
          {...register("todoItem", {
            required: true,
            minLength: {
              value: 2,
              message: "Your todo is to short. Try to do more",
            },
          })}
        />
      </label>
      {errors.todoItem && (
        <p style={{ color: "red" }}>{errors.todoItem.message}</p>
      )}
      <label htmlFor="todoDate">
        Date:
        <input
          type="date"
          name="todoDate"
          {...register("todoDate", { required: true })}
        />
      </label>
      <label htmlFor="todoCategory">
        Category:
        <select
          name="todoCategory"
          {...register("todoCategory", { required: true })}
        >
          <option>Select a category</option>
          <option>Add a new category</option>
          <option>Personal</option>
          <option>Business</option>
        </select>
      </label>
      <label htmlFor="addTodo">
        {" "}
        Add Todo
        <input 
        type="Submit" 
        name="addTodo" 
        defaultValue="Add Todo" 
        />
      </label>
    </form>
    </div>
  );
}
