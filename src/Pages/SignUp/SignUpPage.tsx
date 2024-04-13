import * as React from 'react';
import { useState } from 'react'

export const SignUpPage  = () => {
    const [email, setEmail] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        setEmail(value);
    }

    const handleSignUp = () => {
        
    }

    return (
        <div className="flex flex-col w-screen h-screen justify-center items-center">
            <h4 className="font-semibold text-lg/8">Создание аккаунта</h4>
            <p className="text-sm font-reqular" >Введите свой адрес электронной почты</p>
            <input type="email" className="mt-5 w-4/5 py-1.5 px-2.5 border border-gray-300 rounded-lg focus:outline-primary" placeholder="emai@domain.com" onChange={handleChange} />
            <button className="w-4/5 mt-4 bg-primary p-2.5 text-white rounded-lg font-semibold text-sm" onClick={handleSignUp}>Зарегестрироваться</button>
        </div>
    )
}