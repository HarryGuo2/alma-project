"use client";

import { useState } from "react";

export interface Lead {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  state: "PENDING" | "REACHED_OUT";
  submittedAt: string;
}

interface LeadsTableProps {
  leads: Lead[];
}

export function LeadsTable({ leads: initialLeads }: LeadsTableProps) {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);

  const handleStateChange = (leadId: number) => {
    setLeads((prevLeads) =>
      prevLeads.map((lead) =>
        lead.id === leadId
          ? { ...lead, state: lead.state === "PENDING" ? "REACHED_OUT" : "PENDING" }
          : lead
      )
    );
  };

  return (
    <table className="min-w-full divide-y divide-gray-300">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
          >
            Name
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Email
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Phone
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Company
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            State
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Submitted At
          </th>
          <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
            <span className="sr-only">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {leads.map((lead) => (
          <tr key={lead.id}>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
              {lead.name}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {lead.email}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {lead.phone}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {lead.company}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              <span
                className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                  lead.state === "PENDING"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-green-100 text-green-800"
                }`}
              >
                {lead.state}
              </span>
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {new Date(lead.submittedAt).toLocaleDateString()}
            </td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
              {lead.state === "PENDING" && (
                <button
                  onClick={() => handleStateChange(lead.id)}
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  Mark as Reached Out
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
} 