import React, { FC } from "react";
import clsx from "clsx";

type ButtonProps = {
    children?: React.ReactNode;
    className?: string;
    icon?: JSX.Element;
    fullWidth?: boolean;
    isIcon?: boolean;
};

const Button: FC<ButtonProps> = ({ children, className, icon, fullWidth, isIcon }) => {
    return (
        <button
            type="button"
            className={clsx(
                `flex justify-center items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 shadow h-10`,
                className,
                fullWidth && "flex justify-center items-center w-full",
                isIcon && "border-none bg-none shadow-none"
            )}
        >
            {icon}
            {children}
        </button>
    );
};

export default Button;

// `text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 shadow`,
