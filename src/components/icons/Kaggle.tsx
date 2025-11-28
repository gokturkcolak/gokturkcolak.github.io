import React from "react";

export const Kaggle = ({ className }: { className?: string }) => {
    return (
        <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className={className}
        >
            <title>Kaggle</title>
            <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l5.413-5.593c.117-.118.235-.176.468-.176h3.35c.234 0 .352.118.352.353 0 .117-.059.294-.117.353L11.96 15.293l6.765 8.094c.118.118.176.294.1.472z" />
        </svg>
    );
};
