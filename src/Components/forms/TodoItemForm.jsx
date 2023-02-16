import React from "react";
import { useForm } from "react-hook-form";
import { handleAdd } from "../../events/axiosGlobal";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function TodoItemForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    setUserId(Cookies.get("id"));
  }, []);

  const onSubmit = async (data = {}) => {
    data.user_id = userId;
    console.log(data, "data");
    handleAdd(data);
  };

  return (
    <div className="flex flex-col items-center bg-secondary text-white w-1/3 h-screen rounded-l-large">
      <div className="m-5 py-2 px-10 text-center text-xxl">
        Adding a new TuDu
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col text-xl w-full px-10"
      >
        <label htmlFor="ptaskname">
          TuDu Name:
          <input
            type="text"
            name="ptaskname"
            className="bg-secondary my-5 ml-5 w-3/4 text-white border-2 border-white"
            {...register("ptaskname", { required: true })}
          />
        </label>

        <div className="flex">
          <label htmlFor="duedate">
            Due date:
            <input
              type="date"
              name="duedate"
              className="w-full my-2 bg-secondary text-white border-2 border-white"
              // style={{ WebkitAppearance: "none", color: "white", filter: "invert(1)" }}
              {...register("duedate", { required: true })}
            />
          </label>

          <label htmlFor="entrydate">
            Entry date:
            <input
              type="date"
              name="entrydate"
              className="w-full my-2 bg-secondary text-white border-2 border-white"
              {...register("entrydate", { required: true })}
            />
          </label>
        </div>

        <label htmlFor="description">
          Write your todo:
          <input
            type="text"
            name="description"
            className="bg-secondary text-white border-2 border-white"
            {...register("description", {
              required: true,
              minLength: {
                value: 2,
                message: "Your todo is too short. Try to write more",
              },
            })}
          />
        </label>
        {errors.description && (
          <p style={{ color: "red" }}>{errors.description.message}</p>
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

        <label htmlFor="url">
          Url:
          <input
            type="text"
            name="url"
            className="bg-secondary text-white border-2 border-white"
            {...register("url")}
          />
        </label>

        <label htmlFor="place">
          Place:
          <input
            type="text"
            name="place"
            className="bg-secondary text-white border-2 border-white"
            {...register("place")}
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
            <option defaultValue="1">Dark</option>
            <option defaultValue="2">Light</option>
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
