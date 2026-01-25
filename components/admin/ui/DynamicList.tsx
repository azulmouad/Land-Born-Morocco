import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import AdminInput from "./AdminInput";
import AdminButton from "./AdminButton";

interface DynamicListProps {
  label?: string;
  items: string[];
  onChange: (items: string[]) => void;
  placeholder?: string;
  error?: string;
  helperText?: string;
}

export default function DynamicList({
  label,
  items,
  onChange,
  placeholder = "Add item...",
  error,
  helperText,
}: DynamicListProps) {
  const [newValue, setNewValue] = useState("");

  const handleAdd = () => {
    if (newValue.trim()) {
      onChange([...items, newValue.trim()]);
      setNewValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  };

  const handleRemove = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    onChange(newItems);
  };

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-slate-700 mb-1">
          {label}
        </label>
      )}

      <div className="flex gap-2 mb-2">
        <AdminInput
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="flex-1"
        />
        <AdminButton
          type="button"
          onClick={handleAdd}
          variant="secondary"
          size="md"
          icon={<Plus className="w-4 h-4" />}
        >
          Add
        </AdminButton>
      </div>

      <div className="space-y-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2 bg-slate-50 border border-slate-200 rounded-lg group"
          >
            <span className="text-sm text-slate-700">{item}</span>
            <button
              type="button"
              onClick={() => handleRemove(index)}
              className="text-slate-400 hover:text-red-500 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {helperText && !error && (
        <p className="mt-1 text-xs text-slate-500">{helperText}</p>
      )}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
