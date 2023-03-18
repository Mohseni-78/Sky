import React, { FormEvent, useEffect, useState } from 'react'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
// Imported Images===============>
import bg from '@/public/images/bg_signup.jpg'
// Imported Icons================>
import { AiFillEye } from 'react-icons/ai'
import { AiFillEyeInvisible } from 'react-icons/ai'

// Imported helper funcions =============>
import { feedbackError } from '@/helper/ErrorHandler'

const SigninCom = () => {
    const [inputData, setInputData] = useState<any>({ email: "", password: "" })
    const [errors, setErrors] = useState({ email: "", password: "" })
    const [touch, setTouch] = useState({ email: false, password: false });
    const [showPass, setShowPass] = useState<boolean>(false)
    const router = useRouter();


    useEffect(() => {
        setErrors(feedbackError(inputData))
    }, [inputData])

    const changeHandler = (e: any) => {
        setInputData((prev: any) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    const touchHandler = (e: any) => {
        setTouch(prev => ({
            ...prev,
            [e.target.name]: true
        }))


    }

    const submitHandler = async (e: FormEvent) => {
        e.preventDefault();
        if (errors.email || errors.password) {
            console.log("please enter valid data");
        } else {
            const res = await signIn('credentials', {
                email: inputData.email,
                password: inputData.password,
                redirect: false
            })
            console.log(res);

            if (res?.ok) {
                router.replace('/')
            }

        }
    }

    return (
        <div className='signup'>
            <Image src={bg} alt="" className='bg' />
            <div className="signupSection">
                <h1 className='title'>Login Form</h1>
                <form className='form'>
                    <div className='form-group'>
                        <label>Email</label>
                        <input className='form-input'
                            type="text"
                            placeholder='Please enter your email...'
                            name='email'
                            value={inputData.email}
                            onChange={(e) => changeHandler(e)}
                            onFocus={(e) => touchHandler(e)}
                        />
                        <span>{touch.email && errors.email && errors.email}</span>

                    </div>
                    <div className="flex">
                        <div className='form-group'>
                            <label>Password</label>
                            <div className="inputBox">
                                <input className='form-input'
                                    type={`${showPass ? 'text' : 'password'}`}
                                    placeholder='Please enter your Password...'
                                    name='password'
                                    value={inputData.password}
                                    onChange={(e) => changeHandler(e)}
                                    onFocus={(e) => touchHandler(e)}
                                />
                                <span>{touch.password && errors.password && errors.password}</span>

                                {
                                    showPass ? <AiFillEye className="icon"
                                        onClick={() => setShowPass(prev => !prev)} /> :
                                        <AiFillEyeInvisible className="icon"
                                            onClick={() => setShowPass(prev => !prev)} />
                                }
                            </div>

                        </div>
                    </div>
                    <p className='p'>Not registered? <Link href="/signup">Create an Account.</Link></p>
                    <button className='btn' onClick={(e) => submitHandler(e)}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default SigninCom