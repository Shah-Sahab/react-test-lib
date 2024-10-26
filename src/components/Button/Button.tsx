import React from "react";

interface ButtonProps {
  label: string;
  url: string;
  className: string;
}

const Button = (props: ButtonProps) => {
  const { label, url, className } = props;
  return (
    <button
      onClick={() => {
        window.location.href = url;
      }}
      className={className}
    >
      {label}
    </button>
  );
};

export default Button;
