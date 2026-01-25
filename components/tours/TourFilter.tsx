"use client";

import { useState, useEffect } from "react";

// Actually, I'll use a standard input type="range" styled to match theme for simplicity and robustness.
import { Filter, X } from "lucide-react";
import clsx from "clsx";

interface TourFilterProps {
  categories: string[];
  tags: string[];
  cities?: string[]; // New
  minPrice: number;
  maxPrice: number;
  selectedCategory: string | null;
  selectedTags: string[];
  selectedCity?: string | null; // New
  priceRange: [number, number];
  onCategoryChange: (category: string | null) => void;
  onTagToggle: (tag: string) => void;
  onCityChange?: (city: string | null) => void; // New
  onPriceChange: (range: [number, number]) => void;
  className?: string; // To allow external positioning
  isOpen?: boolean; // Mobile state
  onClose?: () => void; // Mobile close
}

export default function TourFilter({
  categories,
  tags,
  cities, // New
  minPrice,
  maxPrice,
  selectedCategory,
  selectedTags,
  selectedCity, // New
  priceRange,
  onCategoryChange,
  onTagToggle,
  onCityChange, // New
  onPriceChange,
  className,
  isOpen,
  onClose,
}: TourFilterProps) {
  return (
    <div
      className={clsx(
        "bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-8",
        className,
      )}
    >
      {/* Mobile Header */}
      <div className="flex justify-between items-center md:hidden mb-2">
        <h3 className="font-heading font-bold text-xl text-deep-blue">
          Filters
        </h3>
        <button onClick={onClose} className="p-2 text-gray-400 hover:text-clay">
          <X size={24} />
        </button>
      </div>

      {/* Categories */}
      <div>
        <h4 className="font-bold text-lg text-deep-blue mb-4 font-heading">
          Categories
        </h4>
        <div className="space-y-3">
          <label className="flex items-center space-x-3 cursor-pointer group">
            <input
              type="radio"
              name="category"
              className="peer sr-only"
              checked={selectedCategory === null}
              onChange={() => onCategoryChange(null)}
            />
            <span className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:border-clay peer-checked:bg-clay flex items-center justify-center transition-all">
              <span className="w-2.5 h-2.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity" />
            </span>
            <span
              className={clsx(
                "text-gray-600 group-hover:text-clay transition-colors",
                selectedCategory === null && "font-semibold text-clay",
              )}
            >
              All Tours
            </span>
          </label>
          {categories.map((cat) => (
            <label
              key={cat}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="category"
                className="peer sr-only"
                checked={selectedCategory === cat}
                onChange={() => onCategoryChange(cat)}
              />
              <span className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:border-clay peer-checked:bg-clay flex items-center justify-center transition-all">
                <span className="w-2.5 h-2.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity" />
              </span>
              <span
                className={clsx(
                  "text-gray-600 group-hover:text-clay transition-colors",
                  selectedCategory === cat && "font-semibold text-clay",
                )}
              >
                {cat}
              </span>
            </label>
          ))}
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* Cities - New Section */}
      {cities && onCityChange && (
        <>
          <div>
            <h4 className="font-bold text-lg text-deep-blue mb-4 font-heading">
              Cities / Regions
            </h4>
            <div className="space-y-3 max-h-60 overflow-y-auto scrollbar-hide">
              <label className="flex items-center space-x-3 cursor-pointer group">
                <input
                  type="radio"
                  name="city"
                  className="peer sr-only"
                  checked={selectedCity === null}
                  onChange={() => onCityChange(null)}
                />
                <span className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:border-clay peer-checked:bg-clay flex items-center justify-center transition-all">
                  <span className="w-2.5 h-2.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                </span>
                <span
                  className={clsx(
                    "text-gray-600 group-hover:text-clay transition-colors",
                    selectedCity === null && "font-semibold text-clay",
                  )}
                >
                  All Locations
                </span>
              </label>
              {cities.map((city) => (
                <label
                  key={city}
                  className="flex items-center space-x-3 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="city"
                    className="peer sr-only"
                    checked={selectedCity === city}
                    onChange={() => onCityChange(city)}
                  />
                  <span className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:border-clay peer-checked:bg-clay flex items-center justify-center transition-all">
                    <span className="w-2.5 h-2.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                  </span>
                  <span
                    className={clsx(
                      "text-gray-600 group-hover:text-clay transition-colors",
                      selectedCity === city && "font-semibold text-clay",
                    )}
                  >
                    {city}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <hr className="border-gray-100" />
        </>
      )}

      {/* Price Range */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-bold text-lg text-deep-blue font-heading">
            Price Range
          </h4>
          <span className="text-sm font-semibold text-clay bg-clay/10 px-2 py-1 rounded-md">
            ${priceRange[1]}
          </span>
        </div>

        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={priceRange[1]}
          onChange={(e) => onPriceChange([minPrice, parseInt(e.target.value)])}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-clay"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>${minPrice}</span>
          <span>${maxPrice}</span>
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* Tags */}
      <div>
        <h4 className="font-bold text-lg text-deep-blue mb-4 font-heading">
          Experiences
        </h4>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => {
            const isSelected = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => onTagToggle(tag)}
                className={clsx(
                  "px-3 py-1.5 rounded-full text-sm font-medium transition-all border",
                  isSelected
                    ? "bg-deep-blue text-white border-deep-blue shadow-md"
                    : "bg-white text-gray-600 border-gray-200 hover:border-clay hover:text-clay",
                )}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
