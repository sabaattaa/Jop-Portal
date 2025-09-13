import { ButtonType } from '@/lib/types';
import React from 'react'
import { CgSpinner, CgSpinnerAlt, CgSpinnerTwo } from 'react-icons/cg';
import { SiPinboard } from 'react-icons/si';

const Button = (props: ButtonType) => {

  const { b_cls, title, name, type, loading } = props;
  return (


    <button
      name={name}
      type={type as "button" | "submit" | "reset"}
      disabled={loading}

      className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg shadow-md cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed ${b_cls}`}
    >
      {loading &&
        <CgSpinnerTwo className='animate-spin text-xl ' />
      }
      {title}</button>

  )
}

export default Button;