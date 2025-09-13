"use client"
import React from 'react'
import Button from '@/components/button'
import Input from '@/components/input'
import { signInSchema } from '@/lib/schemas'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form' 
const Signin = () => {

  const router = useRouter();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(signInSchema),
  });



  const onSubmit=(data:any)=>{
    console.log("data",data);

  }

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-green-100 via-white to-green-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        {/* Heading */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800">Welcome Back </h1>
          <p className="text-gray-500 text-sm">Sign in to explore new opportunities</p>
        </div>

        {/* Form */}
        <form 
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
        >
          <Input
            in_cls="w-full"
            t_cls="text-gray-700"
            title="Email"
            name="email"
            type="email"
            error=""
            placeholder="Enter your email"
            register={register}
          />

          <Input
            in_cls="w-full"
            t_cls="text-gray-700"
            title="Password"
            name="password"
            type="password"
            error=""
            placeholder="Enter your password"
            register={register}
          />

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
              <input type="checkbox" className="accent-green-500 text-white" />
              Remember me
            </label>
            <span className="text-green-600 font-medium hover:underline cursor-pointer">
              Forgot Password?
            </span>
          </div>

          <Button
            b_cls="w-full bg-green-500 hover:bg-green-400 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-300"
            t_cls="text-base"
            title="Sign In"
            name="loginBtn"
            type="submit"
            loading={false}
          />
        </form>


        <p className="text-sm mt-6 text-center text-gray-500">
          Don’t have an account?{" "}
          <span className="text-green-600 font-semibold hover:underline cursor-pointer" 
          onClick={()=>{
            router.push("/sign-up")
          }}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  )
}

export default Signin;