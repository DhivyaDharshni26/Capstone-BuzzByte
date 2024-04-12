import React, { useState, useEffect } from "react";
import useUserContext from "../../contexts/UserContext";
import { Navigate, Link } from "react-router-dom";
import logo from '../../../src/assets/bblogo.png'


export default function SignIn() {
    const { login, user } = useUserContext();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    useEffect(() => {
        document.title = "Sign In To Birdie";
        return function () {
            document.title = "Birdie";
        };
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        login(formData, () => alert("Invalid Login Credentials"));
    }

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    if (user) return <Navigate to="/" />;
    return (
        <main className="w-screen h-screen flex items-center justify-center" style={{backgroundColor:'#ceb8f8'}}>
            <div className="w-[90vw] bg-purple-50 max-w-lg p-6 h-max-content rounded-lgz border-l-4">
            <div className="flex justify-center gap-1 items-center m-2">
                <img src={logo} style={{height:"80px", width:'80px', mixBlendMode:'darken'}}/>
                </div>
                <h1 className="text-2xl text-purple-500 flex justify-center gap-1 items-center m-2">
                    <span className="text-3xl">
                        {/* <iconify-icon icon="game-icons:hummingbird"></iconify-icon> */}
                    </span>
                    Login To BuzzByte
                </h1>
                <form onSubmit={(e) => handleSubmit(e)} className="w-full flex flex-col gap-3">
                    <label htmlFor="signup-username">Username</label>
                    <input
                        type="text"
                        autoFocus
                        name="username"
                        required
                        value={formData.username}
                        className="rounded-lg p-2 text-sm"
                        onChange={handleChange}
                        placeholder="username"
                        id="signup-username"
                    />
                    <label htmlFor="signup-password">Password</label>
                    <input
                        type="password"
                        className="rounded-lg p-2 text-sm"
                        name="password"
                        id="signup-password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="password"
                    />
                    <p className="mt-3">
                        Don't have an account,{" "}
                        <Link to="/signup" className="underline text-blue-600">
                            Signup
                        </Link>
                    </p>
                    <div className="flex justify-end items-center gap-2">
                        <button className="bg-purple-600 text-purple-100 rounded-full px-2 w-20 py-1">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}