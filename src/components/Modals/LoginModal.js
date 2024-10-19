"use client"

import { useState } from 'react';
import { X } from 'lucide-react';

export default function LoginModal({ handleClose }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [currentModal, setCurrentModal] = useState("SignIn");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError("");
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        try {
            const response = await signup({ email, password });
            if (response?.error) {
                setError(response.error);
                return;
            }
            handleClose();
        } catch (err) {
            setError("Sign-up failed. Please try again.");
        }
    };

    return (
        <div className="z-50 inset-0 mx-auto fixed overflow-clip">
            <div className="text-black flex md:h-screen py-8 md:0 items-center justify-center">
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center" onClick={handleClose}>
                    <div className="mx-auto relative bg-white rounded-lg shadow-xl w-11/12 max-w-[450px] px-6 py-12 md:p-4 flex flex-col gap-5" onClick={(e) => e.stopPropagation()}>
                        <div className="flex flex-row justify-between">
                            <h3 className="text-2xl font-bold">{currentModal === "SignUp" ? "Sign Up" : "Sign In"}</h3>
                            <X onClick={handleClose} className="hover:cursor-pointer" />
                        </div>

                        {error && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative animate-slide-down" role="alert">
                                <strong className="font-bold">Error: </strong>
                                <span className="block sm:inline">{error}</span>
                            </div>
                        )}

                        <form className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="focus:outline-black border border-gray-300 rounded-xl py-2 px-4 block w-full" 
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="mt-2 focus:outline-black border border-gray-300 rounded-xl py-2 px-4 block w-full" 
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {currentModal === "SignUp" && (
                                <input
                                    type="password"
                                    placeholder="Confirm Password" 
                                    className="mt-2 focus:outline-black border border-gray-300 rounded-xl py-2 px-4 block w-full" 
                                    onChange={(e) => setConfirmPassword(e.target.value)} 
                                />
                            )}
                            <button
                                type="submit"
                                className="shadow text-white rounded-lg transition-colors font-medium mt-2 py-2 px-4 bg-black text-sm cursor-pointer hover:bg-secondary" 
                                onClick={currentModal === "SignUp" ? handleSignUp : handleLogin}
                            >
                                Submit
                            </button>
                        </form>
                        <div className="flex flex-row justify-center">
                            <p>
                                {currentModal === "SignIn" ? "Don't have an account?" : "Already have an account?"}
                                <span className="text-blue-900 cursor-pointer" onClick={() => setCurrentModal(currentModal === "SignIn" ? "SignUp" : "SignIn")}>
                                    {currentModal === "SignIn" ? " Sign Up" : " Sign In"}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}