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
    <div className="flex flex-col items-center bg-secondary text-white w-1/3 h-full rounded-l-large">
      <div className="border-2 border-white m-5 py-2 px-10 text-center">Adding a new TuDu</div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className="flex justify-around">
        <label htmlFor="todoDate">
          Date:
          <input
            type="date"
            name="todoDate"
            className="bg-secondary text-white border-2 border-white"
            {...register("todoDate", { required: true })}
          />
        </label>
        <label htmlFor="todoCategory">
          Category:
          <select
            className="bg-secondary text-white border-white border-solid border-1"
            name="todoCategory"
            {...register("todoCategory", { required: true })}
          >
            <option>Select a category</option>
            <option>Add a new category</option>
            <option>Personal</option>
            <option>Business</option>
          </select>
        </label>
        </div>
        <label htmlFor="todoItem">
          Write your todo
          <input
            type="text"
            name="todoItem"
            className="bg-secondary text-white border-white border-solid border-1"
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
       
        <label htmlFor="addTodo">
          {" "}
          Add Todo
          <input type="Submit" name="addTodo" defaultValue="Add Todo" />
        </label>
      </form>
    </div>
  );
}
