import { FieldValues, UseFormRegister } from "react-hook-form";

export interface ButtonType {
    b_cls?: string, t_cls: string, title: string, name: string, type: string, error?: string, loading?: boolean,
}

export interface InputTypes extends ButtonType {
    in_cls: string,
    placeholder: string,
    register: UseFormRegister<any>;
}