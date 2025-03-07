"use client";
import React from 'react';
import { useState } from "react";
import type { Lead } from "@/types";

export default function InternalLeadsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "PENDING" | "REACHED_OUT">("all");

  const mockLeads: Lead[] = [
    {
      id: 1,
      name: "Jorge Ruiz",
      email: "jorge@example.com",
      country: "Mexico",
      state: "PENDING",
      submittedAt: "2024-02-02T14:45:00Z",
    },
    {
      id: 2,
      name: "Bahar Zamir",
      email: "bahar@example.com",
      country: "Mexico",
      state: "PENDING",
      submittedAt: "2024-02-02T14:45:00Z",
    }
  ];

  const filteredLeads = mockLeads.filter(lead => {
    if (statusFilter !== "all" && lead.state !== statusFilter) return false;
    if (searchQuery && !lead.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-[#f7f9e5] p-8 flex flex-col">
        <div className="mb-12">
          <h1 className="text-2xl font-medium text-black">almā</h1>
        </div>
        <nav className="space-y-4 flex-1">
          <a href="/internal/leads" className="block text-black font-medium">
            Leads
          </a>
          <a href="/internal/settings" className="block text-gray-500">
            Settings
          </a>
        </nav>
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
            A
          </div>
          <span className="text-gray-700">Admin</span>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Leads</h2>
          <div className="flex gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-8 pr-4 py-2 border border-gray-200 rounded-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                className="absolute left-2.5 top-3 h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <select
              className="px-4 py-2 border border-gray-200 rounded-md bg-white"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as typeof statusFilter)}
            >
              <option value="all">Status</option>
              <option value="PENDING">Pending</option>
              <option value="REACHED_OUT">Reached Out</option>
            </select>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Submitted</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Country</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{lead.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(lead.submittedAt).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      lead.state === "PENDING"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}>
                      {lead.state === "PENDING" ? "Pending" : "Reached Out"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}