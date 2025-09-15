import Button from '@/components/button';
import Input from '@/components/input';
import TextArea from '@/components/textArea';
import { signUpSchema } from '@/lib/schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { BiEdit } from 'react-icons/bi';

const CreateJob = () => {

  const [setting, setSetting] = useState({
    image: "",
    imgUrl: "/globe.svg"
  })

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = (data: any) => {
    console.log("Signup Data:", data);
  };
  return (
    <div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">


        <div className='flex items-center justify-center relative '>

          <div className='w-fit relative '>


            <img src={setting.imgUrl} alt="Logo" width={100} height={100} className='rounded  p-1 object-contain' />
            <div className='w-fit   '>
              <input className='opacity-0 absolute  w-[20px] h-[20px] bottom-[-10] right-[-10] z-10' type='file'

                onChange={(e) => {
                  const file = e.target.files?.[0];
                  console.log("selected file:", file);
                  if (file) {
                    const url = URL.createObjectURL(file);
                    setSetting((prev: any) => ({
                      ...prev,
                      image: file,
                      imgUrl: url
                    }));
                  }
                }}

              />

              <BiEdit className='absolute bottom-[-10] right-[-15] cursor-pointer ' size={20} />

            </div>
          </div>

        </div>
















        <div className='flex gap-3'>

          <Input
            in_cls="w-full"
            t_cls="text-gray-700"
            title="Company Name"
            name="name"
            type="text"
            error={errors?.name?.message as string}
            placeholder="Enter your Company Name"
            register={register}
          />


          <Input
            in_cls="w-full"
            t_cls="text-gray-700"
            title="Company Address"
            name="name"
            type="text"
            error={errors?.name?.message as string}
            placeholder="Enter your Company Name"
            register={register}
          />

        </div>

        <div className='flex gap-3'>

          <Input
            in_cls="w-full"
            t_cls="text-gray-700"
            title="Job Title"
            name="name"
            type="text"
            error={errors?.name?.message as string}
            placeholder="Enter your Company Name"
            register={register}
          />

          <Input
            in_cls="w-full"
            t_cls="text-gray-700"
            title="Job Type"
            name="name"
            type="text"
            error={errors?.name?.message as string}
            placeholder="Enter your Company Name"
            register={register}
          />
        </div>


        <div className='flex gap-3'>

          <TextArea
            in_cls="w-full"
            t_cls="text-gray-700"
            title="Qualification"
            name="name"
            type="text"
            error={errors?.name?.message as string}
            placeholder="Enter your Company Name"
            register={register}
          />


          <TextArea
            in_cls="w-full"
            t_cls="text-gray-700"
            title="Responsibility"
            name="name"
            type="text"
            error={errors?.name?.message as string}
            placeholder="Enter your Company Name"
            register={register}
          />
        </div>

        <div className='flex gap-3'>


          <TextArea
            in_cls="About Role"
            t_cls="text-gray-700"
            title="Job Requirments"
            name="name"
            type="text"
            error={errors?.name?.message as string}
            placeholder="Enter your Company Name"
            register={register}
          />
          <TextArea
            in_cls="w-full"
            t_cls="text-gray-700"
            title="Company Benefits"
            name="name"
            type="text"
            error={errors?.name?.message as string}
            placeholder="Enter your Company Name"
            register={register}
          />

        </div>


        <div className='flex items-center justify-center'>

          <Button
            b_cls="w-fit bg-green-500 hover:bg-green-400 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-300"
            t_cls="text-base"
            title="Post Job"
            name="postjob"
            type="submit"
            loading={isSubmitting}
          />

        </div>

      </form>


    </div>
  )
}

export default CreateJob