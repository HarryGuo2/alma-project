"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#e5ebc5] h-[280px] flex items-center overflow-hidden">
        <div className="absolute -left-32 -bottom-32">
          <div className="w-[300px] h-[300px] bg-[#d5e3a8] rounded-full"></div>
        </div>
        <div className="absolute -left-16 -bottom-16">
          <div className="w-[300px] h-[300px] bg-[#c8da8b] rounded-full"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <div className="mb-8">
              <h1 className="text-2xl font-medium text-black mb-1">almā</h1>
            </div>
            <h2 className="text-[40px] leading-tight font-bold text-black">
              Get An Assessment<br />
              Of Your Immigration Case
            </h2>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12">
              <Image
                src="/document-icon.svg"
                alt="Document"
                width={48}
                height={48}
                className="w-full h-full opacity-70"
              />
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900">
                Want to understand your visa options?
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                Submit the form below and our team of experienced attorneys will review your information and send a preliminary assessment of your case based on your goals.
              </p>
            </div>
          </div>

          <form className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  className="block w-full px-4 py-3 rounded-md border-gray-200 bg-gray-50/50 focus:ring-0 focus:border-gray-300 placeholder-gray-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  className="block w-full px-4 py-3 rounded-md border-gray-200 bg-gray-50/50 focus:ring-0 focus:border-gray-300 placeholder-gray-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="block w-full px-4 py-3 rounded-md border-gray-200 bg-gray-50/50 focus:ring-0 focus:border-gray-300 placeholder-gray-500"
                />
              </div>
              <div>
                <select
                  id="country"
                  name="country"
                  defaultValue=""
                  className="block w-full px-4 py-3 rounded-md border-gray-200 bg-gray-50/50 focus:ring-0 focus:border-gray-300 text-gray-500"
                >
                  <option value="" disabled>Country of Citizenship</option>
                  <option value="US">United States</option>
                  <option value="CN">China</option>
                  <option value="IN">India</option>
                  {/* Add more countries */}
                </select>
              </div>
              <div>
                <input
                  type="url"
                  id="website"
                  name="website"
                  placeholder="LinkedIn/Personal Website URL"
                  className="block w-full px-4 py-3 rounded-md border-gray-200 bg-gray-50/50 focus:ring-0 focus:border-gray-300 placeholder-gray-500"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12">
                  <Image
                    src="/visa-icon.svg"
                    alt="Visa"
                    width={48}
                    height={48}
                    className="w-full h-full opacity-70"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  Visa categories of interest?
                </h3>
              </div>
              <div className="space-y-4 ml-16">
                {["O-1", "EB1A", "EB-2 NIW", "I don't know"].map((option) => (
                  <div key={option} className="flex items-center">
                    <input
                      type="radio"
                      id={option}
                      name="visaCategory"
                      value={option}
                      className="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor={option} className="ml-3 text-base text-gray-700">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12">
                  <Image
                    src="/heart-icon.svg"
                    alt="Help"
                    width={48}
                    height={48}
                    className="w-full h-full opacity-70"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  How can we help you?
                </h3>
              </div>
              <div className="ml-16">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full px-4 py-3 rounded-md border-gray-200 bg-gray-50/50 focus:ring-0 focus:border-gray-300 placeholder-gray-500"
                  placeholder="What is your current status and when does it expire? What is your past immigration history? Are you looking for a long-term permanent residence or a short-term employment visa? Are there any timeline considerations?"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-black text-white py-4 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-medium"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
