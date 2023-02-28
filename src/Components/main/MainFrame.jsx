import React from "react";
import { GetTodos } from "../../events/axiosGlobal";
import Cookies from "js-cookie";
import { isDoneTudu, deleteTudu } from "../../events/axiosGlobal";
import TodoItemForm from "../forms/TodoItemForm";

const MainFrame = ({ tudu }) => {
  // mark a tudu as done
  const handleDone = async (id) => {
    await isDoneTudu(id);
    window.location.reload(true);
  };
  // delete a tudu
  const handleDelete = async (id) => {
    await deleteTudu(id);
    window.location.reload(true);
  };
  return (
    <section className="p-4 sm:ml-64 marker:text-gray-600 body-font w-full">
      <div className="text-gray-900 bg-gray-200">
        <div className="p-4 inline-flex items-center justify-center">
          <h1 className="text-3xl">Tudu-List</h1>
        </div>
        <div className="px-3 py-4 flex justify-center">
          <table className="w-full text-md bg-gray-100 shadow-md rounded mb-4">
            <tbody>
              <tr className="border-b ">
                <th className="text-left p-3 px-5">
                  <p>Title</p>
                </th>
                <th className="text-left p-3 px-5">
                  <p>Category</p>
                </th>
                <th className="text-left p-3 px-5">
                  <p>Description</p>
                </th>
                <th className="text-left p-3 px-5">
                  <p>Due-Date</p>
                </th>
                {/* <th class="text-left p-3 px-5">End-Date</th> */}
                <th></th>
              </tr>
              {tudu.length > 0 ? (
                tudu.map((todo) => (
                  <tr
                    key={todo.id}
                    className="border-b  hover:bg-gray-200   bg-white"
                  >
                    <td className="p-3 px-5">{todo.ptaskname}</td>
                    <td className="p-3 px-5">
                      {todo.category}
                      {/* <select value="user.role" class="bg-transparent">
                                        <option value="user">user</option>
                                        <option value="admin">admin</option>
                                    </select> */}
                    </td>
                    <td className="p-3 px-5"> {todo.description}</td>

                    <td className="p-3 px-5">
                      {new Date(todo.duedate).toISOString().slice(0, 10)}
                    </td>
                    <td className="p-3 px-5 flex justify-end">
                      {todo.isdone ? (
                        <button
                          onClick={() => {
                            handleDone(todo.id);
                          }}
                          type="button"
                          className="mr-3 text-sm bg-cyan-600  text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          Done
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            handleDone(todo.id);
                          }}
                          type="button"
                          className="mr-3 text-sm bg-gray-800 hover:bg-cyan-600 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          Done
                        </button>
                      )}
                      <button
                        onClick={() => {
                          handleDelete(todo.id);
                        }}
                        type="button"
                        className="mr-3 text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        className="mr-3 text-sm bg-gray-800 hover:bg-cyan-600 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      >
                        <TodoItemForm todo={todo} tudu={tudu} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>
                    <p> No tudu task</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
// category,description,duedate,entrydate,id,place,ptaskname,style,url,user_id

export default MainFrame;
