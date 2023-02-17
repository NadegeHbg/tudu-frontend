import React from "react";
import { useForm } from "react-hook-form";
import { HandleLogin } from "../../events/axiosGlobal";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

export default function Login() {
    const [showModal, setShowModal] = React.useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const location = useNavigate();
    const HandleLogin = async (data) => {
        try {
            console.log(data, "axios global login");
            const response = await axios.post("/user/login", data);
            const resStatus = response.status;
            const resData = response.data;
            console.log(response, "login post request");

            Cookies.set("email", resData.email, { path: "/" });
            Cookies.set("id", resData.id, { path: "/" });
            document.cookie = `token=${resData.token}`;
            // document.cookie = `email=${resData.email}`

            location("/dashboard");
        } catch (err) {
            const errStatus = err.response.status;
            alert(err.response.data);
        }
    };
    const onSubmit = async (data = {}) => {
        HandleLogin(data);
    };

    return (
        <div className="container mx-auto">
            <button
                className="justify-center items-center flex bg-cyan-900 text-white active:bg-pink-600 font-logoFont uppercase text-sm px-3 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Login
            </button>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*Content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*Body*/}
                                <div className="relative p-6 flex-auto">
                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm font-logoFont text-gray-900 ">
                                                E-mail address
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="shadow-sm text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-lightcream"
                                                {...register("email")}
                                                placeholder="Add E-mail"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="block mb-2 text-sm font-logoFont text-gray-900 ">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                name="password"
                                                className="shadow-sm text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-lightcream"
                                                {...register("password")}
                                                placeholder="Add Password"
                                                required
                                            />
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
                                        name="Submit"
                                        className="bg-cyan-900 text-white active:bg-emerald-600 font-logoFont uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    );
}
