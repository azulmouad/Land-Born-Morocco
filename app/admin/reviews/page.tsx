import React from "react";
import { Plus, Trash2, Star, CheckCircle, XCircle } from "lucide-react";

const reviews = [
  {
    id: 1,
    user: "Alice Walker",
    rating: 5,
    date: "2023-11-12",
    comment: "Amazing experience! The desert tour was unforgettable.",
    status: "Published",
  },
  {
    id: 2,
    user: "Bob Smith",
    rating: 4,
    date: "2023-10-05",
    comment: "Great guide, but the hotel could be better.",
    status: "Pending",
  },
  {
    id: 3,
    user: "Charlie Brown",
    rating: 5,
    date: "2023-09-20",
    comment: "Well organized and professional.",
    status: "Published",
  },
  {
    id: 4,
    user: "Dana White",
    rating: 2,
    date: "2023-08-15",
    comment: "Too hot and too much walking.",
    status: "Rejected",
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
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors shadow-sm">
          <Plus className="w-4 h-4" />
          <span>Add Review</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <ul className="divide-y divide-gray-100">
          {reviews.map((review) => (
            <li
              key={review.id}
              className="p-6 hover:bg-gray-50 transition-colors flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-gray-900">{review.user}</h3>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${i < review.rating ? "fill-current" : "text-gray-200"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">{review.date}</span>
                </div>
                <p className="text-gray-600 mb-3">{review.comment}</p>

                <div className="flex items-center gap-3">
                  {review.status === "Published" && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                      <CheckCircle className="w-3 h-3" /> Published
                    </span>
                  )}
                  {review.status === "Pending" && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />{" "}
                      Pending
                    </span>
                  )}
                  {review.status === "Rejected" && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
                      <XCircle className="w-3 h-3" /> Rejected
                    </span>
                  )}
                </div>
              </div>

              <div className="flex gap-2 self-start md:self-center">
                <button
                  className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                  title="Approve"
                >
                  <CheckCircle className="w-5 h-5" />
                </button>
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
