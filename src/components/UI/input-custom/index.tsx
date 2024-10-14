import { forwardRef, InputHTMLAttributes } from "react";

type Props = {
  inputLabel?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, Props>(
  ({ inputLabel, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 justify-start w-full">
        {inputLabel && <small className="text-sky-800">{inputLabel}:</small>}
        <input
          {...props}
          ref={ref}
          className="border-2 w-full rounded-md px-2 py-1 outline-none"
        />
      </div>
    );
  }
);

export default Input;
