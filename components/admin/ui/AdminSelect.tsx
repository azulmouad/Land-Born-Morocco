import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, X, Check } from "lucide-react";

export interface SelectOption {
  value: string;
  label: string;
}

interface AdminSelectProps {
  label?: string;
  options: SelectOption[];
  value?: string | string[];
  onChange: (value: string | string[]) => void;
  multiple?: boolean;
  placeholder?: string;
  error?: string;
  helperText?: string;
  className?: string;
}

export default function AdminSelect({
  label,
  options,
  value,
  onChange,
  multiple = false,
  placeholder = "Select...",
  error,
  helperText,
  className = "",
}: AdminSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    if (multiple) {
      const currentValues = Array.isArray(value) ? value : [];
      const newValues = currentValues.includes(optionValue)
        ? currentValues.filter((v) => v !== optionValue)
        : [...currentValues, optionValue];
      onChange(newValues);
    } else {
      onChange(optionValue);
      setIsOpen(false);
    }
  };

  const removeValue = (e: React.MouseEvent, valToRemove: string) => {
    e.stopPropagation();
    if (Array.isArray(value)) {
      onChange(value.filter((v) => v !== valToRemove));
    }
  };

  const isSelected = (optionValue: string) => {
    if (multiple) {
      return Array.isArray(value) && value.includes(optionValue);
    }
    return value === optionValue;
  };

  const getDisplayValue = () => {
    if (!value || (Array.isArray(value) && value.length === 0)) {
      return <span className="text-slate-500">{placeholder}</span>;
    }

    if (multiple && Array.isArray(value)) {
      return (
        <div className="flex flex-wrap gap-1">
          {value.map((val) => {
            const option = options.find((o) => o.value === val);
            return (
              <span
                key={val}
                className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 text-xs px-2 py-0.5 rounded-full"
              >
                {option?.label || val}
                <button
                  type="button"
                  onClick={(e) => removeValue(e, val)}
                  className="hover:text-emerald-900"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            );
          })}
        </div>
      );
    }

    const option = options.find((o) => o.value === value);
    return <span className="text-slate-900">{option?.label || value}</span>;
  };

  return (
    <div className={`w-full ${className}`} ref={containerRef}>
      {label && (
        <label className="block text-sm font-medium text-slate-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`
            w-full px-3 py-2 bg-white border rounded-lg text-sm transition-colors cursor-pointer flex items-center justify-between min-h-[42px]
            focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500
            ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "border-slate-300"}
          `}
        >
          <div className="flex-1">{getDisplayValue()}</div>
          <ChevronDown
            className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </div>

        {isOpen && (
          <div className="absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-lg shadow-lg max-h-60 overflow-auto">
            {options.length > 0 ? (
              options.map((option) => (
                <div
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  className={`
                    px-3 py-2 text-sm cursor-pointer flex items-center justify-between hover:bg-slate-50
                    ${isSelected(option.value) ? "bg-emerald-50 text-emerald-700" : "text-slate-700"}
                  `}
                >
                  <span>{option.label}</span>
                  {isSelected(option.value) && <Check className="w-4 h-4" />}
                </div>
              ))
            ) : (
              <div className="px-3 py-2 text-sm text-slate-500">
                No options available
              </div>
            )}
          </div>
        )}
      </div>
      {helperText && !error && (
        <p className="mt-1 text-xs text-slate-500">{helperText}</p>
      )}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
