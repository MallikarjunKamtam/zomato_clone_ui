import React, { HTMLAttributes } from "react";

type ButtonAccent = "primary" | "secondary" | "link";

const Button = ({
  children,
  accent,
  extraClasses,
}: {
  children: string;
  accent: ButtonAccent;
  extraClasses?: HTMLAttributes<HTMLButtonElement>["className"];
}) => {
  return (
    <button
      className={`rounded fit-content hover:brightness-125 w-fit p-3 ${
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
