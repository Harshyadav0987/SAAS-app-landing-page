import React from 'react';
import { Star } from 'lucide-react';

function Reviews() {
  const reviews = [
    {
      name: "Sarah M.",
      role: "Product Manager",
      rating: 5,
      review: "Really easy to use. Our team got started in minutes."
    },
    {
      name: "James C.",
      role: "Startup Founder",
      rating: 5,
      review: "Simple and effective. Does exactly what we need."
    },
    {
      name: "Emily R.",
      role: "Designer",
      rating: 5,
      review: "Clean interface. My team loves it."
    }
  ];

  return (
    <section className="py-8 md:py-10 bg-white">
      <div className="container  px-4 sm:px-6 lg:px-2">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-3">
            What people are saying
          </h2>
          <p className="text-gray-600">
            Trusted by teams everywhere
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200"
            >
              <div className="flex gap-1 mb-3 justify-center">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-black text-black" />
                ))}
              </div>

              <p className="text-gray-700 mb-4">
                "{review.review}"
              </p>

              <div>
                <p className="font-medium text-gray-900">
                  {review.name}
                </p>
                <p className="text-sm text-gray-600">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;