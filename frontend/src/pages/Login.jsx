import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
    const [currentState, setCurrentState] = useState('Login');
    const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            if (currentState === 'Sign Up') {
                const response = await axios.post(`${backendUrl}/api/user/register`, { name, email, password });
                if (response.data.success) {
                    setToken(response.data.token);
                    localStorage.setItem('token', response.data.token);
                    toast.success(response.data.message);
                } else {
                    toast.error(response.data.message);
                }
            } else {
                const response = await axios.post(`${backendUrl}/api/user/login`, { email, password });
                if (response.data.success) {
                    setToken(response.data.token);
                    localStorage.setItem('token', response.data.token);
                    toast.success('Login successful');
                } else {
                    toast.error(response.data.message);
                }
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || 'An error occurred');
        }
    };

    useEffect(() => {
        if (token) {
            navigate('/');
        }
    }, [token]);

    return (
        <form
            onSubmit={onSubmitHandler}
            className="flex flex-col w-[90%] sm:max-w-md m-auto mt-14 gap-4 text-[#0b6910]">
            <div className="flex justify-between items-center mb-4">
                <p className="text-2xl font-semibold text-[#429c47]">{currentState}</p>
                <button
                    type="button"
                    onClick={() => navigate('/')}
                    className="text-2xl font-light text-[#429c47] hover:text-[#013206]">
                    X
                </button>
            </div>

            {currentState === 'Login' ? null : (
                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="w-full py-2 px-3 border border-[#215922] rounded-md bg-[#c5dec3] placeholder-[#0f5815] focus:outline-none focus:border-[#27f526]"
                    placeholder="Your Name"
                    required
                    autoComplete="name"
                />
            )}

            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="w-full py-2 px-3 border border-[#194d1a] rounded-md bg-[#c5dec3] placeholder-[#0f5815] focus:outline-none focus:border-[#27f526]"
                placeholder="Your Email"
                required
                autoComplete="email"
            />

            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="w-full py-2 px-3 border border-[#194d1a] rounded-md bg-[#c5dec3] placeholder-[#0f5815] focus:outline-none focus:border-[#27f526]"
                placeholder="Password"
                required
                autoComplete="current-password"
            />

            <button
                type="submit"
                className="bg-[#1f5721] hover:bg-[#299229] active:bg-[#1e5221] text-white font-medium px-4 py-2 rounded-md mt-2 transition">
                {currentState === 'Login' ? 'Login' : 'Create Account'}
            </button>

            <div className="flex items-center mt-2 gap-2">
                <input type="checkbox" required className="accent-[#134013]" />
                <p className="text-sm">By Continuing, I agree to the terms of use & privacy policy</p>
            </div>

            <div className="mt-2 text-sm text-[#000000]">
                {currentState === 'Login' ? (
                    <p>
                        Create a new account?{' '}
                        <span
                            onClick={() => setCurrentState('Sign Up')}
                            className="cursor-pointer underline hover:text-[#013206]">
                            Click here
                        </span>
                    </p>
                ) : (
                    <p>
                        Already have an account?{' '}
                        <span
                            onClick={() => setCurrentState('Login')}
                            className="cursor-pointer underline hover:text-[#013206]">
                            Login here
                        </span>
                    </p>
                )}
            </div>
        </form>
    );
};

export default Login;
