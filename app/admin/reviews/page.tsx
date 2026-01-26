import React from "react";
import { Plus, Trash2, Star, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const reviews = [
  {
    id: 1,
    user: "Alice Walker",
    country: "USA",
    image: "/images/hero-1.png",
    rating: 5,
    date: "2023-11-12",
    comment: "Amazing experience! The desert tour was unforgettable.",
  },
  {
    id: 2,
    user: "Bob Smith",
    country: "UK",
    image: "/images/hero-2.png",
    rating: 4,
    date: "2023-10-05",
    comment: "Great guide, but the hotel could be better.",
  },
  {
    id: 3,
    user: "Charlie Brown",
    country: "Germany",
    image: "/images/hero-3.png",
    rating: 5,
    date: "2023-09-20",
    comment: "Well organized and professional.",
  },
  {
    id: 4,
    user: "Dana White",
    country: "France",
    image: "/images/hero-1.png",
    rating: 2,
    date: "2023-08-15",
    comment: "Too hot and too much walking.",
  },
];

export default function ReviewsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reviews</h1>
          <p className="text-gray-500 mt-1">
            Manage client testimonials and feedback
          </p>
        </div>
        <Link
          href="/admin/reviews/create"
          className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>Add Review</span>
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <ul className="divide-y divide-gray-100">
          {reviews.map((review) => (
            <li
              key={review.id}
              className="p-6 hover:bg-gray-50 transition-colors flex flex-col md:flex-row gap-6 items-start"
            >
              {/* Avatar */}
              <div className="relative w-14 h-14 rounded-full overflow-hidden bg-slate-100 shrink-0 border-2 border-white shadow-sm">
                <Image
                  src={review.image}
                  alt={review.user}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-bold text-gray-900">{review.user}</h3>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {review.country}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400">{review.date}</span>
                </div>
                <div className="flex text-amber-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${i < review.rating ? "fill-current" : "text-gray-200"}`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm">{review.comment}</p>
              </div>

              <div className="flex gap-2 self-start md:self-center shrink-0">
                <button
                  className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  title="Delete"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
