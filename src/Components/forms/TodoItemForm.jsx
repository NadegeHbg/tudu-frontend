import React from "react";
import { useForm } from "react-hook-form";
import { handleAdd } from "../../events/axiosGlobal";
export default function TodoItemForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data = {}) => {
    console.log(data, "data");
    // handleAdd(data);
  };

  return (
    <div className="flex flex-col items-center bg-secondary text-white w-1/3 h-full rounded-l-large">
      <div className="border-2 border-white m-5 py-2 px-10 text-center">
        Adding a new TuDu
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <label htmlFor="taskname">
          Task Name:
          <input
            type="text"
            name="taskname"
            className="bg-secondary text-white border-2 border-white"
            {...register("taskname", { required: true })}
          />
        </label>
        <label htmlFor="description">
          Write your todo:
          <input
            type="text"
            name="description"
            className="bg-secondary text-white border-2 border-white"
            {...register("descriprion", {
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

        <label htmlFor="category">
          Category:
          <select
            className="bg-secondary text-white border-white border-solid border-1"
            name="category"
            {...register("category", { required: true })}
          >
            <option>Select a category</option>
            <option>Add a new category</option>
            <option>Personal</option>
            <option>Business</option>
          </select>
        </label>
        <label htmlFor="duedate">
          Date:
          <input
            type="date"
            name="duedate"
            className="bg-secondary text-white border-2 border-white"
            {...register("duedate", { required: true })}
          />
        </label>

        <label htmlFor="entrydate">
          Entry date:
          <input
            type="date"
            name="entrydate"
            className="bg-secondary text-white border-2 border-white"
            {...register("entrydate", { required: true })}
          />
        </label>

        <label htmlFor="url">
          Url:
          <input
            type="text"
            name="url"
            className="bg-secondary text-white border-2 border-white"
            {...register("url", { required: true })}
          />
        </label>

        <label htmlFor="place">
          Place:
          <input
            type="text"
            name="place"
            className="bg-secondary text-white border-2 border-white"
            {...register("place", { required: true })}
          />
        </label>

        <label htmlFor="style">
          Category:
          <select
            className="bg-secondary text-white border-white border-solid border-1"
            name="style"
            {...register("style", { required: true })}
          >
            <option>Select a style</option>
            <option>Dark</option>
            <option>Light</option>
          </select>
        </label>

        <label htmlFor="addTodo">
          {" "}
          Add Todo
          <input type="Submit" name="addTodo" defaultValue="Add Todo" />
        </label>

      </form>
    </div>
  );
}
//taskname | description | category | duedate | entrydate | url | place | style
