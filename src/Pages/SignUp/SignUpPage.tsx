import { useState, useEffect } from 'react';
import { useRegisterMutation } from '../../services/api';
import { Spinner } from '../../Components/Loaders/Spinner';

export const SignUpPage  = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    const [ register, { data, isError, isSuccess, isLoading } ] = useRegisterMutation();

    useEffect(() => {
        if (isSuccess) {
            const { token } = data;
            localStorage.setItem('Token', token);
        }
    }, [isLoading]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const type = e.target.type;
        const value = e.target.value;
        setForm((form) => ({ ...form, [type]: value }));
    }

    const handleSignUp = async () => {
        register(form);
    }

    if (isLoading) {
        return (
            <div className="flex flex-col w-screen h-screen justify-center items-center">
                <Spinner width="w-1/4" />
            </div>
        )
    }

    return (
        <div className="flex flex-col w-screen h-screen justify-center items-center">
            <h4 className="font-semibold text-lg/8">Создание аккаунта</h4>
            <p className="text-sm font-reqular" >Введите свой адрес электронной почты и пароль</p>
            <input type="email" className="mt-5 w-4/5 py-1.5 px-2.5 border border-gray-300 rounded-lg focus:outline-primary" placeholder="emai@domain.com" onChange={handleChange} />
            <input type="password" className="mt-5 w-4/5 py-1.5 px-2.5 border border-gray-300 rounded-lg focus:outline-primary" placeholder="password" onChange={handleChange} />
            <button className="w-4/5 mt-4 bg-primary p-2.5 text-white rounded-lg font-semibold text-sm" onClick={handleSignUp}>Зарегестрироваться</button>
        </div>
    )
}