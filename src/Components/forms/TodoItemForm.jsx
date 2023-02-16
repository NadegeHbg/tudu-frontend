import React from "react";
import { useForm } from "react-hook-form";
import { handleAdd } from "../../events/axiosGlobal";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function TodoItemForm() {
    const [showModal, setShowModal] = React.useState(false);
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
        <div className="container mx-auto">
            <button
                className="justify-center items-center flex bg-blue-500 text-white active:bg-pink-600 font-logoFont uppercase text-sm px-3 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Add / Edit
            </button>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*Content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*Edit Section Header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-logoFont">Add / Edit </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                                    </button>
                                </div>
                                {/*Body*/}
                                <div className="relative p-6 flex-auto">
                                    <form action="#" onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                                        <div>
                                            <label htmlFor="name" className="block mb-2 text-sm font-logoFont text-gray-900 ">
                                                Choose your Category
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
                                                Add your Tu Du
                                            </label>
                                            <input
                                                type="name"
                                                id="ptaskname"
                                                className="shadow-sm text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-lightcream"
                                                {...register("ptaskname", { required: true })}
                                                placeholder="Tu Du "
                                                required
                                            />
                                        </div>
                                        <div className="flex">
                                            <label htmlFor="duedate">
                                                <label
                                                    htmlFor="name"
                                                    className="shadow-sm text-gray-900 text-sm rounded-lg font-logoFont block w-full p-2.5 bg-lightcream"
                                                >
                                                    Due Date
                                                </label>
                                                <input
                                                    type="date"
                                                    name="duedate"
                                                    className="shadow-sm text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-lightcream "
                                                    // style={{ WebkitAppearance: "none", color: "white", filter: "invert(1)" }}
                                                    {...register("duedate", { required: true })}
                                                />
                                            </label>

                                            <label htmlFor="entrydate">
                                                <label
                                                    htmlFor="name"
                                                    className="shadow-sm text-gray-900 text-sm rounded-lg font-logoFont block w-full p-2.5 bg-lightcream"
                                                >
                                                    Entry Date
                                                </label>
                                                <input
                                                    type="date"
                                                    name="entrydate"
                                                    className="shadow-sm text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-lightcream"
                                                    {...register("entrydate", { required: true })}
                                                />
                                            </label>
                                        </div>
                                    </form>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-logoFont uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-logoFont uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
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
