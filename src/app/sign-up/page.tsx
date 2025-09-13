"use client"
import Button from '@/components/button'
import Input from '@/components/input'
import { signUpSchema } from '@/lib/schemas'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
 

const Signup = () => {
  const router = useRouter();

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = (data: any) => {
    console.log("Signup Data:", data); 
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-green-100 via-white to-green-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
         
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800">Create an Account</h1>
          <p className="text-gray-500 text-sm">Sign up to get started</p>
        </div>

       
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            in_cls="w-full"
            t_cls="text-gray-700"
            title="Full Name"
            name="name"
            type="text"
            error={errors?.name?.message as string}
            placeholder="Enter your full name"
            register={register}
          />

          <Input
            in_cls="w-full"
            t_cls="text-gray-700"
            title="Email"
            name="email"
            type="email"
            error={errors?.email?.message as string}
            placeholder="Enter your email"
            register={register}
          />

          <Input
            in_cls="w-full"
            t_cls="text-gray-700"
            title="Password"
            name="password"
            type="password"
            error={errors?.password?.message as string}
            placeholder="Enter your password"
            register={register}
          />

          <Input
            in_cls="w-full"
            t_cls="text-gray-700"
            title="Confirm Password"
            name="confirmPassword"
            type="password"
            error={errors?.confirmPassword?.message as string}
            placeholder="Re-enter your password"
            register={register}
          />

          <Button
            b_cls="w-full bg-green-500 hover:bg-green-400 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-300"
            t_cls="text-base"
            title="Sign Up"
            name="signupBtn"
            type="submit"
            loading={isSubmitting}
          />
        </form>

        <p className="text-sm mt-6 text-center text-gray-500">
          Already have an account?{" "}
          <span 
            className="text-green-600 font-semibold hover:underline cursor-pointer"
            onClick={() => router.push("/")}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
