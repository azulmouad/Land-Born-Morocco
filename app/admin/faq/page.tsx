import React from "react";
import { Plus, Trash2, Edit2, HelpCircle } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What should I pack?",
    answer: "Comfortable shoes, sunscreen, hat...",
    category: "General",
  },
  {
    id: 2,
    question: "Is it safe to travel alone?",
    answer: "Yes, Morocco is generally very safe...",
    category: "Safety",
  },
  {
    id: 3,
    question: "Do I need a visa?",
    answer: "It depends on your country of origin...",
    category: "Legal",
  },
];

export default function FAQPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">FAQ</h1>
          <p className="text-gray-500 mt-1">
            Manage frequently asked questions
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors shadow-sm">
          <Plus className="w-4 h-4" />
          <span>Add Question</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden text-left">
        <ul className="divide-y divide-gray-100">
          {faqs.map((faq) => (
            <li key={faq.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-emerald-500" />
                    <h3 className="font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                  </div>
                  <p className="text-gray-600 pl-7 text-sm">{faq.answer}</p>
                  <div className="pl-7 pt-1">
                    <span className="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600">
                      {faq.category}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2 shrink-0">
                  <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
