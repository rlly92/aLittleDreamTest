/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FormInputTestUpdateFormInputValues = {
    Name?: string;
    PhoneNumber?: string;
    Email?: string;
};
export declare type FormInputTestUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
    PhoneNumber?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FormInputTestUpdateFormOverridesProps = {
    FormInputTestUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    PhoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FormInputTestUpdateFormProps = React.PropsWithChildren<{
    overrides?: FormInputTestUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    formInputTest?: any;
    onSubmit?: (fields: FormInputTestUpdateFormInputValues) => FormInputTestUpdateFormInputValues;
    onSuccess?: (fields: FormInputTestUpdateFormInputValues) => void;
    onError?: (fields: FormInputTestUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FormInputTestUpdateFormInputValues) => FormInputTestUpdateFormInputValues;
    onValidate?: FormInputTestUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FormInputTestUpdateForm(props: FormInputTestUpdateFormProps): React.ReactElement;
