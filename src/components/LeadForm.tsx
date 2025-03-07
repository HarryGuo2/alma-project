'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  linkedin: z.string().url('Invalid LinkedIn URL'),
  visas: z.array(z.string()).min(1, 'Please select at least one visa'),
  resume: z.any().refine((file: File | undefined) => file && file.size <= 5000000, 'File size should be less than 5MB'),
  message: z.string().min(1, 'Message is required'),
})

type FormData = z.infer<typeof formSchema>

const visaOptions = [
  'H1B',
  'L1',
  'E3',
  'TN',
  'O1',
  'Other'
]

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      // Here you would typically send the data to your API
      console.log(data)
      setSubmitSuccess(true)
      reset()
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <h2 className="text-2xl font-semibold text-green-800 mb-2">Thank You!</h2>
        <p className="text-green-700">Your application has been submitted successfully.</p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="mt-4 text-green-600 hover:text-green-800 underline"
        >
          Submit another application
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-lg shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            {...register('firstName')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName.message?.toString()}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            {...register('lastName')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600">{errors.lastName.message?.toString()}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email *
        </label>
        <input
          type="email"
          id="email"
          {...register('email')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message?.toString()}</p>
        )}
      </div>

      <div>
        <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
          LinkedIn Profile URL *
        </label>
        <input
          type="url"
          id="linkedin"
          {...register('linkedin')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.linkedin && (
          <p className="mt-1 text-sm text-red-600">{errors.linkedin.message?.toString()}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Visas you're interested in *
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {visaOptions.map((visa) => (
            <label key={visa} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={visa}
                {...register('visas')}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">{visa}</span>
            </label>
          ))}
        </div>
        {errors.visas && (
          <p className="mt-1 text-sm text-red-600">{errors.visas.message?.toString()}</p>
        )}
      </div>

      <div>
        <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
          Resume / CV *
        </label>
        <input
          type="file"
          id="resume"
          accept=".pdf,.doc,.docx"
          {...register('resume')}
          className="mt-1 block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />
        {errors.resume && (
          <p className="mt-1 text-sm text-red-600">{errors.resume.message?.toString()}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message *
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message?.toString()}</p>
        )}
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </div>
    </form>
  )
} 