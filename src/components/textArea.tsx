"use client"
import { InputTypes } from "@/lib/types";
import React, { useState } from "react";
import { BsEye,   BsEyeSlash } from "react-icons/bs";
 
const TextArea = (props: InputTypes) => {
    const { in_cls, t_cls, title, name, type, placeholder,register, error } = props;

    const [setting, setSetting] = useState({
        filedType: type,
    })


    return (
        <div className="flex flex-col w-full mb-4 ">

            {title && (
                <label
                    htmlFor={name}
                    className={`text-md font-medium text-gray-400 mb-1 ${t_cls}`}
                >
                    {title}
                </label>
            )}

            <div className="flex w-full relative ">
                <textarea
                {...register(name)}
                    id={name}
                    name={name} 
                    placeholder={placeholder}
                    className={`w-full rounded-md border border-gray-200 px-3 py-2 text-sm  outline-none
          placeholder:text-gray-400 focus:border-green-100 focus:ring-1 focus:ring-green-100 transition-all ${in_cls}`}
                />



                {type === "password"

                    &&
                    (
                        setting.filedType === "text" ?
                            <BsEyeSlash className="absolute right-3 top-3 text-gray-400"
                                onClick={() => {
                                    setSetting((pre) => {
                                        return ({
                                            ...pre,
                                            filedType: type
                                        }
                                        )
                                    })
                                }} />
                            :
                            <BsEye className="absolute right-3 top-3 text-gray-400"
                                onClick={() => {
                                    setSetting((pre) => {
                                        return ({
                                            ...pre,
                                            filedType: "text"
                                        }
                                        )
                                    })
                                }} />


                    )}



            </div>

            {error && (
                <span className="mt-1 text-sm text-red-500 font-medium">{error}</span>
            )}
        </div>
    );
};

export default TextArea;
