import React, { forwardRef } from "react";

interface AdminInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const AdminInput = forwardRef<HTMLInputElement, AdminInputProps>(
  ({ label, error, helperText, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-slate-700 mb-1">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`
            w-full px-3 py-2 bg-white border rounded-lg text-sm transition-colors
            focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500
            disabled:bg-slate-50 disabled:text-slate-500
            ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "border-slate-300"}
            ${className}
          `}
          {...props}
        />
        {helperText && !error && (
          <p className="mt-1 text-xs text-slate-500">{helperText}</p>
        )}
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  },
);

AdminInput.displayName = "AdminInput";

export default AdminInput;
