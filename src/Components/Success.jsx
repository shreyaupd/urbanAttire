import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react"; // You can also use any other icon

const Success = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <CheckCircle className="text-green-500 w-16 h-16" />
        </div>

        {/* Message */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Order Placed Successfully!
        </h2>
        <p className="text-gray-600 mb-6">
          Thank you for shopping with us. A confirmation email has been sent to your inbox.
        </p>

        {/* Button */}
        <Link to="/" className="block">
          <button className="w-full bg-pink-600 hover:bg-pink-700 transition-colors text-white font-medium py-3 px-6 rounded-md">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
