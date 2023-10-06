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
export declare type FormInputTestCreateFormInputValues = {
    Name?: string;
    PhoneNumber?: string;
    Email?: string;
};
export declare type FormInputTestCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    PhoneNumber?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FormInputTestCreateFormOverridesProps = {
    FormInputTestCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    PhoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FormInputTestCreateFormProps = React.PropsWithChildren<{
    overrides?: FormInputTestCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FormInputTestCreateFormInputValues) => FormInputTestCreateFormInputValues;
    onSuccess?: (fields: FormInputTestCreateFormInputValues) => void;
    onError?: (fields: FormInputTestCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FormInputTestCreateFormInputValues) => FormInputTestCreateFormInputValues;
    onValidate?: FormInputTestCreateFormValidationValues;
} & React.CSSProperties>;
export default function FormInputTestCreateForm(props: FormInputTestCreateFormProps): React.ReactElement;
