import { ChangeEvent, ReactNode } from "react";

export interface childrenType {
   children: ReactNode;
}

// function types
export type ChangeInputType = (e: ChangeEvent<HTMLInputElement>) => void;
export type ChangeInputTextType = (e: ChangeEvent<HTMLTextAreaElement>) => void;
export type ChangeSelectionType = (e: ChangeEvent<HTMLSelectElement>) => void;

// Dispatch Function types:
export type DispatchDataType = React.Dispatch<
   React.SetStateAction<RegisterType>
>;

//  object types
export type inputType = {
   name: string;
   type: string;
   label: string;
   placeholder: string;
   error?: string;
};

export type loginType = {
   email: string;
   password: string;
};

export type loginErrorType = {
   email: string;
   password: string;
   general: string;
};
export type RegisterErrorType = {
   firstName: string;
   lastName: string;
   username: string;
   confirm: string;
   gender: string;
   termsAndServies: string;
   profile: string;
} & loginErrorType;
export type RegisterType = {
   firstName: string;
   lastName: string;
   username: string;
   confirm: string;
   gender: "male" | "female";
   termsAndServices: boolean;
   profile: string;
} & loginType;

export type InputTextType = {
   onChange: ChangeInputType;
} & inputType;
export type PrimaryButtonType = {
   path: string;
} & childrenType;

export type GenderSelectionType = {
   label: string;
   setData: DispatchDataType;
   data: RegisterType;
};

export type UploadImageType = {
   label: string;
   name: string;
   error: string;
   image?: string;
   onChange: ChangeInputType;
};

export type CheckBoxType = {
   handleCheckBox: ChangeInputType;
   checked: boolean;
};
