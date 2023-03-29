import React, { FormEvent, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
// Imported Images===============>
import bg from '@/public/images/bg_signup.jpg'
// Imported Icons================>
import { AiFillEye } from 'react-icons/ai'
import { AiFillEyeInvisible } from 'react-icons/ai'

// Imported helper funcions =============>
import { feedbackError } from '@/helper/ErrorHandler'


const SignupCom = () => {
  const [inputData, setInputData] = useState<any>({ name: "", lastName: "", email: "", password: "", confirmPassword: "" })
  const [errors, setErrors] = useState({ name: "", lastName: "", email: "", password: "", confirmPassword: "" })
  const [touch, setTouch] = useState({ name: false, lastName: false, email: false, password: false, confirmPassword: false });
  const [showPass, setShowPass] = useState<boolean>(false)


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
    if (errors.name || errors.lastName || errors.email || errors.password || errors.confirmPassword) {
      console.log("please enter valid data");
    } else {
      await fetch('/api/auth/register',
        {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(inputData)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.status === "success") {
            window.location.href = "/"
          } else {
            console.log(data);
          }
        })
    }
  }

  return (
    <div className='signup'>
      <Image src={bg} alt="" className='bg' />
      <div className="signupSection">
        <h1 className='title'>Register Form</h1>
        <form className='form'>
          <div className=' flex'>
            <div className='form-group'>
              <label>Name</label>
              <input className='form-input'
                type="text"
                placeholder='Please enter your name...'
                name='name'
                value={inputData.name}
                onChange={(e) => changeHandler(e)}
                onFocus={(e) => touchHandler(e)
                }
              />
              <span>{touch.name && errors.name && errors.name}</span>
            </div>
            <div className='form-group'>
              <label>Last name</label>
              <input className='form-input'
                type="text"
                placeholder='Please enter your last name...'
                name='lastName'
                value={inputData.lastName}
                onChange={(e) => changeHandler(e)}
                onFocus={(e) => touchHandler(e)}
              />
              <span>{touch.lastName && errors.lastName && errors.lastName}</span>


            </div>
          </div>
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
            <div className='form-group'>
              <label>Confirm Password</label>
              <div className="inputBox">
                <input className='form-input'
                  type={`${showPass ? 'text' : 'password'}`}
                  placeholder='Please confirm your Password...'
                  name='confirmPassword'
                  value={inputData.confirmPassword}
                  onChange={(e) => changeHandler(e)}
                  onFocus={(e) => touchHandler(e)}
                />
                <span>{touch.confirmPassword && errors.confirmPassword && errors.confirmPassword}</span>

              </div>
            </div>
          </div>
          <p className='p'>Do you have acocunt? <Link href="/signin">Login</Link></p>

          <button className='btn' onClick={(e) => submitHandler(e)}>Register</button>
        </form>
      </div>
    </div>
  )
}

export default SignupCom