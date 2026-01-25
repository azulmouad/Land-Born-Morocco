import React, { useCallback, useState, useEffect } from "react";
import {
  Upload,
  X,
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface ImageUploadProps {
  label?: string;
  onChange: (files: (File | string)[]) => void;
  value?: (File | string)[]; // Array of image URLs or File objects
  multiple?: boolean;
  maxFiles?: number;
  accept?: string;
  error?: string;
  helperText?: string;
  className?: string;
}

export default function ImageUpload({
  label,
  onChange,
  value = [],
  multiple = false,
  maxFiles = 5,
  accept = "image/*",
  error,
  helperText,
  className = "",
}: ImageUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const [previews, setPreviews] = useState<string[]>([]);

  useEffect(() => {
    // Generate previews for File objects
    const newPreviews = value.map((file) => {
      if (typeof file === "string") {
        return file;
      }
      return URL.createObjectURL(file);
    });
    setPreviews(newPreviews);

    // Cleanup URLs on unmount or value change
    return () => {
      newPreviews.forEach((url) => {
        if (url.startsWith("blob:")) {
          URL.revokeObjectURL(url);
        }
      });
    };
  }, [value]);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleFiles(e.dataTransfer.files);
      }
    },
    [multiple, maxFiles, value],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files: FileList) => {
    const fileArray = Array.from(files);
    let newFiles: (File | string)[] = [];

    if (multiple) {
      newFiles = [...value, ...fileArray];
      if (newFiles.length > maxFiles) {
        newFiles = newFiles.slice(0, maxFiles);
      }
      onChange(newFiles);
    } else {
      onChange([fileArray[0]]);
    }
  };

  const removeImage = (index: number) => {
    const newFiles = value.filter((_, i) => i !== index);
    onChange(newFiles);
  };

  const moveImage = (index: number, direction: "left" | "right") => {
    const newFiles = [...value];
    if (direction === "left") {
      if (index === 0) return;
      [newFiles[index - 1], newFiles[index]] = [
        newFiles[index],
        newFiles[index - 1],
      ];
    } else {
      if (index === newFiles.length - 1) return;
      [newFiles[index + 1], newFiles[index]] = [
        newFiles[index],
        newFiles[index + 1],
      ];
    }
    onChange(newFiles);
  };

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-slate-700 mb-1">
          {label}
        </label>
      )}

      <div
        className={`relative border-2 border-dashed rounded-lg p-4 transition-colors text-center
        ${dragActive ? "border-emerald-500 bg-emerald-50" : "border-slate-300 hover:border-slate-400"}
        ${error ? "border-red-500 bg-red-50" : ""}
        `}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          multiple={multiple}
          accept={accept}
          onChange={handleChange}
        />

        <div className="flex flex-col items-center justify-center space-y-2 pointer-events-none">
          <div className="p-2 bg-slate-100 rounded-full">
            <Upload className="w-6 h-6 text-slate-500" />
          </div>
          <div className="text-sm text-slate-600">
            <span className="font-semibold text-emerald-600">
              Click to upload
            </span>{" "}
            or drag and drop
          </div>
          <p className="text-xs text-slate-500">
            {multiple ? `Up to ${maxFiles} images` : "Single image"} (Max 5MB
            each)
          </p>
        </div>
      </div>

      {/* Preview Section */}
      {previews.length > 0 && (
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
          {previews.map((url, index) => (
            <div
              key={index}
              className="relative group aspect-square rounded-lg overflow-hidden bg-slate-100 border border-slate-200"
            >
              <img
                src={url}
                alt="Preview"
                className="w-full h-full object-cover"
              />

              {/* Overlay Actions */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                {multiple && index > 0 && (
                  <button
                    type="button"
                    onClick={() => moveImage(index, "left")}
                    className="p-1.5 bg-white/20 hover:bg-white/40 text-white rounded-full transition-colors backdrop-blur-sm"
                    title="Move Left"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="p-1.5 bg-red-500/80 hover:bg-red-600 text-white rounded-full transition-colors backdrop-blur-sm"
                  title="Remove"
                >
                  <X className="w-4 h-4" />
                </button>

                {multiple && index < previews.length - 1 && (
                  <button
                    type="button"
                    onClick={() => moveImage(index, "right")}
                    className="p-1.5 bg-white/20 hover:bg-white/40 text-white rounded-full transition-colors backdrop-blur-sm"
                    title="Move Right"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {helperText && !error && (
        <p className="mt-1 text-xs text-slate-500">{helperText}</p>
      )}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
