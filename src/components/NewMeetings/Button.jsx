import React from "react";

function Button({ children, variant = "text" }) {
  const baseClasses = "px-4 py-4 rounded-xl border border-solid";
  const variantClasses = {
    text: "text-zinc-700",
    primary: "bg-pink-500 text-slate-100 border-blue-500"
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </button>
  );
}

export default Button;