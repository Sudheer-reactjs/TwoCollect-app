import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Authentification() { 
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
 
  return (
    <div className="flex min-h-screen">
      {/* Left side form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-8 md:px-20 bg-gray-100">
        {/* Tabs */}
        <div className="flex space-x-6 mb-6 text-lg font-medium">
          <button
            onClick={() => setIsSignIn(true)}
            className={`pb-1 text-2xl ${
              isSignIn ? "border-b-2  border-bluecustom text-black" : "text-gray-500"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsSignIn(false)}
            className={`pb-1 text-2xl ${
              !isSignIn ? "border-b-2  border-bluecustom text-black" : "text-gray-500"
            }`}
          >
            Sign Up
          </button>
        </div>

        <p className="text-sm text-gray-600 mb-6">
          Let&apos;s get started by filling out the form below.
        </p>

        {/* Form */}
        <form className="w-full max-w-sm space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full text-sm bg-[#f0f4f8] border border-bluecustom rounded-md p-2 py-3 focus:ring-0"
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full text-sm bg-[#f0f4f8] border border-bluecustom rounded-md p-2 py-3 focus:ring-0"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
            >
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>

          {/* Confirm Password for Sign Up */}
          {!isSignIn && (
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full text-sm bg-[#f0f4f8] border border-bluecustom rounded-md p-2 py-3 focus:ring-0"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                {showConfirmPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            className="bg-bluecustom w-full text-white px-4 py-3 rounded-full hover:bg-bluecustomhover transition-colors duration-200 font-medium"
          >
            {isSignIn ? "Sign In" : "Create Account"}
          </button>

          {/* Forgot Password for Sign In */}
          {isSignIn && (
            <button
              type="button"
              className="w-full border border-bluecustom py-2 rounded-md text-bluecustom hover:bg-blue-50 transition"
            >
              Forgot Password
            </button>
          )}
        </form>
      </div>

      {/* Right side image */}
      <div className="hidden md:block md:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d"
          alt="Buildings"
          className="w-full h-full object-cover rounded-l-[100px]"
        />
      </div>
    </div>
  );
}
