import React from "react";
import { cn } from "@/Libs/Utils";
import { Input } from "@/Components/ui/input";

export const Form = ({
    className,
    ...props
}: React.FormHTMLAttributes<HTMLFormElement>) => {
    return (
        <form
            className={cn(
                "[&_label]:block grid grid-cols-1 lg:grid-cols-2 gap-4",
                className
            )}
            {...props}
        />
    );
};

Form.Input = ({
    error,
    required,
    containerClassName,
    ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
    error?: string;
    containerClassName?: string;
}) => {
    return (
        <label className={cn("space-y-1 [&>*]:w-full", containerClassName)}>
            <p>
                {props.title}{" "}
                {required && <span className="text-red-500">*</span>}
            </p>
            {props.children || <Input {...props} />}
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </label>
    );
};
