import React from "react";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { CheckIcon, EllipsisVerticalIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { handleEdit } from '../../events/axiosGlobal';

export default function TodoItemForm({ todo }) {


    const [showModal, setShowModal] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            id: todo.id,
            category: todo.category,
            ptaskname: todo.ptaskname,
            description: todo.description,
            duedate: todo.duedate,
            entrydate: todo.entrydate
        }
    });

    const [userId, setUserId] = useState(null);

    useEffect(() => {
        setUserId(Cookies.get("id"));
    }, []);

    const onSubmit = async (data = {}) => {
        setShowModal(false);
        data.user_id = userId;
        console.log(data, "data");
        handleEdit(data);
    };

    const handleChange = (event) => {
        const { newInfo, value } = event.target;
        setValue(newInfo, value);
    }

    return (
        <div className="container mx-auto">
            <div
                className="w-full sm:w-auto bg-gray-800 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-2 py-2.5"
            >

                {" "}
                <EllipsisVerticalIcon  onClick={() => setShowModal(true)} className="h-6 w-6 " />
            </div>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*Content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*Edit Section Header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-logoFont"> Edit </h3>
                                </div>
                                {/*Body*/}
                                <div className="relative p-6 flex-auto">
                                    <form action="#" onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                                        <div>
                                            <label htmlFor="name" className="block mb-2 text-sm font-logoFont text-gray-900 ">
                                                Category
                                            </label>
                                            <label htmlFor="category">
                                                <select
                                                    className="shadow-sm text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-lightcream"
                                                    name="category"
                                                    {...register("category", { required: true })}
                                                >
                                                    <option>Choose here</option>
                                                    <option>Personal</option>
                                                    <option>Business</option>
                                                </select>
                                            </label>
                                        </div>
                                        <div>
                                            <label htmlFor="name" className="block mb-2 text-sm font-logoFont text-gray-900 ">
                                                Task Name
                                            </label>
                                            <input
                                                onChange={handleChange}
                                                type="name"
                                                id="ptaskname"
                                                className="shadow-sm text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-lightcream"
                                                {...register("ptaskname", { required: true })}
                                                placeholder="Tu Du "
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="name" className="block mb-2 text-sm font-logoFont text-gray-900 ">
                                              Description
                                            </label>
                                            <input
                                            onChange={handleChange}
                                                type="text"
                                                id="description"
                                                className="shadow-sm text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-lightcream"
                                                {...register("description", { required: true })}
                                                placeholder="Description "
                                            />
                                        </div>
                                        <div className="flex">
                                        <label htmlFor="entrydate">
                                                <label
                                                    htmlFor="name"
                                                    className="shadow-sm text-gray-900 text-sm rounded-lg font-logoFont block w-full p-2.5 bg-lightcream"
                                                >
                                                  Entry Date
                                                </label>
                                                <input
                                                onChange={handleChange}
                                                    type="date"
                                                    name="entrydate"
                                                    className="shadow-sm text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-lightcream"
                                                    {...register("entrydate", { required: true })}
                                                />
                                            </label>
                                            <label htmlFor="duedate">
                                                <label
                                                    htmlFor="name"
                                                    className="shadow-sm text-gray-900 text-sm rounded-lg font-logoFont block w-full p-2.5 bg-lightcream"
                                                >
                                                   Due Date
                                                </label>
                                                <input
                                                onChange={handleChange}
                                                    type="date"
                                                    name="duedate"
                                                    className="shadow-sm text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-lightcream "
                                                    // style={{ WebkitAppearance: "none", color: "white", filter: "invert(1)" }}
                                                    {...register("duedate", { required: true })}
                                                />
                                            </label>

                                        </div>
                                    </form>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-logoFont uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-cyan-900 text-white active:bg-white font-logoFont uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="Submit"
                                    onClick={handleSubmit(onSubmit)}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    );
}
