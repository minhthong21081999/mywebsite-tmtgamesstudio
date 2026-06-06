import React from 'react'
import { useForm } from 'react-hook-form'
import SEO from '../components/SEO'

type FormData = {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const { register, handleSubmit, formState } = useForm<FormData>()
  const { errors, isSubmitting, isSubmitSuccessful } = formState

  const onSubmit = async (data: FormData) => {
    // Mock submit - replace with API or Firebase function
    await new Promise((r) => setTimeout(r, 700))
    console.log('Contact form submit', data)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <SEO title="Contact — TMTGamesStudio" description="Contact TMTGamesStudio for partnerships, development, and collaborations." />

      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

      {isSubmitSuccessful ? (
        <div className="glass p-4">Thank you — we will get back to you shortly.</div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input {...register('name', { required: true })} className="w-full p-3 rounded bg-white/5" />
            {errors.name && <div className="text-xs text-rose-400">Name is required</div>}
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              {...register('email', { required: true, pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/ })}
              className="w-full p-3 rounded bg-white/5"
            />
            {errors.email && <div className="text-xs text-rose-400">Valid email is required</div>}
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea {...register('message', { required: true, minLength: 10 })} className="w-full p-3 rounded bg-white/5 h-32" />
            {errors.message && <div className="text-xs text-rose-400">Message (min 10 characters)</div>}
          </div>

          <div>
            <button type="submit" disabled={isSubmitting} className="btn-primary">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      )}

      <div className="mt-8 text-sm text-gray-400">
        <p>Email: contact@tmtgamesstudio.example</p>
        <p>Phone: +84 9xx xxx xxx</p>
      </div>
    </div>
  )
}
