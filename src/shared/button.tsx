"use client";

import React, { HTMLAttributes } from "react";

type ButtonAccent = "primary" | "secondary" | "link";

const Button = ({
  children,
  accent,
  extraClasses,
  onClick,
  isLoading = false,
}: {
  children: string;
  accent: ButtonAccent;
  extraClasses?: HTMLAttributes<HTMLButtonElement>["className"];
  onClick?: () => void;
  isLoading?: boolean;
}) => {
  return (
    <button
      disabled={isLoading}
      onClick={onClick}
      className={`rounded  fit-content hover:brightness-125 w-fit p-3 disabled:hover:brightness-100 disabled:cursor-not-allowed disabled:bg-gray-400 ${
        accent === "primary"
          ? "bg-[green] text-white"
          : accent === "secondary"
          ? "border-[green] border text-[green]"
          : ""
      }  ${extraClasses}  `}
    >
      {children}
    </button>
  );
};

export default Button;
